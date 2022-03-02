#!/bin/bash -l
# Note: that "-l" was added to the first line to make bash a login shell
# - this causes .bash_profile and .bashrc to be sourced which is needed for ruby items

set -e #Exit on first error
set -x #Be verbose

#
# Change to working directory
#

START_DIR="$( cd "$(dirname "$0")" ; pwd -P )"
START_DIR="$START_DIR/.."
cd "${START_DIR}"

#
# Check vars are not empty before proceeding
#

echo "Check vars are not empty before proceeding..."
if [ -z "${AKAMAI_RSYNC_DOMAIN_PARAM}" ] \
   || [ -z "${AKAMAI_UPLOAD_DIRECTORY_PARAM}" ] \
   || [ -z "${GENERATE_WEBSITE_FROM_CODE_PARAM}" ] \
   || [ -z "${NETSTORAGE_SSH_KEY_PARAM}" ] \
   || [ -z "${WEBSITE_DEPLOYMENT_TYPE_PARAM}" ] \
   || [ -z "${WEBSITE_DIRECTORY_PARAM}" ]; then
  echo "ERROR: All parameters must be set."
  exit 1
fi

# Download AB2D Repo if necessary and create an environment
# A specific branch or commit may be checked out with AB2D_REF_PARAM.

AB2D_REPO_REF=$BRANCH_NAME_PARAM
# AB2D dir will be created in scripts/deployment
# source "${START_DIR}/ops/download-repo.sh" ab2d-website

#
# Set variables
#

AKAMAI_RSYNC_DOMAIN="${AKAMAI_RSYNC_DOMAIN_PARAM}"

AKAMAI_UPLOAD_DIRECTORY="${AKAMAI_UPLOAD_DIRECTORY_PARAM}"

GENERATE_WEBSITE_FROM_CODE="${GENERATE_WEBSITE_FROM_CODE_PARAM}"

NETSTORAGE_SSH_KEY="${NETSTORAGE_SSH_KEY_PARAM}"

TIMESTAMP=`date +%Y-%m-%d_%H-%M-%S`

WEBSITE_DEPLOYMENT_TYPE="${WEBSITE_DEPLOYMENT_TYPE_PARAM}"

WEBSITE_DIRECTORY="${WEBSITE_DIRECTORY_PARAM}"

#
# Generate the website
#

if [ "${GENERATE_WEBSITE_FROM_CODE}" = "true" ]; then

  # Set website directory to be generated website directory
  WEBSITE_DIRECTORY="./_site"

  # Configure head for Tealium/Google Analytics

  if [ "${OSTYPE}" = "linux-gnu" ]; then
    if [ "${WEBSITE_DEPLOYMENT_TYPE}" = "prod" ]; then
      sed -i 's%cms-ab2d[\/]dev%cms-ab2d/prod%g' _includes/head.html
    else # stage
      sed -i 's%cms-ab2d[\/]prod%cms-ab2d/dev%g' _includes/head.html
    fi
  else # Mac
    if [ "${WEBSITE_DEPLOYMENT_TYPE}" = "prod" ]; then
      sed -i "" 's%cms-ab2d[\/]dev%cms-ab2d/prod%g' _includes/head.html
    else # stage
      sed -i "" 's%cms-ab2d[\/]prod%cms-ab2d/dev%g' _includes/head.html
    fi
  fi

  # Build the website

  rm -rf _site
  bundle install
  bundle exec jekyll build

  rm -rf "${HOME}/akamai"
  mkdir -p "${HOME}/akamai"
  cp -r _site "${HOME}/akamai"

fi

#
# Change to the parent directory of the website directory
#

cd "${WEBSITE_DIRECTORY}/.."

#
# Check that there is a local "_site" directory in the current directory
#

if [ ! -d "_site" ]; then
  echo ""
  echo "***************************************************************"
  echo "ERROR: There is no '_site' directory in the current directory."
  echo ""
  echo "Change to the directory that has the desired '_site' directory."
  echo "***************************************************************"
  echo ""
  exit 1
fi

#
# Upload a timestamped website directory backup to the target Akamai Upload Directory
#

rsync \
  --progress \
  --partial \
  --archive \
  --verbose \
  --rsh="ssh -v -oStrictHostKeyChecking=no -oHostKeyAlgorithms=+ssh-dss -i ${NETSTORAGE_SSH_KEY}" \
  _site/* \
  "sshacs@${AKAMAI_RSYNC_DOMAIN}:/${AKAMAI_UPLOAD_DIRECTORY}/_site_${TIMESTAMP}"

#
# Create or update the website directory in the target Akamai Upload Directory
#

# Run first pass update
# - note that after a first pass update all old files should be removed from the website

rsync \
  --progress \
  --partial \
  --archive \
  --verbose \
  --delete \
  --force \
  --rsh="ssh -v -oStrictHostKeyChecking=no -oHostKeyAlgorithms=+ssh-dss -i ${NETSTORAGE_SSH_KEY}" \
  _site/ \
  "sshacs@${AKAMAI_RSYNC_DOMAIN}:/${AKAMAI_UPLOAD_DIRECTORY}/_site/"

# Run second pass update
# - note that after second pass any empty directories should be removed

rsync \
  --progress \
  --partial \
  --archive \
  --verbose \
  --delete \
  --force \
  --rsh="ssh -v -oStrictHostKeyChecking=no -oHostKeyAlgorithms=+ssh-dss -i ${NETSTORAGE_SSH_KEY}" \
  _site/ \
  "sshacs@${AKAMAI_RSYNC_DOMAIN}:/${AKAMAI_UPLOAD_DIRECTORY}/_site/"

# Delete AB2D dir so next deploy is fresh
# rm -rf "."
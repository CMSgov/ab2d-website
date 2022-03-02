#
# AB2D_DIR_PARAM -> if running locally use to override normal behavior
# and instead use already present ab2d repo
# AB2D_REF_PARAM -> branch name or commit hash to be checked out
#
# AB2D_DIR is exported for use in the rest of the program
#

AB2D_REPO_NAME=$1

unset AB2D_DIR

# Check that at least one required parameter is provided
if { [ -z "${AB2D_DIR_PARAM+x}" ] || [ -z "${AB2D_DIR_PARAM}" ]; } &&
  { [ -z "${DEPLOYMENT_ENV+x}" ] || [ -z "${DEPLOYMENT_ENV}" ]; } &&
  { [ -z "${AB2D_REPO_REF+x}" ] || [ -z "${AB2D_REPO_REF}" ]; }; then
  echo "ERROR: must provide one of AB2D_DIR_PARAM, AB2D_REPO_REF"
  exit 1
fi

if { [ -z "${AB2D_DIR_PARAM+x}" ] || [ -z "${AB2D_DIR_PARAM}" ]; }; then

  DEFAULT_AB2D_DIR="./${AB2D_REPO_NAME}"
  PWD=$(pwd)
  export AB2D_DIR="${PWD}/${DEFAULT_AB2D_DIR}"

  cd ..
else

  # Check that the directory exists
  if [ ! -d "${AB2D_DIR_PARAM}" ]; then
    echo "ERROR the directory given for the ab2d source does not exist"
    exit 1
  fi

  export AB2D_DIR="${AB2D_DIR_PARAM}"
fi

if { [ -z "${IMAGE_VERSION_PARAM+x}" ] || [ -z "${IMAGE_VERSION_PARAM}" ]; }; then
  cd "${AB2D_DIR}" || (echo "ERROR ${AB2D_DIR} no populated" && exit 1)

  CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
  COMMIT_NUMBER=$(git rev-parse "${CURRENT_BRANCH}" | cut -c1-7)
  export IMAGE_VERSION="${DEPLOYMENT_ENV}-latest-${COMMIT_NUMBER}"

  cd -
else
  export IMAGE_VERSION=${IMAGE_VERSION_PARAM}
fi
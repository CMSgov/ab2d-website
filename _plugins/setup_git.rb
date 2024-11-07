#!/usr/bin/env ruby

# This Jekyll plugin makes sure that git is configured to run git commit hooks
# from the .githooks dir
# This is because the .git directory is ignored by github and we want .githooks to be part of the codebase.

# This plugin runs when jekyll is run
%x(git config --local core.hooksPath .githooks/)

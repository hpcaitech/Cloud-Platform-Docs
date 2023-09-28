#!/usr/bin/env bash
# set -x             # for debug
set -euo pipefail  # fail early

# ======================
# Get the arguments
# ======================
WEB_REPO_DIR=${1}
WEB_REPO_DIR=$(realpath $WEB_REPO_DIR)

# ======================
# Set up the variables
# ======================
SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
ROOT_DIR="$SCRIPT_DIR/.."
CACHE_DIR="$ROOT_DIR/.cache"

# ======================
# Set up the website
# ======================
DOCUSAURUS_DIR="$WEB_REPO_DIR/cloud-platform-documentation"

# install the dependency
cd $DOCUSAURUS_DIR
yarn install


# ======================
# Set up the docs
# ======================
# clear blog and docs
rm -rf $DOCUSAURUS_DIR/docs/*
rm -rf $DOCUSAURUS_DIR/blog/*
mkdir -p $DOCUSAURUS_DIR/docs
mkdir -p $DOCUSAURUS_DIR/blog

# replace the docs and blog
cp -r $ROOT_DIR/docs/docs/* $DOCUSAURUS_DIR/docs
cp -r $ROOT_DIR/docs/blog/* $DOCUSAURUS_DIR/blog
cp -r $ROOT_DIR/docs/sidebars.js $DOCUSAURUS_DIR/


# ======================
# Build the website
# ======================
# check if PLATFORM_HOSTNAME is set
# if set, do nothing
# else, set it to platform.luchentech.com
if [ -z ${PLATFORM_HOSTNAME+x} ]; then
  echo "[INFO] PLATFORM_HOSTNAME is unset, set it to platform.luchentech.com"
  export PLATFORM_HOSTNAME="platform.luchentech.com"
else
  echo "[INFO] PLATFORM_HOSTNAME is set to '$PLATFORM_HOSTNAME'"
fi

# build the docs and serve
cd $DOCUSAURUS_DIR
yarn build

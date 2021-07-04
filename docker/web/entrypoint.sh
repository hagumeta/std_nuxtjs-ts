#!/bin/bash

yarn install --check-files

#yarn build
#yarn start 
yarn dev
#if [ ${PRODUCTION} ]; then
#    yarn build
#    yarn start
#else
#    yarn install --dev
#    yarn dev
#fi
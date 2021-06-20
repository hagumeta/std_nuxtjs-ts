#!/bin/bash

yarn

yarn build
yarn start 
#if [ ${PRODUCTION} ]; then
#    yarn build
#    yarn start
#else
#    yarn install --dev
#    yarn dev
#fi
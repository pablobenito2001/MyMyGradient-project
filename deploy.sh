#!/usr/bin/env sh

#abort on error
set -e

#navigate into the build output directory
cd dist

#if you are deploying to a custom domain
echo 'www.mymygradient.com' > CNAME

git init 
git cheackout -b main
git add -A
git commit -m 'deploy'

#if you are deploying to https://<USERNAME>.github.io
#git push -f git@github.com<USERNAME></USERNAME>.github.io.git main

#if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:plagga2001/MyMyGradient.git main:gh-pages

cd -
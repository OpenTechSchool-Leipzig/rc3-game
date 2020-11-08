#!/bin/sh

ROOT="."

echo "Deploying all pages..."

if [ -d "shop" ]
then
  cd $ROOT/shop
  netlify deploy --prod
else
    echo "Error: Directory /shop does not exists."
fi


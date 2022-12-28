rm -rf ./dist

rm -rf ./dist-firebase-public

mkdir ./dist-firebase-public

npm run build

cp -r ./public/* ./dist-firebase-public

cp -r ./dist/* ./dist-firebase-public
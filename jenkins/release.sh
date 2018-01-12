#!/usr/bin/env bash
source /usr/local/node_versions/set_node_version.sh 5.3.0
echo "node version: "
node -v
npm install
npm run build
npm run test
npm run tarDistVersion

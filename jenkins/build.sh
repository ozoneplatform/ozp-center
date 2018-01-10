#!/usr/bin/env bash
# use the develop branch of ozp-react-commons
# sed -i -e "s/ozp-react-commons#master/ozp-react-commons#develop/g" package.json
# sed -i -e "s/\/icons/\/icons#1fc7aee3a2812042c421baaab67abb2bd9606b0d/g" package.json
source /usr/local/node_versions/set_node_version.sh 5.3.0
echo "node version: "
node -v
npm install
npm run build
npm run test
npm run tarDistDate

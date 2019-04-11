#!/bin/sh
export NODE_BINARY=node
../node_modules/react-native/scripts/react-native-xcode.sh
if [ "${CONFIGURATION}" == "Debug" ]; then
export SKIP_BUNDLING=true
fi


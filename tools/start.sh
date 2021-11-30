#!/bin/bash

RED='\033[0;31m'
GRN='\033[0;32m'
BLU='\033[0;94m'
NC='\033[0m'

# a simple macro to start the hugo development server
start_server() {
    # FIXME: piping stdout not working for some reason
    hugo server -D -F --log --verboseLog | awk '{ print "\033[0;32m[hugo]\033[0m " $0 }'
    # hugo server -D -F --log --verboseLog
}

# builds dev js assets
build_js() {
    yarn install
    yarn build:dev | awk '{ print "\033[0;94m[javascript]\033[0m " $0 }'
}

# a simple macro to start webpack watch
start_js() {
    yarn watch | awk '{ print "\033[0;94m[javascript]\033[0m " $0 }'
}

echo -e "${BLU}starting development server${NC}"
(build_js) # Note: starting a subshell to avoid affecting cwd
start_server & start_js & wait

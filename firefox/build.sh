#!/bin/bash

CFX="`dirname $0`/../addon-sdk-1.12/bin/cfx"

cp ../githubc9.user.js ./data/ && cp ../c9-48.png ./ && $CFX xpi


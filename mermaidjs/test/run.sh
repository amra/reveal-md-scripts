#!/bin/bash

wget -O mermaid.min.js https://cdnjs.cloudflare.com/ajax/libs/mermaid/8.5.2/mermaid.min.js
cp ../reveal-mermaid.js .
reveal-md test.md --scripts "mermaid.min.js,reveal-mermaid.js" $1 $2 $3


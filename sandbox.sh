#!/bin/bash
# Run commands in the notes_app sandbox container
# Usage: ./sandbox.sh <command>
# Example: ./sandbox.sh npm install

docker exec -it notes_app_sandbox "$@"

#!/bin/bash

# Start Tailwind CSS build process in the background
npm run dev &

# Start Hugo server
hugo server --disableFastRender

# Kill the background Tailwind process when Hugo server is stopped
trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT 
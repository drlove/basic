#!/bin/bash

# Check if ollama is installed
command -v ollama &> /dev/null
if [ $? -ne 0 ]; then
    echo "Ollama is not installed.  Please install it before running this script."
    exit 1
fi

# Pull the Gemma model
ollama pull gemma

echo "Gemma model downloaded successfully."



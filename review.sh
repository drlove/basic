#!/bin/bash

if git diff --quiet; then
    echo "✅ No uncommitted changes in basic PWA repo."
    exit 0
fi

echo "🔍 Analyzing PWA code with Ollama (Gemma 2)..."
echo "--------------------------------------------------"

git diff | ollama run gemma2 "
You are a senior Web Developer. 
Review this diff for a PWA project. 
Focus strictly on:
1. FastAPI endpoint logic and async performance.
2. Dexie.js/IndexedDB best practices (transactions, error handling).
3. Offline-first synchronization patterns.
4. Security and PWA manifest/Service Worker standards.

DIFF:
$(cat -)
"
echo "--------------------------------------------------"



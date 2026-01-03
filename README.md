# Basic PWA Scaffold

A minimal, framework-agnostic Progressive Web App starter.

## Features
- Offline caching (Service Worker)
- Installable (Web App Manifest)
- Clean structure for forking

## Usage
```bash
git clone https://github.com/YOUR_USERNAME/basic.git
cd basic

## Offline-First Storage

This scaffold includes IndexedDB by default using Dexie.js.

### Stores
- `notes`   – primary offline data
- `outbox`  – queued actions for later sync

### Pattern
- App → Store (store.js)
- Store → IndexedDB (db.js)
- Never access IndexedDB directly in UI code

### Forking Checklist
- Rename DB (`basic_pwa_db`)
- Update schema version when adding tables
- Add sync worker when backend exists




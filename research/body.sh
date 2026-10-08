#!/bin/bash
# Extract page body: skip nav boilerplate (ends at "Menu" line after nav duplication)
awk 'NR>1{ if (!started && /^Menu$/) { started=1; next } else if (started) print }' "$1" | grep -v "^\s*$" | grep -v -E "^(Facebook|Twitter|Youtube|Linkedin|Icon-email|Whatsapp|Icon-share-1)$" | head -"${2:-80}"

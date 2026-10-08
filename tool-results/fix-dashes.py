#!/usr/bin/env python3
"""Remove all em/en dashes from DhumketuX src with context-aware replacements."""
import os, re, sys

ROOT = "/home/z/my-project/src"

# Literal special cases, applied first (most specific wins)
SPECIALS = [
    # Metadata titles / brand separators
    (" \u2014 DhumketuX\u0022", " \u00b7 DhumketuX\u0022"),
    ("DhumketuX \u2014 Building aerospace from Bangladesh", "DhumketuX \u00b7 Building aerospace from Bangladesh"),
    # Name - Role patterns
    (" \u2014 Founder, DhumketuX", " \u00b7 Founder, DhumketuX"),
    ("} \u2014 {a.role}", "} \u00b7 {a.role}"),
    ("} \u2014 {founder.role}", "} \u00b7 {founder.role}"),
    # Attribution captions
    ("Official vehicle render \u2014 DhumketuX", "Official vehicle render \u00b7 DhumketuX"),
    (" \u2014 official render, DhumketuX", " \u00b7 official render, DhumketuX"),
    (" \u2014 Ekhon TV", " \u00b7 Ekhon TV"),
    (" \u2014 Somoy TV, Mymensingh", " \u00b7 Somoy TV, Mymensingh"),
    # Vision chips
    (" \u2014 within 2035", " \u00b7 within 2035"),
    (" \u2014 within 2040", " \u00b7 within 2040"),
    # org.meaning
    ("Dhumketu \u2014 comet, in Bangla.", "Dhumketu, \u201ccomet\u201d in Bangla."),
    # Bengali copy
    ("\u09aa\u09cd\u09b2\u09cd\u09af\u09be\u099f\u09ab\u09b0\u09cd\u09ae \u2014 \u09b8\u09ac\u0995\u09bf\u099b\u09c1\u0987", "\u09aa\u09cd\u09b2\u09cd\u09af\u09be\u099f\u09ab\u09b0\u09cd\u09ae, \u09b8\u09ac\u0995\u09bf\u099b\u09c1\u0987"),
    # Nav label
    ("Design, Build, Fly \u2014 DBF Program", "Design, Build, Fly (DBF Program)"),
    # Milestone title
    ("Putimach 01 \u2014 first rocket launch", "Putimach 01: first rocket launch"),
    # Caption credit with parenthetical
    (" \u2014 Mymensingh (dhumketux.com)", ", Mymensingh (dhumketux.com)"),
]

changed = []

for dirpath, _, files in os.walk(ROOT):
    for fn in files:
        if not fn.endswith((".ts", ".tsx", ".css")):
            continue
        path = os.path.join(dirpath, fn)
        with open(path, "r", encoding="utf-8") as f:
            lines = f.readlines()

        out = []
        file_changed = False
        for ln in lines:
            orig = ln
            t = ln.strip()
            # 1) Dash runs in comments (decorative rules)
            ln = re.sub(r"\s*\u2014{2,}\s*", " ", ln)
            # 2) Literal specials
            for a, b in SPECIALS:
                ln = ln.replace(a, b)
            # 3) Comment lines: em dash -> colon
            if "\u2014" in ln and (t.startswith(("/*", "*", "//")) or "{/*" in t):
                ln = ln.replace(" \u2014 ", ": ")
            # 4) Default remaining em dash -> comma
            ln = ln.replace(" \u2014 ", ", ")
            # 5) Any stray em dash without spaces -> comma
            if "\u2014" in ln:
                ln = ln.replace("\u2014", ", ")
            # 6) En dashes -> hyphen
            ln = ln.replace("\u2013", "-")
            if ln != orig:
                file_changed = True
                changed.append((path.replace(ROOT + "/", ""), orig.rstrip("\n")[:200], ln.rstrip("\n")[:200]))
            out.append(ln)

        if file_changed:
            with open(path, "w", encoding="utf-8") as f:
                f.writelines(out)

print(f"CHANGED LINES: {len(changed)}")
for p, o, n in changed:
    print(f"\n== {p}\n  OLD: {o}\n  NEW: {n}")

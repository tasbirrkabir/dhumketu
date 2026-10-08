#!/usr/bin/env python3
"""Polish pass: fix broken strings and upgrade comma splices after dash removal."""
import os

ROOT = "/home/z/my-project/src"

FIXES = [
    # work/[slug] title separator
    ("${project.name}, DhumketuX", "${project.name} \u00b7 DhumketuX"),
    # technology page
    ("One engineering stack, rocket systems, propulsion, UAV autonomy, avionics, telemetry, simulation, materials and test, developed in-house",
     "One engineering stack: rocket systems, propulsion, UAV autonomy, avionics, telemetry, simulation, materials and test, developed in-house"),
    ("tested in Bangladesh, rockets, propulsion, avionics, autonomy and the ground segment",
     "tested in Bangladesh: rockets, propulsion, avionics, autonomy and the ground segment"),
    # programs page
    ("Design, Build, Fly, the national pipeline.", "Design, Build, Fly: the national pipeline."),
    ("a real aerospace pipeline, from proposal to national fly-off.", "a real aerospace pipeline from proposal to national fly-off."),
    ("Universities, student teams and community platforms, bring your team into",
     "Universities, student teams and community platforms: bring your team into"),
    # contact page
    ("explore careers, contact Dhumketu Exploration Technologies Limited.",
     "explore careers. Contact Dhumketu Exploration Technologies Limited."),
    ("One team, one inbox, reach DhumketuX directly", "One team, one inbox: reach DhumketuX directly"),
    ("Sounding rocket campaigns, payload launches and test services , \n                  propose a mission",
     "Sounding rocket campaigns, payload launches and test services: propose a mission"),
    # work page
    ("satellites and aviation, every figure sourced from dhumketux.com.",
     "satellites and aviation. Every figure sourced from dhumketux.com."),
    ("satellites and aviation, developed in Bangladesh, documented on the public record.",
     "satellites and aviation, developed in Bangladesh and documented on the public record."),
    ("test services, propose a mission and the team will respond",
     "test services: propose a mission and the team will respond"),
    # final-cta
    ("Partners, universities, students and talent, build with us from Bangladesh.",
     "Partners, universities, students and talent: build with us from Bangladesh."),
    # vision page
    ("space-based internet, long-term ambitions from Bangladesh, marked as future vision.",
     "space-based internet. Long-term ambitions from Bangladesh, marked as future vision."),
    ("Our dream for Bangladesh, space data, internet and branding, operated",
     "Our dream for Bangladesh: space data, internet and branding, operated"),
    # vision.ts
    ("Student & General Sector, inspiring young minds", "Student & General Sector: inspiring young minds"),
    ("Academic & Research Sector, bringing together universities", "Academic & Research Sector: bringing together universities"),
    ("Universities, industry, agencies and international partners, joint R&D",
     "Universities, industry, agencies and international partners: joint R&D"),
    ("Engineers, scientists, designers and entrepreneurs, work on real aerospace systems",
     "Engineers, scientists, designers and entrepreneurs: work on real aerospace systems"),
    # site-header
    ("one national mission, aerospace from Bangladesh, on the public record.",
     "one national mission: aerospace from Bangladesh, on the public record."),
    ("DhumketuX archive, every milestone documented at the source.",
     "DhumketuX archive: every milestone documented at the source."),
    (")}, a real aerospace pipeline", ")}: a real aerospace pipeline"),
    # intro.tsx broken line
    ("DhumketuX is a commercial civilian space company from Bangladesh , \n",
     "DhumketuX is a commercial civilian space company from Bangladesh:\n"),
    # flagship
    ("autonomous rocket landing, LOX + kerosene,", "autonomous rocket landing: LOX + kerosene,"),
    ("launch vehicle concept, dedicated launch capability", "launch vehicle concept: dedicated launch capability"),
    # milestones
    ("laid the cultural foundation, hands-on, curious, documentation-focused.",
     "laid the cultural foundation: hands-on, curious, documentation-focused."),
    # team.ts
    ("Education-only, non-weaponized, all flights are for learning", "Education-only, non-weaponized: all flights are for learning"),
    ("No aerospace chemicals or propellants are handed over, all energetic operations are managed",
     "No aerospace chemicals or propellants are handed over: all energetic operations are managed"),
    # policy.ts
    ("aerospace chemicals to third parties, such work is performed", "aerospace chemicals to third parties: such work is performed"),
    # capabilities.ts
    ("Testing is central to the engineering culture, every test is a structured learning opportunity.",
     "Testing is central to the engineering culture: every test is a structured learning opportunity."),
    # projects.ts
    ("Human capsule and space tourism concept, the team's stated long-term goal",
     "Human capsule and space tourism concept: the team's stated long-term goal"),
    # articles.ts titles
    ("first rocketry challenge, A2i Innovation Competition 2022", "first rocketry challenge (A2i Innovation Competition 2022)"),
    ("global space stage, IISS Singapore 2025", "global space stage (IISS Singapore 2025)"),
    # media meta
    ("Space articles, media news and social media, Bangladesh's first private aerospace organization documented across national media.",
     "Space articles, media news and social media: Bangladesh's first private aerospace organization documented across national media."),
    # company page a2i caption
    ("a2i Rocketry Innovation Challenge 2022, winner", "a2i Rocketry Innovation Challenge 2022 winner"),
]

applied, missed = [], []
for dirpath, _, files in os.walk(ROOT):
    for fn in files:
        if not fn.endswith((".ts", ".tsx", ".css")):
            continue
        path = os.path.join(dirpath, fn)
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        orig = content
        for a, b in FIXES:
            if a in content:
                content = content.replace(a, b)
                applied.append((path.replace(ROOT + "/", ""), a[:70]))
        if content != orig:
            with open(path, "w", encoding="utf-8") as f:
                f.write(content)

done_keys = {a for _, a in applied}
for a, _b in FIXES:
    if a not in done_keys:
        missed.append(a)

print(f"APPLIED: {len(applied)}")
for p, a in applied:
    print(f"  [{p}] {a}")
if missed:
    print(f"\nMISSED ({len(missed)}):")
    for m in missed:
        print(f"  !! {m}")
else:
    print("\nALL FIXES APPLIED")

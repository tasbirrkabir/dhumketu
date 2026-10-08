# Information Architecture — DhumketuX

## 1. Problem with the Current Model

The current site exposes a very deep navigation tree with many nested categories, repeated menu structures and a large number of individual program/community links.

The redesign should reduce cognitive load without deleting meaningful content.

## 2. Proposed Top-Level Navigation

```text
WORK
  Launch Vehicles
  Propulsion
  Satellites & Space Systems
  UAVs & Aviation
  Avionics & Mission Systems

CAPABILITIES
  Engineering
  Testing
  Mission Systems
  Virtual Labs

MISSION
  About
  History
  Vision
  Team

PROGRAMS
  Student Programs
  Design, Build, Fly
  Internship
  Community

MEDIA
  News
  Articles
  Announcements

ENGAGE
  Collaborate
  Sponsor / Invest
  Careers
  Contact
```

Primary CTA in nav: `Work With Us` or `Collaborate`.

## 3. Homepage Information Hierarchy

```text
Hero
  ↓
Proof
  ↓
Flagship Work
  ↓
Capabilities
  ↓
Milestones
  ↓
Vision
  ↓
People
  ↓
Programs / Collaboration
  ↓
Media
  ↓
CTA
```

## 4. Project Taxonomy

### Launch Vehicles

- Ekushey 21
- Bidrohi SR
- Nazrul 01 / series
- other approved vehicles

### Propulsion

- Red Chili series
- Proloy
- Agni Bina
- Boson
- Ibn Khaldun
- thrusters

### Space Systems

- CANSAT
- CubeSat
- MicroSat
- Weather Balloon
- Space Billboard

### UAV / Aviation

- Choroi DX
- Bee 0.1
- Krishian TX
- FireFly TX
- Bluebird Ultralight
- SkyBlade series
- other approved platforms

## 5. Page Relationship

```text
Home
├── Work
│   ├── Launch Vehicles
│   │   └── Project Detail
│   ├── Propulsion
│   │   └── Project Detail
│   ├── Space Systems
│   │   └── Project Detail
│   └── UAV & Aviation
│       └── Project Detail
├── Capabilities
├── Mission
│   ├── About
│   ├── History
│   ├── Vision
│   └── Team
├── Programs
│   ├── Student Programs
│   ├── DBF
│   └── Internship
├── Media
│   └── Article
└── Engage
    ├── Collaborate
    ├── Sponsor / Invest
    ├── Careers
    └── Contact
```

## 6. Navigation Rules

- Maximum 2 nesting levels in the primary navigation.
- No duplicate links in desktop/mobile nav markup.
- Secondary content can live inside section hubs.
- The homepage should not attempt to list every project.
- Use cross-links to move users from overview → evidence → detail.

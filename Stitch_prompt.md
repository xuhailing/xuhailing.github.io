# Stitch Prompt — Personal Portfolio Website Prototype

## Project Overview

Design a **personal portfolio website prototype** for an AI-focused developer/creator. The site functions as a personal homepage to showcase work, communicate personality, and support job-seeking in AI products. The overall aesthetic is **Cyberpunk Maximalism** — dark, electric, neon-drenched, with sensory-rich layering that feels like a hacker's dream meets a Gen-Z fever dream.

> **No images or avatars required in the prototype.** Use placeholder shapes, icon containers, or colored blocks where images would appear.

---

## Visual Style

**Theme**: Cyberpunk Maximalism  
**Mood**: Electric, futuristic, unapologetically bold, digital-underground, hacker-chic meets hyperpop  
**Guiding Principle**: Every pixel earns its place. Patterns layer over patterns. Neon glows against the void.

### Color Palette

| Role | Value | Usage |
|---|---|---|
| Background | `#050F05` | Deep black-green void — the canvas |
| Foreground | `#FFFFFF` | Primary text |
| Neon Green (Primary) | `#00FF41` | Main accent — Matrix-style fluorescent green |
| Neon Cyan | `#00F5D4` | Secondary accent — electric teal |
| Neon Magenta | `#FF3AF2` | Tertiary accent — hot pink pulse |
| Electric Yellow | `#E8FF00` | Quaternary accent — attention grabber |
| Deep Purple | `#7B2FFF` | Quinary accent — dark mystical depth |
| Muted Container | `#0D2B0D` | Semi-transparent card backgrounds |
| Border Base | `#00FF41` | Default border — neon green |

**Color Rotation Rule**: Each major page section uses a different accent as its primary highlight color (cycle through all 5 accents using index modulo 5).

### Typography

- **Headings**: `"Orbitron"` or `"Share Tech Mono"` — geometric, futuristic, monospace-adjacent (Google Fonts)
- **Body**: `"DM Mono"` or `"Space Mono"` — readable monospace for that terminal feel
- **Display Callouts**: `"Bungee"` — comic-weight, used sparingly for impact labels

**Type Scale**:
- Hero Headline: `96px–128px`, weight 900, uppercase, tracking tight
- Section Headings: `48px–72px`, weight 800, uppercase
- Subheadings: `24px–32px`, weight 700
- Body: `16px–18px`, weight 400, line-height 1.6
- Labels/Tags: `12px–14px`, weight 700, uppercase, letter-spacing wide

**Text Shadow Stack (Apply to all major headlines)**:
```
2px 2px 0px #7B2FFF,
4px 4px 0px #FF3AF2,
6px 6px 0px #00F5D4
```

**Gradient Text** (use on 20–30% of headlines):
```
linear-gradient(90deg, #00FF41, #00F5D4, #FF3AF2, #00FF41)
background-size: 300%
animated background-position shift, 4s loop
```

---

## Global Layout & Structure

- **Max container width**: `1280px` centered
- **Section vertical padding**: `96px–128px`
- **Navigation**: Fixed at top center of viewport, horizontally centered
- **Routing**: Single-page scroll with section anchors OR multi-page navigation (click to jump)
- **Layout philosophy**: Broken grid — avoid perfect symmetry; use offset rows, rotation, and overlapping elements

---

## Navigation Bar

**Position**: Fixed, top of page, horizontally centered  
**Style**:
- Background: `rgba(5, 15, 5, 0.85)` with `backdrop-blur`
- Border: `border-b-4 border-[#00FF41]` — thick neon green underline
- Box shadow: `0 0 30px rgba(0, 255, 65, 0.4)` — green glow beneath the bar
- Pill-shaped container with `border-4 border-[#00FF41] rounded-full`

**Nav Items** (left to right):
1. Home
2. Portfolio
3. About Life
4. Contact

**Nav Item Styling**:
- Text: uppercase monospace, `tracking-widest`, white
- Active state: neon green color + `text-shadow: 0 0 10px #00FF41`
- Hover: scale 105%, underline with gradient (green → cyan)

---

## Page 1 — Home

**Purpose**: First impression. Communicate identity, role, and a snapshot of work.

### Section 1: Hero

**Layout**: Full-viewport height, centered vertically and horizontally  
**Background**: Deep black-green `#050F05` with layered patterns:
- Pattern 1: Dot grid using `#00FF41` at 0.08 opacity (spacing: 24px)
- Pattern 2: Diagonal stripes using `rgba(0, 245, 212, 0.05)` (45deg, 12px width)
- Pattern 3: Radial gradient mesh — green glow from top-left, cyan from bottom-right

**Decorative background text**: `"< HELLO WORLD />"` at `180px` font size, `opacity: 0.06`, centered behind content

**Content (no images)**:
- Name: `[YOUR NAME]` — mega hero text, gradient animated (green→cyan→magenta), text-shadow triple stack
- Role subtitle: `"AI Product Designer & Developer"` — `32px`, neon green, monospace, blinking cursor effect at end
- One-liner bio: `2–3 lines` of body text, `white/80`
- Two CTA buttons:
  - **Primary**: `"View My Work"` — gradient fill (green→cyan), `border-4 border-[#E8FF00]`, `rounded-full`, glow shadow
  - **Secondary**: `"Contact Me"` — transparent, `border-4 border-dashed border-[#FF3AF2]`, `rounded-full`
- Floating decorative elements: 6–8 absolute-positioned shapes (★ ✦ ◈ ▲ icons, sizes 24px–80px, various accent colors, floating/wiggle animations)

---

### Section 2: Work Experience (Timeline Strip)

**Layout**: Horizontal scrollable timeline OR vertical stacked list  
**Background**: Slightly lighter dark — `#0A1A0A` with checker pattern overlay `rgba(0, 255, 65, 0.04)`

**Heading**: `"WORK EXPERIENCE"` — `64px`, uppercase, text-shadow double stack (green + cyan)

**Experience Cards** (3–4 cards):
Each card:
- Background: `#0D2B0D/80` semi-transparent
- Border: `border-4` rotating accent (card 1 green, card 2 cyan, card 3 magenta, card 4 yellow)
- Corner cut: `clip-path` removes top-right corner for asymmetry
- Content fields: Company, Title, Period, 2–3 bullet achievements
- Tag chips: tech stack labels in pill shapes with accent-colored borders
- Shadow: double hard shadow (8px/8px + 16px/16px) in different accent colors

---

### Section 3: Portfolio Introduction

**Layout**: Two-column split (text left, visual right) on desktop; stacked on mobile  
**Background**: Full-bleed `#050F05` with dot mesh pattern

**Heading**: `"WHAT I BUILD"` — gradient animated text  
**Sub-copy**: Short paragraph describing the work (placeholder text is fine)  
**Right side**: 3 mini project preview cards stacked slightly offset (no images — use colored placeholder blocks with project name overlaid)  
**CTA**: `"See Full Portfolio →"` as ghost button with animated underline

---

## Page 2 — Portfolio

**Purpose**: Showcase 3 projects in detail.

### Section: Projects Grid

**Layout**: Asymmetric 3-column grid on desktop (2+1 broken layout), full-stack on mobile  
**Background**: `#050F05` with diagonal stripe pattern (yellow, `0.06` opacity)

**Section Heading**: `"PROJECTS"` — `80px`, uppercase, text-shadow triple stack

**Project Card Component** (repeat for Project 1, 2, 3):

Each card:
- Background: `#0D2B0D/90` with subtle dot grid overlay
- Border: `border-8` in rotating accent color, intentionally clashing with card bg
- Border style alternates: solid (card 1), dashed (card 2), double (card 3)
- Border radius: `rounded-3xl`
- Shadow: triple-layer hard shadow (12px/12px, 24px/24px, 36px/36px) in 3 different accent colors
- Rotation: card 1 `rotate-1`, card 2 `-rotate-1`, card 3 `rotate-2`
- **Image area**: Replaced with a large colored gradient block (`h-48`) labeled `[Project Screenshot]` in monospace text — use section accent as gradient
- Project number badge: `"01"` / `"02"` / `"03"` — large `48px` neon number, top-right corner, accent color, pulsing glow
- Project name: `28px` uppercase, font-black, white, text-shadow single stack
- Short description: 2–3 lines body text, `white/75`
- Tech tags: horizontal row of pill tags, each with accent-colored border
- CTA link: `"View Project →"` — ghost button with arrow, accent-colored hover underline

**Between cards**: Floating decorative emoji/icons (`⚡ 🔥 ✦ ◈`) in neon colors, absolute positioned

---

## Page 3 — About Life

**Purpose**: Show personality and genuine passion for AI from multiple angles.

**Concept**: Present 4–6 "facets" of the creator's relationship with AI — each as a bold, independently styled content block.

### Layout

Full-page vertical scroll, alternating left/right layout per block  
**Background**: `#050F05` with gradient mesh overlay (rotating radial glows, one per block)

### Section Heading

`"ABOUT LIFE"` — `80px`, mega shadow triple stack, animated gradient

### Facet Blocks (4–6 blocks, each independent)

Each block:
- Full-width horizontal strip
- Alternates text-left/visual-right layout
- Large decorative emoji or icon (`96px`) as visual focal point (no photos)
- Block title: bold neon accent heading, each using different accent color
- Body: 2–4 sentences of personal narrative (placeholder text)
- Background accent: each block uses a different accent as its section color
- Border separator: `border-b-4 border-dashed` in accent color clashing with block bg

**Example facet topics** (placeholder labels for prototype):
1. `"WHY AI?"` — origin story
2. `"WHAT I EXPLORE"` — current projects/interests
3. `"HOW I THINK"` — philosophy/approach
4. `"WHAT INSPIRES ME"` — references and inspirations
5. `"DAILY TOOLS"` — tools/workflow
6. `"WHERE I'M HEADED"` — vision/goals

### Background Typography

Behind all content: `"A.I."` in `240px` font, `opacity: 0.04`, pinned absolutely, slowly spinning

---

## Page 4 — Contact

**Purpose**: Provide easy ways to reach out. Two channels: GitHub + WeChat QR code.

**Layout**: Vertically centered, single column, full-height section  
**Background**: `#050F05` with dense dot grid pattern (green, `0.1` opacity) and radial glow from center

### Section Heading

`"LET'S CONNECT"` — animated gradient text, `80px`, triple text-shadow  
Subline: `"Available for AI product roles & collaborations"` — `20px`, white/70, monospace

### Contact Cards Row (2 cards side by side)

**Card 1 — GitHub**:
- Icon: GitHub SVG icon, `64px`, neon green, wiggle animation
- Label: `"GitHub"` uppercase, `32px`, text-shadow green
- Handle: `@username` placeholder in cyan monospace text
- CTA button: `"View Profile"` — primary gradient button
- Border: `border-4 border-[#00FF41]`, `rounded-3xl`
- Shadow: double hard shadow in green + cyan

**Card 2 — WeChat**:
- Icon: WeChat SVG icon OR simple chat bubble SVG, `64px`, neon magenta, pulse-glow animation
- Label: `"WeChat"` uppercase, `32px`, text-shadow magenta
- QR Code area: colored placeholder block (`200x200px`) with label `[QR Code]` — use gradient border instead of real image
- Sub-label: `"Scan to connect"` in `14px` white/60
- Border: `border-4 border-dashed border-[#FF3AF2]`, `rounded-3xl`
- Shadow: double hard shadow in magenta + yellow

### Footer Strip

- Thin strip below contact cards
- Text: `"© 2026 [YOUR NAME] · Built with React + Vite"` — monospace, `white/40`
- Decorative: repeated `< / >` code symbols fading left-right at `opacity: 0.08`

---

## Interactions & Animation Spec

| Element | Animation | Duration |
|---|---|---|
| Floating decorative shapes | `float` (translateY ±20px + slight rotate) | 5–7s ease-in-out infinite |
| Hero name text | `gradient-shift` background-position | 4s ease infinite |
| Neon glow borders | `pulse-glow` (box-shadow intensity varies) | 2s ease-in-out infinite |
| Decorative background rings | `spin-slow` (full rotation) | 20s linear infinite |
| Emoji decorations | `wiggle` (±3deg rotate) | 1s ease-in-out infinite |
| CTA primary button | `pulse-glow` on idle | 2s ease-in-out infinite |
| Page/section transition | Fade in-out (`opacity: 0 → 1`) | 400ms ease-out |
| Card hover | scale(1.02) + shadow intensifies | 300ms ease-out |
| Nav item hover | scale(1.05) + neon glow text-shadow | 200ms ease-out |
| Loading state | Blinking cursor `_` on hero subtitle | 1s step-end infinite |

**Reduced motion**: All keyframe animations pause; hover transitions reduce to 150ms.

---

## Component Summary

| Component | Variant | Key Traits |
|---|---|---|
| Button (Primary) | Gradient fill | green→cyan grad, `border-4 border-[#E8FF00]`, glow shadow, `rounded-full` |
| Button (Secondary) | Transparent | dashed magenta border, hover fill, `rounded-full` |
| Button (Ghost) | Underline only | animated gradient underline on hover |
| Project Card | Full | `border-8`, hard triple shadow, clip-path corner, rotation |
| Experience Card | Timeline | semi-transparent bg, accent border, tech pill tags |
| Facet Block | Full-width strip | alternating layout, emoji focal point, bottom dashed border |
| Contact Card | Two-up | icon + label + CTA, glow + hard shadow |
| Nav Bar | Fixed | pill container, neon green border, blur bg |
| Tag/Pill | Inline | `rounded-full`, `border-2`, accent color, `text-xs uppercase` |

---

## Prototype Scope

Generate **4 screens** in desktop viewport (`1440px × 900px`):

1. **Home** — Hero + Work Experience + Portfolio Intro
2. **Portfolio** — Projects Grid (3 projects)
3. **About Life** — Facet blocks + Big AI background text
4. **Contact** — GitHub + WeChat cards + Footer

Navigation bar must be visible and consistent across all 4 screens.

---

## Important Constraints

- **No real photos or avatars** — use colored gradient placeholders, icon containers, or labeled blocks
- **No real QR codes** — use a styled placeholder block
- Maintain **WCAG AA contrast** — white text on dark backgrounds throughout
- All decorative elements (`aria-hidden="true"`) should not interfere with readability
- Prioritize **visual impact over information density** in the prototype — this is a design mockup, not a content document

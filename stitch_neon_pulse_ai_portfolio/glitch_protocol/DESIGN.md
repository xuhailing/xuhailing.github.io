---
name: Glitch Protocol
colors:
  surface: '#0c160a'
  surface-dim: '#0c160a'
  surface-bright: '#313c2e'
  surface-container-lowest: '#071106'
  surface-container-low: '#141e12'
  surface-container: '#182216'
  surface-container-high: '#222d20'
  surface-container-highest: '#2d382a'
  on-surface: '#dae6d2'
  on-surface-variant: '#b9ccb2'
  inverse-surface: '#dae6d2'
  inverse-on-surface: '#283326'
  outline: '#84967e'
  outline-variant: '#3b4b37'
  surface-tint: '#00e639'
  primary: '#ebffe2'
  on-primary: '#003907'
  primary-container: '#00ff41'
  on-primary-container: '#007117'
  inverse-primary: '#006e16'
  secondary: '#c7fff0'
  on-secondary: '#00382f'
  secondary-container: '#00f2d1'
  on-secondary-container: '#006a5a'
  tertiary: '#fff7f9'
  on-tertiary: '#5c0058'
  tertiary-container: '#ffcef2'
  on-tertiary-container: '#ae00a7'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#72ff70'
  primary-fixed-dim: '#00e639'
  on-primary-fixed: '#002203'
  on-primary-fixed-variant: '#00530e'
  secondary-fixed: '#26fedc'
  secondary-fixed-dim: '#00dfc1'
  on-secondary-fixed: '#00201a'
  on-secondary-fixed-variant: '#005144'
  tertiary-fixed: '#ffd7f3'
  tertiary-fixed-dim: '#ffabee'
  on-tertiary-fixed: '#390036'
  on-tertiary-fixed-variant: '#82007c'
  background: '#0c160a'
  on-background: '#dae6d2'
  surface-variant: '#2d382a'
typography:
  display-lg:
    fontFamily: Orbitron
    fontSize: 84px
    fontWeight: '900'
    lineHeight: 90px
    letterSpacing: 0.1em
  headline-xl:
    fontFamily: Orbitron
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Orbitron
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Orbitron
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  callout:
    fontFamily: anybody
    fontSize: 20px
    fontWeight: '800'
    lineHeight: 24px
  body-lg:
    fontFamily: Space Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Space Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.15em
spacing:
  unit: 4px
  gutter: 24px
  margin-sm: 16px
  margin-md: 40px
  margin-lg: 80px
  grid-columns: '12'
---

## Brand & Style

This design system is built on **Cyberpunk Maximalism**—a high-energy, "hacker-chic" aesthetic that prioritizes visual density and digital aggression. It is designed for a personal portfolio that functions as a high-tech terminal, blending the raw edges of digital brutalism with the vibrant, layered glow of a neon-drenched metropolis.

The target audience consists of tech-forward recruiters, developers, and creative collaborators. The UI should evoke a sense of controlled chaos, technical mastery, and "Matrix-inspired" nostalgia.

**Design Style: Brutalist-Neon**
- **Hyper-contrast:** Pure black-greens juxtaposed against vibrating fluorescent tones.
- **Visual Friction:** Deliberate use of hard edges, geometric "glitch" artifacts, and stacked offsets.
- **Hacker Aesthetic:** Monospaced data displays paired with cinematic, futuristic headlines.

## Colors

The palette is anchored in a "Deep Void" green-black, serving as a canvas for high-chroma neon accents.

- **Neon Green (#00FF41):** Used for primary actions, terminal status indicators, and "connected" states.
- **Neon Cyan (#00F5D4):** Secondary highlights and interactive secondary elements.
- **Neon Magenta (#FF3AF2):** Warning states, destructive actions, and shadow layering.
- **Electric Yellow (#E8FF00):** Pure attention-grabbing utility—used for critical callouts and borders.
- **Deep Purple (#7B2FFF):** The foundational layer for the "Shadow Stack" to provide mystical depth.
- **Muted Container (#0D2B0D):** Used at 60-80% opacity for surface layering with backdrop blurs.

## Typography

Typography follows a hierarchy of functional utility and futuristic flair.

- **Headlines (Orbitron):** Always uppercase. These represent the system headers. Apply a subtle `0 0 8px #00FF41` text-glow on level 1 and 2 headlines.
- **Body (Space Mono):** Used for all descriptive content to maintain the "terminal" feel. Ensure a high line-height for readability against the dark background.
- **Impact Labels (Anybody):** Used for specialized callouts and "stamp" style UI elements where maximum weight is required.
- **Mobile Scaling:** Headings drop significantly in size but maintain their heavy tracking (letter spacing) to preserve the aesthetic.

## Layout & Spacing

The layout is a **Fixed 12-Column Grid** on desktop, transitioning to a single-column flow on mobile. 

- **The 4px Rhythm:** All spacing, margins, and border widths must be multiples of 4px to maintain a rigid, digital structure.
- **Asymmetry:** Layouts should utilize "Rotation Offsets"—where secondary images or background containers are rotated by -1 or +1 degrees to break the grid's perfection.
- **Safe Areas:** Maintain a generous 80px margin on desktop to allow "floating" decorative icons (★ ✦ ◈ ▲) to occupy the periphery without interfering with content.

## Elevation & Depth

In this design system, depth is achieved through **Hard Shadow Stacks** rather than realistic lighting.

- **The Shadow Stack:** Elements do not "float" using blurs. Instead, they use three levels of solid-color offsets:
    1. Layer 1: 2px offset in `#7B2FFF` (Deep Purple)
    2. Layer 2: 4px offset in `#FF3AF2` (Neon Magenta)
    3. Layer 3: 6px offset in `#00F5D4` (Neon Cyan)
- **Glassmorphism:** Use only for the Navigation Bar and Modal overlays. Apply a `backdrop-filter: blur(12px)` combined with a 60% opaque `#0D2B0D` fill.
- **Mesh Gradients:** Backgrounds should utilize slow-moving, low-opacity mesh gradients of Magenta and Cyan to simulate a "city-glow" behind the content.

## Shapes

The shape language is **Aggressively Sharp**. 

- **Corners:** Use 0px radius for all standard containers.
- **Clip-Paths:** Primary cards must utilize a `polygon` clip-path to "cut" the top-right and bottom-left corners (12px chamfer cuts).
- **Borders:** Use thick 4px or 8px borders. For secondary containers, use a `dashed` border style to evoke a "technical drawing" or "in-progress" look.

## Components

### Nav Bar
- **Style:** Fixed pill-shaped container (the only rounded element in the system).
- **Border:** 4px solid Neon Green.
- **Filter:** Backdrop-blur (12px).
- **Interaction:** Nav items should have a "glitch" hover effect (briefly shifting 2px left/right).

### Buttons
- **Primary:** Gradient background (`#00FF41` to `#00F5D4`), 4px Electric Yellow solid border. Text is black (#050F05).
- **Secondary:** Transparent background, 2px dashed Neon Magenta border. Text is Neon Magenta.
- **States:** On hover, the "Shadow Stack" should expand from 6px to 10px.

### Cards
- **Structure:** 8px solid border in Neon Cyan.
- **Background:** `#0D2B0D` at 90% opacity.
- **Detailing:** Add a "scanline" overlay effect (1px horizontal lines at 5% opacity).
- **Corner Cut:** Apply 15px chamfer to the top-right corner.

### Inputs & Form Fields
- **Background:** Pure black.
- **Border:** 2px solid Neon Green (Bottom border only).
- **Focus State:** Full 2px border in Electric Yellow with a slight outer glow.

### Decorations
- **Dot Grids:** Use 2x2px dots spaced 24px apart as a background texture.
- **Icons:** Use geometric symbols (★ ✦ ◈ ▲) in Neon Cyan, set to 20% opacity, floating at various Z-indices behind the content.
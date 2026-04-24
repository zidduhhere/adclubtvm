# Graph Report - .  (2026-04-24)

## Corpus Check
- Corpus is ~21,835 words - fits in a single context window. You may not need a graph.

## Summary
- 72 nodes · 69 edges · 19 communities detected
- Extraction: 90% EXTRACTED · 10% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## God Nodes (most connected - your core abstractions)
1. `openItemFromElement()` - 4 edges
2. `Primary Color Palette - Purple and Pink` - 3 edges
3. `getRotationTransition()` - 2 edges
4. `getTransition()` - 2 edges
5. `normalizeAngle()` - 2 edges
6. `getDataNumber()` - 2 edges
7. `computeItemBaseRotation()` - 2 edges
8. `close()` - 2 edges
9. `onKey()` - 2 edges
10. `React + TypeScript + Vite Template Project` - 2 edges

## Surprising Connections (you probably didn't know these)
- `React + TypeScript + Vite Template Project` --references--> `Vite Build Tool Logo`  [EXTRACTED]
  README.md → src/assets/vite.svg
- `React + TypeScript + Vite Template Project` --references--> `React Framework Logo`  [EXTRACTED]
  README.md → src/assets/react.svg
- `3D Isometric Stacked Layers Hero Component` --shares_data_with--> `Primary Color Palette - Purple and Pink`  [INFERRED]
  src/assets/hero.png → public/Group.svg
- `Ad Club TVM Logo with Purple Branding` --references--> `Vite Build Tool Logo`  [EXTRACTED]
  public/logo.svg → src/assets/vite.svg
- `Heart Vector - Single Purple Heart` --semantically_similar_to--> `Love Asset Pattern - Multiple Hearts with Yellow Accents`  [INFERRED] [semantically similar]
  public/heart-vector.svg → public/love-asset-3.svg

## Hyperedges (group relationships)
- **Purple-Pink Color Design System with Yellow Accents** — logo_branding, color_palette_primary, heart_vector_asset, love_asset_pattern_1, love_asset_pattern_2, design_system_decorative_elements [INFERRED 0.92]
- **Decorative Accent and Animation Assets** — decorative_curve_asset, spiral_decorative_asset, cross_accent_asset, starburst_accent, eye_balls_decorative [INFERRED 0.85]
- **UI Component Library with Hero and Custom Elements** — hero_3d_component, custom_cursor_element, design_system_decorative_elements, color_palette_primary [INFERRED 0.80]

## Communities

### Community 0 - "Page Routes"
Cohesion: 0.24
Nodes (0): 

### Community 1 - "Visual Assets & Branding"
Cohesion: 0.25
Nodes (6): close(), computeItemBaseRotation(), getDataNumber(), normalizeAngle(), onKey(), openItemFromElement()

### Community 2 - "Component Library"
Cohesion: 0.29
Nodes (0): 

### Community 3 - "Event Management"
Cohesion: 0.29
Nodes (7): Primary Color Palette - Purple and Pink, Decorative Design System Elements, 3D Isometric Stacked Layers Hero Component, Ad Club TVM Logo with Purple Branding, React Framework Logo, React + TypeScript + Vite Template Project, Vite Build Tool Logo

### Community 4 - "Data Models"
Cohesion: 0.4
Nodes (0): 

### Community 5 - "UI Patterns"
Cohesion: 0.67
Nodes (2): getRotationTransition(), getTransition()

### Community 6 - "Navigation System"
Cohesion: 0.67
Nodes (0): 

### Community 7 - "Instagram Integration"
Cohesion: 0.67
Nodes (0): 

### Community 8 - "Styling & Theme"
Cohesion: 0.67
Nodes (0): 

### Community 9 - "Animation Assets"
Cohesion: 0.67
Nodes (0): 

### Community 10 - "Gallery Components"
Cohesion: 0.67
Nodes (3): Heart Vector - Single Purple Heart, Love Asset Pattern - Multiple Hearts with Yellow Accents, Love Asset Scattered Hearts

### Community 11 - "Design System Tokens"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Core Application"
Cohesion: 1.0
Nodes (2): Cross/X Decorative Asset - Yellow, Starburst Accent Asset - Yellow Lines

### Community 13 - "TypeScript Config"
Cohesion: 1.0
Nodes (2): Curved Decorative Asset - Gradient Stroke, Spiral Decorative Asset - Gradient Curve

### Community 14 - "Decorative Elements"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "Framework Setup"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Cursor & Interaction"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "Color Palette"
Cohesion: 1.0
Nodes (1): Custom Cursor UI Element

### Community 18 - "Build Configuration"
Cohesion: 1.0
Nodes (1): Eye Balls Decorative Pattern

## Knowledge Gaps
- **11 isolated node(s):** `Heart Vector - Single Purple Heart`, `Love Asset Scattered Hearts`, `Curved Decorative Asset - Gradient Stroke`, `Cross/X Decorative Asset - Yellow`, `Starburst Accent Asset - Yellow Lines` (+6 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Design System Tokens`** (2 nodes): `CustomCursor.tsx`, `CustomCursor()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Core Application`** (2 nodes): `Cross/X Decorative Asset - Yellow`, `Starburst Accent Asset - Yellow Lines`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `TypeScript Config`** (2 nodes): `Curved Decorative Asset - Gradient Stroke`, `Spiral Decorative Asset - Gradient Curve`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Decorative Elements`** (1 nodes): `eslint.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Framework Setup`** (1 nodes): `vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Cursor & Interaction`** (1 nodes): `main.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Color Palette`** (1 nodes): `Custom Cursor UI Element`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Build Configuration`** (1 nodes): `Eye Balls Decorative Pattern`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Are the 3 inferred relationships involving `Primary Color Palette - Purple and Pink` (e.g. with `Ad Club TVM Logo with Purple Branding` and `Decorative Design System Elements`) actually correct?**
  _`Primary Color Palette - Purple and Pink` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Heart Vector - Single Purple Heart`, `Love Asset Scattered Hearts`, `Curved Decorative Asset - Gradient Stroke` to the rest of the system?**
  _11 weakly-connected nodes found - possible documentation gaps or missing edges._
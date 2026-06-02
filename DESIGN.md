---
name: Tanawut Portfolio 2026
description: Bilingual software developer portfolio with a dark editor-inspired presentation and calm enterprise tone.
colors:
  background-dark: "#07111f"
  foreground-dark: "#ecf7ff"
  surface-dark: "#091222d1"
  surface-2-dark: "#0d1a2fef"
  border-dark: "#92a3b82e"
  muted-dark: "#8da2bc"
  primary-dark: "#ecf7ff"
  secondary-dark: "#bfd0e4"
  accent-dark: "#5ad5ff"
  accent-strong-dark: "#22c7f0"
  background-light: "#f4f7fb"
  foreground-light: "#102033"
  surface-light: "#ffffffdb"
  surface-2-light: "#f3f8fffa"
  border-light: "#0f172a14"
  muted-light: "#5f6f82"
  primary-light: "#102033"
  secondary-light: "#42546b"
  accent-light: "#0ea5e9"
  accent-strong-light: "#0284c7"
typography:
  display:
    fontFamily: "Geist, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 7vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3vw, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Geist, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Geist, Geist Fallback, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0"
  label:
    fontFamily: "Geist Mono, Geist Mono Fallback, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.24em"
rounded:
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "28px"
spacing:
  xs: "6px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  "2xl": "32px"
components:
  button-primary:
    backgroundColor: "{colors.accent-dark}"
    textColor: "{colors.background-dark}"
    rounded: "{rounded.xl}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.accent-strong-dark}"
    textColor: "{colors.background-dark}"
    rounded: "{rounded.xl}"
    padding: "12px 20px"
  button-ghost:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.primary-dark}"
    rounded: "{rounded.xl}"
    padding: "12px 20px"
  card:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.primary-dark}"
    rounded: "{rounded.xl}"
    padding: "24px"
---

# Design System: Tanawut Portfolio 2026

## Overview

**Creative North Star: "The Calm Terminal"**

This portfolio is a dark, bilingual personal site that feels like a polished editor surface rather than a marketing page. It uses a restrained technical palette, clear hierarchy, and familiar interaction patterns to communicate trust quickly. The voice is calm and practical, with enough motion and glow to feel alive without tipping into spectacle.

The interface should read as organized, intentional, and production-ready. It presents one person, one story, and a real body of work, so the layout stays focused on clarity, proof, and easy scanning. It explicitly rejects generic SaaS landing page language, flashy portfolio theatrics, costume-like developer aesthetics, and dense layouts that bury the essentials.

**Key Characteristics:**
- Dark-first with a deliberate light mode, not a gimmick inversion.
- Strong accent used sparingly for navigation state, CTAs, and emphasis.
- Rounded but controlled surfaces with soft shadows and subtle blur.
- Bilingual content laid out for quick scanning and readable depth.
- Motion supports reveal and state changes, never decoration for its own sake.

## Colors

The palette is a cool, technical dark mode anchored by cyan accent color, with a bright light mode that preserves the same structure.

### Primary
- **Deep Night Surface** (#07111f): The overall page background in dark mode.
- **Calm Foreground** (#ecf7ff): Main text, headings, and high-emphasis content on dark surfaces.
- **Signal Cyan** (#5ad5ff): The main accent for active navigation, hover emphasis, CTA fills, and state markers.

### Secondary
- **Muted Slate Blue** (#bfd0e4): Secondary text and softer supporting copy in dark mode.
- **Link Cyan** (#0ea5e9): The light-mode accent that preserves the same interface vocabulary.

### Neutral
- **Panel Deep** (#091222d1): Main surface for cards and panels in dark mode.
- **Panel Mid** (#0d1a2fef): Slightly raised surface used in nav bars and nested containers.
- **Border Mist** (#92a3b82e): Low-contrast separators and outline borders in dark mode.
- **Cool Light Surface** (#f4f7fb): Light-mode page background.
- **Light Surface** (#ffffffdb): Light-mode cards and panels.
- **Light Border** (#0f172a14): Soft dividers in light mode.

### Named Rules
**The Accent Rarity Rule.** The cyan accent should stay rare and purposeful. It earns its impact by being used for interaction, not decoration.

## Typography

**Display Font:** Geist, Geist Fallback, ui-sans-serif, system-ui, sans-serif
**Body Font:** Geist, Geist Fallback, ui-sans-serif, system-ui, sans-serif
**Label/Mono Font:** Geist Mono, Geist Mono Fallback, ui-monospace, monospace

**Character:** The typography is crisp, modern, and understated. It should feel like a well-tuned developer tool, with enough weight contrast and spacing to stay readable in both English and Thai.

### Hierarchy
- **Display** (700, clamp(3rem, 7vw, 5.25rem), 1): Hero name and primary identity.
- **Headline** (600, clamp(1.75rem, 3vw, 2.5rem), 1.1): Section titles and major content breaks.
- **Title** (600, 1.125rem, 1.3): Card titles, role labels, and smaller hierarchy steps.
- **Body** (400, 1rem, 1.65): Long-form descriptions, about copy, and supporting detail.
- **Label** (500, 0.75rem, 0.24em, uppercase): Small metadata, section chips, and time stamps.

### Named Rules
**The Readable-First Rule.** Labels and metadata can be compact, but the main reading path should never rely on tiny uppercase text or excessive tracking.

## Elevation

The system uses tonal layering with soft shadows, not heavy stacking. Depth comes from slightly different surface tones, rounded corners, subtle borders, and restrained shadow blur. Hover states lift elements a little, but the default state stays calm and flat enough to feel dependable.

### Shadow Vocabulary
- **Hero Lift** (`0 20px 80px rgba(0,0,0,0.24)`): Used on the top shell to establish a strong but quiet frame.
- **Section Lift** (`0 24px 70px rgba(0,0,0,0.16)`): Used on major content panels.
- **Card Lift** (`0 20px 50px rgba(0,0,0,0.22)`): Used on hoverable cards and media containers.

### Named Rules
**The Soft Depth Rule.** Shadow should help separate layers, not become a decorative effect. If a surface does not need emphasis, keep it flatter.

## Components

### Buttons
Buttons are pill-shaped, compact, and familiar.
- **Shape:** 28px radius for pills and controls.
- **Primary:** Cyan fill or cyan-tinted outline, with dark text on the strongest action.
- **Hover / Focus:** Smooth color shift, slight lift only on secondary actions, clear outline or glow on focus.
- **Secondary / Ghost:** Surface-backed buttons with accent only on hover or active state.

### Chips
Chips are used heavily for skills and project stacks.
- **Style:** Small rounded pills with surface background, subtle border, and muted text.
- **State:** Hover shifts the chip toward the accent vocabulary without turning it into a loud button.

### Cards / Containers
Cards are the main structural unit for about, skills, experience, projects, and contact.
- **Corner Style:** 20px to 28px radius depending on prominence.
- **Background:** Dark or light surface token, with inner layers sometimes using the secondary surface.
- **Shadow Strategy:** Soft lift only, paired with border and tone change.
- **Border:** Thin subtle borders are used to define structure.
- **Internal Padding:** Comfortable, typically 16px to 24px, with larger spacing in major panels.

### Inputs / Fields
This portfolio has no major form system, so inputs are not a primary design language. If added later, they should follow the same rounded, surface-backed, low-contrast vocabulary as buttons and chips.

### Navigation
The navigation is compact, sticky, and highly legible.
- **Style:** Rounded container with surface background and subtle border.
- **Typography:** Small, clean sans with accent used for hover and active states.
- **Default / Hover / Active:** Default is muted, hover becomes cyan, active shows the current section with a cyan underline.
- **Mobile Treatment:** Collapses into a lighter, simpler control set while preserving the same color language.

### Signature Elements
The hero image card and the theme toggle buttons are the most visually distinctive controls. They should remain crisp, slightly elevated, and aligned with the same surface vocabulary as the rest of the page.

## Do's and Don'ts

### Do:
- **Do** keep the accent color reserved for current state, primary CTAs, and focus-adjacent emphasis.
- **Do** preserve the dark and light theme symmetry so both modes feel like the same system.
- **Do** keep cards, nav, and buttons on the same rounded surface vocabulary.
- **Do** let bilingual content occupy the same layout structure instead of making a separate language view.
- **Do** use motion only to reveal content, show state, or reinforce interaction.

### Don't:
- **Don't** use a generic SaaS landing-page layout that sells a product instead of presenting a person.
- **Don't** rely on flashy motion, glow, or decoration to carry the experience.
- **Don't** build a costume-like developer aesthetic that feels gimmicky rather than credible.
- **Don't** hide the essentials behind dense sections or unclear hierarchy.
- **Don't** force one audience to work harder than the other by shipping a single-language experience.
- **Don't** bury the actual impact of projects under overdesigned cards or visual clutter.

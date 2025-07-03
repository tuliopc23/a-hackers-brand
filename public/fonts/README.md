# 3D Fonts Setup

This directory should contain font files needed for 3D text rendering with React Three Fiber.

## Required Font

The InteractiveGallery3D component expects:
- `/public/fonts/helvetiker_regular.typeface.json`

## How to get the font file:

1. Download the Three.js font converter fonts from:
   https://github.com/mrdoob/three.js/tree/dev/examples/fonts

2. Specifically download `helvetiker_regular.typeface.json` and place it in this directory.

Alternatively, you can use the Three.js font converter to convert your own fonts:
https://gero3.github.io/facetype.js/

## Usage

The font is used in the `CategoryLabels` component within the interactive gallery to render 3D text labels for project categories.

If the font file is missing, the 3D text components will not render properly, but the application will continue to work without them.

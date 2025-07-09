# A Hacker's Brand - Identity Guidelines

## Brand Overview

**"A Hacker's Brand"** is a cutting-edge design system that revolutionizes digital interfaces by fusing Apple's liquid glass aesthetics with terminal/CLI hacker culture. This brand represents innovation, technical prowess, and the rebellious spirit of the hacker ethos while maintaining the elegance and sophistication of premium design.

### Brand Positioning

- **Target Audience**: Developers, designers, tech innovators, and digital rebels
- **Brand Personality**: Innovative, rebellious, sophisticated, technical, futuristic
- **Core Values**: Innovation, authenticity, technical excellence, creative freedom
- **Competitive Advantage**: Unique fusion of premium aesthetics with hacker culture

---

## Logo & Visual Identity

### Primary Logomark

```
█████╗     ██╗  ██╗ █████╗  ██████╗██╗  ██╗███████╗██████╗ ███████╗
██╔══██╗    ██║  ██║██╔══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗██╔════╝
███████║    ███████║███████║██║     █████╔╝ █████╗  ██████╔╝███████╗
██╔══██║    ██╔══██║██╔══██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗╚════██║
██║  ██║    ██║  ██║██║  ██║╚██████╗██║  ██╗███████╗██║  ██║███████║
╚═╝  ╚═╝    ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝

██████╗ ██████╗  █████╗ ███╗   ██╗██████╗
██╔══██╗██╔══██╗██╔══██╗████╗  ██║██╔══██╗
██████╔╝██████╔╝███████║██╔██╗ ██║██║  ██║
██╔══██╗██╔══██╗██╔══██║██║╚██╗██║██║  ██║
██████╔╝██║  ██║██║  ██║██║ ╚████║██████╔╝
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝
```

### Logo Variants

#### 1. Full ASCII Logo

- **Usage**: Headers, splash screens, terminal interfaces
- **Format**: Monospace font (PP Supply Mono)
- **Color**: Matrix green (#4ade80) with subtle glow
- **Minimum Size**: 200px width for readability

#### 2. Compact Logo

```
A HACKER'S BRAND
```

- **Usage**: Navigation bars, small UI elements, social media
- **Format**: PP Supply Sans Bold
- **Color**: Primary terminal green or contextual brand color
- **Minimum Size**: 80px width

#### 3. Icon Version

```
[◉]
```

- **Usage**: Favicons, app icons, social media avatars
- **Format**: Square format with liquid glass background
- **Color**: Terminal green on dark glass background
- **Minimum Size**: 16x16px

### Logo Colors

#### Primary Palette

- **Matrix Green**: `#4ade80` - Primary brand color
- **Neon Cyan**: `#06b6d4` - Secondary highlight
- **Terminal Background**: `rgba(0, 0, 0, 0.9)` - Dark base
- **Glass Overlay**: `rgba(255, 255, 255, 0.1)` - Liquid glass effect

#### Alternative Palettes

- **Cyberpunk**: Pink (#ec4899) and Purple (#8b5cf6)
- **Retro**: Amber (#f59e0b) and Orange (#ea580c)
- **Neo**: Blue (#3b82f6) and Violet (#7c3aed)

### Logo Usage Guidelines

#### ✅ Do:

- Use on dark backgrounds for maximum impact
- Maintain proper spacing (minimum 1/2 logo height clearance)
- Apply subtle glow effects in digital applications
- Use monospace font for ASCII versions
- Respect minimum size requirements

#### ❌ Don't:

- Use on light backgrounds without proper contrast
- Stretch, skew, or distort the logo proportions
- Use low-resolution versions
- Add drop shadows or heavy effects
- Place over busy backgrounds without backdrop blur

---

## Color System

### Core Brand Colors

#### Terminal Palette

```css
:root {
	--brand-green-matrix: #4ade80; /* Primary brand color */
	--brand-green-bright: #22c55e; /* Success states */
	--brand-green-glow: #4ade8080; /* Glow effects */

	--brand-cyan-neon: #06b6d4; /* Interactive elements */
	--brand-cyan-bright: #0891b2; /* Hover states */
	--brand-cyan-glow: #06b6d480; /* Subtle highlights */

	--brand-black-deep: #000000; /* Pure black backgrounds */
	--brand-black-soft: #0a0a0a; /* Card backgrounds */
	--brand-gray-dark: #1a1a1a; /* Secondary surfaces */
}
```

#### Glass Morphism Palette

```css
:root {
	--glass-primary: rgba(255, 255, 255, 0.1); /* Primary glass */
	--glass-secondary: rgba(255, 255, 255, 0.05); /* Subtle glass */
	--glass-border: rgba(255, 255, 255, 0.2); /* Glass borders */
	--glass-accent: rgba(77, 222, 128, 0.1); /* Brand glass */
}
```

#### Semantic Colors

```css
:root {
	--brand-success: #4ade80; /* Success green */
	--brand-warning: #f59e0b; /* Warning amber */
	--brand-error: #ef4444; /* Error red */
	--brand-info: #06b6d4; /* Info cyan */
}
```

### Color Usage Guidelines

#### Primary Actions

- **Matrix Green**: Call-to-action buttons, primary links, active states
- **Usage**: Sparingly for maximum impact
- **Accessibility**: Ensure 4.5:1 contrast ratio on dark backgrounds

#### Secondary Actions

- **Neon Cyan**: Secondary buttons, hover states, interactive indicators
- **Usage**: Supporting elements, navigation highlights
- **Pairing**: Works well with matrix green for dual-action interfaces

#### Background Hierarchy

1. **Pure Black**: Main application background
2. **Soft Black**: Card containers, modals
3. **Dark Gray**: Secondary containers, sidebars
4. **Glass Overlay**: Floating elements, tooltips, dropdowns

#### Text Hierarchy

1. **Matrix Green**: Primary headings, active text, brand elements
2. **White**: Primary body text, important content
3. **Gray 400**: Secondary text, labels, descriptions
4. **Gray 600**: Muted text, timestamps, metadata

---

## Typography System

### Primary Typefaces

#### PP Supply Sans

- **Usage**: Headlines, body text, user interface elements
- **Weights**: 400 (Regular), 600 (SemiBold), 700 (Bold)
- **Character**: Modern, clean, slightly futuristic
- **Implementation**: Web font with proper fallbacks

#### PP Supply Mono

- **Usage**: Code blocks, terminal text, technical content
- **Weights**: 400 (Regular), 600 (SemiBold)
- **Character**: Authentic terminal feel, excellent legibility
- **Implementation**: Consistent character width for code alignment

### Fallback Fonts

```css
.brand-sans {
	font-family:
		'PP Supply Sans',
		system-ui,
		-apple-system,
		sans-serif;
}

.brand-mono {
	font-family: 'PP Supply Mono', 'SF Mono', Consolas, monospace;
}
```

### Typography Scale

#### Display Sizes (PP Supply Sans)

- **Display XL**: 72px / 1.1 line-height / -2% letter-spacing
- **Display LG**: 60px / 1.1 line-height / -1% letter-spacing
- **Display MD**: 48px / 1.2 line-height / -1% letter-spacing
- **Display SM**: 36px / 1.2 line-height / normal letter-spacing

#### Heading Sizes

- **H1**: 30px / 1.3 line-height / -0.5% letter-spacing
- **H2**: 24px / 1.3 line-height / normal letter-spacing
- **H3**: 20px / 1.4 line-height / normal letter-spacing
- **H4**: 18px / 1.4 line-height / normal letter-spacing

#### Body Text

- **Large**: 18px / 1.6 line-height / normal letter-spacing
- **Regular**: 16px / 1.5 line-height / normal letter-spacing
- **Small**: 14px / 1.4 line-height / normal letter-spacing
- **Caption**: 12px / 1.3 line-height / 0.5% letter-spacing

#### Code Text (PP Supply Mono)

- **Large**: 16px / 1.6 line-height / normal letter-spacing
- **Regular**: 14px / 1.5 line-height / normal letter-spacing
- **Small**: 12px / 1.4 line-height / normal letter-spacing

### Retro Text Effects

#### ASCII Art Headers

```css
.ascii-header {
	font-family: 'PP Supply Mono', monospace;
	font-size: clamp(8px, 2vw, 14px);
	color: var(--brand-green-matrix);
	text-shadow: 0 0 10px var(--brand-green-glow);
	white-space: pre;
	overflow: hidden;
}
```

#### Terminal Text

```css
.terminal-text {
	font-family: 'PP Supply Mono', monospace;
	color: var(--brand-green-matrix);
	background: rgba(0, 0, 0, 0.9);
	padding: 0.5em;
	border-radius: 4px;
	text-shadow: 0 0 8px currentColor;
}
```

#### Glitch Effect

```css
.glitch-text {
	font-family: 'PP Supply Sans', sans-serif;
	font-weight: 700;
	color: var(--brand-green-matrix);
	animation: glitch 2s infinite;
	text-shadow:
		2px 0 var(--brand-cyan-neon),
		-2px 0 var(--brand-error);
}
```

---

## Visual Language

### Glass Morphism

#### Core Principles

- **Transparency**: 5-10% white overlay on dark backgrounds
- **Blur**: 12-20px backdrop filter for depth
- **Borders**: Subtle white borders (20% opacity)
- **Gradients**: Minimal use, prefer solid colors with transparency

#### Implementation

```css
.glass-surface {
	background: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(12px) saturate(180%);
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 16px;
}
```

#### Layering System

1. **Level 0**: Pure background (black)
2. **Level 1**: Primary containers (5% white)
3. **Level 2**: Secondary containers (8% white)
4. **Level 3**: Floating elements (12% white)
5. **Level 4**: Modal overlays (15% white)

### Liquid Jelly Effects

#### Corner Radius System

```css
:root {
	--radius-sm: 8px;
	--radius-md: 12px;
	--radius-lg: 16px;
	--radius-xl: 24px;
	--radius-2xl: 32px;
	--radius-full: 50%;
	--radius-organic: 12px 24px 16px 20px; /* Organic variation */
}
```

#### Morphing Animations

- **Hover**: Slight radius increase (2-4px)
- **Active**: Radius decrease (2px) with scale transform
- **Focus**: Animated border with color transition
- **Loading**: Subtle pulsing with radius morphing

### Terminal Aesthetics

#### CRT Effects

```css
.crt-screen {
	background: linear-gradient(transparent 0%, rgba(77, 222, 128, 0.03) 50%, transparent 100%);
	animation: scanlines 0.1s linear infinite;
}

@keyframes scanlines {
	0% {
		background-position: 0 0;
	}
	100% {
		background-position: 0 2px;
	}
}
```

#### Phosphor Glow

```css
.phosphor-text {
	color: var(--brand-green-matrix);
	text-shadow:
		0 0 5px currentColor,
		0 0 10px currentColor,
		0 0 15px currentColor;
}
```

#### Matrix Rain Effect

- **Characters**: Katakana, Latin letters, numbers
- **Speed**: Variable (slow to fast)
- **Color**: Green (#4ade80) with opacity gradients
- **Direction**: Top to bottom

---

## Component Principles

### Interactive States

#### Hover States

- **Color**: 20% brighter or color shift
- **Transform**: Subtle scale (1.02-1.05) or translate
- **Glow**: Increased shadow spread and intensity
- **Transition**: 200-300ms ease-out

#### Active States

- **Scale**: Slight compression (0.98)
- **Color**: Darker or more saturated
- **Glow**: Reduced for "pressed" feeling
- **Duration**: Fast (100-150ms)

#### Focus States

- **Outline**: 2px solid brand color with offset
- **Glow**: Animated pulsing effect
- **Color**: Enhanced contrast
- **Animation**: Smooth fade-in

#### Disabled States

- **Opacity**: 40-50% reduction
- **Color**: Desaturated grays
- **Cursor**: Not-allowed
- **Animation**: None

### Motion Language

#### Timing Functions

```css
:root {
	--ease-jelly: cubic-bezier(0.68, -0.55, 0.265, 1.55);
	--ease-liquid: cubic-bezier(0.23, 1, 0.32, 1);
	--ease-glass: cubic-bezier(0.4, 0, 0.2, 1);
	--ease-organic: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

#### Duration Scale

- **Instant**: 100ms - Micro-interactions
- **Fast**: 200ms - Hover states, focus
- **Normal**: 300ms - Standard transitions
- **Slow**: 500ms - Page transitions, modals
- **Epic**: 800ms+ - Special effects

#### Animation Principles

1. **Organic**: Slightly imperfect, human-like timing
2. **Responsive**: React to user input immediately
3. **Purposeful**: Serve function, not just decoration
4. **Respectful**: Honor reduced motion preferences

---

## Voice & Tone

### Brand Voice

#### Technical Authority

- **Confident**: We know what we're talking about
- **Precise**: Clear, specific language
- **Innovative**: Pushing boundaries, not following trends
- **Authentic**: Real expertise, not marketing fluff

#### Hacker Ethos

- **Rebellious**: Question conventions
- **Creative**: Think outside the box
- **Collaborative**: Open source mentality
- **Pragmatic**: Solutions that actually work

#### Professional Edge

- **Sophisticated**: High-quality execution
- **Reliable**: Dependable and stable
- **Forward-thinking**: Always improving
- **Accessible**: Inclusive and welcoming

### Tone Guidelines

#### Documentation

- **Clear and direct**: Get to the point quickly
- **Example-driven**: Show, don't just tell
- **Assumptive expertise**: Users know their stuff
- **Helpful warnings**: Point out gotchas early

#### Marketing

- **Bold claims**: Back them up with evidence
- **Developer-focused**: Speak their language
- **Benefit-oriented**: What can they build?
- **Community-minded**: We're in this together

#### Error Messages

- **Honest about problems**: Don't hide issues
- **Actionable solutions**: Tell them how to fix it
- **Reassuring tone**: It's not their fault
- **Technical accuracy**: Precise error descriptions

### Language Style

#### Preferred Terms

- "Liquid glass" instead of "glassmorphism"
- "Terminal aesthetic" instead of "dark theme"
- "Jelly effects" instead of "animations"
- "Hacker brand" instead of "design system"

#### Avoid These Terms

- "Modern" (everything claims to be modern)
- "Revolutionary" (overused and meaningless)
- "Simply" (undermines complexity)
- "Just" (dismissive of user effort)

---

## Application Guidelines

### Digital Applications

#### Websites

- **Dark backgrounds**: Always start with black/dark gray
- **Glass overlays**: Use for navigation, cards, modals
- **Terminal elements**: Code blocks, CLI interfaces
- **Subtle animations**: Enhance, don't distract

#### Mobile Apps

- **Thumb-friendly**: 44px minimum touch targets
- **Readable text**: Minimum 16px for body text
- **High contrast**: Essential for outdoor use
- **Battery-conscious**: Optimize dark backgrounds for OLED

#### Desktop Applications

- **Native integration**: Respect OS conventions
- **Keyboard shortcuts**: Full keyboard navigation
- **Window management**: Proper resize behavior
- **Performance**: Smooth 60fps animations

### Print Applications

#### Business Cards

- **Matte black background**: Premium feel
- **Foil stamping**: Green metallic accent
- **Minimal text**: Contact info only
- **QR code**: Link to digital portfolio

#### Letterhead

- **Corner ASCII logo**: Small, subtle placement
- **Terminal green accent**: Single color highlight
- **Clean typography**: PP Supply Sans
- **Professional layout**: Business-appropriate

### Merchandise

#### T-Shirts

- **ASCII logo**: Large back print
- **Terminal colors**: Green on black
- **Quality fabric**: Represent the brand well
- **Subtle branding**: Front chest logo

#### Stickers

- **Die-cut shapes**: Terminal brackets [ ]
- **Holographic material**: Tech aesthetic
- **Various sizes**: 2", 3", 4" options
- **Weatherproof**: Laptop-ready

---

## Brand Protection

### Trademark Guidelines

#### Proper Usage

- Always use "A Hacker's Brand™" for first mention
- Subsequent mentions can use "A Hacker's Brand"
- Never modify the registered trademark
- Include proper attribution in documentation

#### Incorrect Usage

- Don't abbreviate to "AHB" or similar
- Don't translate the name
- Don't combine with other brand names
- Don't use as a generic term

### Logo Protection

#### Legal Requirements

- Maintain trademark notice on official logos
- Use ® symbol after registered trademark
- Include copyright notice on marketing materials
- Protect against unauthorized modifications

#### Quality Control

- Only use official logo files
- Maintain minimum resolution standards
- Check color accuracy across media
- Ensure proper spacing and positioning

### Brand Enforcement

#### Monitoring

- Regular searches for trademark infringement
- Social media monitoring for misuse
- Competitive analysis for similar branding
- Community reporting system

#### Response Protocol

1. **Document**: Screenshot and save evidence
2. **Assess**: Determine if action is needed
3. **Contact**: Reach out for voluntary compliance
4. **Escalate**: Legal action if necessary

---

## Implementation Checklist

### Brand Launch

- [ ] Logo files created in all required formats
- [ ] Brand guidelines distributed to team
- [ ] Website updated with new branding
- [ ] Social media profiles updated
- [ ] Email signatures updated
- [ ] Business cards redesigned
- [ ] Marketing materials updated

### Quality Assurance

- [ ] Color accuracy verified across devices
- [ ] Typography loading properly on all platforms
- [ ] Logo scaling tested at various sizes
- [ ] Accessibility standards met
- [ ] Print quality verified
- [ ] Mobile optimization confirmed

### Team Training

- [ ] Brand guidelines presentation completed
- [ ] Design team trained on new standards
- [ ] Marketing team aligned on voice/tone
- [ ] Customer service briefed on brand values
- [ ] Legal team aware of trademark requirements

### Ongoing Maintenance

- [ ] Monthly brand audit scheduled
- [ ] Quarterly guidelines review planned
- [ ] Annual brand health assessment
- [ ] Feedback collection system implemented
- [ ] Evolution roadmap established

---

## Contact & Resources

### Brand Guardians

- **Creative Director**: [name@email.com]
- **Legal Counsel**: [legal@company.com]
- **Marketing Lead**: [marketing@company.com]

### Asset Repository

- **Primary**: [internal-brand-portal.com]
- **Public**: [brand.hackerbrand.com]
- **Backup**: [cloud-storage-link]

### Support Channels

- **Questions**: [brand@company.com]
- **Violations**: [legal@company.com]
- **Suggestions**: [feedback@company.com]

---

_This document is a living guide that evolves with our brand. Last updated: December 2024_

_For questions about brand usage or to report violations, contact: brand@hackerbrand.com_

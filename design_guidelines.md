# Design Guidelines: الأسبوع العربي للكيمياء (Arab Chemistry Week)

## Design Approach
**Educational-Professional Hybrid**: Drawing inspiration from academic institutions like MIT OpenCourseWare and edX, combined with the clean, content-focused approach of educational platforms. The design prioritizes clarity and readability for Arabic content while maintaining visual sophistication appropriate for a chemistry academic event.

## Core Design Principles
1. **RTL-First Design**: All layouts flow right-to-left, optimized for Arabic reading patterns
2. **Scientific Elegance**: Clean, structured layouts that reflect chemistry's precision
3. **Cultural Authenticity**: Embrace Arabic typography and design sensibilities
4. **Accessibility**: High contrast, clear hierarchy for educational content

## Typography System

**Primary Font**: Cairo (Google Fonts) - Modern, highly legible Arabic sans-serif
- Main Title (الأسبوع العربي للكيمياء): 3xl to 5xl, bold weight
- Student Name (محمد السد أحمد): xl, regular weight with subtle opacity
- Section Headings: 2xl to 3xl, semibold
- Body Text: base to lg, regular weight with generous line-height (1.8-2.0 for Arabic)

**Secondary Font**: Tajawal for UI elements and smaller text
- Navigation items, buttons, footer text

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm
- Section padding: py-16 to py-24 on desktop, py-12 on mobile
- Container max-width: max-w-6xl centered
- Card spacing: gap-8 between cards, p-8 within cards

**Grid Structure**:
- Events section: 2-column grid on desktop (lg:grid-cols-2), single column mobile
- Logo placement: Flex layout with even distribution
- Content sections: Asymmetric layouts with 60/40 splits where appropriate

## Page Structure

**Header Section** (Full-width, 60vh minimum):
- Subtle gradient or abstract chemistry-themed background image (molecular patterns, beakers, periodic table elements - soft, not literal)
- Centered title and student name with translucent backdrop
- Elegant spacing between title and subtitle
- No navigation needed (single-page design)

**Chemistry Importance Section**:
- Two-column layout: Text on right, supporting visual element on left
- Icon or illustration representing chemistry in daily life
- Generous whitespace around content blocks
- Bordered card design with subtle shadows

**Goals Section**:
- Clean list presentation with custom Arabic bullet points or numbered items
- Each goal in its own card with icon
- Staggered layout for visual interest

**Activities & Events Section**:
- Event cards in 2-column grid
- Each card includes: Event name, date/time, description, icon
- Hover effect: subtle lift and shadow enhancement
- Clear visual separation between events

**Chemistry Association Logos**:
- Positioned prominently between sections or in dedicated band
- Equal sizing with consistent spacing
- Subtle border or background to establish presence
- Labels underneath identifying each association

**Footer**:
- Three-part horizontal layout: Social icons (right), copyright (center), additional links (left)
- Social media icons: Circular with blue background, white icons
- Generous padding (py-12)

## Component Library

**Cards**:
- White background with subtle border
- Rounded corners (rounded-xl)
- Shadow: shadow-md default, shadow-lg on hover
- Internal padding: p-8
- Smooth transitions on all interactive states

**Buttons** (if needed for CTAs):
- Primary: Solid blue with white text
- Secondary: Outlined blue with blue text
- Padding: px-8 py-3
- Rounded: rounded-lg
- When placed on images: backdrop-blur-sm with semi-transparent background

**Icons**:
- Use Font Awesome (Arabic-compatible) via CDN
- Consistent sizing: 2rem for section icons, 1.5rem for card icons
- Chemistry-themed icons where appropriate (flask, atom, molecule)

## Images

**Hero Section**: 
- Abstract chemistry background image - think molecular structures in soft focus, laboratory glassware with bokeh effect, or artistic periodic table visualization
- Should be professional, not stock-photo generic
- Overlay: Dark gradient (bottom-to-top) for text readability

**Section Images**:
- Importance section: Illustration or photo showing chemistry applications (medicine, environment, technology)
- Keep images purposeful and professional, avoiding clichéd stock photos

## Visual Effects

**Transitions**: 
- Card hover: transform scale-105 with 300ms ease
- Button hover: subtle color shift
- Section reveals: Fade-in as user scrolls (minimal, not distracting)

**Shadows & Depth**:
- Layered approach: Footer slightly elevated, cards mid-level, content base
- Use sparingly for hierarchy, not decoration

## Responsive Behavior

**Breakpoints**:
- Mobile (< 768px): Single column, larger touch targets, simplified header
- Tablet (768px - 1024px): Maintain some grid layouts, adjust spacing
- Desktop (> 1024px): Full multi-column layouts, optimal typography sizing

**RTL Considerations**:
- Ensure all flex/grid directions respect RTL
- Icons and decorative elements mirror appropriately
- Padding/margin values flip correctly

## Accessibility Standards

- Minimum contrast ratio: 4.5:1 for body text, 3:1 for large text
- Focus indicators: Visible outline on all interactive elements
- Semantic HTML: Proper heading hierarchy (h1 → h6)
- Alt text: Descriptive Arabic text for all images and logos
- Language attribute: lang="ar" dir="rtl" on html element

## Quality Standards

This is a comprehensive, production-ready design that balances academic professionalism with visual appeal. Every section should feel complete and purposeful, with 6-8 distinct sections creating a rich, informative experience. The design celebrates Arabic typography while maintaining modern web standards, creating a distinctive identity for Arab Chemistry Week that would impress both educators and students.
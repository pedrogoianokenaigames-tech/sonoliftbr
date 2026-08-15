# Plan for Shopify HTML Export (Version 45)

Reconstruct the single-block HTML for Shopify Custom Liquid, ensuring 100% feature parity with the preview and fixing all asset links using absolute URLs.

## User Review Required

> [!IMPORTANT]
> The HTML code will be provided in the next turn once you approve this plan. It will include all real images, videos, and interactive elements (Before/After slider, clinical stats, Sticky CTA).

## Proposed Changes

### Assets and Links
- Replace all local asset placeholders with absolute URLs (e.g., `https://sonoliftbr.lovable.app/__l5e/assets-v1/...`).
- Verify and map:
    - 6 Hero Gallery images.
    - Hero vertical video (`hero-video-2.mp4`).
    - Payment logos (Visa, Mastercard from Icons8; Elo and Pix from project assets).
    - Before/After comparison images.
    - Clinical study background elements.
    - Ritual step images.
    - Treatment map images.
    - Testimonial (UGC) videos.
- Update Yampi checkout link: `https://sono-lift.pay.yampi.com.br/r/R558X0P2M5`.
- Update WhatsApp link: `https://wa.me/5511941942267`.

### Layout and Styles
- Maintain the 50vh max-height for the mobile gallery to keep the CTA above the fold.
- Use Tailwind CSS via CDN for styling.
- Include the "BÔNUS GRÁTIS" banner and centered "GRÁTIS" label in the final summary.
- Ensure the Sticky CTA bar is functional and follows Shopify's scroll behavior.

### Interactive Elements
- **Before/After Slider**: Use native range input with clip-path for performance.
- **Clinical Stats**: Self-triggering count-up animation with a 3-second failsafe.
- **Hero Video**: Autoplay, loop, muted, with a clear "Unmute" button.
- **Testimonials**: Horizontal scroll carousel with snap-align.

## Technical Details
- Character limit optimization to stay under Shopify's 50KB limit (approx. 49KB).
- Use `DOMContentLoaded` with a `setTimeout` failsafe for scripts to ensure they run inside Shopify's environment.
- Single `<script>` tag for all logic.
- Inline SVGs for small icons to save space and avoid external requests.

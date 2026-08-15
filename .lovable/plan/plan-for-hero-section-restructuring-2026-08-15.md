# Plan for Hero Section Restructuring

Restructure the Hero Section to follow a traditional e-commerce product page layout, specifically optimized for mobile users.

## User Review Required

> [!IMPORTANT]
> I will be using the product images from the Shopify store (Kit SonoLift) for the gallery. The "Advertorial" content will be moved below the initial purchase block.

## Proposed Changes

### 1. Hero Section Restructuring (`src/routes/index.tsx`)
- **Move existing Hero components**: The "Advertorial" parts (Headline, description, vertical video) will be moved into a new `AdvertorialSection` component.
- **Implement new E-commerce Hero**:
    - **Gallery**: A main product image with thumbnails below.
    - **Title**: "Kit SonoLift™ Facial + Colo" (or fetched from Shopify).
    - **Offer Block**: Price (R$ 197), stars, and trust badges.
    - **CTA**: Primary purchase button.
- **Maintain Branding**: Keep the off-white background (`bg-cream`) and current typography.

### 2. New Section: Advertorial (`src/routes/index.tsx`)
- Create a new section component called `InvisibleEnemySection` (or reuse existing one) that contains the "VOCÊ DORME DE LADO?" banner logic and the "Acorde sem as marcas..." text.
- Place it immediately after the new Hero purchase block.

### 3. Shopify Export Update
- Regenerate the single-file HTML export for Shopify Custom Liquid, incorporating these architectural changes while staying under the 50KB limit.

## Technical Details
- Use the `fetchFeaturedProduct` hook data to populate the gallery and price.
- Use `framer-motion` or simple Tailwind transitions for the gallery if needed, but keep it lightweight for the Shopify export.
- Ensure the mobile view shows the product, price, and CTA "above the fold" as requested.

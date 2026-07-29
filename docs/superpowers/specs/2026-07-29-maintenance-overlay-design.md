# Maintenance Overlay — Design

## Purpose

Add a full-screen "under maintenance" overlay to the site that can be toggled on for deploys where the site needs to be taken offline temporarily. When active, it must be impossible for a visitor to dismiss or bypass it to reach any page.

## Requirements

- Overlay is controlled by a single dev-facing config constant, not an env var.
- When enabled, visitors cannot dismiss it (no close button) and cannot reach any route — nothing else in the app renders.
- Displays the ACT club logo, a maintenance icon, a headline, and short subtext. No contact info or ETA (minimal content only).
- Styled with the project's existing brand tokens and `Gotham` font — visually consistent with the rest of the site.

## Architecture

**Config — `src/config/maintenance.ts`**
```ts
export const MAINTENANCE_MODE = false;
```
A single exported boolean. Flipping it and redeploying is the entire toggle mechanism.

**Component — `src/components/MaintenanceOverlay.tsx`**
A standalone full-screen component (no props). Contents:
- ACT logo (`/logo.svg`) via an `<img>` tag
- A maintenance icon (lucide-react `Construction` or `Wrench`)
- Headline: "We'll be right back"
- Subtext: "Advertising Club Trivandrum is currently undergoing maintenance. Please check back soon."
- No buttons, links, or dismiss affordances of any kind.

Styling uses brand tokens (`bg`, `purple`, `purple-deep`, `yellow`) and centers content vertically/horizontally, `min-h-screen`.

**Wiring — `src/App.tsx`**
At the top of the default-exported `App` component, before rendering `BrowserRouter`:
```ts
if (MAINTENANCE_MODE) {
  return <MaintenanceOverlay />;
}
```
This means when the flag is on, `BrowserRouter`, `AppLayout`, `Nav`, `Footer`, `Banner`, and all `Routes` never mount — there is no code path by which a visitor reaches any other page or asset.

## Out of scope

- No env-var-based toggle.
- No contact/social links or estimated-return time in the overlay content.
- No admin route or auth-gated bypass — the flag is a code-level toggle only.

## Testing

No test suite exists in this project (per CLAUDE.md). Verification is manual: toggle `MAINTENANCE_MODE` to `true`, run `npm run dev`, confirm the overlay renders exclusively and no route is reachable; toggle back to `false` and confirm the site behaves normally.

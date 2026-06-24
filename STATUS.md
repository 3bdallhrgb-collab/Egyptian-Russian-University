# ERU Student Portal - Status

## Project Overview

A responsive web portal for the Egyptian Russian University (ERU) student self-service system. Built to match the provided reference screenshots while replacing all Ellucian branding with ERU branding and mock data.

## Tech Stack

- **Framework:** React 18 + Vite 5
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Utilities:** clsx, tailwind-merge

## Completed Pages / Routes

| Route | Page | Status |
|-------|------|--------|
| `/login` | Login | Complete |
| `/dashboard` | Today's Overview | Complete |
| `/registration/schedule` | My Schedule | Complete |
| `/grades/report` | Grade Report | Complete |
| `/grades/transcript` | Unofficial Transcript | Complete |
| `/finances/balance` | Balance | Complete |

The default route (`/`) redirects to `/login`.

## Mock Data

All data is mocked locally in the `src/data/` directory:

- `mockStudent.ts` - Student profile (Mohamed Youssef Lasheen, ID 202402576, 2026/SPRING)
- `mockCourses.ts` - Course list with meeting times and colors
- `mockGrades.ts` - Grade report rows and term-by-term transcript data
- `mockFinances.ts` - Balance summary and due amount

## Components Structure

- `src/components/layout/` - `AppShell`, `TopNav`, `FullMenuOverlay`, `GradesDropdown`
- `src/components/ui/` - `PageBackground`, `Card`, `SelectBox`, `StatCard`, `PrintLink`
- `src/components/portal/` - `Footer`, `ScheduleGrid`, `TranscriptDocument`
- `src/pages/` - `LoginPage`, `DashboardPage`, `SchedulePage`, `GradeReportPage`, `TranscriptPage`, `BalancePage`

## How to Run

```bash
npm install
npm run dev
```

Then open the displayed local URL (e.g., `http://localhost:5173`).

## Build

```bash
npm run build
```

The production build outputs to `dist/`.

## Current Status

- All required pages and shared components are implemented.
- TypeScript compilation (`tsc`) and production build (`vite build`) pass.
- ESLint passes with the project `.eslintrc.cjs` configuration.
- Routing is configured with React Router.
- Mock data is used for all student, course, grade, and finance information.
- ERU branding replaces the reference Ellucian branding.
- Login uses email `256323@eru.edu.eg` and password `1234`; successful credentials redirect to the dashboard.
- Unified professional theme: deep ERU blue palette, slate typography, card shadows, and a subtle geometric background.
- Logo is now integrated into the header without a separate white box.
- Footer is rendered automatically by `AppShell` to remove duplication across portal pages.
- Shared `PageHeader` component standardizes page titles and actions.
- Normalized all pages and components to use slate neutrals and ERU brand colors instead of mixed gray/blue values.
- Loaded Inter font and updated favicon to the ERU logo.
- Header navigation now uses clean normal-case labels with a consistent active indicator.
- Full menu overlay uses a dark backdrop and white grouped cards for a professional look.

## Known Notes

- The login form is a client-side mock only; no real backend authentication.
- The schedule page uses a fixed current day/time of Wednesday 11:30 AM for the current-time indicator.
- The transcript page is a single-page academic record view.
- All routes are client-side only; refreshing a non-root route requires the dev server to serve the SPA index (Vite handles this automatically in development).

## Next Steps / Verification

- [x] Install dependencies
- [x] Run production build successfully
- [x] Run dev server and verify all routes respond (200 OK)
- [x] Fix TypeScript/lint errors and build warnings
- [x] Validate logo and branding assets load correctly
- [ ] Visual QA against each reference screenshot (use browser preview)
- [ ] Confirm responsiveness on tablet/mobile widths
- [ ] Add any final brand assets if needed

---

Last updated: 2026-06-24

# Competitive Pricing Intelligence Dashboard

Interactive static dashboard for the proposed Collarbone Protective Sports Undershirt. Mission 2 only: competitive positioning, with no demand, revenue or profit forecasts.

## Run and build

Requires Node 20+ for validation/build. No production dependencies, backend, API keys or package installation required. Native ES modules and responsive CSS keep deployment small and portable.

```sh
npm test
npm run build
python3 -m http.server 4173 --directory dist
```

Open http://localhost:4173. Production uses relative asset and data URLs, hash navigation and no server-side routing, so it works under `/Pricing-Intelligence-Dashboard/` and on refresh. Fonts have system fallbacks.

## Research and calculations

`data/competitor_data.json` is the primary research source, preserved from the supplied Mission 1 JSON. Cross-checked against all five sheets of competitor_research.xlsx and the complete competitor_analysis.docx on 2026-10-27. Three unique competitors, five standalone shirt offers, three representative products (P01/P03/P04). All listed prices, flags, IDs and the $49–$69 preliminary range agree across sources.

Representative USD statistics: minimum 44.99, maximum 139.99, mean 101.6433333333, median 119.95. All offers span 30–139.99. No optional add-ons are present. Prices exclude tax/delivery and are historical observations, not live quotes. One direct clavicle benchmark is insufficient for a direct-market distribution.

Semantic resolution: JSON regular_price for P04/P05 is displayed compare-at data, not established historical transaction pricing. The UI explicitly labels that column. P05 is promotional/final sale; G-Form stock is unresolved. “Verified” refers to the observed listed price, not stock or performance. Unconfirmed stock is not silently treated as available or definitely out of stock.

Explorer uses the representative distribution. Linear-interpolated quartiles at `(n-1)*q`: Q1 $82.47, median $119.95, Q3 $129.97. Below min/above max are outside the market; below Q1 is budget, above Q3 premium, inclusive central range middle. Equal prices match to cents. Local crowding counts all offers within ±$10 as a descriptive window. Slider extends from zero to the next $10 above 125% of the maximum. This permits testing outside the sample and does not establish a commercially viable price. $59 resets the research starting point independently of quartile presets.

## Updating

Replace JSON while retaining schema and source IDs; run tests and build. Review representative selection, currency/units, sale/availability notes and narrative if expanding the dataset. Automated validation rejects currency/unit mismatches and missing/duplicate representative records. Editorial narrative is specific to this Mission 1 snapshot and needs review when research changes.

## Publication

Repository: https://github.com/lukeryan-maker/Pricing-Intelligence-Dashboard

GitHub Actions workflow builds, validates and deploys `dist` using GitHub Pages. Repository Settings → Pages → Build and deployment → Source: GitHub Actions. Push to `main` or run workflow manually.

Expected URL: https://lukeryan-maker.github.io/Pricing-Intelligence-Dashboard/

## Features

Executive metrics; sortable representative chart with clickable product detail and hover labels; competitor search/filter/sort and persistent comparison selections; all-offer ranges and population-switchable price distribution; searchable/sortable offer table; live price slider, exact input and quartile presets; research opportunities, verification legend and linked official sources. Responsive layouts, semantic inputs, focus styles and reduced-motion support.

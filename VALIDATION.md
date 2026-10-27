# Mission 2 validation

Research source date: 2026-10-27. Cross-check: all five workbook worksheets plus full Word report paragraphs and tables.

- 3 unique competitors: 1 direct, 2 indirect.
- 5 pricing records, all standalone category-comparable shirts; no add-ons. Different coverage and sports prevent equivalent-performance comparisons.
- 3 representative products: P01, P03, P04.
- Representative minimum $44.99; maximum $139.99; average $101.64; median $119.95.
- Excluding stock-ambiguous P04: average and median $82.47. All-offer range $30–$139.99.
- No numerical conflicts across JSON, workbook and Word. Displayed comparison prices are not confirmed historical regular prices. The UI resolves this semantic issue explicitly. G-Form stock remains unresolved.

## Executed checks

Node tests pass for unique IDs, valid competitor relations, HTTPS source formatting, consistent USD/per-shirt units, one representative per competitor, counts, statistics, interpolated quantiles, classification boundaries, availability sensitivity and invalid currency rejection. Production build succeeds; application JavaScript passes syntax validation.

Browser tested using Codex in-app browser:

- Executive navigation, representative price sort and clickable product detail.
- Competitor search with no-match state, direct filter, positioning filter, descending price sort, expandable details and two-competitor comparison with selection retained through filtering.
- Product search, promotional filter, descending table sort and representative/all-offer distribution switching.
- All three explorer presets; exact price input; keyboard slider adjustment; reactive price output, ladder, cheaper/more-expensive/equal counts, classification and analysis.
- Desktop at 1440 × 1000 and mobile at 390 × 844; initial narrow view also inspected. Mobile explorer has no page-level horizontal overflow; comparison tables scroll within their panels.
- No browser error logs observed during interaction checks.

These checks do not reverify historical product prices against live sources or independently validate product claims. Link formatting is tested; current external source availability can change. No cost or demand analysis was performed.

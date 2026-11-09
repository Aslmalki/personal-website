# Educational star table

This folder is the public extract for the fun / educational page.

`build_stars_export.py` only reads tables and TESS light curves already on
disk. It does not query Gaia, TESS, OGLE, SIMBAD, or Bailer-Jones. Re-running
it rewrites `stars.csv` with blank `name`, `bp_rp`, and `teff_k` and drops
the lookup columns. Run `build_lookup.py` again after that.

`build_lookup.py` reads the source ids already in `stars.csv`, queries
SIMBAD and the Gaia DR3 archive, and caches the raw responses under
`educational_music/cache/`. It does not change `id`, `type`, `period_d`,
`amp_mag`, `g_mag`, `dist_pc`, `ra_deg`, `dec_deg`, or `lc_phase`.

## Sample

**139 stars**, all classified `RRab` in the downloaded Gaia DR3
`vari_rrlyrae` catalog. Every row is from the Gaia × TESS (Pair 1) sample
that passed the amplitude-quality cuts below and still has a local TESS
light-curve file with all 32 phase bins occupied.

| Quantity | Minimum | Maximum |
|---|---:|---:|
| Period (days) | 0.357155 | 0.943384 |
| Distance (pc, parallax inversion) | 445.3 | 6753.1 |
| Gaia G (mag) | 12.064 | 14.067 |
| TESS amplitude (mag) | 0.178 | 0.931 |

Selection uses 14 equal-width period bins from the
shortest to the longest period in the eligible pool, with up to
12 stars per bin. Inside a bin the stars are spread evenly in
the parallax distance, including the nearest and farthest star of that bin.
Bins that have fewer stars contribute every star, so the short- and
long-period ends of this sample are kept. The draw is deterministic (no
random sample).

Eligible pool before this thinning: 639 stars.
Parent amplitude-quality table: 671 stars.
Local TESS FITS missing: 32.
Dropped because a phase bin was empty or the curve was unusable: 0.
Recomputed amplitude disagreed with the stored amplitude by more than
0.01 mag: 0 (those stars were not used).

### Stars per period bin

| Period (days) | Eligible | Exported |
|---|---:|---:|
| 0.357–0.399 | 11 | 11 |
| 0.399–0.441 | 11 | 11 |
| 0.441–0.483 | 54 | 12 |
| 0.483–0.525 | 84 | 12 |
| 0.525–0.567 | 113 | 12 |
| 0.567–0.608 | 125 | 12 |
| 0.608–0.650 | 105 | 12 |
| 0.650–0.692 | 64 | 12 |
| 0.692–0.734 | 27 | 12 |
| 0.734–0.776 | 24 | 12 |
| 0.776–0.818 | 8 | 8 |
| 0.818–0.860 | 7 | 7 |
| 0.860–0.902 | 3 | 3 |
| 0.902–0.943 | 3 | 3 |

### What the offline extract does not contain

The research catalogs (`gaia_rrab.sql`) have only `source_id`, `ra`, `dec`,
`parallax`, `phot_g_mean_mag`, `best_classification`, `pf`, `r21_g`, and
`phi21_g`. Names, BP−RP, and temperature were not in those files. They are
filled afterwards by `build_lookup.py` and left blank when the remote
catalog has no value. Nothing is estimated, and no extinction correction is
applied.

- **name** — only a GCVS or VSX designation returned by SIMBAD for that
  Gaia DR3 id. RR Lyrae itself is not a row in `gaia_rrab_catalog.csv`.
  The halo query keeps only G = 12–16.5, so stars outside that window were
  never downloaded. TIC ids are not copied into `name`.
- **RRc, RRd, Cepheid, other** — both Gaia queries keep
  `best_classification = 'RRab'` only. Those other classes are not in the
  local catalogs.
- **OGLE / bulge stars** — Pair 2 (Gaia × OGLE, 5004 science-core stars) was
  not mixed into this file. OGLE periods run about 0.333–0.991 days, slightly
  wider than this TESS sample, but the bulge query deliberately dropped the
  parallax signal-to-noise cut (bulge parallaxes are often noise or negative;
  812 of those 5004 have parallax ≤ 0). Putting them here would either leave
  `dist_pc` blank or publish a distance the project does not treat as a
  distance. Their light curves are OGLE I, not TESS, so `amp_mag` and
  `lc_phase` would no longer be one band. OGLE ids such as
  `OGLE-BLG-RRLYR-41747` exist only for that pair.

## Columns

The first twelve columns keep their original order. Lookup columns are
appended after `lc_phase`. A blank lookup cell means the service returned
no value, or the SIMBAD match was ambiguous. No lookup cell is estimated.
The parallax inversion and the light-curve binning are the only other
derived numbers, and they are described below.

| Column | Unit | Source |
|---|---|---|
| `id` | — | Gaia DR3 `source_id`, written as text so it is not rounded. Do not parse it as a floating-point number. |
| `name` | — | GCVS or VSX designation from SIMBAD, catalog prefix removed. Blank if neither catalog lists one, or if the match is ambiguous. |
| `type` | — | Gaia DR3 `vari_rrlyrae.best_classification` from `data/raw/gaia/gaia_rrab_catalog.csv`. |
| `period_d` | days | Gaia DR3 `vari_rrlyrae.pf`, the period the TESS analysis uses. Rounded to 10 decimal places. |
| `amp_mag` | mag | TESS band. Stored `amplitude` in `data/processed/pair1_quality_filtered.csv`. See the definition below. Rounded to 6 decimal places. |
| `g_mag` | mag | Gaia DR3 `phot_g_mean_mag`. Rounded to 6 decimal places. |
| `bp_rp` | mag | Gaia DR3 `gaia_source.bp_rp`, the archive value of `phot_bp_mean_mag - phot_rp_mean_mag`. No extinction correction. |
| `teff_k` | K | Gaia DR3 `gaia_source.teff_gspphot` when present, otherwise blank. No correction applied. |
| `dist_pc` | pc | `1000 / parallax` with Gaia DR3 `parallax` in milliarcseconds, from `gaia_rrab_catalog.csv`. Not a Bailer-Jones distance. Rounded to 0.01 pc. |
| `ra_deg` | degrees | Gaia DR3 `ra` in `gaia_rrab_catalog.csv`. Rounded to 10 decimal places. |
| `dec_deg` | degrees | Gaia DR3 `dec` in `gaia_rrab_catalog.csv`. Rounded to 10 decimal places. |
| `lc_phase` | 1 | JSON array of 32 numbers in `[0, 1]`, from the local TESS light curve. See below. |
| `name_source` | — | `SIMBAD GCVS` or `SIMBAD VSX` when `name` is filled, otherwise blank. |
| `other_ids` | — | Up to three other SIMBAD identifiers of the same object, joined with `; `. |
| `teff_source` | — | `Gaia DR3 teff_gspphot` when `teff_k` is filled, otherwise blank. |

`amp_mag` is the project's TESS amplitude: the 95th percentile of the
light-curve magnitude minus the 5th percentile (`peak_to_peak_amplitude` in
`src/quality_filters.py`). It is not the raw maximum minus the minimum.
The magnitude itself is relative,

```text
mag = -2.5 log10(flux / median flux)
```

so the zero point is arbitrary and only differences (the amplitude, and the
shape in `lc_phase`) are meaningful. Every row is the TESS band. There is
no second band in this file.

`dist_pc` uses the raw catalog parallax. No parallax zero-point was applied,
because no zero-point is stored in the project files. `parallax_error` was
also not downloaded. The halo query required `parallax / parallax_error > 8`
before the catalog was saved, so a formal distance uncertainty is at least
about 12 percent, and can be larger. The number in the cell is the plain
inversion, not an uncertainty.

<!-- lookup:start -->
## Catalog lookups

Lookup date: Mon, 02 Nov 2026 20:08:15 GMT (SIMBAD), Mon, 02 Nov 2026 20:08:16 GMT (Gaia).
The raw responses are `educational_music/cache/simbad_ident.csv` and
`educational_music/cache/gaia_dr3.csv`.

Services used:

- SIMBAD TAP, synchronous ADQL, at `https://simbad.cfa.harvard.edu/simbad/sim-tap/sync`.
  The script tries Strasbourg (`https://simbad.cds.unistra.fr/simbad/sim-tap/sync`)
  first and uses the CfA mirror if that host does not connect. The query is
  an identifier match on `ident.id = 'Gaia DR3 <source_id>'`, then all
  identifiers of that same object.
- ESA Gaia DR3 archive TAP at `https://gea.esac.esa.int/tap-server/tap/sync`, table `gaiadr3.gaia_source`.

SIMBAD's `cat` table has no catalog named `GCVS`. GCVS designations are the
identifiers in catalog `V*` (description: "Variable stars"), stored as
`V* AQ Lyr` and written here as `AQ Lyr`. VSX designations are identifiers
in catalog `VSX` (description: "Variable Star IndeX"). `name_source` is
`SIMBAD GCVS` or `SIMBAD VSX`. Suspected-variable identifiers (`SV*`, `NSV`,
`CSV`) are not used as `name`. If both catalogs are present and the
designation text differs, or if either catalog lists more than one
identifier, `name` is left blank. A Gaia id that matches more than one
SIMBAD object leaves `name`, `name_source`, and `other_ids` blank.

`other_ids` holds up to three remaining identifiers of that same object.
ASAS-SN (`ASASSN-V` / `ASASSN` / `ASAS-SN`), then `TYC`, then `2MASS`, are
taken first when they exist. Further slots are filled in alphabetical order.
Gaia DR and EDR identifiers are omitted because `id` is already the Gaia DR3
source id. The strings are copied as SIMBAD stores them, separated by `; `.

`bp_rp` is the archive column `bp_rp`. Gaia defines it as
`phot_bp_mean_mag - phot_rp_mean_mag`. It is copied only when both band
magnitudes are present and the archive color agrees with that difference to
0.001 mag. No extinction correction is applied. `teff_k` is `teff_gspphot`
with no edit. When that column is null, `teff_k` and `teff_source` are blank.

Counts for this file:

| | Stars |
|---|---:|
| With a GCVS or VSX name | 84 |
| With BP−RP color | 139 |
| With neither a name nor a color | 0 |
| With `teff_gspphot` | 111 |
| With neither a name nor a temperature | 9 |

Ambiguous or multiple SIMBAD matches:

None. Every source id matched one SIMBAD object. No object had more than one `V*` identifier or more than one `VSX` identifier, and none had a GCVS designation that disagreed with a VSX designation.
<!-- lookup:end -->


## Cuts

A star is eligible only if all of the following are true.

1. It is in the Gaia halo RRab catalog (`src/queries/gaia_rrab.sql`):
   `best_classification = RRab`, more than 40 clean Gaia G epochs,
   `|b| > 15°`, `parallax / parallax_error > 8`,
   `phot_g_mean_flux / phot_g_mean_flux_error > 50`,
   `12 ≤ G ≤ 16.5`, and `r21_g > 0.3`.
2. It has a TIC match and a TESS light-curve product.
3. It passed the Pair 1 isolation cut: no Gaia DR3 neighbour within 3 arcsec
   with `G_neighbour < G_target + 2`.
4. It passed the TESS light-curve cuts: at least 50 points and maximum phase
   gap ≤ 0.1.
5. It passed the TESS Fourier fit-quality cuts used by the project:
   `σ(φ31) ≤ 0.3` rad and `σ(A1) / A1 ≤ 0.20` on the order-6 sine fit.
6. It is not a Bailey-diagram outlier. The project flags a star as a blending
   candidate when its TESS amplitude sits more than 2.5 robust standard
   deviations off the period–amplitude locus (`use_amplitude_T` in
   `pair1_quality_filtered.csv`). Flagged stars stay in the research science
   core (702 stars) but are left out of this public table.
7. The local file `data/raw/tess/lightcurves/tic{tic}_gaia{source_id}.fits`
   exists, the recomputed 95–5 amplitude agrees with the stored amplitude to
   0.01 mag, and all 32 phase bins contain at least one point. Empty bins
   were not interpolated.

## Light curve in `lc_phase`

Same phase rule as `phase_fold` in `src/quality_filters.py`:

```text
phase = ((TIME - min TIME) / period_d) mod 1
```

`TIME` is the TESS `LIGHTCURVE` column in BTJD. Points with non-finite time
or flux, or with flux ≤ 0, are dropped. The project loader does not apply a
TESS `QUALITY` cut, and neither does this export.

Each bin is 1/32 wide in phase. The value is the median relative magnitude
in the bin, then scaled across the 32 medians:

```text
lc = (faintest_median - median) / (faintest_median - brightest_median)
```

So **1 is the brightest bin and 0 is the faintest bin**. Values are written
to 4 decimal places. Phase 0 is the earliest timestamp in that star's file,
not maximum light and not a shared epoch. Curves are not aligned with each
other.

Cadences the project kept are kept here, including whatever sampling the
TESS file has. No points were added.

## Uncertainties and limits

- Distance is a raw parallax inversion. It is not a Bailer-Jones geometric
  or photogeometric distance, and no extinction correction was applied.
  A few inversions will look odd for an RR Lyrae luminosity; they were kept
  because the catalog value is real and this export does not add a luminosity
  cut.
- The amplitude is a robust range in a relative TESS magnitude, not a
  standard-filter peak-to-peak amplitude and not a Gaia G amplitude.
- Gaia G in `g_mag` is the catalog mean magnitude from the offline extract.
  It is not the mean of the TESS curve, and it is not `phot_bp_mean_mag` or
  `phot_rp_mean_mag`.
- `bp_rp` is the published Gaia color. Interstellar extinction was not
  removed.
- `teff_k` is the published GSP-Phot temperature. Pulsating stars can make
  that fit a poor one; no value was rejected or edited for that reason.
- Rounding of the offline columns is only the decimals listed above. The
  light-curve
  endpoints are put back to 0 and 1 after rounding so the brightest and
  faintest bins stay the endpoints.

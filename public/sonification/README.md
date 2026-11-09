# Stellar Drop

A sky of 139 real RR Lyrae stars. They are too faint to see by eye and thousands of
light-years away, so all we have is their light. Tap a star to learn what that light says:
how far it is, how hot it is, how bright it really is and how it pulses. Then hear its pulse
as a note.

- **Star cards** answer four questions in plain language, with a real chart of true brightness
  against colour for every star in the sky, the star's measured light curve replayed live, and
  how its pulse becomes a note.
- **Hear your name in star language**: type a name (English or Arabic). Every letter is paired
  with one of the stars. Save the result as a story image.
- A soft background hum plays under the sky. It never changes a star's note.

## Run it

It is a static site: no build step.

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Opening `index.html` by double-click also works, using the data copy embedded in the page.
Audio needs a tap first (browser rule).

## Where it lives

This page is published inside the author's personal website repository, in the folder `sonification/`:
https://aslmalki.github.io/personal-website/sonification/

To update it, replace the files in that folder and commit. GitHub Pages rebuilds in a minute or two.

## Updating the star data

Replace `data/stars.csv`. The page reads these columns by name:
`id, name, type, period_d, amp_mag, g_mag, bp_rp, teff_k, dist_pc, ra_deg, dec_deg, lc_phase`
and, if present, `name_source, other_ids, teff_source`. Blank values are fine.
The copy embedded in `index.html` is only a fallback.
Column definitions, cuts and limits are in `data/stars_README.md`.

## What is real and what is a game

- Real: position, distance, colour and brightness from Gaia and TESS, the pulse period and
  the light curve.
- Real physics used for sound: a star's note is its pulse rate, doubled until it lands between
  330 and 660 Hz, and played at that exact frequency (the distance in cents from the nearest
  piano note is shown). Its sound is built from the harmonics of its measured light curve.
  The musical intervals between stars equal the ratios of their pulse rates. Note names such
  as F-sharp depend on the A = 440 Hz convention.
- Rough values: true brightness is computed from Gaia G magnitude and distance with no dust
  correction. Gaia's temperature estimates (`teff_gspphot`) are too hot for many of these
  stars, so the page shows the colour and says so.
- Game rules: pairing letters with stars, using only stars whose notes fall on five notes for
  the name feature, and echo length following distance by rank.

## How this was made

Idea, data, creative direction and review: Abdullah Almalki, Space Informatics Research Lab, KAU.
The code and the plain-language explanations were drafted with an AI assistant (Claude, by Anthropic) and revised on his feedback.

## Feedback and collaboration

Suggestions, corrections or ideas for future creative collaborations are very welcome: asalmalki@kau.edu.sa

## Link preview

`index.html` contains Open Graph tags so that shared links show a title and the image `og-image.jpg`.
They already point to the page URL above. If the page moves, update the three URLs near the top of `index.html`.

## Visit counter

The page uses [GoatCounter](https://www.goatcounter.com/) (no cookies) to count visits. Stats are at https://stellardrop.goatcounter.com. To remove it, delete the `data-goatcounter` script tag at the end of `index.html` and the Privacy lines in the About sheet.

## Credits

- This work has made use of data from the European Space Agency (ESA) mission Gaia (https://www.cosmos.esa.int/gaia), processed by the Gaia Data Processing and Analysis Consortium (DPAC).
- Light curves are from TESS, obtained from the Mikulski Archive for Space Telescopes (MAST) at STScI.
- Names: SIMBAD and the General Catalogue of Variable Stars.
- Sound: [Tone.js](https://tonejs.github.io/). Fonts: Chakra Petch and Barlow (Google Fonts).

Add a licence of your choice (for example MIT for the code) before making the repository public.

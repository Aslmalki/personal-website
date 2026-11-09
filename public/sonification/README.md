# Stellar Drop (Sonification)

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

## Limits
- Distances are raw parallax inversions with errors of at least about 12 percent, and no dust correction. A few look odd for an RR Lyrae star and were kept because the catalogue value is real.
- The amplitude is in the TESS band, not the Gaia G band.
- Gaia's GSP-Phot temperatures are unreliable for pulsating stars and are too hot for many of these. The page shows the observed colour and says so.

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

Idea, data, creative direction and review by: Abdullah Almalki, Space Informatics Research Lab, FCIT, KAU.
The code been enhanced and the plain-language explanations were drafted with an AI assistant (Claude, by Anthropic).

## Feedback and collaboration

Suggestions, corrections or ideas for future creative collaborations are very welcome: asalmalki@kau.edu.sa

## Visit counter

The page uses [GoatCounter](https://www.goatcounter.com/) (no cookies) to count visits.

## Credits

- This work has made use of data from the European Space Agency (ESA) mission Gaia (https://www.cosmos.esa.int/gaia), processed by the Gaia Data Processing and Analysis Consortium (DPAC).
- Light curves are from TESS, obtained from the Mikulski Archive for Space Telescopes (MAST) at STScI.
- Names: SIMBAD and the General Catalogue of Variable Stars.
- Sound: [Tone.js](https://tonejs.github.io/). Fonts: Chakra Petch and Barlow (Google Fonts).

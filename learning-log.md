### Lighthouse Mobile Scores

Performance: 86
Accessibility: 100
Best Practices: 96
SEO: 92

## Day 1 
### Predict first
You find the rule that lets your name break inside a word, and you switch it off. Is the bug fixed? Write your answer in the log, then open this.

I think switching off the CSS rule may fix the issue.However, I need to test it in DevTools to confirm.

Show the Answer
Switching off the word-breaking rule does not fix the bug. The word is still wider than the available space, causing horizontal overflow. The real problem is the element's size, which needs to be fixed.

### Lab
Font-size: 51.09px
Content width: 353px
Left padding: 0px
Right padding: 0px

Kumarawansha - overflow-wrap: break-word

Result: Untick - overflow-wrap: break-word

Can you now scroll the page sideways? No.
Observation: The page did not scroll horizontally after disabling - overflow-wrap: break-word.

Starting width: 320px

Ending width: 480px

First width where the name fits on two lines: 430px

Live Font Size Test
Viewport width: 320px
Original font size: 13vw
Tested font size: 12vw
Result: The name fits on two lines at 320px.

### Bug Report: Surname Wrapping Issue

Element: The heading element (h1) displaying my name and surname.

Measurements:
Viewport tested: 320px–480px
Content width at 393px viewport: 353px
Left padding: 0px
Right padding: 0px
Original font size: 13vw
Tested font size: 12vw
At 320px viewport width, the name fits on two lines with 12vw.

Cause: The responsive font size of 13vw makes the name too large for narrow mobile screens, causing incorrect line wrapping.

Widths affected: The issue occurs on narrow viewports below 430px, where the name does not fit correctly on two lines. At 430px, the name first fits on two lines.

Status: Tested the font size live in Chrome DevTools only. No changes have been saved to the source code.

What is the difference between Padding and Margin?
Padding: The space between the content and the element’s border.
Margin: The space outside the element’s border, separating it from other elements.

Padding is inside the border and shows the element's background. Margin is outside the border and is always transparent. Vertical margins between blocks can collapse into one; padding never does.

A declaration is struck through in the Styles pane. What happened?
A declaration is struck through in the Styles pane because another CSS rule with higher priority overrides it, or the declaration is otherwise not being applied.

Another declaration for the same property won: it had a more specific selector, came later in the stylesheet, or used !important. A warning icon instead means the browser didn't understand the value.

With border-box sizing, width 300px and padding 20px, how wide is the content?
260px 
assuming 20px left padding, 20px right padding, and no border.

260px. The 300 includes 20 of padding on each side.

## Day 2
### Predict first

An iPhone 15 screen is 1179 pixels across. Your laptop window is 1280 pixels across. Why doesn't the phone get the laptop layout?

An iPhone 15 has 1179 physical pixels across its screen, but its CSS layout width is usually about 393 CSS pixels. Therefore, the website has much less layout space on the phone than on a 1280 CSS-pixel laptop window.

Show the answer
CSS (Cascading Style Sheets) does not count physical pixels. The iPhone packs three physical pixels into each CSS pixel, so the browser lays the page out 393 CSS pixels wide. The ratio is called the device pixel ratio. The viewport meta tag is what tells the phone to use that real width; without it, mobile browsers pretend to be about 980 pixels wide and shrink everything.

| Width | Section | What is wrong? | Guess at the cause |
|---:|---|---|---|
| 320px |  Name | My name wraps onto a third line, and the activities section does not display properly. | The heading font may be too large for the available width. The activities layout may need better responsive styling. |
| 360px | Name | My name wraps onto a third line. | The heading font size or text width may be causing excessive wrapping. |
| 393px | Name | My name wraps onto a third line. | The heading font size may be too large for the available content width. |
| 430px | Whole page | No visible layout problems. Everything looks good. | The current layout fits this width well. |
| 768px | Whole page | No visible layout problems. Everything looks good. | The current layout fits this width well. |
| 1024px | Name | My name wraps across too many lines. | The heading width, font size, or responsive layout rules may be incorrect at this width. |
| 1440px | Name and Contact | The surname “Kumarawansha” wraps onto a third line, and the email address wraps onto a second line. | The heading container may be too narrow or the font too large. The contact section may need more width or better text-wrapping rules. |

### Media Query Audit

max-width media queries in index.css: 0
min-width media queries in index.css: 0
Tailwind sm: search results: 113 in 9 files
Tailwind md: search results: 17 in 6 files
Tailwind lg: search results: 40 in 10 files
Observation: The project uses Tailwind responsive prefixes in multiple files. The search counts may include non-responsive matches, so they are not confirmed counts of unique responsive classes.

No large fixed width or height values found in index.css. The only fixed width is 8px for the custom scrollbar, which is intentionally small and not a layout constraint.

| Breakpoint | What changes in the layout? | Did the content ask for it? |
|---|---|---|
| sm (640px) | Small-screen layout changes to better use the available space. | Yes |
| md (768px) | Tablet-sized layout adjustments are applied. | Yes |
| lg (1024px) | Larger desktop layout adjustments are applied. | Yes |

| Rank | Problem | Viewports affected | Impact |
|---|---|---|---|
| 1 | Surname wraps badly | 320px, 360px, 393px, 1024px, 1440px | High |
| 2 | Activities section does not display properly | 320px | Medium |
| 3 | Email wraps onto a second line | 1440px | Low |

Write a media query that applies from 40rem upward.
@media (min-width: 40rem) {}

What does a phone do if the viewport meta tag is missing?
If the viewport meta tag is missing, a phone usually uses a wider virtual viewport (often around 980px) instead of the phone’s actual width. The page appears zoomed out, so text and elements look smaller and mobile media queries may not work as expected.

In mobile-first CSS, where do the phone styles live?
In mobile-first CSS, phone styles live in the base CSS rules, outside media queries.

## Day 3
### Predict first
A visitor with low vision sets their browser's default text size to 24px. Three headings are sized 56px, 3.5rem and 14vw. Which of them grow?

56px — Does not grow because pixels specify a fixed size.
3.5rem — Can grow if the root font size increases.
14vw — Does not grow because of the text-size setting alone; it depends on the viewport width.

Only 3.5rem, which becomes 84px. A px value never changes, and vw follows the window's width, not the reader's settings. This is why fluid type mixes rem with vw instead of using vw alone.

### clamp() gives a size a floor, a slope and a ceiling

clamp(minimum, preferred, maximum)` creates a responsive size.

Floor: 2rem - the minimum font size.
Slope: 1rem + 6vw - the preferred size grows with the viewport width.
Ceiling: 5rem - the maximum font size.

Key lesson: clamp() helps create fluid typography that adapts to different screen sizes without becoming too small or too large.

after paste this code

const h = document.querySelector('h1');
const s = document.createElement('span');
s.textContent = 'Kumarawansha';
s.style.cssText = 'white-space:nowrap;position:absolute;visibility:hidden';
h.append(s);
console.log(s.getBoundingClientRect().width / parseFloat(getComputedStyle(h).fontSize));
s.remove();

Word width = 6.9678955078125em

### Measure my word

The measured width of Kumarawansha is 6.9678955078125em.

At a viewport width of 320px, with 0px left padding and 0px right padding:


Largest font size = (320 - left padding - right padding) / word width in em

= (320 - 0 - 0) / 6.9678955078125

= 45.93px

The largest font size that fits within 320px is approximately 45.93px, assuming the full 320px is available for the word.

### Responsive Testing Results

I tested my portfolio at all seven viewport widths after applying the CSS clamp() function to the main heading.

320px: The name displays correctly, but the Activities section has minor issues.
360px: The portfolio displays correctly.
393px: The font size changes smoothly with the viewport width, with no visible issues.
430px: The portfolio displays correctly.
768px: The portfolio displays correctly.
1024px: The surname “Kumarawansha” wraps onto multiple lines. The Activities and Contact sections also have layout issues.
1440px: The email address in the Contact section wraps onto two lines.
The main heading works well at most tested widths. Further investigation is needed at 1024px and 1440px to identify and fix the remaining layout issues.

### After changing settings
With Chrome's font size set to Very large, I rechecked the portfolio at 320px and 393px. The surname “Kumarawansha” wrapped onto two lines, and there were also some issues in the Activities and Contact sections, including the email wrapping onto two lines.

The trade-off I chose is to allow the text to wrap when the browser font size is very large, because maintaining readable text is more important than forcing everything to stay on one line.

### After changing hero name

Screen-size testing results

320px: Name displays correctly, but the Activities and Contact sections have some issues.
360px: Portfolio displays correctly.
393px: Portfolio displays correctly.
430px: Portfolio displays correctly.
768px: Portfolio displays correctly.
1024px: “Kumarawansha” wraps onto multiple lines, and “Full-stack Developer” does not display correctly. The Activities and Contact sections also have some issues.
1440px: The email address in the Contact section wraps onto two lines.

Changes made

Replaced the hero name's responsive font-size classes with a clamp() value.
Changed the tagline's base font size to text-base to keep body text at a minimum of 1rem.
Replaced hardcoded pixel font sizes in the availability badge, skill tags, and image label with Tailwind font-size utilities.

### Ask — Check my maths, then I check yours

Heading: Kumarawansha
Root font size: 16px
Word width: 6.96796875em
Side padding: 0px on each side
Fluid font size: clamp(2.5rem, 1rem + 6vw, 3.75rem)

Calculations

Minimum font size: 2.5rem × 16px = 40px
Preferred font size: 16px + (6 × viewport width / 100)
Maximum font size: 3.75rem × 16px = 60px
Word width: 6.96796875 × computed font size

| Viewport | Computed font size | Word width | Available space | Viewport-based overflow |
|---:|---:|---:|---:|---|
| 320px | 40px | 278.72px | 320px | No |
| 393px | 40px | 278.72px | 393px | No |
| 768px | 60px | 418.08px | 768px | No |
| 1440px | 60px | 418.08px | 1440px | No |

DevTools verification
The current computed font size observed in DevTools was 60px, and the measured word width was 418.078125px, equivalent to approximately 6.968em.

Observation
The word fits within the viewport width in these calculations. However, the actual heading may still wrap if its parent container is narrower than the word. The calculated values should be checked against the browser at 320px and 768px.

What is clamp(2rem, 1rem + 6vw, 5rem) on a 500px-wide screen?

Assumption: Root font size = 16px.
Minimum: 2rem × 16px = 32px
Preferred: 1rem + 6vw = 16px + (0.06 × 500px) = 46px
Maximum: 5rem × 16px = 80px
Apply clamp(): The preferred value, 46px, is between the minimum (32px) and maximum (80px).

Answer: 46px

The clamp() function keeps the font size between a minimum and maximum while allowing it to scale with the viewport width.

Why is line-height: 1.05 better than line-height: 60px?
line-height: 1.05 is better because it adjusts automatically when the font size changes, keeping spacing consistent on different screen sizes. line-height: 60px always stays fixed at 60px.

Which unit keeps a paragraph's lines a readable length?
The ch unit. It measures width based on the “0” character and is useful for limiting paragraph line length, for example max-width: 65ch;

## Day 4
### Predict first
Three buttons sit in a flex row with flex-wrap: wrap. The screen narrows until only two fit. Where does the third go, and how wide is it?

When three buttons are in a flex row with flex-wrap: wrap and the screen becomes narrower, the third button moves to the next row when there is not enough space.

show the answer
Onto a new row, at its own content width, aligned to the start. That is the lonely "View CV" in the screenshot. Flexbox did what it was told. Nobody had decided what should happen when three don't fit.

Flexbox
Flexbox is used for one-dimensional layouts (a row or a column).
Items take their size from their content and can share available space.
Use it for buttons, chips, and navigation links.

Grid
CSS Grid is used for two-dimensional layouts (rows and columns).
We define rows and columns, and items are placed into the grid.
Use it for card galleries and page layouts.

Flexbox is best for arranging items in one direction, while Grid is best for arranging items in rows and columns together.

### Lab 04
### Flexbox Froggy — Levels 1–24
Completed Flexbox Froggy levels 1–24.
Practiced aligning items horizontally and vertically using CSS Flexbox.
Learned how justify-content and align-items control item alignment.
Practiced using flex-direction, flex-wrap, and align-content to arrange items.

Improved my understanding of responsive layouts by solving CSS challenges.
justify-content
flex-start: Items align to the left side of the container.
flex-end: Items align to the right side of the container.
center: Items align at the center of the container.
space-between: Items display with equal spacing between them.
space-around: Items display with equal spacing around them.

align-items
flex-start: Items align to the top of the container.
flex-end: Items align to the bottom of the container.
center: Items align at the vertical center of the container.
baseline: Items display at the baseline of the container.
stretch: Items are stretched to fit the container.

flex-direction
row: Items are placed the same as the text direction.
row-reverse: Items are placed opposite to the text direction.
column: Items are placed top to bottom.
column-reverse: Items are placed bottom to top.

flex-wrap
nowrap: Every item is fit to a single line.
wrap: Items wrap around to additional lines.
wrap-reverse: Items wrap around to additional lines in reverse.

align-content
flex-start: Lines are packed at the top of the container.
flex-end: Lines are packed at the bottom of the container.
center: Lines are packed at the vertical center of the container.
space-between: Lines display with equal spacing between them.
space-around: Lines display with equal spacing around them.
stretch: Lines are stretched to fit the container.

### Badge and underline overlap
I inspected the badge and underline using Chrome DevTools.
Cause of overlap: position: absolute

### Auto-fit Project Grid
Replaced the projects list layout with a responsive auto-fit grid.
Used grid, auto-fit, and minmax(min(100%, 18rem), 1fr) to arrange project cards automatically.
Used gap-4 to keep consistent spacing between cards.
Removed responsive column-count media queries: 0, because none were present in the original outer projects list.
Kept the prefers-reduced-motion media query because it supports accessibility.
Tested at 320px, 393px, 768px, 1024px and 1440px to check the layout at different screen sizes.But 1024px and 1440px UI is not user friendly.

Auto-fit adjusts the number of columns based on the available space, reducing the need for breakpoint-specific column rules.

### Grid Garden — Levels 1–28
Completed Grid Garden levels 1–28.
Practiced CSS Grid line positioning and placing items in the correct rows and columns.
Learned how grid properties control the position and size of items.
Practiced solving layout challenges by writing CSS.

## Day 05
### Predict first 
A hero has height: 100vh. On iPhone Safari, the buttons at the bottom are hidden when the page first loads. Why?

100vh may include the area behind Safari's browser bars on an iPhone. When Safari's address bar and bottom toolbar are visible, the actual visible screen height can be smaller, so the buttons at the bottom may be hidden.

Show the answer
On phones, 100vh is measured with the browser's toolbars tucked away, which is the tallest the viewport ever gets. On first load the toolbars are showing, so the bottom strip of the hero sits underneath them.

svh - small viewport height.
dvh - dynamic viewport height.
100dvh - changes as the browser toolbars show or hide.
min-height - 100svh gives a hero a stable minimum height based on the small viewport.

### lab 05
Before Fix 
Home: 40px height, 207px width
About: 40px height, 207px width
Skills: 40px height, 207px width
Projects: 40px height, 207px width
Education: 40px height, 207px widt
Activities: 40px height, 207px width
Contact: 40px height, 207px width
Menu button: 1.5px height, 24px width (need to recheck the outer button)
Email: 25px height, 353px width
LinkedIn: 20px height, 85.86px width
GitHub: 20px height, 69.06px width

Mobile tap targets need enough space to be easy to tap.
Tailwind's min-h-11 and min-w-11 utilities set minimum dimensions of 44px.
inline-flex items-center helps make links easier to tap while vertically aligning their content.
I should inspect the complete clickable element in DevTools rather than measuring only its text or icon.


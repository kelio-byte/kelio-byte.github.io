# Junkun Chen's Personal Homepage

This repository contains my personal academic homepage. It is a static website built with HTML, CSS, and JavaScript and can be deployed directly with GitHub Pages.

## Project Structure

```text
.
├── index.html                 # Page content and section structure
├── styles.css                 # Layout, colors, typography, and responsive styles
├── script.js                  # Navigation highlighting and dynamic year
├── assets/
│   └── profile-photo.jpg      # Profile photo
└── README.md                  # Maintenance guide
```

## Local Preview

No dependencies or build commands are required. Open `index.html` directly in a browser.

For a more accurate local preview, start a simple HTTP server in the project directory:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Common Updates

### Personal Information

Open `index.html` and edit the content inside `<aside class="sidebar">`:

- Name and Chinese name
- Student role
- School and university
- Email and social links
- Short note below the social links

Replace `assets/profile-photo.jpg` to update the profile photo. Keeping the same filename means no HTML change is needed.

### Social Links

Search for `contact-list` in `index.html`. Replace each `href` with the corresponding personal URL:

```html
<a href="YOUR_PROFILE_URL" target="_blank" rel="noreferrer">
```

Email links use this format:

```html
<a href="mailto:YOUR_EMAIL_ADDRESS">
```

Google Scholar and RedNote currently point to platform homepages because personal links have not been added yet.

WeChat is a copy button rather than a link. To change the WeChat ID, find this attribute in `index.html`:

```html
data-copy="elio2308"
```

Replace `elio2308` with the new ID. The copy behavior and feedback message are implemented near the bottom of `script.js`.

### About Me and Research Interests

Search for:

```html
<section id="about">
```

Edit the introductory paragraphs directly. The Research Interests block is inside this section and begins with:

```html
<div class="subsection" id="research-interests">
```

### Education

Search for `<section id="education">`. Update the university, degree, department, and dates inside `.timeline-item`.

To add another education entry, duplicate the complete `<article class="timeline-item">...</article>` block.

### Publications and Awards

The Publications and Honors & Awards sections currently contain placeholder cards.

When real entries are available, replace the `.empty-state` block with normal HTML such as:

```html
<article>
  <h3>Publication or Award Title</h3>
  <p>Authors, venue, year, or a short description.</p>
</article>
```

### Enabling News

The News navigation link and News section are kept in `index.html` as HTML comments.

1. Find `Enable this link together with the commented News section below`.
2. Remove the surrounding `<!--` and `-->` markers from the News navigation link.
3. Find `NEWS SECTION`.
4. Remove the opening and closing comment markers around the complete News section.
5. Replace the placeholder dates and descriptions with real updates.

The News section is already positioned before Publications.

### Personal Hobbies

Search for `<section id="personal-hobbies">` and edit the paragraph. The current hobbies are working out, singing, hiking, and traveling.

### Navigation

Navigation links are located inside `<div class="nav-links">`.

When adding a new section:

1. Give the section a unique ID, such as `<section id="projects">`.
2. Add a matching link, such as `<a href="#projects">Projects</a>`.
3. Keep the link and section ID exactly the same.

The JavaScript automatically highlights visible top-level sections. Research Interests is also explicitly observed because it is nested inside About Me.

## Styling

The main color and layout settings are CSS variables at the top of `styles.css`:

```css
:root {
  --text: #343434;
  --muted: #68717a;
  --accent: #2675b8;
  --line: #e7e9ec;
  --max-width: 1120px;
  --sidebar-width: 270px;
}
```

- Change `--accent` to update the primary link color.
- Change `--max-width` to adjust the overall page width.
- Change `--sidebar-width` to adjust the desktop profile column.
- Responsive layouts are defined near the bottom of `styles.css`.

## Footer and Metadata

Update these parts in `index.html` when necessary:

- `<title>`: browser tab title
- `<meta name="description">`: search engine description
- `Last updated: ...`: footer update date

The copyright year is updated automatically by `script.js`.

## Deployment

GitHub Pages serves this repository as a static website. After reviewing changes:

```powershell
git add index.html styles.css script.js README.md assets
git commit -m "Update personal homepage"
git push
```

The published page may take a few minutes to refresh after pushing.

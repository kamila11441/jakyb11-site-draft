# Photographer Portfolio — editable starter

A responsive, single-page photographer portfolio built with plain HTML, CSS, and JavaScript. No framework, build step, or package installation required. It is designed to be easy to edit and publish with GitHub Pages.

## Preview locally

1. Download or clone this repository.
2. Open `index.html` in a browser.
3. For a smoother development workflow, open the folder in VS Code and use the **Live Server** extension (optional).

## Personalise it

### 1. Update the identity and text
Open `index.html` and search for `Alex Morgan`, `Warsaw, Poland`, and `hello@example.com`. Replace them with the photographer's name, location, email, and social links.

### 2. Replace photographs
The sample photos are remote Unsplash images. Replace each image's `src` with your own image URL or a path to a local image, for example:

```html
<img src="images/my-portrait.jpg" alt="Portrait of ...">
```

Create an `images` folder and add your own licensed photographs there. Use compressed WebP or JPEG images for faster loading, and write descriptive alt text.

### 3. Edit the gallery
Each gallery project is an `<article class="project" ...>` in `index.html`. Change its title, caption, image, year, and `data-category`. Available categories are `portrait`, `travel`, and `lifestyle`; the filter buttons use those values. Duplicate a project article to add more work, and update the “All work” count if desired.

### 4. Change the design
Edit colors, fonts, spacing, and layout in `styles.css`. The main palette is defined at the top under `:root`. Mobile styles are near the bottom in the `@media` sections.

### 5. Contact form / backend
This draft uses a `mailto:` link rather than a backend form, so it works on static hosting. Change `hello@example.com` to the real contact email. If you want a form that collects submissions without opening the visitor's email app, connect a form service or add a backend later. Never put private API keys in frontend files.

## Publish on GitHub Pages

1. Create a new repository on GitHub, e.g. `photographer-portfolio`.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` (or push this folder with Git).
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then save.
6. Wait for the deployment to finish; GitHub will show the public site URL in the Pages section.

## Project structure

```text
photographer-portfolio/
├── index.html   # page content and portfolio items
├── styles.css   # layout, typography, colors, responsive styles
├── script.js    # filters, modal previews, mobile menu
└── README.md    # setup and publishing instructions
```

## Notes

- Sample identity, email, social links, and images are placeholders. Replace them before publishing.
- Google Fonts and the sample Unsplash images require an internet connection.
- The project preview modal, category filters, mobile navigation, and dynamic footer year work without dependencies.

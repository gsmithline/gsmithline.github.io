# gsmithline.github.io

Personal academic website for Gabe Smithline — Ph.D. Candidate in Computer Science
and Engineering at the University of Michigan, Strategic Reasoning Group.

Live at **https://gsmithline.github.io**

## Structure

| Path | Purpose |
| --- | --- |
| `index.html` | About, news, affiliations |
| `research.html` | Selected research and projects |
| `teaching.html` | Teaching experience |
| `blog.html` | Blog index |
| `blog/` | Individual blog posts |
| `athletics.html` | Athletics |
| `assets/css/` | `main.css` (layout and theme), `light.css` (colour variables) |
| `assets/js/` | `main.js` (nav, theme), `languageManager.js` (translation strings) |
| `assets/documents/` | PDFs and images served by the pages |
| `assets/blog_posts/` | LaTeX sources behind the blog posts |

## Deployment

GitHub Pages serves the **`gh-pages`** branch from the repository root — pushing to
`gh-pages` publishes the site. There is no build step: the pages are static HTML.

## Local preview

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Use a server rather than opening the files
directly, since `assets/css/light.css` is injected with a root-absolute path.

## Credit

Originally adapted from the [Academic Portfolio](https://github.com/NicolasMeseguer/nicolasmeseguer.github.io)
template by Nicolás Meseguer.

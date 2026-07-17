# SurfReact group website

Website of the SurfReact theoretical chemistry group, Department of Physical Chemistry, Palacký University Olomouc. Built with [Jekyll](https://jekyllrb.com/) — GitHub Pages builds it automatically, no CI setup required.

## Deploy on GitHub Pages

1. Create a GitHub repository and push this code:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin git@github.com:<user-or-org>/<repo>.git
   git push -u origin main
   ```

2. On GitHub: **Settings → Pages → Build and deployment**, set **Source** to *Deploy from a branch*, branch `main`, folder `/ (root)`. The site appears at `https://<user-or-org>.github.io/<repo>/` after a minute or two.

3. **Important:** if the site lives at `https://<user>.github.io/<repo>/` (a *project* page), open `_config.yml` and set:

   ```yaml
   baseurl: "/<repo>"
   url: "https://<user-or-org>.github.io"
   ```

   If the repository is named `<user-or-org>.github.io` or you use a custom domain, leave `baseurl: ""`.

## Local preview (optional)

Requires Ruby ≥ 3.0:

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

## Editing content

| What | Where |
|---|---|
| Add a news update | Drop a Markdown file into `_posts/` named `YYYY-MM-DD-slug.md` (see existing posts for the front-matter format). The landing page automatically shows the newest three; the archive shows all, newest first. |
| Group members | `pages/members.html` |
| About | `pages/about.md` |
| Publications | `pages/publications.html` |
| Open positions | `pages/positions.md` |
| Research focus | `pages/research.md` |
| Featured publications carousel (front page) | `_data/featured_publications.yml` + TOC images in `assets/img/toc/` |
| Navigation menu | `_layouts/default.html` (the `items` list) |
| Footer address / e-mail | `_layouts/default.html` |
| Colors, fonts, layout | `assets/css/style.css` (design tokens at the top) |
| Hero image (landing page, right of the title) | replace `assets/img/hero.svg` (or edit the `src` in `index.html`) |
| Logo | `assets/img/logo.svg` |

All people, publications, and posts currently in the repo are **plausible placeholders** — replace them with your real content.

## Structure

```
├── _config.yml          # site settings (title, baseurl, permalinks)
├── _layouts/            # page templates (default, page, post)
├── _includes/           # reusable snippets (publication carousel)
├── _data/               # featured_publications.yml — front-page carousel entries
├── _posts/              # news updates (one Markdown file per update)
├── pages/               # members, about, publications, positions, research, archive
├── assets/
│   ├── css/style.css    # all styling
│   └── img/             # logo.svg + toc/ (graphical abstracts for the carousel)
└── index.html           # landing page (hero + latest three updates)
```

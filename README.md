# [ab2d.cms.gov](https://ab2d.cms.gov/)

This Ruby program builds the [ab2d.cms.gov](https://ab2d.cms.gov/) website via [Jekyll](https://jekyllrb.com/) and [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/).

## Requirements

- [Ruby](https://www.ruby-lang.org/en/)
- [Node.js (v20 or higher)](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)

> [!NOTE]
> Since there isn't a robust way to manange USWDS as a Ruby dependency, this repository uses two package dependency management tools: `npm` for JavaScript, and `gem` for Ruby.

## Architecture

This Jekyll site doesn't use a gem-based theme. All assets, layouts, includes, and stylesheets are contained within the repo.

It also doesn't use the [bundled Sass converter](https://jekyllrb.com/docs/configuration/sass/). Any unintentional Sass munging is avoided since all styles are precompiled via [`uswds-compile`](https://github.com/uswds/uswds-compile), USWDS's recommended set of [Gulp](https://gulpjs.com/) functions for copying the static assets and transforming Sass into CSS.

USWDS assets are compiled during local development, isolating the Node.js environment so that it's not part of the build or deploy process. Only Ruby/Jekyll is required in the build process.

This architecture gives us the simplicity of Jekyll's plain-text content management (Markdown), build, and deploy; and the ability to compile a customized design system using [USWDS `$theme-` settings](https://designsystem.digital.gov/documentation/settings/).

## Local development

### Install and use pre-commit

Anyone committing to this repository must install [pre-commit](https://pre-commit.com/) and use the pre-commit hook to lower the likelihood that secrets will be exposed.

#### Step 1: Install pre-commit

You can install pre-commit using the MacOS package manager Homebrew:

```sh
brew install pre-commit
```

Other installation options can be found in the [pre-commit documentation](https://pre-commit.com/#install).

#### Step 2: Install the hooks

Run the following command to install the gitleaks hook:

```sh
pre-commit install
```

This will download and install the pre-commit hooks specified in `.pre-commit-config.yaml`.

### Running the Jekyll server

The following command will run the Jekyll server and watch for changes:

```sh
bundle exec jekyll serve --livereload
```

You can view the site at `http://localhost:4000/` and LiveReload will automatically reload your browser when files are modified.

### Compiling USWDS styles and scripts

> [!NOTE]
> You only need to run the Gulp tasks when making changes to the design system. You can just run the Jekyll server when editing pages, components, or content.

Install the `uswds-compile` and `uswds` dependencies:

```sh
npm install
```

Compile USWDS files to the `./assets/uswds` directory:

```sh
npx gulp compile
```

Or you can run the following command (in parallel with the Jekyll server) and Gulp will watch for changes to files in the `./_uswds_sass` directory and recompile the USWDS assets:

```sh
npx gulp watch
```

#### USWDS Icons

Over 2K icons get compiled when you run the Gulp tasks. Woah! But every individual icon file is not tracked and committed.

All of the `usa-icons` are packaged into a sprite, which should be preferred when possible:

```
<svg class="usa-icon" role="img">
  <use xlink:href="{{ '/assets/uswds/img/sprite.svg#arrow_forward' | relative_url }}"></use>
</svg>
```

However, `img` tags need to point to individual icon files. These must be explicitly be tracked and checked in. Add required icons to the list of files to track (not be ignored) in `.gitignore`:

```sh
!assets/uswds/img/usa-icons/close.svg
```

> [!TIP]
> Although most aren't tracked, 2K+ compiled icons can slow down `jekyll build`, as it copies all assets to `_site`. To speed up local development, you can temporarily uncomment the `exclude` and `include` icons listed in `_congif.yml`, matching what's in `.gitignore`. But you don't need to commit this config, as deploys will only build from committed icons.

### Theming USWDS

See USWDS [settings documentation](https://designsystem.digital.gov/documentation/settings/)

There are three key files in the `./_uswds_sass` dierctory:

- `_uswds-theme-custom-styles.scss`
- `_uswds-theme.scss`
- `styles.scss`

`styles.scss` is the Sass entry point that pulls everything together. Leave it be.

Per [USWDS guidance](https://designsystem.digital.gov/documentation/settings/), Sass `$theme-` variables can be defined in `_uswds-theme.scss` to create a custom configuration of USWDS.

For specific customizations that cannot be achieved at the theme level, USWDS includes a versatile set of [utility classes](https://designsystem.digital.gov/utilities/) that can be used to style elements (e.g. `border-style`, `background-color`, etc). Most designs are achievable with utility classes, and they are preferred over custom CSS rules whenever possible.

If custom styles must be written, they should added to `_uswds-theme-custom-styles.scss`, where you can leverage [USWDS design tokens](https://designsystem.digital.gov/design-tokens/), variables, mixins, and functions.

### Accessibility tests ([Pa11y](https://pa11y.org/))

The `.pa11yci` config file defines [Axe](https://github.com/dequelabs/axe-core) and [HTML_CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/) accessibilty tests for WCAG 2 Level AA conformance that should be run during local development:

Install Pa11y CI:

```sh
npm install -g pa11y-ci
```

Run tests for every page in the sitemap:
```sh
pa11y-ci --sitemap http://localhost:4000/sitemap.xml
```

Pa11y is configured to `includeWarnings` for more robust and thorough compliance. However, some result codes are ignored for the following reasons:

- `color-contrast` — [Pa11y reports false positives](https://github.com/pa11y/pa11y/issues/633) when axe can't determine the contrast ratio for certain elements.
- `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48` — A `<p>` or `<div>` with more than one link is assumed to be a navigation to be marked up as a list

> [!NOTE]
> [Pa11y](https://pa11y.org/) can be further configured to run on each build, deploy, pull request, etc. This should be added to any the CI/CD setup.
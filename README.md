# [ab2d.cms.gov](https://ab2d.cms.gov/)

This Ruby program builds the [ab2d.cms.gov](https://ab2d.cms.gov/) website via [Jekyll](https://jekyllrb.com/) and [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/).


## Requirements

- [pre-commit](https://pre-commit.com/)
- [Ruby](https://www.ruby-lang.org/en/) (To run Jekyll on macOS, it's advised to [not use the system Ruby](https://jekyllrb.com/docs/installation/macos/))
- [Node.js (v20 or higher)](https://nodejs.org/en/download/) and  [npm](https://www.npmjs.com/get-npm) (for USWDS assets)


## Install and use pre-commit

Anyone committing to this repository must install [pre-commit](https://pre-commit.com/) and use the pre-commit hook to lower the likelihood that secrets will be exposed.

### Step 1: Install pre-commit

You can install pre-commit using the MacOS package manager Homebrew:

```sh
brew install pre-commit
```

Other installation options can be found in the [pre-commit documentation](https://pre-commit.com/#install).

### Step 2: Install the hooks

Run the following command to install the gitleaks hook:

```sh
pre-commit install
```

This will download and install the pre-commit hooks specified in `.pre-commit-config.yaml`.


## Running the Jekyll server

The following command will run the Jekyll server and watch for changes:

```sh
bundle exec jekyll serve --livereload
```

You can view the site at [`localhost:4000`](http://localhost:4000/) and LiveReload will automatically reload your browser when files are modified.


## USWDS assets

This static website is built by Jekyll (Ruby). However, its CSS and JavaScript are compiled by [USWDS Compile](https://github.com/uswds/uswds-compile), which is a set of [Gulp](https://gulpjs.com/) functions that copy the static assets and transform Sass into CSS. Since there isn't a robust way to manange USWDS as a Ruby dependency, this repository uses two package dependency management tools: npm for JavaScript, and gem for Ruby.


### Compiling USWDS styles and scripts

The following command will install the `uswds-compile` and `uswds` dependencies:

```sh
npm install
```

The following command will compile USWDS files to the `./assets/uswds` directory:

```sh
npx gulp compile
```

Or you can run the following command (in parallel with the Jekyll server) and Gulp will watch for changes to files in the `./sass` directory and recompile the USWDS assets:

```sh
npx gulp watch
```

Most web development tasks do not require recompiling USWDS assets. For instance, when editing pages, components, or content, you likely only need to run the Jekyll server. Only run the Gulp tasks when making changes to the USWDS theme.

### Theming USWDS

Per [USWDS guidance](https://designsystem.digital.gov/documentation/settings/), Sass `$theme-` variables can be defined in `./sass_uswds-theme.scss` to create a custom configuration of USWDS.

For specific customizations that cannot be achieved at the theme level, USWDS includes a versatile set of [utility classes](https://designsystem.digital.gov/utilities/) that can be used to style elements (e.g. `border-style`, `background-color`, etc). Most designs are achievable with utility classes, and they are preferred over custom CSS rules whenever possible.

If custom styles must be written, they should added to `./sass/_uswds-theme-custom-styles.scss` and leverage the [USWDS design tokens](https://designsystem.digital.gov/design-tokens/).

### USWDS Icons

When compiling USWDS, its hundreds of icons are copied to the `./assets/uswds/img/usa-icons` directory. These images are listed in the `.gitignore` file, so they aren't tracked by Git.

Most icons are not needed, so they are not checked in. However, all icons are still packaged into the SVG sprite so that any icon can be used in an SVG element:

```
<svg class="usa-icon" aria-hidden="true" role="img">
  <use xlink:href="/assets/uswds/img/sprite.svg#arrow_forward"></use>
</svg>
```

If an icon needs to be referenced in the `src` attribute of `<img>` element, you will need to explicitly track it in `.gitignore` and check it into Git. For example, the mobile close button is listed as an icon to track:

```sh
!assets/uswds/img/usa-icons/close.svg
```

And it referenced directly as an `img`:

```
<img src="/assets/uswds/img/usa-icons/close.svg" role="img" alt="Close" />
```

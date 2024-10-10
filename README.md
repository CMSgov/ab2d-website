# Requirements

## Install and Use Pre-commit

Anyone committing to this repo must use the pre-commit hook to lower the likelihood that secrets will be exposed.

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

# Local Development Setup
## Install Ruby 3.1.2
This project is a Jekyll static website that is being built using Ruby 3.1.2. We recommend using a ruby version manager to manage installations, such as [chruby](https://github.com/postmodern/chruby) alongside a ruby installer such as [ruby-install](https://github.com/postmodern/ruby-install#readme)

### Step 1: Installing Ruby with Ruby Install
To install ruby using ruby install, use the following command:

```sh
ruby-install ruby 3.1.2
```

### Step 2: Switch Ruby versions with Chruby
To switch to the newly installed ruby 3.1.2 using chruby, use the following command:

```sh
chruby 3.1.2
```

You can verify which ruby version is currently active using chruby with the following command:

```sh
chruby
```

This will list ruby versions that have been installed on your machine with ruby-install. The active version will have an `*` prepended to the name.

### Step 3: Install gems
After ruby 3.1.2 has been installed, you will likely need to install the required gems for the project. To do this, run the following command:

```sh
bundle install
```

# Running the project
After `Local Development Setup` is complete, you can run the project by using the following command:

```sh
bundle exec jekyll serve
```

The website should then be running locally on your machine at the following address: [http://127.0.0.1:4000/](http://127.0.0.1:4000/)

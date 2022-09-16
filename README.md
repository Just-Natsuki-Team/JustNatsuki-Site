# Just Natsuki

This is a website for the Just Natsuki project

This repo is for the people interested in the code

**DO NOT DEVELOP DIRECTLY ON `master`. THE MASTER BRANCH IS SET UP TO AUTO DEPLOY**

## Special Thanks to
  * All the translators which are normally credited in their respective translations (unless they didn't want to)
## Getting started

```bash
# Clone this repository
git clone https://github.com/Just-Natsuki-Team/JustNatsuki-Site.git # If you work with HTTPS
git clone git@github.com:Just-Natsuki-Team/JustNatsuki-Site.git     # If you work with SSH

# Install the dependencies
npm install   # For NPM users
yarn install  # For Yarn men of culture

# From there, you'll want to modify node_modules/@fluent/package.json and remove the `"type": "commonJS"` line, otherwise builds will fail

# You can build a static version of the website, all the files go into `dist/`
npm run build # On NPM or
yarn build    # On Yarn

# You can also run a development server that automatically reloads when you change anything!
npm run serve # On NPM or
yarn serve    # On yarn

# Finally, use --production to create an optimised build
# that is smaller and more compatible, but takes way more time to generate
npm run build --production # On NPM or
yarn build --production    # On Yarn

# (also works with `serve`)
```
## Translating

* Go to <https://justnatsuki.club/#translator-mode>, new buttons will appear on the top-left
* Click on "Download" to get a copy of every string of text on the website
* Use an IDE such as [VSCode](https://code.visualstudio.com) to edit the YAML file
* Use the "Browse..." button on justnatsuki.club in translator mode to load your YAML file on the website to preview your changes locally
* Once you're done open an issue on this repository and paste your json into it. You can use the `TRANSLATION` issue template
* Or, if you know how to use GitHub (this step is optional), fork this project to your account, clone it to your computer,
convert the YAML to JSON and add it to /src/locales and add the option for it in the index.html file around line 128, then you can do a pull request

## License

This project is released under the SDL 1.0 License (the Satania Daiakuma License), which is basically like MIT, except you can't use this project to promote any other characters (from Gabriel Dropout) except Satania, more infos are in the `LICENSE.md` file.

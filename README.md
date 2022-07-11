# Kritb-nextjs-blog
A blog for my own personal blog.


## FAQ
- Cannot install dependencies that hosted on github packages. For example, installing @kritb-blog/ui-components might face error message like this:
```bash
error An unexpected error occurred: "https://npm.pkg.github.com/@kritb-blog%2fui-components: Your request could not be authenticated by the GitHub Packages service. Please ensure your access token is valid and has the appropriate scopes configured.".
```
Solution is adding GITHUB_TOKEN env like mentioned in `.npmrc` file.
```bash
GITHUB_TOKEN=<YOUR_GITHUB_PERSONAL_TOKEN> yarn add @kritb-blog/ui-components
```
OR
```bash
export GITHUB_TOKEN=<YOUR_GITHUB_PERSONAL_TOKEN>
yarn
```
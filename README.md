# TODO Machine

A React task manager with a dark theme and programming task examples.

## Run locally

```bash
npm ci
npm start
```

## Publish on GitHub Pages

The app is configured for [https://mlopezl.github.io/todo-machine/](https://mlopezl.github.io/todo-machine/). The `homepage` field in `package.json` makes Create React App generate asset URLs under `/todo-machine/`.

1. In the GitHub repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
2. Push the project to the `main` branch. The workflow in `.github/workflows/deploy.yml` installs dependencies, builds the app, and publishes `build/`.
3. Check the workflow in the **Actions** tab. Once it succeeds, open the URL above.

You can also run the workflow manually from the **Actions** tab.

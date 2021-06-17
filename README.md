# Sharing UI library folder within multiple projects

If the goal is to only share a component folder within different projects, creating a versioned library might feel like a hassle. There are a couple of options to postpone this.

## Option 1 - Create a symlink to ui-lib folder.

Note that a soft symlink won't duplicate the changes in git (which is what we want).

1. Create the symlink by running inside `./nextjs-symlink` folder the following command.

```
ln -s ../ui-lib/lib-components ./components
```

2. Override webpack `resolve` and set `symlinks: false`. See [nextjs.config](https://github.com/pyyding/ui-lib-example/blob/main/nextjs-symlink/next.config.js).
3. Import the `AppButton` component in code.

```
import AppButton from '../components/lib-components/AppButton'
```

## Option 2 - Add a local package.json dependency

1. Initialize the library as an npm module.

   Inside `ui-lib` folder run `npm init` and fill the blanks. Keep the entrypoint `index.js`.

2. Inside `ui-lib` Create the `index.js` file to export modules. See example [here](https://github.com/pyyding/ui-lib-example/blob/main/ui-lib/index.js).
3. Install the library requirements in `ui-lib` folder. F.e in this example `npm i react` was necessary.
4. Add a webpack rule that would compile our library react code to js. See [nextjs.config](https://github.com/pyyding/ui-lib-example/blob/main/nextjs-package-dependency/next.config.js).
5. Import the `AppButton` component in code.

```
import { AppButton } from 'ui-lib'
```

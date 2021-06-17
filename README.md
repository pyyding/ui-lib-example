# Sharing UI library folder without publishing a npm module

If the goal is only to share a component folder within different projects, creating a versioned library might feel like a hassle.
This repository illustrates how to import a UI library into multiple apps from repository root.


## Making the import work with a symbolic link
A soft symlink won't duplicate the files in git (which is what we want).

1. Create the symlink by running inside `./nextjs-symlink` folder the following command.

```
ln -s ../ui-lib ./components
```

2. Set `symlinks: false` inside webpack configuration `resolve` options. See [nextjs.config](https://github.com/pyyding/ui-lib-example/blob/main/nextjs-symlink/next.config.js) for an example.
3. Import the `Button` component in code.

```
import { Button } from '../components/ui-lib'
```

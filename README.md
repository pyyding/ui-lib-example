# Sharing UI library folder within multiple projects

If the goal is literally to only share a component folder within different projects, creating a versioned library might feel redundant at first. There are a couple of options to postpone this process.

## Option 1 - Create a symlink to ui-lib folder. 

Note that a soft symlink won't duplicate the changes in git

1. Create the symlink by running inside `./nextjs-symlink` folder the following command
```
ln -s ../ui-lib/lib-components ./components
```

2. Override webpack `resolve` and set `symlinks: false`. See [nextjs.config](https://github.com/pyyding/ui-lib-example/blob/main/nextjs-symlink/next.config.js)
3. Import the `AppButton` component in code
```
import AppButton from '../components/lib-components/AppButton'
```

## Option 2 - Add a local package json dependency
... @todo

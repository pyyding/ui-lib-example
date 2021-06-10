# UI library soft links to avoid publishing a versioned library

Note that the UI library is outside of the projext (`nextjs-symlink`) folder. 

Inside `./ui-lib-example` run
```
ln -s ../ui-lib/lib-components ./components 
```

Override webpack `resolve` and set `symlinks: false`. See `next.config.js` 

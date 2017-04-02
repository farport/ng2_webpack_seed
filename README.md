# ng2_webpack_seed
Angular 2 Webpack Seed for Farport Projects

## Startup

After cloning the project, do the following:

```
npm install
npm start
```

## Supported Commands

#### npm start
Starts the development server and watch the source directory for changes.  Built-in live-reload

#### npm run build
Build for staging server.  The files with hash in name are generated under `./build` directory.

Configuration used: `./config/webpack.qa.js`

#### npm run dist
Build for production server.  The files are generated under `./dist` directory

Configuration used: `./config/webpack.prod.js`

## References

* [Angular 2 Webpack Introduction](https://angular.io/docs/ts/latest/guide/webpack.html)

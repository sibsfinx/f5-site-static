'use strict';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  // BrowserSync
  gulp.task('browserSync', () => {
    let ghostMode;
    if (args.withoutBrowserSync) {
      ghostMode = false;
    } else {
      ghostMode = {
        clicks: true,
        forms: true,
        scroll: false
      };
    }
    browserSync.init({
      open: args.open ? 'local' : false,
      startPath: config.baseUrl,
      ghostMode: ghostMode,
      port: config.port || 3000,
      server: {
        baseDir: taskTarget,
        routes: (() => {
          let routes = {};

          // Map base URL to routes
          routes[config.baseUrl] = taskTarget;

          return routes;
        })()
      }
    });
  });
}

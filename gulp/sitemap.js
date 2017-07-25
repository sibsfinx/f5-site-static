'use strict';

import path from 'path';
import sitemap from 'gulp-sitemap';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let build = dirs.destination;

  gulp.task('sitemap', function () {
    gulp.src(path.join(build, '**/*.html'))
      .pipe(sitemap({
        // use only production host
        siteUrl: config.environment.production.host
      }))
      .pipe(gulp.dest(build));
  });
}

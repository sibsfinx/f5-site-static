'use strict';

import path from 'path';
import { submitSitemap } from 'submit-sitemap';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let build = dirs.destination;
  const sitemapUrl = config.environment.production.host + '/sitemap.xml';

  gulp.task('submitSitemap', function () {
    submitSitemap(sitemapUrl, (err) => {
      if (err) {
        plugins.util.log(
          plugins.util.colors.red('sitemap submit error:'),
          '\n',
          err,
          '\n'
        );
      }
    });
  });
}

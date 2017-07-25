'use strict';

import path from 'path';
//import robots from 'gulp-robots';
import robots from 'robots-generator/es5';
import fs from 'fs';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let build = dirs.destination;
  const siteHostname = config.environment.production.hostname;
  const sitemapUrl = config.environment.production.host + '/sitemap.xml';

  gulp.task('robots', function () {
    robots({
      useragent: '*',
      //allow: ['folder1/', 'folder2/'],
      //disallow: [''],
      host: siteHostname,
      sitemap: sitemapUrl
    }, (error, config) => {
      if (error) {
        console.log(error);
      }
      fs.writeFile(
        build + '/robots.txt',
        config.join('\n'),
        { encoding: 'utf8' },
        (error2) => {
          if (error2) {
            console.log(error2)
          }
        }
      );
    })
  });
}

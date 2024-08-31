const esbuild = require('esbuild');
const path = require('path');
const sass = require('node-sass');
const fs = require('fs');
const { polyfillNode } = require('esbuild-plugin-polyfill-node');

const isProduction = process.env.NODE_ENV === 'production';

const buildOptions = {
  assetNames: '[name]',
  entryPoints: [
    'src/html/survey.html',
    'src/js/survey.js',
    'src/js/submissions.js',
    'src/html/submissions.html',
  ],
  bundle: true,
  minify: isProduction,
  sourcemap: isProduction ? false : 'inline',
  outdir: 'www/build',
  loader: {
    '.js': 'jsx',
    '.html': 'file',
    '.eot': 'file',
    '.woff': 'file',
    '.woff2': 'file',
    '.ttf': 'file',
    '.svg': 'file',
  },
  target: ['chrome89', 'edge89', 'firefox90', 'safari13'],
  plugins: [
    {
      name: 'sass',
      setup(build) {
        build.onResolve({ filter: /\.scss$/ }, (args) => ({
          path: path.resolve(args.resolveDir, args.path),
          namespace: 'sass',
        }));
        build.onLoad({ filter: /\.scss$/, namespace: 'sass' }, async (args) => {
          const result = sass.renderSync({
            file: args.path,
            outputStyle: 'compressed',
            importer: (url, prev, done) => {
              if (url.startsWith('/packages/enketo-core/node_modules/')) {
                return {
                  file: url.replace('/packages/enketo-core/', ''),
                };
              }

              if (url.startsWith('../fonts/')) {
                const fontPaths = [
                  path.resolve(__dirname, 'node_modules/font-awesome/fonts'),
                  path.resolve(__dirname, 'node_modules/bootstrap/dist/fonts'),
                  // Add more font paths here if needed
                ];

                const fontFile = url.replace('../fonts/', '');

                for (const fontPath of fontPaths) {
                  const fullPath = path.join(fontPath, fontFile);
                  if (fs.existsSync(fullPath)) {
                    return { file: fullPath };
                  }
                }
              }
              return null; // Use default import behavior for other cases
            },
          });

          return {
            contents: result.css.toString(),
            loader: 'css',
            resolveDir: path.dirname(args.path),
          };
        });
      },
    },
    polyfillNode(),
  ],
};

if (process.argv.includes('--watch')) {
  esbuild
    .context(buildOptions)
    .then((context) => {
      context.watch();
      console.log('Watching...');
    })
    .catch(() => process.exit(1));
} else {
  esbuild.build(buildOptions).catch(() => process.exit(1));
}

const ghpages = require('gh-pages');
const path = require('path');

const outputPath = path.join(process.cwd(), 'build');

ghpages.publish(outputPath, {
  branch: 'gh-pages',
  dotfiles: true,
  repo: `https://github.com/<username>/<repository-name>.git`,
}, (err) => {
  if (err) {
    console.error('Error deploying to GitHub Pages', err);
  } else {
    console.log('Successfully deployed to GitHub Pages');
  }
});

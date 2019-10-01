const core = require('@actions/core');
const path = require('path');
const GhostAdminApi = require('@tryghost/admin-api');

const pkgPath = path.join(process.cwd(), 'package.json');
console.log('cwd', process.cwd(), pkgPath);
const pkg = require(pkgPath);
console.log('pkg', pkg.name);

const api = new GhostAdminApi({
    url: core.getInput('api-url'),
    key: core.getInput('api-key'),
    version: 'canary'
});

const zipPath = core.getInput('zip-path');

console.log(zipPath);

api.themes
    .upload({file: zipPath})
    .then(() => {
        console.log('SUCCESS');
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
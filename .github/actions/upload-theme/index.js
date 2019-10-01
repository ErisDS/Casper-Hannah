const core = require('@actions/core');
const GhostAdminApi = require('@tryghost/admin-api');
const pkg = require('./package.json');

console.log(pkg, pkg.name);

const api = new GhostAdminApi({
    url: core.getInput('api-url'),
    key: core.getInput('api-key'),
    version: 'canary'
});

const zipPath = core.getInput('zip-path');
console.log(process.cwd());
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
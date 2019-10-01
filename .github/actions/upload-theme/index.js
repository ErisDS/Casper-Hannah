const core = require('@actions/core');
const GhostAdminApi = require('@tryghost/admin-api');


console.log('zip-path', core.getInput('zip-path'));
const pkgPath = `${process.pwd()}/package.json`;
console.log('cwd', process.pwd(), pkgPath);
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
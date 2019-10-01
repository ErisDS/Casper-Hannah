const core = require('@actions/core');
const GhostAdminApi = require('@tryghost/admin-api');

const api = new GhostAdminApi({
    url: core.getInput('api-url'),
    key: core.getInput('api-key'),
    version: 'canary'
});

api.themes
    .upload({file: core.getInput('zip-path')})
    .then(() => {
        console.log('SUCCESS');
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
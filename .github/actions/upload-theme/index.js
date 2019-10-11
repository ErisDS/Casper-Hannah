const path = require('path');
const core = require('@actions/core');
const exec = require('@actions/exec');
const GhostAdminApi = require('@tryghost/admin-api');

(async function main() {
    const api = new GhostAdminApi({
        url: core.getInput('api-url'),
        key: core.getInput('api-key'),
        version: 'canary'
    });

    const exclude = core.getInput('exclude') || '';
    const basePath = process.env.GITHUB_WORKSPACE;
    const pkgPath = path.join(process.env.GITHUB_WORKSPACE, 'package.json');
    const themeName = require(pkgPath).name;
    const themeZip = `${themeName}.zip`;
    const zipPath = path.join(basePath, themeZip);

    await exec.exec(`zip -r ${themeZip} . -x *.git* *.zip *routes.yaml *redirects.yaml *redirects.json ${exclude}`, [], {cwd: basePath});

    api.themes
        .upload({file: zipPath})
        .then(() => {
            console.log('SUCCESS');
        })
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });
}())
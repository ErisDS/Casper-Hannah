const path = require('path');
const core = require('@actions/core');
const github = require('@actions/github');
const GhostAdminApi = require('@tryghost/admin-api');

(async function main() {
    // console.log('zip-path', core.getInput('zip-path'));
    // const pkgPath = `${process.cwd()}/package.json`;
    // console.log('cwd', process.cwd(), pkgPath);
    // const pkg = require(pkgPath);
    // console.log('pkg', pkg.name);

    // const api = new GhostAdminApi({
    //     url: core.getInput('api-url'),
    //     key: core.getInput('api-key'),
    //     version: 'canary'
    // });


    const basePath = process.env.GITHUB_WORKSPACE;
    const pkgPath = path.join(process.env.GITHUB_WORKSPACE, 'package.json');
    const themeName = require(pkgPath).name;
    const themeZip = `${themeName}.zip`;
    // const themePath = path.join(basePath, themeZip);

    // zip -r $THEME_NAME.zip . -x '*node_modules*' '*.git*' '*\.zip' routes.yaml redirects.yaml redirects.json

    let res = await exec.exec('zip', ['-r', $themeZip, '.'], {cwd: basePath});
    console.log(res);

    // api.themes
    //     .upload({file: zipPath})
    //     .then(() => {
    //         console.log('SUCCESS');
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //         process.exit(1);
    //     });

}())
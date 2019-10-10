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

//    const zipPath = core.getInput('zip-path');

    console.log(github);
    let basePath = process.env.GITHUB_WORKSPACE;
    console.log(basePath);
    const pkgPath = path.join(process.env.GITHUB_WORKSPACE, 'package.json');
    console.log(pkgPath);
    let themeName = require(pkgPath).name;
    console.log(themeName);
    let themePath = path.join(basePath, themeName);
    console.log(themePath);

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
const GhostAdminApi = require('@tryghost/admin-api');
const archiver = require('archiver');

archive.glob('folder1/**/*', {
    cwd: '/home/user/project',
    ignore: ['file1', 'file2', 'file3']
}, {});

async function main() {
    // const api = new GhostAdminApi({
    //     // url: core.getInput('api-url'),
    //     // key: core.getInput('api-key'),
    //     version: 'canary'
    // });

    const basePath = process.cwd();
    const pkgPath = 'package.json';
    const themeName = require(pkgPath).name;
    const themeZip = `${themeName}.zip`;
    const zipPath = path.join(basePath, themeZip);


    await archive.glob('folder1/**/*', {
        cwd: '/home/user/project',
        ignore: ['file1', 'file2', 'file3']
      }, {});

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
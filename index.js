const { homedir } = require('os');
const path = require('path');

const root = path.dirname(require.main.filename);

module.exports = function (pathToFile, useCWD = false) {
    if (!pathToFile) throw new Error('Invalid path');

    const _path = pathToFile.replace(/(~|%userprofile%|%home%)/gi, homedir());

    if (path.isAbsolute(_path)) return path.resolve(_path);

    return useCWD
        ? path.resolve(process.cwd(), _path)
        : path.resolve(root, _path);
};

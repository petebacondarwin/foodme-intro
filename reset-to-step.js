var fs = require('fs-extra');
var path = require('path');

var step = getStep();
clearWorkspaace();
symlinkToWorkspace('assets');
copyToWorkspace('package.json');
copyToWorkspace('step-' + step, '.');
symlinkToWorkspace('node_modules');



function getStep() {
    if (process.argv.length !== 3) {
        console.log('Usage: node ' + path.basename(__filename) + ' step');
        console.log('  where "step" is of the form XX or XX-solution, where X are digits');
        process.exit(1);
    }
    // Pad out the step number
    var step = process.argv[2];
    while (step.length<2) {
        step = '0' + step;
    }    
    return step;
}

function clearWorkspaace() {
    console.log('Clearing workspace');
    fs.emptyDirSync(workspacePath());
    fs.emptyDirSync(workspacePath('src'));
    fs.emptyDirSync(workspacePath('dist'));
}

function getPath(filepath) {
    return path.resolve(__dirname, filepath);
}
function workspacePath(filepath) {
    return path.resolve(getPath('workspace'), filepath || '');
}
function copyToWorkspace(source, target) {
    console.log('Copying ' + source + ' to workspace');
    fs.copy(getPath(source), workspacePath(target || source));    
}

function symlinkToWorkspace(source) {
    try {
        console.log('Trying to symlink ' + source);
        fs.ensureSymlinkSync(getPath(source), workspacePath(source));
    } catch(e) {
        if (e.code === 'EPERM') {
            console.log('   symlink not allowed, copying instead');
            copyToWorkspace(source);
        }
    }    
}
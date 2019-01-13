import { resolve as resolvePath, basename } from 'path';
import { expect } from 'chai';
import copyFile from 'vamtiger-copy-file';
import getFolderContent from 'vamtiger-get-directory-content';
import bash from 'vamtiger-bash'

const buildFolder = resolvePath(
    __dirname,
    '..'
);
const testHtmlSource = resolvePath(
    __dirname,
    '../../source/test/html/test.html'
);
const testHtmlDestination = resolvePath(
    __dirname,
    '../index.html'
);
const testCssSource = resolvePath(
    __dirname,
    '../../source/test/html/test.css'
);
const testCssDestination = resolvePath(
    __dirname,
    '../test.css'
);
const copyFiles = 'cp source/test/mock-data/image* build';

describe('Generate', function () {
    before(async function () {
        await Promise.all([
            copyFile({
                source: testHtmlSource,
                destination: testHtmlDestination
            }),
            copyFile({
                source: testCssSource,
                destination: testCssDestination
            }),
            bash(copyFiles)
        ]);
    });

    it('Test Preview', async function() {
        const folderContent = await getFolderContent(buildFolder)
            .then(result => new Set(result));
        
        expect(folderContent.has(basename(testHtmlDestination))).to.be.true;
    })
});
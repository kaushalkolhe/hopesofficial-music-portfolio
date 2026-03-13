const fs = require('fs');
const path = require('path');

function checkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            checkDir(fullPath);
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const regex = /import\s+.*?\s+from\s+['"]([^'"]+)['"]/g;
            let match;
            while ((match = regex.exec(content)) !== null) {
                const importPath = match[1];
                if (importPath.startsWith('.') || importPath.startsWith('..')) {
                    const absImportPath = path.resolve(path.dirname(fullPath), importPath);
                    const parsedPath = path.parse(absImportPath);
                    // check if file exists with EXACT case
                    // A simple way in node on Windows is to read the parent directory and check if the exact filename is in the array
                    let dirContents;
                    try {
                        dirContents = fs.readdirSync(parsedPath.dir);
                    } catch (e) {
                         console.log(`Error reading dir ${parsedPath.dir} imported in ${fullPath}`);
                         continue;
                    }
                    
                    // checking for extensions if not provided
                    const possibleNames = [parsedPath.base, parsedPath.base + '.js', parsedPath.base + '.jsx', parsedPath.base + '.ts', parsedPath.base + '.tsx', parsedPath.base + '.css'];
                    
                    let found = false;
                    for (const possible of possibleNames) {
                        if (dirContents.includes(possible)) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        // try to find case insensitive match
                        for (const item of dirContents) {
                            if (possibleNames.map(p => p.toLowerCase()).includes(item.toLowerCase())) {
                                console.log(`CASE MISMATCH: in ${fullPath}`);
                                console.log(`  Imported: ${importPath}`);
                                console.log(`  Actual file: ${item}`);
                            }
                        }
                    }
                }
            }
        }
    }
}
checkDir('./src');
console.log("Done checking case sensitivity.");

export function filepathToRkey(filepath: string) {
    if (filepath === '') throw new Error('File path is empty!');

    filepath = filepath.replace(/\\/g, '/');

    if (filepath.startsWith('./')) {
        filepath = filepath.slice(2);
    }

    if (filepath.startsWith('/')) {
        filepath = filepath.slice(1);
    }

    if (filepath.includes('../') || filepath.includes('/..')) {
        throw new Error('Backwards directory navigation not supported in rkey');
    }

    filepath = filepath
        // regex excludes : and _ because we use those as control characters
        // regex excludes ~ because using it gives us internal server error
        .replace(/[^A-Za-z0-9.\-]/g, $$ => {
            if ($$ == '\\' || $$ == '/') {
                return ':';
            } else {
                return `_${$$.charCodeAt(0).toString(36)}_`;
            }
        });

    filepath = filepath.toLowerCase();

    if (filepath.length > 512) throw new Error('File path too long!');

    return filepath;
}

export function rkeyToFilepath(rkey: string) {
    return rkey
        .replace(/:/g, '/')
        .replace(/_([0-9a-z]{1,4})_/g, $$ => {
            return String.fromCharCode(parseInt($$.slice(1), 36));
        });
}

function saveCanvas(canvas, path, type, options) {
    return Task.spawn(function *() {
        var reader = new FileReader;
        var blob = yield new Promise(accept => canvas.toBlob(accept, type, options));
        reader.readAsArrayBuffer(blob);

        yield new Promise(accept => { reader.onloadend = accept });

        return yield OS.File.writeAtomic(path, new Uint8Array(reader.result),
                                         { tmpPath: path + '.tmp' });
    });
}

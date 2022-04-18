import path from "path";

export default {
    logLevel: 'warn',
    root: path.resolve("./src/"),
    publicDir: path.resolve("./src/static/"),
    resolve: {
        alias: {
            "@frontend": path.resolve("./src/")
        }
    },
    build: {
        emptyOutDir: true,
        outDir: path.resolve("./web/"),
    }
}
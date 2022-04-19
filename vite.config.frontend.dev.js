import path from "path";
import prefresh from '@prefresh/vite';

export default {
    // logLevel: 'warn',
    root: path.resolve("./src/"),
    publicDir: path.resolve("./src/static/"),
    resolve: {
        alias: {
            "@frontend": path.resolve("./src/"),
            react: 'preact/compat',
        }
    },
    build: {
        emptyOutDir: true,
        outDir: path.resolve("./web/"),
    },
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
        jsxInject: `import { h, Fragment } from 'preact'`,
    },
    plugins: [prefresh()]
}
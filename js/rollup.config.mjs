import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';


export default {
    input: './index.js',
    output: [
        {
            file: './build/bundle.js',
            format: 'cjs',
            name: 'Bundle'
        },

    ],

    plugins: [
        commonjs(),
        nodeResolve(),
        json(),
        babel({
            babelHelpers: 'bundled',
            presets: [
                "@babel/preset-env"
            ]
        }),
    ]
};
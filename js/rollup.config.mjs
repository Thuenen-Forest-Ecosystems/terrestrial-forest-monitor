import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import { babel } from '@rollup/plugin-babel';

// https://www.librehat.com/use-npm-packages-in-qml/
export default [
    {
        input: './index.js',
        output: [
            
            {
                file: './build/bundle.cjs.js',
                format: 'cjs',
                esModule: false,
                name: 'Bundle'
            }
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
    },
    {
        input: './dereference.js',
        output: [
            
            {
                file: './build/dereference.cjs.js',
                format: 'cjs',
                esModule: false,
                name: 'Bundle'
            }
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
    }
]
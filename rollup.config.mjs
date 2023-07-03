import typescript from "@rollup/plugin-typescript";
import dayjs from "dayjs";

export default {
    input: './src/index.ts',
    output: {
        name: 'index',
        file: './dist/index.min.js',
        format: 'iife'
    },
    plugins: [typescript(), dayjs()],
};
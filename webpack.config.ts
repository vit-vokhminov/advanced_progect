import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'), // исходный файл
    output: {
        // файл бандла
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true, // очистка при каждой сборке
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'), // использовать html из public как шаблон при билде
        }),
        new webpack.ProgressPlugin(), // показывает процент билда при сборке
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};

export default config;

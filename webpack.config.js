const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
	devtool: "cheap-module-source-map",
	devServer: {
		allowedHosts: ["localhost", "10.0.0.2"],
		historyApiFallback: true,
		hot: true,
		open: true,
		overlay: true,
		port: 3000
	},
	entry: "./src/main.jsx",
	mode: "development",
	module: {
		rules: [
			{
				include: [
					resolve(__dirname, "./src"),
				],
				loader: "babel-loader",
				test: /\.(js|jsx)$/
			},
		]
	},
	output: {
		filename: "main.js",
		publicPath: "/"
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: resolve(__dirname, "./index.html")
		}),
		new HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
		mainFields: ["module", "jsnext:main", "main"]
	}
};

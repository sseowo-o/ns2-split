// webpack configuration for ES module import

// https://webpack.kr/configuration/output/
module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: {
    index: './src/index.ts',
    // "nl-lib-common": "./src/nl-lib-common/index.ts",
  },

  node: {
    fs: 'empty',
  },

  resolve: {
    fallback: {
      // dgram: false,
      // net: false,
      // tls: false,
      // child_process: false,

      fs: false,
      path: false,
      crypto: false,
    },
  },

  experiments: {
    outputModule: true,
  },

  target: ['web', 'es2020'],

  output: {
    filename: (pathData) =>
      pathData.chunk.name === 'index' ? 'main.js' : '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
    clean: true,
    library: {
      // name: "nl-lib2",
      type: 'module',
    },

    // globalObject: "this",
    // enabledWasmLoadingTypes: ['fetch'],
  },

  externalsType: 'module',

  // 아래는 이상규가 추가한 것, 2022/08/30
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/, // 확장자가 png, jpg, gif, svg인것에 대해서만 등록
        type: 'asset/inline',
      },

      {
        test: /\.(script)$/,
        type: 'asset/inline',
      },

      {
        test: /\.(nproj)$/,
        // type: "asset/resource",
        type: 'asset/inline',
        // use: 'text-loader',
        generator: {
          dataUrl: (content) =>
            // process content
            `data:text/xml;base64,${content.toString('base64')}`,
          // mimetype: 'text/xml', // specify the mimetype here
        },
      },

      // TypeScript 로더 설정
      {
        test: /\.worker\.(js|ts)$/,
        use: {
          loader: 'worker-loader',
          options: {
            inline: 'no-fallback',
          },
        },
      },
      {
        test: /\.wasm$/i,
        // type: "asset/resource",
        type: 'asset/inline',
      },
      {
        test: /\.(ts|tsx)?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: false,
            compilerOptions: {
              // "declarationDir": "../../../nl-lib2-npm/dist/types",
              declarationDir: './dist/types',
            },
          },
        },
        exclude: /node_modules/,
      },
    ],
  },

  stats: {
    children: true,
  },

  devtool: 'inline-source-map',
  // devtool: "source-map",
  devServer: {
    static: './dist',
    port: 8000,
    open: true,
    hot: false,
  },

  plugins: [
    new webpack.WatchIgnorePlugin({
      paths: [/\.js$/, /\.d\.ts$/],
    }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': '"production"'
    //   }
    // })
  ],

  optimization: {
    // runtimeChunk: 'single',
    minimize: true,
    // usedExports: true,
  },

  // 아래는 webpack --watch를 쓰기 위한 option, 차분 컴파일 등을 활성화 2023/01/23
  watchOptions: {
    ignored: '**/node_modules',
  },

  // https://qiita.com/pegass85/items/ebd67fe32ed88642bf86
  cache: true,
};

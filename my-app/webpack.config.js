module.exports = {
    module: {
      rules: [
        {
          test: /\.less$/i,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
            {
              loader: "less-loader",
              options: {
                javascriptEnabled: true,
                lessOptions: {
                  strictMath: false,
                },
              },
            },
          ],
        },
      ],
    },
  };
  
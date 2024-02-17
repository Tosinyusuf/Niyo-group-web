/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        });
        // config.module.rules.forEach((rule) => {
        //   rule?.oneOf?.forEach((nestedRule) => {
        //     if (nestedRule?.use?.loader?.includes('babel')) {
        //       nestedRule.use.options.overrides = nestedRule.use.options.overrides ?? []
        //       // Prevents duplicate overrides in dev.
        //       if (
        //         !nestedRule.use.options.overrides.some(
        //           (override) => override.test === nestedRule.test && override.compact === true
        //         )
        //       ) {
        //         nestedRule.use.options.overrides.push({
        //           test: nestedRule.test,
        //           compact: true,
        //         })
        //       }
        //     }
        //   })
        // })
        return config;
      }
}

module.exports = nextConfig

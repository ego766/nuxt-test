module.exports = {
  apps: [
    {
      name: 'nuxt-app',
      exec_mode: 'cluster',
      instances: 1,
      script: './.output/server/index.mjs',
      env: {
        NODE_ENV: 'production',
        NITRO_PORT: 3000,
        NITRO_HOST: '0.0.0.0',
      }
    }
  ]
} 

作者：mwq30123
链接：https://juejin.cn/post/7524115578744438810
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
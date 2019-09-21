# s-browser

Google Puppeteer 图片生成

## QuickStart

截屏，[配置文档](https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v1.20.0&show=api-pagescreenshotoptions)
1. 通过 template + data 的方式渲染出网页
2. 调用截屏接口 https://xxx.com/s-browser/screenshot?url=网页地址&screenshot配置
3. 返回图像 buffer 数据


pdf,[配置文档](https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v1.20.0&show=api-pagepdfoptions)
1. 通过 template + data 的方式渲染出网页
2. 调用pdf接口 https://xxx.com/s-browser/screenshot?url=网页地址&pdf配置
3. 返回图像 buffer 数据

### Development

```bash
$ yarn
$ yarn dev
$ open http://localhost:3000/
```

### Deploy

```bash
$ yarn start
$ yarn stop
```

### yarn scripts

- Use `yarn lint` to check code style.
- Use `yarn test` to run unit test.
- Use `yarn autod` to auto detect dependencies upgrade, see [autod](https://www.yarnjs.com/package/autod) for more detail.


[egg]: https://eggjs.org
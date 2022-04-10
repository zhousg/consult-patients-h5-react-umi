import { defineConfig } from 'umi';
import pxToViewport from 'postcss-px-to-viewport'
// 配置文件不能使用路径别名
import routes from './src/routes';
export default defineConfig({
  extraPostCSSPlugins: [ pxToViewport({viewportWidth: 375}) ],
  // node_modules 不走babel编译提升编译速度，exclude可以加入需要编译的包
  nodeModulesTransform: {
    type: 'none',
  },
  // 路由规则
  routes,
  // 保持组件状态，提供即时反馈（热更新）
  fastRefresh: {},
  // 默认自带的antd-mobile是2.x版本的，官网说是5.x。需要安装 @umijs/plugin-antd-mobile 或者 antd-mobile
  // babel插件：按需引入antd-mobile需要安装  yarn add babel-plugin-import --dev
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es/components',
        style: false,
      },
    ],
  ],
  dva: {
    immer: true
  }
});

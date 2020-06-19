<h1 align="center">Welcome to rc-preview-image</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/imaoda/rc-preview-image#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/imaoda/rc-preview-image/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/imaoda/rc-preview-image/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/imaoda/rc-preview-image" />
  </a>
</p>

> preview image

### 🏠 [Homepage](https://github.com/imaoda/rc-preview-image#readme)

## Author

👤 **wangyongfeng**

* Github: [@imaoda](https://github.com/imaoda)

## Introduction

在 H5 实现类似微信的图片预览功能，点击一个图片后：

- 黑色背景，全屏展示图片
- 图片支持手势缩放
- 点击任意区域，退出全屏预览

## Usage

require `react>16.3`

```bash
yarn add rc-preview-image
```

预览图片

```js
import prevewImage from 'rc-preview-image'

previewImage('/1.png')
```

## Options

可选预览多张图片，用户可左右滑动来切换图片

```js
previewImage(['/1.png', '/2,png'])
```

预览多张图片时，可指定从第几张开始显示

```js
previewImage(['/1.png', '/2,png'], 1)
```

## Tips

- 支持 Typescript
- 支持返回 Promise

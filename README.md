[node version badge]: https://img.shields.io/badge/node.js-%3E%3D12.20.0-brightgreen?style=flat&logo=Node.js
[download node.js]: https://nodejs.org/en/download/
[prs welcome badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat
[lsdirsync]: https://github.com/iyowei/ls-dir-sync
[lsdir]: https://github.com/iyowei/ls-dir
[scandireach]: https://github.com/iyowei/scan-dir-each
[scandirsync]: https://github.com/iyowei/scan-dir-sync
[scandir]: https://github.com/iyowei/scan-dir
[scandireachsync]: https://github.com/iyowei/scan-dir-sync

# scanDirSync(path, [worker, raw = false])

> 串行扫描文件夹，扫描的同时支持更新、过滤操作，一定程度复用遍历。

## 使用

> 项目中同时使用 [`lsDirSync()`][lsdirsync]、[`scanDirEachSync()`][scandireachsync] 模块的话，推荐使用当前模块。

- `path` 待扫描的路径，**必需提供**，{String}
- `worker` 处理器，如果扫描的同时需要更新、过滤操作可提供，一定程度复用穷举，**可选**，{ Function }
  - 返回 {Object | Boolean}
    - `false` 过滤掉当前扫描结果
    - `true` 保留当前扫描结果
    - 对象字面量，保留 / 更新当前扫描结果
    - 其它类型则默认为没有任何处理
- `raw` 是否专门返回未加工的扫描结果，使用 `worker` 后才会生效，默认 `false`，**可选**，{ Boolean }
- 返回，扫描结果 { Array }
  - 如果设置了 `raw` 为 `true`，则返回 **二维数组**，第一项为加工后的扫描结果，第二项为未加工的扫描结果
  - 默认返回 **一维数组**，即：加工后的扫描结果

```js
import { log } from "console";
import scanDirSync from "@iyowei/scan-dir-sync";

log(
  scanDirSync(
    process.cwd(),
    (cur, index) => {
      return index % 2 === 0 ? cur : false;
    },
    true
  )
);

/**
 * [
 *   [
 *     {
 *       path: '',
 *       dirent: [Dirent]
 *     },
 *     ...
 *   ],
 *   [
 *     {
 *       path: '',
 *       dirent: [Dirent]
 *     },
 *     ...
 *   ]
 * ]
 */
```

## 安装

[![Node Version Badge][node version badge]][download node.js]

```shell
# Pnpm
pnpm add @iyowei/scan-dir-sync

# yarn
yarn add @iyowei/scan-dir-sync

# npm
npm add @iyowei/scan-dir-sync
```

## 相关

- [**`lsDirSync()`**][lsdirsync]，串行扫描文件夹；
- [**`lsDir()`**][lsdir]，并行扫描文件夹；
- [**`scanDirEachSync()`**][scanDirEachSync]，可在扫描的同时更新或过滤数据，**串行** 实现；
- [**`scanDirEach()`**][scandireach]，可在扫描的同时更新或过滤数据，**并行** 实现；
- [**`scanDir()`**][scandir]，`worker` 选填，有 `worker`，行为同 `scanDirEach()` 一致，否则与 `lsDir()` 一致，如果项目中同时使用了 `scanDirEach()`、`lsDir()`，则推荐使用 `scanDir()`；

## 参与贡献

![PRs Welcome][prs welcome badge]

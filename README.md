# readme

這個作業是`計算機modal`，判斷設備為手機版與電腦版，點擊按鈕時顯示計算機 modal

- 請使用 React 開發
- 請使用 Redux 儲存計算機資料

## 規格項目

- 計算機介面請依照`ui.png`設計
- 僅需支援最新版本 Chrome
- 點擊按鈕時彈出計算機
- 點擊計算機以外介面可關閉計算機
- 手機版
  - 彈出後請取固定在畫面最下方
  - 寬度為畫面 100%，高度最大為畫面 50%，計算機 modal 可 scroll
- 電腦版
  - 計算機 modal 可在畫面上拖拉移動
  - 計算機寬度固定為 480px
  - RWD
    - 當畫面小於 768px 時將計算機寬度改為 360px
- 計算機最低僅需有加、減的功能即可

## 其他

- UI 部分除計算機須依照規格設計，其餘可隨意

## lib

- react
- react-router
- immer
- redux
- react-redux
- redux-actions
- redux-observable

## folder structure

### src/api

存放所有的 api methods，url 可以用 `{key}` 這樣包裝起來，執行時會用 body 對應的 key 替換，如果要用 query 可以放在第三個參數裡面
ex. url `/users/{user}`, body `{user: 'facebook'}` 會將 url 替換成 `/users/facebook`

### src/components

存放所有 components

### src/constants

存放 constant 變數，例如 api root url 或是 enum

### src/page

存放 container 元件，可以是各個頁面實作

### src/store

整個網站儲存資料的部分這邊使用 context 跟 redux 兩種，當要新增資料時要同時加上以下部分

- context

  - `initStore`
  - `reducer`
  - `WrapContext` 的 `Provider`

- redux
  - src/store/modules 裡面新增檔案，並且個別時做 type, epic, reducer
  - 增加到 src/store/modules/index.js 內

### src/style

- `GlobalStyles.js` 存放 global css 設定
- `theme.js` 存放 styled-components 的變數，可以存放色碼之類的東西

### src/hooks

存放 hook 工具

- `useFetch` 呼叫 api 的 hook，傳入 `src/api` 內定義的 methods，使用方法如下
  - `immediately` 可以設定是否一開始就執行
  - `doStart` 無論 `immediately` 設定成什麼，執行 `doStart` 就會打 api 出去，也可以用來重新打 api
  - `setPayloadAndFetch` 設定 api payload 並且會再次 `doStart`

### src/utils

存放共用工具

- `wrapRequest` 包裝 api 處理

## note

- `src` 內還會再放 `src` 的原因是為了要絕對路徑 import 會是 `src/` 開頭
- 環境變數設定在 `.env-rc.js` 如要新增變數一定要是 `REACT_APP_` 開頭 ref: https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables
- `prettier.config.js` 內設定 prettier style
- eslint 除了原本的 `react-app` rule 還新增了，`eslint-plugin-import` 跟 `eslint-plugin-sort-imports-es6-autofix` 用來排版 import 順序以及禁止 `../` 只能用 absolute imports
  - 目前在 import 習慣上會分成三部分並用空行分開，順序為 `套件`, `absolute imports`, `'./' 同一層`

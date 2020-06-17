# vue-hooks [![NPM Version](https://img.shields.io/npm/v/@hanxx/vue-hooks.svg)](https://www.npmjs.com/package/@hanxx/vue-hooks) [![Build Status](https://img.shields.io/travis/lianghx-319/vue-hooks/master.svg)](https://travis-ci.org/lianghx-319/vue-hooks) [![Code Coverage](https://img.shields.io/codecov/c/github/lianghx-319/vue-hooks.svg)](https://codecov.io/gh/lianghx-319/vue-hooks) [![Total alerts](https://img.shields.io/lgtm/alerts/g/lianghx-319/vue-hooks.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/lianghx-319/vue-hooks/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/lianghx-319/vue-hooks.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/lianghx-319/vue-hooks/context:javascript) [![Netlify Status](https://api.netlify.com/api/v1/badges/24ca2187-6118-491b-b4d1-684a823b3565/deploy-status)](https://app.netlify.com/sites/nervous-noyce-43dffd/deploys)

> ⚡️ Awesome Vue Hooks Fork From [@u3u/vue-hooks](https://github.com/u3u/vue-hooks)

First of all, the original repository has no response for more features request, so I start this repository and add some common useful features. Welcome PRs.

Using [`@vue/composition-api`](https://github.com/vuejs/composition-api) to implement useful vue hooks.  
Vue 3.0 has not been released yet, it allows you to use functional-based components in advance.

Another useful vue-hooks repository is [vue-use-web](https://github.com/Tarektouati/vue-use-web), so some duplicated features will not implement here.

## Install

```sh
yarn add @vue/composition-api @hanxx/vue-hooks
```

## Documentation

Docs are available at <https://vue-hooks.hanxx.icu>

## Usage

> Now don't need `Vue.use(hooks)` to install plugin

```js
// main.js
import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';

Vue.use(VueCompositionAPI); // Don't forget to use the plugin!
```

> If use `useDate`, remember installing `dayjs`

```sh
yarn add dayjs
```

```js
// You can use dayjs directly here
import { useDate, dayjs } from '@hanxx/vue-hooks/lib/useDate';
```

> If haven't use `useDate`, `dayjs` is not a necessary dependence

```jsx
import { defineComponent } from '@vue/composition-api';
import { useWindowSize } from '@hanxx/vue-hooks';

export default defineComponent({
  setup() {
    const { width, height, widthPixel, heightPixel } = useWindowSize();
    return { width, height, widthPixel, heightPixel };
  },

  render() {
    const { width, height, widthPixel, heightPixel } = this;
    return (
      <div id="app" style={{ width: widthPixel, height: heightPixel }}>
        dynamic window size: {width}, {height}
      </div>
    );
  },
});
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feat/new-hook`
3. Commit your changes: `git commit -am 'feat(hooks): add a new hook'`
4. Push to the branch: `git push origin feat/new-hook`
5. Submit a pull request :D

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://qwq.cat"><img src="https://avatars2.githubusercontent.com/u/20062482?v=4" width="100px;" alt=""/><br /><sub><b>u3u</b></sub></a><br /><a href="https://github.com/lianghx-319/vue-hooks/commits?author=u3u" title="Code">💻</a> <a href="https://github.com/lianghx-319/vue-hooks/commits?author=u3u" title="Documentation">📖</a> <a href="#example-u3u" title="Examples">💡</a> <a href="https://github.com/lianghx-319/vue-hooks/commits?author=u3u" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/lianghx-319"><img src="https://avatars2.githubusercontent.com/u/27187946?v=4" width="100px;" alt=""/><br /><sub><b>Han</b></sub></a><br /><a href="https://github.com/lianghx-319/vue-hooks/commits?author=lianghx-319" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome!

## License

[MIT](./LICENSE)

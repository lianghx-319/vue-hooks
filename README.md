# vue-hooks [![NPM Version](https://img.shields.io/npm/v/@hanxx/vue-hooks.svg)](https://www.npmjs.com/package/@hanxx/vue-hooks) [![Build Status](https://img.shields.io/travis/lianghx-319/vue-hooks/master.svg)](https://travis-ci.org/lianghx-319/vue-hooks) [![Code Coverage](https://img.shields.io/codecov/c/github/lianghx-319/vue-hooks.svg)](https://codecov.io/gh/lianghx-319/vue-hooks)

> ⚡️ Awesome Vue Hooks Fork From [@u3u/vue-hooks](https://github.com/u3u/vue-hooks)

First of all, the original repository has no response for more features request, so I restart this repository and add some common useful features. Welcome PRs.

Using [`@vue/composition-api`](https://github.com/vuejs/composition-api) to implement useful vue hooks.  
Vue 3.0 has not been released yet, it allows you to use functional-based components in advance.

Another useful vue-hooks repository is [vue-use-web](https://github.com/Tarektouati/vue-use-web), so some duplicated features will not implement here.

## Install

```sh
yarn add @vue/composition-api @hanxx/vue-hooks
```

## Documentation [![Netlify Status](https://api.netlify.com/api/v1/badges/778cb6bd-4de1-4ce9-b62a-6a87e0a8466f/deploy-status)](https://app.netlify.com/sites/zen-torvalds-127706/deploys)

Docs are available at <https://vue-hooks.hanxx.icu>

## Usage

```js
import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import hooks from '@hanxx/vue-hooks';

Vue.use(hooks);
Vue.use(VueCompositionAPI); // Don't forget to use the plugin!
```

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

## Hooks

- [`useDate`](https://vue-hooks.netlify.com/?path=/story/usedate--docs) &mdash; Using [`dayjs`](https://github.com/iamkun/dayjs) to process date.
- [`useWindowSize`](https://vue-hooks.netlify.com/?path=/story/usewindowsize--docs) &mdash; Tracks `window` dimensions.
- [`useCounter`](https://vue-hooks.netlify.com/?path=/story/usecounter--docs) &mdash; Tracks state of a number.
- [`usePrevious`](https://vue-hooks.netlify.com/?path=/story/useprevious--docs) &mdash; Returns the previous state or props.
- [`useRouter`](https://vue-hooks.netlify.com/?path=/story/userouter--docs) &mdash; A hook for [`vue-router`](https://github.com/vuejs/vue-router).
- [`useStore`](https://vue-hooks.netlify.com/?path=/story/usestore--docs) &mdash; A hook for [`vuex`](https://github.com/vuejs/vuex).
- [`useState`](https://vue-hooks.netlify.com/?path=/story/usestate--docs) &mdash; A hook for [`mapState`](https://vuex.vuejs.org/api/#mapstate).
- [`useGetters`](https://vue-hooks.netlify.com/?path=/story/usegetters--docs) &mdash; A hook for [`mapGetters`](https://vuex.vuejs.org/api/#mapgetters).
- [`useMutations`](https://vue-hooks.netlify.com/?path=/story/usemutations--docs) &mdash; A hook for [`mapMutations`](https://vuex.vuejs.org/api/#mapmutations).
- [`useActions`](https://vue-hooks.netlify.com/?path=/story/useactions--docs) &mdash; A hook for [`mapActions`](https://vuex.vuejs.org/api/#mapactions).

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feat/new-hook`
3. Commit your changes: `git commit -am 'feat(hooks): add a new hook'`
4. Push to the branch: `git push origin feat/new-hook`
5. Submit a pull request :D

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://qwq.cat"><img src="https://avatars2.githubusercontent.com/u/20062482?v=4" width="100px;" alt="lianghx-319"/><br /><sub><b>u3u</b></sub></a><br /><a href="https://github.com/lianghx-319/vue-hooks/commits?author=lianghx-319" title="Code">💻</a> <a href="https://github.com/lianghx-319/vue-hooks/commits?author=lianghx-319" title="Documentation">📖</a> <a href="#example-lianghx-319" title="Examples">💡</a> <a href="https://github.com/lianghx-319/vue-hooks/commits?author=lianghx-319" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome!

## License

[MIT](./LICENSE)

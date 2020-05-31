import { computed } from '@vue/composition-api';
import VueRouter, { Route } from 'vue-router';
import { getRuntimeVM } from './util/runtime';

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter;
    $route: Route;
  }
}

export default function useRouter() {
  const vm = getRuntimeVM();
  const route = computed(() => vm.$route);
  return { route, router: vm.$router };
}

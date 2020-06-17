import { computed, getCurrentInstance } from '@vue/composition-api';
import VueRouter, { Route } from 'vue-router';

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter;
    $route: Route;
  }
}

export default function useRouter() {
  const vm = getCurrentInstance() as Vue;
  const route = computed(() => vm.$route);
  return { route, router: vm.$router };
}

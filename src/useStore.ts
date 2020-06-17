import { computed, getCurrentInstance } from '@vue/composition-api';
import { Store } from 'vuex';

export default function useStore<TState>() {
  const vm = getCurrentInstance() as Vue;
  const store = computed(() => vm.$store as Store<TState>);
  return store;
}

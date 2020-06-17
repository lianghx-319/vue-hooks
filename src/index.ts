export { default as useDate } from './useDate';
export { default as useWindowSize } from './useWindowSize';
export { default as useCounter } from './useCounter';
export { default as usePrevious } from './usePrevious';
export { default as useStore } from './useStore';
export { default as useState } from './useState';
export { default as useGetters } from './useGetters';
export { default as useMutations } from './useMutations';
export { default as useActions } from './useActions';
export { default as useRouter } from './useRouter';
export { default as useMountedState } from './useMountedState';
export { default as useTimeout } from './useTimeout';
export { default as useMedia } from './useMedia';
export { default as useAsync } from './useAsync';
export { default as useClickAway } from './useClickAway';

// 兼容旧版需要 Vue.use()
export default function install() {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    console.warn('@hanxx/vue-hooks dont need to call Vue.use() anymore');
  }
}

import Vue from 'vue';
import { ref, reactive } from '@vue/composition-api';
import { usePrevious } from '..';
import renderHook from '../util/renderHook';

describe('usePrevious', () => {
  it('should be defined', () => {
    expect(usePrevious).toBeDefined();
  });

  it('should be previous wrapper count', async () => {
    const { vm } = renderHook(() => {
      const count = ref(0);
      const prevCount = usePrevious(count);

      expect(count.value).toBe(0);
      expect(prevCount.value).toBeUndefined();

      count.value += 1;

      return {
        count,
        prevCount,
      };
    });

    await Vue.nextTick();
    expect(vm.count).toBe(1);
    expect(vm.prevCount).toBe(0);

    vm.count -= 1;

    await Vue.nextTick();
    expect(vm.count).toBe(0);
    expect(vm.prevCount).toBe(1);
  });

  it('should be previous state count', async () => {
    const { vm } = renderHook(() => {
      const state = reactive({ count: 0 });
      const prevCount = usePrevious(() => state.count);

      expect(state.count).toBe(0);
      expect(prevCount.value).toBeUndefined();

      state.count += 1;

      return {
        state,
        prevCount,
      };
    });

    await Vue.nextTick();
    expect(vm.state.count).toBe(1);
    expect(vm.prevCount).toBe(0);

    vm.state.count -= 1;

    await Vue.nextTick();
    expect(vm.state.count).toBe(0);
    expect(vm.prevCount).toBe(1);
  });
});

import { watchEffect, ref } from '@vue/composition-api';
import sinon from 'sinon';
import { useClickAway } from '..';
import renderHook from '../util/renderHook';

interface InjectToVm {
  nav: any;
}

describe('useClickAway', () => {
  it('should be defined', () => {
    expect(useClickAway).toBeDefined();
  });

  it('should trigger handler when click div[id=app]', async () => {
    const clickHandler = sinon.stub();
    const wrapper = renderHook<InjectToVm>(() => {
      const { element: nav } = useClickAway(() => {
        clickHandler();
      });

      return {
        nav,
      };
    });

    wrapper.find('#app').trigger('click');

    await wrapper.vm.$nextTick();

    expect(clickHandler.called).toBeTruthy();

    wrapper.vm.$destroy();
  });

  it('should not trigger handler when click nav', async () => {
    const clickHandler = sinon.stub();
    const wrapper = renderHook<InjectToVm>(() => {
      const { element: nav } = useClickAway(() => {
        clickHandler();
      });

      return {
        nav,
      };
    });

    wrapper.find('nav').trigger('click');

    await wrapper.vm.$nextTick();

    expect(clickHandler.called).toBeFalsy();

    wrapper.vm.$destroy();
  });
});

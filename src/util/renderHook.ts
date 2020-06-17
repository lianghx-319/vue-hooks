/* eslint import/no-extraneous-dependencies: off */
import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueCompositionAPI, { defineComponent } from '@vue/composition-api';
import { createRouter, createStore } from '../mocks';

const localVue = createLocalVue();
const router = createRouter(localVue);
const store = createStore(localVue);

localVue.use(VueCompositionAPI);

export default function renderHook<V, Props = unknown, Data = unknown>(setup) {
  const App = defineComponent({
    template: `
      <div ref="app" id="app" :style="{ width: '1280px', height: '800px' }">
        <nav ref="nav" :style="{ width: '100%' }" />
        <router-view />
      </div>
    `,

    setup,
  });

  // @ts-ignore
  return shallowMount<Vue & V>(App, {
    localVue,
    router,
    store,
    stubs: ['router-view'],
    attachToDocument: true,
  });
}

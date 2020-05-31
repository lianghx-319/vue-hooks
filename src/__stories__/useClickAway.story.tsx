/* eslint import/no-extraneous-dependencies: off */
import 'vue-tsx-support/enable-check';
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { defineComponent } from '@vue/composition-api';
import { useCounter, useClickAway } from '..';
import { ShowDocs } from './components';

type Inject = {
  element: string;
  count: number;
};

declare module '@vue/composition-api/dist/component/component' {
  interface SetupContext {
    readonly refs: { [key: string]: Vue | Element | Vue[] | Element[] };
  }
}

const Docs = () => <ShowDocs md={require('../../docs/useClickAway.md')} />;

const Demo = defineComponent({
  setup(props, ctx) {
    const [count, { inc, dec, set, reset }] = useCounter();
    // @ts-ignore
    const { element } = useClickAway(() => inc());
    return {
      element,
      count,
      inc,
      dec,
      set,
      reset,
    };
  },

  render(this: Vue & Inject) {
    const { count } = this;
    return (
      <div>
        click outside the button to increase counter
        <br />
        <button ref="element">count: {count}</button>
      </div>
    );
  },
});

storiesOf('useClickAway', module)
  // @ts-ignore
  .add('docs', () => Docs)
  .add('demo', () => Demo);

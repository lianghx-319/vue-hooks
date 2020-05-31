# useClickAway

Trigger an event when click outside the target element

# Usage

```jsx {8,23}
import { defineComponent } from '@vue/composition-api';
import { useClickAway } from '@hanxx/vue-hooks';

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
```

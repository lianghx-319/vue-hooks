# useAsync

Vue hook for handling async state such as loading, success, error

# Usage

```jsx {13}
import { defineComponent } from '@vue/composition-api';
import { useAsync } from '@hanxx/vue-hooks';
// async function like ajax etc
const sleep = (ms = 0) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('success');
    }, ms);
  });

const Demo = defineComponent({
  setup() {
    const { run, loading, resp, error } = useAsync(sleep, {
      manual: true,
      params: [2000],
    });

    return {
      run,
      loading,
      resp,
      error,
    };
  },

  render(this: Vue & Inject) {
    const { run, loading, resp, error } = this;
    return (
      <div>
        <div>loading state: {loading.toString()}</div>
        <div>resp state: {resp}</div>
        <div style={{ marginTop: '10px' }}>error state: {error}</div>
        <button onClick={() => run(2000)}>
          {loading ? 'loading...' : 'Click to fetch something'}
        </button>
      </div>
    );
  },
});
```

import { computed, getCurrentInstance } from '@vue/composition-api';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import { useState, useGetters, useMutations, useActions } from './interface';

export enum Helper {
  State,
  Getters,
  Mutations,
  Actions,
}

type Helpers = useState | useGetters | useMutations | useActions;

function handleComputed(mappedFn: Function) {
  // TypeError: Cannot read property '_modulesNamespaceMap' of undefined
  // You must get `runtimeVM` in real time in the calculation properties.
  const vm = getCurrentInstance();
  return computed(() => mappedFn.call(vm));
}

function handleMethods<T>(mappedFn: Function): T {
  const vm = getCurrentInstance();
  return mappedFn.bind(vm);
}

const helpers = {
  [Helper.State]: { fn: mapState, handler: handleComputed },
  [Helper.Getters]: { fn: mapGetters, handler: handleComputed },
  [Helper.Mutations]: { fn: mapMutations, handler: handleMethods },
  [Helper.Actions]: { fn: mapActions, handler: handleMethods },
};

export default function createVuexHelper<T extends Helpers>(h: Helper) {
  const helper = helpers[h];

  return ((...args) => {
    // @ts-ignore
    const mapper = (helper.fn as T)(...args);
    const dictionary = {};
    Object.keys(mapper).forEach((key) => {
      dictionary[key] = helper.handler<typeof mapper>(mapper[key]);
    });

    return dictionary;
  }) as T;
}

export * from './interface';

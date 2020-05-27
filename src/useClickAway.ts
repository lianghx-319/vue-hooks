import { Ref, onMounted, onUnmounted, ref } from '@vue/composition-api';

export interface ReturnValue {
  element: Ref<Vue | Element | Vue[] | Element[] | null>;
}

export default function useClickAway(
  onClickAway: (event?: Event) => void,
  dom?: Ref<Vue | Element | Vue[] | Element[]>,
  eventName: keyof DocumentEventMap = 'click',
): ReturnValue {
  const element = dom || ref(null);

  const handler = (event: Event) => {
    // @ts-ignore
    if (!element.value || element.value.contains(event.target)) {
      return;
    }
    onClickAway(event);
  };

  onMounted(() => {
    document.addEventListener(eventName, handler);
  });

  onUnmounted(() => {
    document.removeEventListener(eventName, handler);
  });

  return {
    element,
  };
}

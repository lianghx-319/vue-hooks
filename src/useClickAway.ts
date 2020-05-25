import { Ref, onMounted, ref, onUnmounted } from '@vue/composition-api';

export default function useClickAway<T extends HTMLElement = HTMLDivElement>(
  onClickAway: (event: Event) => void,
  dom?: Ref<T>,
  eventName: keyof DocumentEventMap = 'click',
) {
  const element = dom || ref<T>(null);

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

  return element;
}

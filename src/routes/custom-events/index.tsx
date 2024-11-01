import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Modal } from "@qwik-ui/headless";
import type { SwipedEvent } from "swiped-events";

const images = [
  "https://plus.unsplash.com/premium_photo-1670513725769-a048102828ad?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1670513727240-792add6f13e0?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1729957385579-528ce50ffd94?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1730065983253-5d453442719e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1730369623794-7bf1f2d9e6b8?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default component$(() => {
  const selected = useSignal(0);
  const imgRef = useSignal<HTMLImageElement>();

  const onSwipe = $((e: SwipedEvent) => {
    switch (e.detail.dir) {
      case "left":
        if (selected.value < images.length - 1) {
          selected.value++;
        }
        break;
      case "right":
        if (selected.value > 0) {
          selected.value--;
        }
        break;
      default:
        return;
    }
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    import("swiped-events").then(() => {
      // @ts-expect-error
      imgRef.value?.addEventListener("swiped", onSwipe);
    });

    cleanup(() => {
      // @ts-expect-error
      imgRef.value?.removeEventListener("swiped", onSwipe);
    });
  });

  return (
    <Modal.Root class="wrapper center region">
      <Modal.Trigger class="modal-trigger">Open Lightbox</Modal.Trigger>
      <Modal.Panel class="modal-panel">
        <Modal.Title>Lightbox</Modal.Title>
        <Modal.Description>
          Swipe left and right to view photos.
        </Modal.Description>
        <div>
          <img
            ref={imgRef}
            style={{ objectFit: "contain" }}
            src={images[selected.value]}
            alt=""
            width={640}
            height={480}
          />
        </div>
        <footer class="cluster" style="--cluster-horizontal-alignment: center">
          <button
            disabled={selected.value == 0}
            onClick$={() => selected.value > 0 && selected.value--}
          >
            Prev
          </button>
          <button
            disabled={selected.value === images.length - 1}
            onClick$={() =>
              selected.value < images.length - 1 && selected.value++
            }
          >
            Next
          </button>
        </footer>
      </Modal.Panel>
    </Modal.Root>
  );
});

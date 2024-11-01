import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { animate } from "motion";

const duration = 0.5;

export const ListItem = component$<{
  todo: { value: string; id: number };
  store: Record<string, { id: number }[]>;
}>((props) => {
  const ref = useSignal<HTMLLIElement>();
  // eslint-disable-next-line
  useVisibleTask$(() => {
    if (ref.value) {
      animate(ref.value, {
        opacity: [0, 1],
        x: [-8, 0]
      }, { duration });
    }
  });

  return (
    <li ref={ref} class="cluster" style={{ opacity: 0 }}>
      <span>{props.todo.value}</span>
      <button
        onClick$={async () => {
          if (ref.value) {
            const animation = animate(
              ref.value,
              { opacity: 0, x: 8 },
              { duration }
            );
            animation.finished.then(() => {
              props.store.todos = props.store.todos.filter(
                (t) => t.id !== props.todo.id
              );
            });
          }
        }}
      >
        X
      </button>
    </li>
  );
});

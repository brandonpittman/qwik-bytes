import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { useCSSTransition } from "qwik-transition";

const timeout = 500;

export const ListItem = component$<{
  i: number;
  todo: { hidden: boolean; value: string; id: number };
  store: Record<string, { hidden: boolean }[]>;
}>((props) => {
  const mounted = useSignal(true);
  const { stage, shouldMount } = useCSSTransition(mounted, {
    timeout,
    transitionOnAppear: true,
  });

  // eslint-disable-next-line
  useVisibleTask$(({ track, cleanup }) => {
    track(() => mounted.value);

    cleanup(() => {
      setTimeout(() => {
        props.store.todos = props.store.todos.filter(
          (t) => t.id !== props.todo.id
        );
        console.log(props.store.todos);
      }, timeout);
    });
  });

  if (shouldMount.value) {
    return (
      <li
        class="cluster"
        style={{
          transition: `${timeout}ms opacity ease`,
          opacity: stage.value === "enterTo" ? 1 : 0,
        }}
      >
        <span>{props.todo.value}</span>
        <button
          onClick$={async () => {
            mounted.value = false;
            console.log(props.store);
          }}
        >
          X
        </button>
      </li>
    );
  }
});

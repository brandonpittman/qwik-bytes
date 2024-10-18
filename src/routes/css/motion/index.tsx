// @link: https://motion.dev/docs

import {
  component$,
  useSignal,
  useStore,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import styles from "./index.css?inline";
import { animate, scroll } from "motion";
import { ListItem } from "./li";

export default component$(() => {
  useStyles$(styles);

  const progress = useSignal(0);

  //eslint-disable-next-line
  useVisibleTask$(() => {
    scroll(({ y }) => {
      progress.value = y.progress;
    });

    animate(
      "h1",
      { opacity: [0, 1], y: [-20, 0] },
      { duration: 0.3, easing: "ease-out" }
    );
  });

  const input = useSignal("");
  const inputRef = useSignal<HTMLInputElement>();
  const store = useStore<{
    todos: { value: string; id: number }[];
  }>({
    todos: [],
  });

  return (
    <div>
      <div
        id="progress"
        style={{
          background: "blue",
          color: "white",
          height: "50px",
          position: "fixed",
          insetBlockStart: 0,
          inlineSize: `${progress.value * 100}%`,
          zIndex: 2,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {progress.value >= 1 && "You've reached the bottom!"}
      </div>

      <form preventdefault:submit class="wrapper flow">
        <h1>Motion One</h1>
        <div
          class="cluster w-full"
          style="--cluster-horizontal-alignment: center"
        >
          <input autofocus ref={inputRef} type="text" bind:value={input} />
          <button
            disabled={!input.value}
            onClick$={() => {
              if (input.value) {
                store.todos.push({
                  value: input.value,
                  hidden: false,
                  id: new Date().getTime(),
                });
              }
              input.value = "";
              inputRef.value?.focus();
            }}
          >
            Add todo
          </button>
        </div>

        <ul role="list" class="flow">
          {store.todos.map((t) => (
            <ListItem key={t.id} todo={t} store={store} />
          ))}
        </ul>
      </form>
    </div>
  );
});

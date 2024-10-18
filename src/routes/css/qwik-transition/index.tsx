// @link: https://motion.dev/docs

import {
  $,
  component$,
  useOnDocument,
  useSignal,
  useStore,
  useStyles$,
} from "@builder.io/qwik";
import styles from "./index.css?inline";
import { ListItem } from "./li";

export default component$(() => {
  useStyles$(styles);

  const input = useSignal("");
  const inputRef = useSignal<HTMLInputElement>();
  const store = useStore<{
    todos: { value: string; hidden: boolean; id: number }[];
  }>({
    todos: [],
  });

  return (
    <div>
      <form preventdefault:submit class="wrapper flow">
        <h1>Qwik Transition</h1>
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
          {store.todos.map((t, i) => (
            <ListItem key={t.id} i={i} todo={t} store={store} />
          ))}
        </ul>
      </form>
    </div>
  );
});

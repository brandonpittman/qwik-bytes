import {
  $,
  component$,
  useOnDocument,
  useSignal,
  useStore,
  useStyles$,
} from "@builder.io/qwik";
import styles from "./index.css?inline";

export default component$(() => {
  useStyles$(styles);

  const input = useSignal("");
  const inputRef = useSignal<HTMLInputElement>();
  const store = useStore<{
    todos: { value: string; hidden: boolean; id: number }[];
  }>({
    todos: [],
  });

  useOnDocument(
    "transitionend",
    $(() => {
      store.todos = store.todos.filter((t) => !t.hidden);
    })
  );

  return (
    <form preventdefault:submit class="wrapper flow">
      <h1 class="appear">Disappearing Todos</h1>
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
          <li
            key={t.id}
            class="appear cluster"
            hidden={t.hidden ? "hidden" : undefined}
          >
            <span>{t.value}</span>
            <button
              onClick$={async () => {
                store.todos[i].hidden = true;
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
});

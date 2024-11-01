import {
  Fragment,
  Slot,
  component$,
  useStyles$,
  useStylesScoped$,
} from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import indexStyles from "./index.css?inline";
import overrideStyles from "./override.css?inline";
import { textRed } from "~/utilities.module.css";

export const ScopedChild = component$(() => {
  useStylesScoped$(`h2 {color: limegreen}`);
  useStylesScoped$(overrideStyles);

  useStylesScoped$(`
    #useStylesScoped + :global(code) {
      color: red;
    }
    `);

  return (
    <Fragment>
      <h2 id="useStylesScoped">
        <pre>useStylesScoped$</pre>
      </h2>

      <Slot />
    </Fragment>
  );
});

export default component$(() => {
  useStyles$(indexStyles);

  useStyles$(`
    h2 {
      color: rebeccapurple;
    }
    `);

  return (
    <div class="flow">
      <h1>Qwik Styling</h1>

      <h2 id="useStyles">
        <pre>useStyles$</pre>
      </h2>

      <ScopedChild>
        Hello from <code>ScopedChild</code>.
      </ScopedChild>

      <h2 id="useStyles" class={[textRed]}>
        <pre>CSS Modules</pre>
      </h2>

      <a href="/css-imports">CSS Imports</a>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

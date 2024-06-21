import { component$, useStyles$, useStylesScoped$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import indexStyles from "./index.css?inline";
import overrideStyles from "./override.css?inline";

// export const useLoader = routeLoader$(({ redirect }) => {
//   throw redirect(307, "/hello");
// });

export const ScopedChild = component$(() => {
  // useStylesScoped$(`h2 {color: limegreen}`);
  // useStylesScoped$(overrideStyles);

  return (
    <h2 id="useStylesScoped">
      <pre>useStylesScoped$</pre>
    </h2>
  );
});

export default component$(() => {
  // useStyles$(indexStyles);

  // useStyles$(`
  //   h2 {
  //     color: rebeccapurple;
  //     // --space-flow: var(--space-l);
  //   }
  //   `);

  return (
    <div class="flow">
      <h1>Qwik Styling</h1>

      <h2 id="useStyles">
        <pre>useStyles$</pre>
      </h2>

      <ScopedChild />
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

import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MUIButton, MUISlider, TableApp } from "~/integrations/react/mui";
import { QGreetings, QHeading } from "~/integrations/react/test";

export default component$(() => {
  const show = useSignal(false);
  const count = useSignal(0);
  const variant = useSignal<"contained" | "outlined" | "text">("contained");
  const greeting = useSignal("Hello");

  return (
    <div class="wrapper flow">
      <div class="flow" style="--space-flow: 2rem">
        <div>
          <QHeading client:load>{greeting.value}</QHeading>
        </div>
        <div>
          <QGreetings
            client:load
            value={greeting.value}
            onChange$={(e) => {
              console.log(e);
              greeting.value = e.target.value;
            }}
          />
        </div>
      </div>

      <div
        class="flow"
        style={{ marginBlockStart: "10rem", "--space-flow": "2rem" }}
      >
        <h2>Qwik/React/MUIdemo</h2>
        <select
          value={variant.value}
          onChange$={(ev) => {
            variant.value = (ev.target as any).value;
          }}
        >
          <option>text</option>
          <option>outlined</option>
          <option selected>contained</option>
        </select>

        <MUISlider
          client:hover
          value={count.value}
          onChange$={(_, value) => {
            count.value = value as number;
          }}
        />

        <div class="cluster">
          <MUIButton
            client:hover
            variant={variant.value}
            host:onClick$={() => alert(`Slider is at ${count.value}`)}
          >
            Slider is {count.value}
          </MUIButton>

          <button onClick$={() => (show.value = !show.value)}>
            Toggle table
          </button>
          {show.value && (
            <TableApp client:visible>Slider is {count.value}</TableApp>
          )}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik React",
};

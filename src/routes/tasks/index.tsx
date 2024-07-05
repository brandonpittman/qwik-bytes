import {
  component$,
  useSignal,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";

const Task = component$(() => {
  const countSig = useSignal(0);

  useTask$(() => {
    console.log("Initial useTask$");
  });

  useTask$(({ track }) => {
    track(() => countSig.value);
    console.log("useTask$", countSig.value);
  });

  return (
    <div>
      <pre>useTask$ {countSig.value}</pre>
      <button onClick$={() => countSig.value++}>Increment</button>
    </div>
  );
});

const VisibleTask = component$(() => {
  const countSig = useSignal(0);

  // eslint-disable-next-line
  useVisibleTask$(() => {
    console.log("Initial useVisibleTask$");
  });

  // eslint-disable-next-line
  useVisibleTask$(({ track }) => {
    track(() => countSig.value);
    console.log("useVisibleTask$", countSig.value);
  });

  return (
    <div>
      <pre>useVisibleTask$ {countSig.value}</pre>
      <button onClick$={() => countSig.value++}>Increment</button>
    </div>
  );
});

export default component$(() => {
  return (
    <div class="flow" style="--space-flow: 4rem">
      <Task />
      <VisibleTask />
    </div>
  );
});

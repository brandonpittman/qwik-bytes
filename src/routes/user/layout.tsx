import { Slot, component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useLoader = routeLoader$(({ params }) => {
  return params.id;
});

export default component$(() => {
  const id = useLoader();

  return (
    <>
      <h1>User: {id.value}</h1>
      <Slot />
    </>
  );
});

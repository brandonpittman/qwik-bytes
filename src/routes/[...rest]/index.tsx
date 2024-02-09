import { component$ } from "@builder.io/qwik";
import { Greeting } from "~/components/greeting/greeting";

export default component$(() => {
  return (
    <div>
      <Greeting />
      <p>You tried a route that doesn't exist.</p>
    </div>
  );
});

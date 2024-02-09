import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { useLoader } from "../layout";
import { Greeting } from "~/components/greeting/greeting";

export default component$(() => {
  const id = useLoader();

  useStylesScoped$(`
    p { text-align: center}`);

  return <Greeting name={id.value} />;
});

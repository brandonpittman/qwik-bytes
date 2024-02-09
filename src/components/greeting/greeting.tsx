import { component$ } from "@builder.io/qwik";

export type GreetingProps = {
  name?: string;
};

export const Greeting = component$<GreetingProps>((props) => {
  return props.name ? <p>Hello, {props.name}!</p> : <p>Hello!</p>;
});

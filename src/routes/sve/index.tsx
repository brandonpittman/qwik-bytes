import { component$ } from "@builder.io/qwik";
import { Container, Heading, ModifiedHeading } from "./styles.css";

export default component$(() => {
  return (
    <Container>
      <Heading>
        <pre>styled-vanilla-extract</pre>
      </Heading>

      <ModifiedHeading>Modified Heading</ModifiedHeading>
    </Container>
  );
});

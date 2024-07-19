import { globalStyle } from "@vanilla-extract/css";
import { styled } from "styled-vanilla-extract/qwik";

export const Container = styled.main({
  backgroundColor: "skyblue",
  blockSize: "100vh",
  inlineSize: "100vw",
});

globalStyle(`body:has(${Container.class})`, {
  padding: 0,
});

export const Heading = styled.h1({
  fontSize: "2rem",
  color: "darkblue",
  paddingBlock: "1em",
});

globalStyle(`${Container.class} *`, {});

export const ModifiedHeading = styled.h2([
  Heading,
  {
    color: "red",
    textAlign: "center",
  },
]);

// This pragma is required so that React JSX is used instead of Qwik JSX
/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import type { ChangeEventHandler, ReactNode } from "react";

const Heading = ({ children }: { children?: ReactNode[] }) => {
  return (
    <h1>
      {children} from <code>qwik-react</code>!
    </h1>
  );
};

const Greetings = ({
  value,
  onChange,
}: {
  value: string;
  onChange: ChangeEventHandler;
}) => {
  return (
    <div className="flow">
      <input
        type="text"
        defaultValue={value}
        className="center"
        onChange={onChange}
      />
    </div>
  );
};

// Qwik component wrapping the React component
export const QGreetings = qwikify$(Greetings);
export const QHeading = qwikify$(Heading);

import React from "react";
import Helmet from "react-helmet";
import { createGlobalStyle } from "styled-components";
import "reset.css";
import "what-input";

const Globals = createGlobalStyle`
html, body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

// Box sizing
*, *:before, *:after {
    box-sizing: border-box;
}

// Android applies some styles to buttons by default.
button {
    background: none;
    appearance: none;
    border: 0;
    padding: 0;
}

button, [role="button"] {
    cursor: pointer;
}


// Used in combo with 'what-input'. Prevents outlines unless focus was applied by keyboard navigability.
[data-whatinput='mouse'] :focus,
[data-whatinput='touch'] :focus {
    outline: none;
}
`;

interface Props {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({
  children
}: Props): React.ReactElement => (
  <React.Fragment>
    <Helmet>
      <html lang="en" />
      <title>Password Policy Generator</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <Globals />
    {children}
  </React.Fragment>
);

export default Layout;

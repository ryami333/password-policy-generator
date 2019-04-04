import React from "react";
import Helmet from "react-helmet";
import { createGlobalStyle } from "styled-components";
import "reset.css";
import "what-input";

const Globals = createGlobalStyle`
:root {
  --orange: #f77754;
  --teal: #018790;
  --blue: #0a516d;
  --granite: #2b2726;
  --cream: #fffeec;

  --size1: calc(8 / 1680 * 100vw);
  --size2: calc(16 / 1680 * 100vw);
  --size3: calc(24 / 1680 * 100vw);
  --size4: calc(32 / 1680 * 100vw);
  --size5: calc(40 / 1680 * 100vw);
  --size6: calc(80 / 1680 * 100vw);
  --size7: calc(160 / 1680 * 100vw);

  @media (max-width: 1024px) {
    --size1: calc(8 / 1024 * 100vw);
    --size2: calc(16 / 1024 * 100vw);
    --size3: calc(24 / 1024 * 100vw);
    --size4: calc(32 / 1024 * 100vw);
    --size5: calc(40 / 1024 * 100vw);
    --size6: calc(80 / 1024 * 100vw);
    --size7: calc(160 / 1024 * 100vw);
  }

  @media (max-width: 768px) {
    --size1: calc(8 / 768 * 100vw);
    --size2: calc(16 / 768 * 100vw);
    --size3: calc(24 / 768 * 100vw);
    --size4: calc(32 / 768 * 100vw);
    --size5: calc(40 / 768 * 100vw);
    --size6: calc(80 / 768 * 100vw);
    --size7: calc(160 / 768 * 100vw);
  }

  @media (max-width: 420px) {
    --size1: calc(8 / 420 * 100vw);
    --size2: calc(16 / 420 * 100vw);
    --size3: calc(24 / 420 * 100vw);
    --size4: calc(32 / 420 * 100vw);
    --size5: calc(40 / 420 * 100vw);
    --size6: calc(80 / 420 * 100vw);
    --size7: calc(160 / 420 * 100vw);
  }

  --lineHeightMin: 1;
  --lineHeightMed: 1.1;
  --lineHeightMax: 1.3;

  --color: var(--granite);
  --lineHeight: var(--lineHeightMed);

  --fontFamilyHeading: Oswald;
  --fontWeightHeading: lighter;

  --fontFamilyBody: Lato;
  --fontWeightBody: normal;

  --color: var(--granite);
  --fontSize: var(--size3);
  --lineHeight: var(--lineHeightMed);
  --fontFamily: var(--fontFamilyBody);
  --fontWeight: var(--fontWeightBody);
}

html, body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-color: var(--orange);
}

body {
  padding: var(--size6) var(--size2);
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
      <link
        href="https://fonts.googleapis.com/css?family=Lato|Oswald"
        rel="stylesheet"
      />
    </Helmet>
    <Globals />
    {children}
  </React.Fragment>
);

export default Layout;

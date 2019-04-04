import styled, { css } from "styled-components";
import { Link as GatsbyLink } from "gatsby";

const primitives = css`
  color: var(--color, currentColor);
  font-size: var(--fontSize);
  line-height: var(--lineHeight);
  font-family: var(--fontFamily);
  font-style: var(--fontStyle, normal);
  font-weight: var(--fontWeight, normal);
`;

export const Span = styled.span`
  ${primitives};
`;

export const P = styled.p`
  ${primitives};
`;

export const Ul = styled.ul`
  ${primitives};
  list-style: disc inside;
`;

export const Li = styled.li`
  ${primitives};
`;

export const Label = styled.label`
  ${primitives};
`;

export const Button = styled.button`
  background-color: var(--granite);
  color: var(--orange);
  padding: var(--size2) var(--size3);
  outline: none;
  border: none;
  font-size: var(--size3);
  border-radius 3px;
  // font-family: 'todo';
  cursor: pointer;
`;

const linkStyles = css`
  ${primitives};
  text-decoration: none;

  &:hover,
  &:link,
  &:active,
  &:visited {
    color: var(--color);
  }
`;

const headingStyles = css`
  ${primitives};
  --fontFamily: var(--fontFamilyHeading);
  --fontWeight: var(--fontWeightHeading);
`;

export const H1 = styled.h1`
  ${headingStyles};
  --fontSize: var(--size5);
}
`;

export const H2 = styled.h2`
  ${headingStyles};
  --fontSize: var(--size4);
}
`;

export const H3 = styled.h3`
  ${headingStyles};
  --fontSize: var(--size3);
}
`;

export const A = styled.a`
  ${linkStyles};

  //
`;

export const Link = styled(GatsbyLink)`
  ${linkStyles};

  //
`;

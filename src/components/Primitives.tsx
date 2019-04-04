import styled, { css } from "styled-components";
import { Link as GatsbyLink } from "gatsby";

const primitives = css`
  color: var(--color, currentColor);
  font-size: var(--fontSize);
  line-height: var(--lineHeight);
  font-family: var(--fontFamily);
  font-style: var(--fontStyle);
  font-weight: var(--fontWeight);
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
  color: var(--cream);
  padding: var(--size2) var(--size2);
  outline: none;
  border: none;
  font-size: var(--size3);
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

export const A = styled.a`
  ${linkStyles};

  //
`;

export const Link = styled(GatsbyLink)`
  ${linkStyles};

  //
`;

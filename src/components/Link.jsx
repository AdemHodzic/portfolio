import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled.a`
  width: 100%;
  ${tw('shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white')};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`;

const Link = (link, name) => (
    <Wrapper href={link} target="_blank" rel="noopener noreferrer" >{name}</Wrapper>
);

export default Link
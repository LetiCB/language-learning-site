import styled from 'styled-components';

export const BreadcrumbContainer = styled.nav`
  margin: 1.3rem;

  ol {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 0.5rem;
  }

  li {
    font-size: 0.9rem;
    margin-right: 0.5rem;
    text-transform: capitalize;
  }

  li:hover {
    background-color: #f9ecec;
    color: #ab1c1c;
  }

  li:not(:last-child)::after {
    content: ">";
    margin-left: 0.5rem;
    color: #ab1c1c;
  }

  a {
    color: #6d4b5f;
  }
`;
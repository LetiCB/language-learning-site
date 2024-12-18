import styled from "styled-components";

export const DropdownContainer = styled.div`
    margin-left: 0.5rem;
    position: relative;
    display: inline-block;
    cursor: pointer;
`;

export const SelectedLanguage = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    color: #ab1c1c;
    font-weight: 700;
`;

export const Chevron = styled.span<{ isOpen: boolean }>`
    display: inline-block;
    margin-left: 0.3rem;
    color: #ab1c1c;
    font-size: 0.8rem;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
    transition: transform 0.2s ease;
`;

export const DropdownMenu = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    list-style: none;
    margin: 0.9rem 0;
    padding: 0.7rem;
    border-radius: 5px;
    overflow: hidden;
    z-index: 10;
`;

export const DropdownItem = styled.li`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: #333;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;

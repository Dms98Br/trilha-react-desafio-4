import styled from 'styled-components';

interface ButtonProps {
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
}

export const ButtonContainer = styled.button<ButtonProps>`
  width: 100%;
  height: 42px;
  background-color: ${props => (props.disabled ? '#ccc' : '#81259D')};
  color: #FFF;
  border: 1px solid #81259D;
  border-radius: 21px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    opacity: ${props => (props.disabled ? '1' : '0.6')};
  }
`;
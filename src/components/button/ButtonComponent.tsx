import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from 'styled-components';

export interface ButtonProps {
  onClick: () => void;
  variant: string;
}

export interface StyledButtonProps extends ButtonProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  buttonConfig: { [key: string]: any };
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => props.buttonConfig['background'][props.variant]};
  color: ${(props) => props.buttonConfig['textColor'][props.variant]};
  border-radius: ${props => props.buttonConfig['borderRadius']};
  border: 1px solid ${(props) => props.buttonConfig['background'][props.variant]};
  height: ${props => props.buttonConfig['height']};
  min-width: ${props => props.buttonConfig['minWidth']};
`;

const ButtonComponent: React.FC<ButtonProps> = ({ variant, onClick, children, ...props}) => {
  const { buttons } = useContext(ThemeContext);
  return (
    <StyledButton
      variant={variant}
      buttonConfig={buttons}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonComponent;

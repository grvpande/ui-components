import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

export interface StyledCardProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cardConfig: { [key: string]: any };
}

const StyledCard = styled.div<StyledCardProps>`
    ${(props) =>
        props.cardConfig["border"]
            ? `border:${props.cardConfig["border"]};`
            : ""}
    ${(props) =>
        props.cardConfig["borderRadius"]
            ? `border-radius:${props.cardConfig["borderRadius"]};`
            : ""}
  	${(props) =>
        props.cardConfig["boxShadow"]
            ? `box-shadow:${props.cardConfig["boxShadow"]};`
            : ""}
	padding: ${(props) => props.cardConfig["padding"]}
`;

const CardComponent: React.FC = ({ children }) => {
    const { cards } = useContext(ThemeContext);
    return <StyledCard cardConfig={cards}>{children}</StyledCard>;
};

export default CardComponent;

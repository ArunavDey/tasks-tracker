import React from "react";
import { NavigationBarContainer } from "./NavigationBar.style";

interface INavigationBar {
    header: string
}

const NavigationBar: React.FC<INavigationBar> = (props) => {
    const { header } = props;
    return <NavigationBarContainer>{header}</NavigationBarContainer>
}

export default NavigationBar;
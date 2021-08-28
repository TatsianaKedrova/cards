import React from 'react';
import {HeaderContainer, HeaderWrapper, LogoImg, LogoLinkBlock, LogoText, MenuNavLink} from "./headerStyle";
import logo from '../../../images/logo.png'
import {FlexRowCenter, Button} from '../commonStyle';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <LogoLinkBlock>
                    <LogoImg src={logo} alt="logo"/>
                    <LogoText>Cards</LogoText>
                </LogoLinkBlock>
                <FlexRowCenter>
                    <MenuNavLink to='/login'>Log in</MenuNavLink>
                    <MenuNavLink to="/signup">Sign up</MenuNavLink>
                    <MenuNavLink to="/forgotPassword">Forgot</MenuNavLink>
                    <MenuNavLink to="/set-new-password/:token">New password</MenuNavLink>
                    <MenuNavLink to="/profile">Profile</MenuNavLink>
                    <Button as={NavLink} to='/signup' color={"blue"}>Sign up</Button>
                </FlexRowCenter>
            </HeaderContainer>
        </HeaderWrapper>
    )
}

export default Header;

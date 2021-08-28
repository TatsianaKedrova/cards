import styled from 'styled-components';
import {BlockWrapper, ContainerWrapper, FlexRowCenter} from "../commonStyle";
import {NavLink} from "react-router-dom";

export const HeaderWrapper = styled(BlockWrapper)`
    background-color: #32cdff;
    box-shadow: 0 3px 5px rgba(0,0,0,.05);
    height: 60px;
`;
export const HeaderContainer = styled(ContainerWrapper)`
    justify-content: space-between;
`;
export const LogoLinkBlock = styled(FlexRowCenter)`
    cursor: pointer;
    text-decoration: none;
`;
export const LogoImg = styled.img`
    height: 44px;
    width: 44px;
    margin-right: 5px;
`;
export const LogoText = styled.span`
    font-family: 'Arial';
    font-size: 30px;
    color: #fff;
    text-transform: lowercase;
`;
export const MenuNavLink = styled(NavLink)`
    font-family: 'Arial';
    font-size: 15px;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    margin-top: 6px;
    margin-right: 40px;
    opacity: .8;
    cursor: pointer;
    
    &:hover {
        opacity: 1;
        border-bottom: 2px solid #fff;
        padding-top: 2px;
    }
`;

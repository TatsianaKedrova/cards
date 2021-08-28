import styled from 'styled-components';
import React from "react";

export const H3 = styled.h3`
  font-size: 21px;
  text-align: center;
  color: #5c5c5c;
`;

export const H2 = styled.h2`
  font-size: 16px;
  text-align: center;
  color: rgba(142,159,255,0.81);
  cursor: pointer;  
`;

export const Span = styled.p`
    //font-size: ${props => props.sizze==="little" ? "15px" : "18px"};
  font-size: 15px;
  text-align: center;
  color: #898989;
`;

export const BlockWrapper = styled.div`
    margin-bottom: 20px;
    width: 100%;
`;
export const FlexRowCenter = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const FormWrapper = styled.div`
  form{
    margin: 2vw 0 0;
    display:flex;
    flex-direction:column;
    align-items:center;
  }
`;


export const FlexColumnCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  
`;

export const ContainerWrapper = styled(FlexRowCenter)`
    margin: 0 auto;
    width: 1024px;
`;
const Link = ({ className, children }) => (
    <a className={className}>
        {children}
    </a>
);
export const Button = styled.button`
    font-family: 'Arial';
    font-size: 15px;
    padding: 13px 25px 13px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;    
    background: ${props => props.color==="yellow" ? "white" : "blue"};
    color: ${props => props.color==="yellow" ? "#32cdff" : "white"};
    text-transform: ${props => props.color==="yellow" ? "uppercase" : "normal"};
    
    &:hover {
        filter: brightness(65%);
    }
    &:focus {
        outline: none;
    }
`;

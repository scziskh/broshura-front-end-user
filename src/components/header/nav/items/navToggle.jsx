import React from 'react';
import styled from 'styled-components';

const NavToggle = () => {
  return (
    <>
      <Input id="navToggle" type="checkbox" />
      <Label htmlFor="navToggle">
        <span></span>
      </Label>
    </>
  );
};

const Input = styled.input`
  & {
    display: none;
  }
  &:checked ~ ul {
    background-color: var(--black);
    visibility: visible;
    right: 0;
  }
  &:checked ~ label {
    span {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      &::before {
        top: 0;
        -webkit-transform: rotate(0);
        transform: rotate(0);
      }
      &::after {
        top: 0;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
      }
    }
  }
`;

const Label = styled.label`
  @media screen and (max-width: 980px) {
    & {
      background: var(--yellowGrad);
      display: flex;
      align-items: center;
      position: absolute;
      top: 18px;
      right: 18px;
      width: 40px;
      height: 40px;
      cursor: pointer;
      z-index: 100;
      border-radius: 10px;
      span,
      span::before,
      span::after {
        display: block;
        position: absolute;
        left: 7.5px;
        width: 25px;
        height: 2px;
        background-color: var(--black);
        transition-duration: var(--transition);
      }
      span::before {
        left: 0;
        content: '';
        top: -8px;
      }
      span::after {
        left: 0;
        content: '';
        top: 8px;
      }
    }
  }
`;
export default NavToggle;

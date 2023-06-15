import styled, { css } from "styled-components"

export const Boxss = styled.div`
  background: ##fffffb;
  border: 1px solid #a5acae;
  border-radius: 10px;
`

export const Input = styled.input`
  width: 100%;
  margin-bottom: 5px;
  border: none;
  background: #37474f;
  height: 35px;
  padding: 0 15px;
  border-radius: 4px;
  color: #cfd8dc;
`

export const ButtonsContainerss = styled.div`
  font-size: 0;
`

export const Buttonss = styled.button`
  width: calc(33.33% - 10px);
  // height: 50px;
  font-size: 14px;
  background: transparent;
  border: none;
  color: #cfd8dc;
  padding: 10px 0;
  text-align: center;
  cursor: pointer;
  // border-right: 1px solid #a5acae;

  &:hover {
    color: #fff;
  }

  &:nth-child(3n - 1) {
    margin: 0 15px;
  }
`

export const CallButton = styled.button`
  margin-top: 5px;
  background: #8bc34a;
  color: #fff;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  text-align: center;
  border: none;
  cursor: pointer;

  &:hover {
    background: #7cb342;
  }
`

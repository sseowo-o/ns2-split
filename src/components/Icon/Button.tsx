import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 45px;
  flex: 1 0 0;
  border-radius: 4px;

  &.cancel {
    border: 1px solid #cfcfcf;
  }

  &.confirm {
    background: #00838f;
    border: 1px solid #00838f;
    color: #fff;
  }
  &.none {
    color: #757575;
    height: auto;
    padding: 8px 0;
  }
`;

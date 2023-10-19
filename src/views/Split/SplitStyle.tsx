import styled from "@emotion/styled";

export const SplitRange = styled.div`
  padding: 16px;
  background: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

export const SplitDate = styled.div`
  font-family: Noto Sans KR;
  margin-top: 8px;
  font-size: 1.2rem;
`;

export const NoteDate = styled.div`
  display: flex;
  justify-content: space-between;
  & span {
    font-size: 1.4rem;
    color: #757575;
    margin-top: 8px;
  }
`;

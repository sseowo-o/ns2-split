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
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-top: 8px;
  color: #757575;
`;

export const Modal = styled.div`
  background: #fff;
  broder-radius: 10px 10px 0 0;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  position: absolute;
  bottom: 0;
  width: 100%;

  & h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
  }
`;
export const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  & .bookImgWrap {
    height: 203px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    & .bookImg {
      display: flex;
      flex-direction: column;
      align-items: center;
      & .book {
        width: 123px;
        height: 185px;
        background: #ddd;
      }
    }
  }

  & .line {
    display: inline-block;
    width: 100%;
    height: 1px;
    background: #dcdcdc;
  }
  & .info {
    & .infoTit {
      display: flex;
      justify-content: space-between;

      & h3 {
        font-size: 17px;
      }
    }

    & .infoCont {
      font-size: 13px;
      color: #757576;
      margin-top: 8px;
    }
  }
`;
export const ModalButton = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

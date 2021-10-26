import styled from "styled-components";
import { GrayBlock } from "../../index.styled";

export const Container = styled(GrayBlock)`
  padding: 30px;
  max-width: 620px;
  margin: 0 auto;
`;

export const Form = styled.form`
  padding: 30px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 25px;
`;

export const InputContainer = styled(GrayBlock)`
  padding: 20px 30px;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  opacity: 0.4;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

export const Button = styled.button`
  border: 1px solid #00a3ff;
  box-sizing: border-box;
  backdrop-filter: blur(20px);
  border-radius: 30px;
  padding: 25px 40px;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #00a3ff;
  min-width: 220px;
  transition: 300ms;
  &:hover {
    background-color: #00a3ff;
    color: #fff;
  }
`;

export const AdditionalBlock = styled.div`
  margin-top: 30px;
  text-align: center;
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 15px;
  line-height: 167%;
  color: #ffffff;
  opacity: 0.3;
  margin: 0;
`;

export const Switch = styled.div`
  a {
    font-weight: 500;
    font-size: 15px;
    line-height: 167%;
    color: #00a3ff;
  }
`;

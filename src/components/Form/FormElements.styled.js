import styled from '@emotion/styled';

const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;

  height: 25px;
  min-width: 250px;
  padding: 7px;

  border-radius: 20px;
  border: 2px solid black;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-left: auto;
  padding: 7px;

  border: none;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  &: hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -5px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    transform: scale(1.05);
  }
`;

export { Input, Button, FormEl, Section };

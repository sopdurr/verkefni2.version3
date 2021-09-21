import styled from 'styled-components';

const NumberInput = ({ amount, onChange }) => {
  const Input = styled.input`
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    ::placeholder {
      color: palevioletred;
    }
  `;

  return (
    <div>
      <Input
        type='number'
        value={amount}
        placeholder='Number'
        onChange={onChange}
      />
    </div>
  );
};

export default NumberInput;

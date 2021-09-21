import styled from 'styled-components';

const NameInput = ({ name, onChange, className }) => {
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
    <div className={className}>
      <Input type='text' placeholder='Name' value={name} onChange={onChange} />
    </div>
  );
};

export default NameInput;

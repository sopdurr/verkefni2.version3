import styled from 'styled-components';

const ButtonList = ({ onAdd }) => {
  const Button = styled.button`
    margin: 10px;
    width: 240px;
    height: 40px;
    font-weight: 10em;
    border: none;
    border-radius: 3px;
    font-size: 18px;
    background-color: palevioletred;
    color: papayawhip;
  `;

  return (
    <Button type='button' onClick={onAdd}>
      Add
    </Button>
  );
};

export default ButtonList;

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { ButtonList, NameInput, NumberInput, TheList } from '../index';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: inline-block;
  border: 2px solid white;
  height: 300px;
  width: 260px;
  border-radius: 5px;
  margin: 20px 0px 0px 10px;
`;

const Stats = styled.div`
  margin: 10px;
  font-size: 18px;
  color: papayawhip;
`;

const initList = [];

const theInput = ({ className }) => {
  const [list, setList] = useState(initList);
  const [name, setName] = useState('');
  const data = {
    amount: '',
    sum: 0,
  };
  const [state, setState] = useState(data);
  const { amount, sum } = state;

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const changeNumber = (event) => {
    setState({
      ...state,
      amount: parseInt(event.target.value),
    });
  };

  const addToList = (e) => {
    const newList = list.concat({ name, amount, id: uuidv4() });
    setList(newList);
    setName('');
    setState({ ...state, amount, sum: amount + sum });
  };

  const handleClick = (id) => {
    setList(list.filter((item) => item.id !== id));
    const removeItem = list.filter((item) => item.id === id);
    setState({
      ...state,
      array: list,
      sum: sum - removeItem[0].amount,
    });
  };

  const clearInputs = () => {
    setState({
      ...state,
      amount: '',
      name: '',
    });
  };

  useEffect(() => {
    clearInputs();
  }, [sum]);

  return (
    <Center className={className}>
      <Wrapper>
        <NameInput name={name} onChange={(event) => handleChange(event)} />
        <NumberInput
          amount={amount}
          onChange={(event) => changeNumber(event)}
        />
        <ButtonList onAdd={addToList} />
        <hr />
        <Stats>
          STATS
          <div>Sum: {sum}</div>
          <div>Counter: {list.length}</div>
        </Stats>
      </Wrapper>
      <TheList list={list} onClick={handleClick} />
    </Center>
  );
};

export default theInput;

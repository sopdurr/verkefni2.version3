import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initList = [];

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


  export default data;
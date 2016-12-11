import React from 'react';

const ListItem = (props) => (
  <li onClick={(e) => console.log(e.target.innerText)} >
    {props.value}
  </li>
);

const NumberList = (props) => {
  const numbers = props.numbers;
  const listItem = numbers.map(number =>
    <ListItem key={number.toString()}
              value={number} />
  );
  return(
    <ul>
      {listItem}
    </ul>
  );
}

export default NumberList;

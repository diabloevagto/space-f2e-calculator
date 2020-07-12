import React from 'react';
import styled from 'styled-components';

import useVisible from 'src/hooks/useVisible';

import CalculatorModal from './CalculatorModal.js';

const Button = styled.button`
  font-size: 2rem;
  padding: 0.5rem;
`;

export default React.memo((props) => {
  const [visible, toggle] = useVisible();

  return (
    <>
      <Button onClick={toggle}>計算機</Button>
      <CalculatorModal visible={visible} toggle={toggle} />
    </>
  );
});

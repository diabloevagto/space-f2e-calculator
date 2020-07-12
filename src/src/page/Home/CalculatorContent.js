import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import styled, { css } from 'styled-components';

import calculatorRedux from 'src/store/modules/calculator';

const Content = styled.div`
  background-image: linear-gradient(to bottom, #84baff, #0b0e1c);

  display: grid;
  grid-template-rows: ${(props) => `repeat(7, ${props.blockSize}px)`};
  grid-template-columns: ${(props) => `repeat(4, ${props.blockSize}px)`};
  grid-template-areas:
    'expression expression expression expression'
    'result result result result'
    'ac positive-negative percentage divide'
    'num-7 num-8 num-9 multiply'
    'num-4 num-5 num-6 sub'
    'num-1 num-2 num-3 add'
    'num-0 num-0 dot equal';

  > .gray {
  }

  ${css`
    ${(props) =>
      props.blockList.map(
        (v) => `
      > #${v} {
        grid-area: ${v};
        
      }
    `,
      )}
  `}

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${(props) => `${props.blockSize * 0.1}px`};
    font-size: ${(props) => `${props.blockSize * 0.3}px`};
    border-radius: ${(props) => `${props.blockSize * 0.5}px`};

    &:active {
      color: red;
    }
  }

  > #result,
  #expression {
    justify-content: flex-end;
    padding-right: ${(props) => `${props.blockSize * 0.1}px`};
    font-size: ${(props) => `${props.blockSize * 0.7}px`};
  }

  > #num-0 {
    justify-content: flex-start;
    padding-left: ${(props) => `${props.blockSize * 0.35}px`};
  }

  > .font-white {
    color: #fff;
  }

  > .gray-circle {
    background-color: #afafaf;
  }

  > .blue-circle {
    background-color: #3091fd;
  }

  > .dark-circle {
    background-color: #333333;
  }
`;

export default React.memo((props) => {
  const {
    size: { height, width },
  } = props;

  const calculatorStore = useSelector((state) => state.calculator);

  const dispatch = useDispatch();
  const blockSize = Math.max(height / 7 || 0, width / 4 || 0);
  const blockList = [
    'expression',
    'result',
    'ac',
    'positive-negative',
    'percentage',
    'add',
    'sub',
    'multiply',
    'divide',
    'equal',
    'num-1',
    'num-2',
    'num-3',
    'num-4',
    'num-5',
    'num-6',
    'num-7',
    'num-8',
    'num-9',
    'num-0',
    'dot',
  ];

  const onClick = (operators) => {
    dispatch(calculatorRedux.action.ADD_OPERATOR(operators));
  };

  return (
    <Content blockSize={blockSize} blockList={blockList}>
      <div className="font-white" id="expression">
        {calculatorStore.expression}
      </div>
      <div className="font-white" id="result">
        {calculatorStore.currentVal}
      </div>
      {/*  */}
      <div className="gray-circle" id="ac" onClick={() => onClick('ac')}>
        AC
      </div>
      {/* <div
        className="gray-circle"
        id="positive-negative"
        onClick={() => onClick('+/-')}
      >
        +/-
      </div>
      <div className="gray-circle" id="percentage" onClick={() => onClick('%')}>
        %
      </div> */}
      {/*  */}
      <div
        className="font-white blue-circle"
        id="add"
        onClick={() => onClick('+')}
      >
        +
      </div>
      <div
        className="font-white blue-circle"
        id="sub"
        onClick={() => onClick('-')}
      >
        -
      </div>
      <div
        className="font-white blue-circle"
        id="multiply"
        onClick={() => onClick('*')}
      >
        ×
      </div>
      <div
        className="font-white blue-circle"
        id="divide"
        onClick={() => onClick('/')}
      >
        ÷
      </div>
      <div
        className="font-white blue-circle"
        id="equal"
        onClick={() => onClick('=')}
      >
        =
      </div>
      {/*  */}
      <div
        className="font-white dark-circle"
        id="num-1"
        onClick={() => onClick('1')}
      >
        1
      </div>
      <div
        className="font-white dark-circle"
        id="num-2"
        onClick={() => onClick('2')}
      >
        2
      </div>
      <div
        className="font-white dark-circle"
        id="num-3"
        onClick={() => onClick('3')}
      >
        3
      </div>
      <div
        className="font-white dark-circle"
        id="num-4"
        onClick={() => onClick('4')}
      >
        4
      </div>
      <div
        className="font-white dark-circle"
        id="num-5"
        onClick={() => onClick('5')}
      >
        5
      </div>
      <div
        className="font-white dark-circle"
        id="num-6"
        onClick={() => onClick('6')}
      >
        6
      </div>
      <div
        className="font-white dark-circle"
        id="num-7"
        onClick={() => onClick('7')}
      >
        7
      </div>
      <div
        className="font-white dark-circle"
        id="num-8"
        onClick={() => onClick('8')}
      >
        8
      </div>
      <div
        className="font-white dark-circle"
        id="num-9"
        onClick={() => onClick('9')}
      >
        9
      </div>
      <div
        className="font-white dark-circle"
        id="num-0"
        onClick={() => onClick('0')}
      >
        0
      </div>
      <div
        className="font-white dark-circle"
        id="dot"
        onClick={() => onClick('.')}
      >
        .
      </div>
    </Content>
  );
});

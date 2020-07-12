import React from 'react';
import styled, { css } from 'styled-components';

const Content = styled.div`
  background-image: linear-gradient(to bottom, #84baff, #0b0e1c);

  display: grid;
  grid-template-rows: ${(props) => `repeat(7, ${props.blockSize}px)`};
  grid-template-columns: ${(props) => `repeat(4, ${props.blockSize}px)`};
  grid-template-areas:
    '. . . .'
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
  }

  > #result {
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

  const blockSize = Math.max(height / 7 || 0, width / 4 || 0);
  const blockList = [
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

  return (
    <Content blockSize={blockSize} blockList={blockList}>
      <div className="font-white" id="result">
        1234567
      </div>
      {/*  */}
      <div className="gray-circle" id="ac">
        AC
      </div>
      <div className="gray-circle" id="positive-negative">
        +/-
      </div>
      <div className="gray-circle" id="percentage">
        %
      </div>
      {/*  */}
      <div className="font-white blue-circle" id="add">
        +
      </div>
      <div className="font-white blue-circle" id="sub">
        -
      </div>
      <div className="font-white blue-circle" id="multiply">
        ×
      </div>
      <div className="font-white blue-circle" id="divide">
        ÷
      </div>
      <div className="font-white blue-circle" id="equal">
        =
      </div>
      {/*  */}
      <div className="font-white dark-circle" id="num-1">
        1
      </div>
      <div className="font-white dark-circle" id="num-2">
        2
      </div>
      <div className="font-white dark-circle" id="num-3">
        3
      </div>
      <div className="font-white dark-circle" id="num-4">
        4
      </div>
      <div className="font-white dark-circle" id="num-5">
        5
      </div>
      <div className="font-white dark-circle" id="num-6">
        6
      </div>
      <div className="font-white dark-circle" id="num-7">
        7
      </div>
      <div className="font-white dark-circle" id="num-8">
        8
      </div>
      <div className="font-white dark-circle" id="num-9">
        9
      </div>
      <div className="font-white dark-circle" id="num-0">
        0
      </div>
      <div className="font-white dark-circle" id="dot">
        .
      </div>
    </Content>
  );
});

import React, { useMemo } from 'react';
import ReactModal from 'react-modal';

import isMobile from 'src/utils/isMobile';
import useDrag from 'src/hooks/useDrag';
import useWindowInnerSize from 'src/hooks/useWindowInnerSize';

import CalculatorContent from './CalculatorContent';

ReactModal.setAppElement('#root');

export default React.memo((props) => {
  const { visible, toggle } = props;

  const size = useWindowInnerSize();
  const [onMouseDown, position] = useDrag({ x: size.height * 0.1, y: 100 });

  const ModalStyle = useMemo(() => {
    let rt = {
      margin: 0,
      padding: 0,
      border: 0,
    };

    if (isMobile) {
      rt = {
        content: {
          ...rt,
          top: null,
          bottom: 0,
          right: 0,
          left: 0,
          height: size.height * 0.5,
          width: size.width,
        },
      };
    } else {
      rt = {
        content: {
          ...rt,
          left: position.x,
          top: position.y,
          width: size.width > 768 ? 480 : 360,
          bottom: null,
          right: null,
        },
      };
    }

    return rt;
  }, [position.x, position.y, size.height, size.width]);

  return (
    <ReactModal isOpen={visible} onRequestClose={toggle} style={ModalStyle}>
      <div onMouseDown={onMouseDown}>
        <CalculatorContent size={ModalStyle.content} />
      </div>
    </ReactModal>
  );
});

import React, { useMemo } from 'react';
import ReactModal from 'react-modal';

import isMobile from 'src/utils/isMobile';
import useDrag from 'src/hooks/useDrag';
import useWindowInnerSize from 'src/hooks/useWindowInnerSize';

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
          top: '50%',
          bottom: 0,
          right: 0,
          left: 0,
        },
      };
    } else {
      rt = {
        content: {
          ...rt,
          left: position.x,
          top: position.y,
          height: size.height * 0.7,
          width: size.width > 768 ? 480 : 360,
        },
      };
    }

    return rt;
  }, [position.x, position.y, size.height, size.width]);

  return (
    <ReactModal isOpen={visible} onRequestClose={toggle} style={ModalStyle}>
      <div onMouseDown={onMouseDown}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ea
          reiciendis possimus inventore ratione laborum error maiores cum
          molestiae? Rem repudiandae ex illum atque autem ut enim dicta quis
          officiis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ea
          reiciendis possimus inventore ratione laborum error maiores cum
          molestiae? Rem repudiandae ex illum atque autem ut enim dicta quis
          officiis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ea
          reiciendis possimus inventore ratione laborum error maiores cum
          molestiae? Rem repudiandae ex illum atque autem ut enim dicta quis
          officiis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ea
          reiciendis possimus inventore ratione laborum error maiores cum
          molestiae? Rem repudiandae ex illum atque autem ut enim dicta quis
          officiis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ea
          reiciendis possimus inventore ratione laborum error maiores cum
          molestiae? Rem repudiandae ex illum atque autem ut enim dicta quis
          officiis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ea
          reiciendis possimus inventore ratione laborum error maiores cum
          molestiae? Rem repudiandae ex illum atque autem ut enim dicta quis
          officiis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ea
          reiciendis possimus inventore ratione laborum error maiores cum
          molestiae? Rem repudiandae ex illum atque autem ut enim dicta quis
          officiis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ea
          reiciendis possimus inventore ratione laborum error maiores cum
          molestiae? Rem repudiandae ex illum atque autem ut enim dicta quis
          officiis!
        </p>
      </div>
    </ReactModal>
  );
});

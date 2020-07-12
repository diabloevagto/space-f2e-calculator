import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export default React.memo((props) => {
  const { visible, toggle } = props;

  return (
    <ReactModal isOpen={visible} onRequestClose={toggle}>
      <p>123</p>
    </ReactModal>
  );
});

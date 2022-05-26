import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const TestModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { backgroundColor: 'grey' },
          content: { color: 'orange' },
        }}
      >
        <h2>TestModal title</h2>
        <p>TestModal Body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default TestModal;

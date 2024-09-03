import { useState } from "react";
import { Button, Modal, Toast } from "react-bootstrap";

import styles from "./App.module.css";

const App = () => {
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>SHOW MODAL</Button>
      <Button
        onClick={() => {
          setShowToast(true);
        }}
      >
        SHOW TOAST
      </Button>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Body className={styles.modalBody}>
          <img className={styles.modalImage} src="/modal.png" alt="modal" />
          <div className={styles.modalTitle}>Menghapus Data Mobil</div>
          <div className={styles.modalDesc}>
            Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin
            menghapus?
          </div>
          <div className={styles.modalAction}>
            <Button className={styles.modalButton}>Ya</Button>
            <Button
              onClick={handleClose}
              className={styles.modalButton}
              variant="outline-primary"
            >
              Tidak
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <Toast
        className={styles.toast}
        onClose={() => {
          setShowToast(false);
        }}
        autohide
        show={showToast}
      >
        <Toast.Body>Data Berhasil Disimpan</Toast.Body>
      </Toast>
    </>
  );
};

export default App;

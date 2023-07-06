import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';

function ModalComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        toggleModal();
      } else {
        setErrorMessage('A problem has occurred while submitting your data.');
      }
    } catch (error) {
      setErrorMessage('An error occurred while sending the email.');
    }
  };

  const closeErrorMessage = () => {
    setErrorMessage('');
  };

  return (
    <div>
      <Button color="primary" onClick={toggleModal}>Get In Touch</Button>
      <Modal isOpen={isOpen} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}></ModalHeader>
        <ModalBody className="body-modal">
          {errorMessage && (
            <Alert color="danger" toggle={closeErrorMessage}>
              {errorMessage}
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-align">
              <div>
                <label>Name:</label>
                <input className="form" type="text" name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <label>Email:</label>
                <input className="form" type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <label>Phone:</label>
                <input className="form" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div>
                <label>Message:</label>
                <textarea className="form-box" alt="name-box" name="message" value={formData.message} onChange={handleChange} />
              </div>
              <div>
                <button className="modal-submit" type="submit">Submit</button>
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}


export default ModalComponent;
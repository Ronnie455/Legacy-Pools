import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    // Reset the form data
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    // Close the modal
    toggleModal();
  };

  return (
    <div>
      <Button color="primary" onClick={toggleModal}>Open Modal</Button>
      <Modal isOpen={isOpen} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>Modal Title</ModalHeader>
        <ModalBody className="body-modal">
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
              <button className ="modal-submit" type="submit">Submit</button>
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
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
        console.log('Email sent successfully.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        toggleModal()
      } else {
        console.log('Error occurred while sending email.')
      }
    } catch (error) {
      console.log('Error occurred while sending email.', error);
    }
  };
  
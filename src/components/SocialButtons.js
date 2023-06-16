import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const SocialButtons = () => {
  return (
    <div className="social-buttons">
    <MDBBtn style={{ backgroundColor: '#ac2bac' }} href='https://www.instagram.com/legacy_pools/' target="_blank" rel="noopener noreferrer">
      <MDBIcon className='me-2' fab icon='instagram' /> Instagram
    </MDBBtn>

      <MDBBtn style={{ backgroundColor: '#3b5998' }} href='https://www.facebook.com/people/Legacy-Pools-LLC/100063495162428/'target="_blank" rel="noopener noreferrer">
      <MDBIcon className='me-2' fab icon='facebook-f' /> Facebook
    </MDBBtn>
    </div>
  );
}

export default SocialButtons
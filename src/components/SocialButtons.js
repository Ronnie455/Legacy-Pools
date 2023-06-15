import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function SocialButtons() {
  return (
    <div className="social-buttons">
    <MDBBtn size='lg' floating style={{ backgroundColor: '#ac2bac' }} href='#'>
      <MDBIcon fab icon='instagram' />
    </MDBBtn>

    <MDBBtn size='lg' floating style={{ backgroundColor: '#ac2bac' }} href='#'>
      <MDBIcon fab icon='facebook' />
    </MDBBtn>
    </div>
  );
}
 


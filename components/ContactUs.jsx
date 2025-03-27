import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
      setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <div>
            <h3>Thank you!</h3>
            <h3>We'll be in touch soon.</h3>
        </div>
        
      </>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
       <div className='container'>
          <div className="row">
            <div className="col-md-6 offset-md-3 mt-5">
            <h2 style={{fontFamily: 'Droid Sans'}}>Contact Us</h2>
              <Form.Group className="mb-3">
                {/* <Form.Label>Your Name</Form.Label> */}
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                {/* <Form.Label>Your Name</Form.Label> */}
                <Form.Control type="text" placeholder="Customer Id" />
              </Form.Group>

              <Form.Group className="mb-3">
                {/* <Form.Label>Your Name</Form.Label> */}
                <Form.Control type="text" placeholder="Order Id" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-dark">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
              <textarea class="form-control" rows="5" placeholder="Write your message"></textarea>
              </Form.Group>

              <Button variant="secondary" type="submit">Submit</Button>

            </div>
          </div>
       </div>
     
    </Form>
  );
}

export default ContactForm;
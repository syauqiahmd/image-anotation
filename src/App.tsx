import React, { useState } from 'react';
import logo from './logo.svg';
import * as markerjs2 from 'markerjs2';
import { Col, Form, Row } from 'react-bootstrap';

function App() {
  let imgRef = React.createRef<HTMLImageElement>();
  const [file, setFile] = useState(String);
  function handleChange(e : any) {
      const file_img = e.target.files[0]
      let url = URL.createObjectURL(file_img);
      setFile(url)
    }
  
  function showMarkerArea() {
    if (imgRef.current !== null) {
      const markerArea = new markerjs2.MarkerArea(imgRef.current);
      markerArea.addEventListener('render', event => {
        if (imgRef.current) {
          imgRef.current.src = event.dataUrl;
        }
      });
      markerArea.settings.displayMode = 'inline';
      markerArea.show();
    }
  }
  return (
    <div className="container text-center">
      <h1>CODE TEST</h1>
      <Form.Group controlId="formFile" className="mb-5">
        <Form.Label>Upload you image</Form.Label>
        <Form.Control 
        type="file"
        onChange={handleChange}
        />
        <small>tap on your image to edit</small>
      </Form.Group>
      <Row className='d-flex justify-content-center'>
        <Col xs={12} md={6}>
          <img 
            ref={imgRef} 
            src={!file?logo:file} 
            className="w-100"
            alt="sample" 
            onClick={() => showMarkerArea()}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;

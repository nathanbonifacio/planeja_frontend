import React from 'react';
import Form from 'react-bootstrap/Form';


const StateSelect = () => {
  return (
    <div className="state-select">
      <Form.Select aria-label="Default select example">
        <option value="1">Meta 01</option>
        <option value="2">Meta 02</option>
        <option value="3">Meta 03</option>
        <option value="4">Meta 04</option>
      </Form.Select>
    </div>
  );
};

export default StateSelect;

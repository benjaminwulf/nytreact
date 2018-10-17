import React from 'react';

const SearchLabel = (props) => (
  <div>
    <label htmlFor={props.name}>{props.name}:</label>
    <input
      value={props.value}
      onChange={props.changed}
      type="text"
      className="form-control"
    />
    <br></br>
  </div>
);

export default SearchLabel;

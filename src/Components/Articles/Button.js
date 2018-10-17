import React from "react";

const Button = (props) => (
    <button className="btn btn-primary" onClick={props.clicked}>{props.title}></button>
)

export default Button;
import React from "react";
import Button from "./Button";

const Articles = (props) => (
    <div className="article" id={props.articleID}>
        <h4 className="headline">
        {props.headline}
        </h4>

        <h6>
           News Source: {props.author}
        </h6>
        <h6>
           Date: {props.date}
        </h6>
        <button className="btn btn-primary"><a href={props.URL} target="_blank">Read</a></button>
        <Button title={props.tile} clicked={(event) => props.action(event, props.articleID)} />    
    </div>
);

export default Articles;
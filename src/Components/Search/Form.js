import React from "react";
import SearchButton from "./SearchButton";

const Form = (props) => {
    const SearchLabel = props.labels.map((label, index) => {
        return <SearchLabel
           name={label.id}
           value={label.val}
           changed={(event) => props.changed(event, label.id)}
           key={label.id} />
    });

    return (
        <form>
           <div>
              {SearchLabel}
              <SearchButton clicked={props.submit} />
           </div>
        </form>
    )
  };

export default Form;
import React from "react";

export default function DropDown (props) {

      const state_init = {
         options : props.items.options.map(option => <option key={option.name} value={option.price} name={option.name}>{option.name}</option>)
      }

    const onChange=(e)=> {
        props.onChangeCena(e);
    }

        return(
        <div>
            <label htmlFor={props.items.id} className="form-label">{props.items.caption}:</label>
            <select className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    id={props.items.id}
                    onChange={onChange}
                    name={props.items.name}
            >

                {state_init.options}
            </select>
        </div>)
}


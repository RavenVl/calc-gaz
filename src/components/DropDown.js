import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeCena} from "../app/calcSlice";

export default function DropDown (props) {
    const items = useSelector((state) => state.calc.items[props.items.name])
    const dispatch = useDispatch()
      const state_init = {
         options : items.map(option => <option key={option.name} value={option.price} name={option.name}>{option.name}</option>)
      }

    const onChange=(e)=> {
        dispatch(changeCena({value:e.target.value, name:props.items.name}))
    }

        return(
        <div>
            <label htmlFor={items.id} className="form-label">{props.items.caption}:</label>
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


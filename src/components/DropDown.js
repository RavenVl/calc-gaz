import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeCena} from "../app/calcSlice";

export default function DropDown ({item}) {
    const items = useSelector((state) => state.calc.items[item.name])
    const dispatch = useDispatch()
      const state_init = {
         options : items.map(option => <option key={option.name} value={option.price} name={option.name}>{option.name}</option>)
      }

    const onChange=(e)=> {
        dispatch(changeCena({value:e.target.value, name:item.name}))
    }

        return(
        <div>
            <label htmlFor={items.id} className="form-label">{item.caption}:</label>
            <select className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    id={item.id}
                    onChange={onChange}
                    name={item.name}
            >

                {state_init.options}
            </select>
        </div>)
}


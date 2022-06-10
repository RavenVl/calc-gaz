import React from 'react';
import {changeCena} from "../app/calcSlice";
import {useDispatch} from "react-redux";
import {useState} from "react";

export default function Vzu() {
    const dispatch = useDispatch()
    const [x, setX] = useState(false);
    const onChangeHandler=(e)=> {
        setX(oldX=>!oldX)
        let value = 0
        if (!x) {
            value = 500
        }
        dispatch(changeCena({value:value, name:'vzu'}))
    }


        return (
                        <div className="form-check">
                            <input className="form-check-input"
                                   type="checkbox"
                                   value="500"
                                   id="flexCheckDefault"
                                   checked={x}
                                   onChange={onChangeHandler}/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Ставить ВЗУ в люк ?
                                </label>
                        </div>
        );

}

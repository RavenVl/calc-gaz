import React, {Component} from 'react';
import '../css/Cilinder.css';
import { useSelector, useDispatch } from 'react-redux'
import {changeCilinder} from "../app/calcSlice";

export default function Cilinder(props){

    let cil = useSelector(state=>state.calc.items.cil)
    const dispatch = useDispatch()
     const onChange= (e) =>{
        dispatch(changeCilinder(e.target.value))
    }

 const onChangeImg= (c) =>{

        dispatch(changeCilinder(c))
    }

        return (
            <div className="row">
                <div className="col">

                     <img src="toyota_corolla.jpg" alt="4" className="img-col" onClick={()=>onChangeImg("4")}/>
                  <div className="form-check" >

                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="Cilinder4"
                        onChange={onChange}
                        value="4"
                        checked={cil === "4"}
                    />
                        <label className="form-check-label" htmlFor="Cilinder4">
                            4 цилиндра
                        </label>
                </div>
                </div>
                <div className="col">
                    <img src="toyota_prado150.jpg" alt="6" className="img-col" onClick={()=>onChangeImg("6")}/>
                  <div className="form-check">

                    <input
                        className="form-check-input"
                        type="radio" name="flexRadioDefault"
                        id="Cilinder6"
                        onChange={onChange}
                        value="6"
                        checked={cil === "6"}
                    />

                        <label className="form-check-label" htmlFor="Cilinder6">
                            6 цилиндров
                        </label>
                </div>
                </div>
                <div className="col">
                     <img src="toyota_lc200.jpg" alt="8" className="img-col" onClick={()=>onChangeImg("8")} />
                  <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio" name="flexRadioDefault"
                        id="Cilinder8"
                        onChange={onChange}
                        value="8"
                        checked={cil === "8"}
                    />
                        <label className="form-check-label" htmlFor="Cilinder8">
                            8 цилиндров
                        </label>
                </div>

                </div>
            </div>
        );

}


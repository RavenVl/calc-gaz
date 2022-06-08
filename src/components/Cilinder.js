import React, {Component} from 'react';
import '../css/Cilinder.css';

export default function Cilinder(props){


     const onChange= (e) =>{
        props.onChangeCilinder(e.target.id);
    }



        return (
            <div className="row">
                <div className="col">

                     <img src="toyota_corolla.jpg" alt="4" className="img-col"/>
                  <div className="form-check">

                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="Cilinder4"
                        onChange={onChange}
                        value="Cilinder4"
                        checked={props.cil === "4"}
                    />
                        <label className="form-check-label" htmlFor="Cilinder4">
                            4 цилиндра
                        </label>
                </div>
                </div>
                <div className="col">
                    <img src="toyota_prado150.jpg" alt="6" className="img-col"/>
                  <div className="form-check">

                    <input
                        className="form-check-input"
                        type="radio" name="flexRadioDefault"
                        id="Cilinder6"
                        onChange={onChange}
                        value="Cilinder6"
                        checked={props.cil === "6"}
                    />

                        <label className="form-check-label" htmlFor="Cilinder6">
                            6 цилиндров
                        </label>
                </div>
                </div>
                <div className="col">
                     <img src="toyota_lc200.jpg" alt="8" className="img-col"/>
                  <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio" name="flexRadioDefault"
                        id="Cilinder8"
                        onChange={onChange}
                        value="Cilinder8"
                        checked={props.cil === "8"}
                    />
                        <label className="form-check-label" htmlFor="Cilinder8">
                            8 цилиндров
                        </label>
                </div>

                </div>
            </div>
        );

}


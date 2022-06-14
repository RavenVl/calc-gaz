import React from 'react';
import { useSelector } from 'react-redux'

import DropDown from './DropDown'
import Vzu from './Vzu'
import Itog from './Itog'
import Cilinder from "./Cilinder";




export default function Calc() {

    const sum = useSelector((state) => state.calc.sum)

    return (
        <div className="container">

            <h2>Калькулятор стоимости установки ГБО</h2>
            <Cilinder />
            <DropDown
                key={1}
                item={{id: 1, name: 'oborud', caption:  "Оборудование"}}

            />
            <DropDown
                key={2}
                item={{id: 2, name: 'balon', caption: "Балон"}}

            />
            <DropDown
                key={3}
                item={{id: 3, name: 'reductor' ,caption: "Редуктор"}}

            />
            <DropDown
                key={4}
                item={{id: 4, name: 'rampa',caption: "Рампа"}}

            />
            <DropDown
                key={6}
                item={{id: 6, name: 'plastic' ,caption: "Пластиковая трубка"}}
            />
            <Vzu />
            <Itog txt={`Итого: ${sum}`}/>

        </div>
    )
}

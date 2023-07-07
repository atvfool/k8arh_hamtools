import React, { Component, useState } from 'react';
import { DipoleCalculator } from "./DipoleCalculator";
import { MeterCalculator } from "./MeterCalculator";
import './Calculators.css';

export default function CalculatorFunction() {

    const [calc, setCalc] = useState();

    return (
        <div class="calcWrapper">
            <select value={calc} onChange={e => setCalc(e.target.value)}>
                <option value="">Select a Calculator</option>
                <option value="dipole">Dipole</option>
                <option value="meter">Meter</option>
            </select>

            {(calc == 'dipole' ? (<DipoleCalculator />)
                : (calc == 'meter' ? (<MeterCalculator />)
                    : (<p>Select a calculator</p>)))
            }
        </div>
    );
}

export class Calculators extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                {<CalculatorFunction />}
            </>
        );
    }
}
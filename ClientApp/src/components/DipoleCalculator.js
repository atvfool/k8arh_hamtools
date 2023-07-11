import React, { Component, useRef, useState } from 'react';
import { FrequencySelector } from "./FrequencySelector";

export default function DipoleCalculatorFunction() {
    const [targetFrequency, setTargetFrequency] = useState('146.520');
    const [legLength, setLegLength] = useState();

    function calculate(field, value) {
        setTargetFrequency(value);
        setLegLength(468 / value);
    }

    return (
        <div>
            <h1>Dipole Calculator</h1>
            
            <p>A simple dipole calculator, enter what frequency you're targetting and see what length you need to make the legs to get close to resonance.</p>
            <p>The forumla for calculating in feet is 468/frequency</p>
            <div>
                <FrequencySelector frequency={targetFrequency} onChange={calculate.bind(this)} />
                <div>
                    Leg Length(ft):
                    {legLength}
                </div>
            </div>
        </div>
    );
    
}

export class DipoleCalculator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {<DipoleCalculatorFunction />}
            </>
        );
    }
}
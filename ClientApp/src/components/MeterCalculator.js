import React, { Component, useState } from 'react';
import { FrequencySelector } from "./FrequencySelector";

export default function MeterCalculatorFunction() {
    const [targetFrequency, setTargetFrequency] = useState('146.520');
    const [freqInMeters, setFreqInMeters] = useState();

    function calculate(field, value) {
        setTargetFrequency(value);
        setFreqInMeters(300 / value);
    }

    return (
        <div>
            <h1>Meter Calculator</h1>
            
            <p>A simple calculator for finding the frequency in meters</p>
            <p>The forumla for calculating in meters is 300/frequency</p>
            <div>
                <FrequencySelector frequency={targetFrequency} onChange={calculate.bind(this)} />
                <div>
                    Meters:
                    {freqInMeters}
                </div>
            </div>
        </div>
    );
    
}

export class MeterCalculator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {<MeterCalculatorFunction />}
            </>
        );
    }
}
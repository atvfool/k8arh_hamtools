import React, { Component, useState } from 'react';

export default function MeterCalculator2() {
    const [targetFrequency, setTargetFrequency] = useState('146.520');
    const [freqInMeters, setFreqInMeters] = useState();

    function calculate() {
        setFreqInMeters(300 / targetFrequency);
    }

    return (
        <div>
            <h1>Meter Calculator</h1>
            
            <p>A simple calculator for finding the frequency in meters</p>
            <p>The forumla for calculating in meters is 300/frequency</p>

            <p>Frequency(Hz): <input name="targetFrequency" type="number" placeholder="146.520" step="0.15" min="1" value={targetFrequency} onChange={e=> setTargetFrequency(e.target.value) } /></p>

            <p>Meters: {freqInMeters}</p>

            <button className="btn btn-primary" onClick={calculate}>Calculate</button>
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
                {<MeterCalculator2 />}
            </>
        );
    }
}
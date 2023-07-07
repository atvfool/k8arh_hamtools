import React, { Component, useState } from 'react';

export default function MeterCalculatorFunction() {
    const [targetFrequency, setTargetFrequency] = useState('146.520');
    const [freqInMeters, setFreqInMeters] = useState();

    function calculate(freq) {
        setTargetFrequency(freq);
        setFreqInMeters(300 / freq);
    }

    return (
        <div>
            <h1>Meter Calculator</h1>
            
            <p>A simple calculator for finding the frequency in meters</p>
            <p>The forumla for calculating in meters is 300/frequency</p>
            <div>
                <div>
                    Frequency(Hz):
                    <input name="targetFrequency" type="number" placeholder="146.520" step="0.15" min="1" value={targetFrequency} onChange={e => calculate(e.target.value)} />
                </div>

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
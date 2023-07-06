import React, { Component, useState } from 'react';

export default function DipoleCalculator2() {
    const [targetFrequency, setTargetFrequency] = useState('146.520');
    const [legLength, setLegLength] = useState();

    function calculate() {
        setLegLength(468 / targetFrequency);
    }

    return (
        <div>
            <h1>Dipole Calculator</h1>
            
            <p>A simple dipole calculator, enter what frequency you're targetting and see what length you need to make the legs to get close to resonance.</p>
            <p>The forumla for calculating in feet is 468/frequency</p>

            <p>Frequency(Hz): <input name="targetFrequency" type="number" placeholder="146.520" step="0.15" min="1" value={targetFrequency} onChange={e=> setTargetFrequency(e.target.value) } /></p>

            <p>Leg Length(ft): {legLength}</p>

            <button className="btn btn-primary" onClick={calculate}>Calculate</button>
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
                {<DipoleCalculator2 />}
            </>
        );
    }
}
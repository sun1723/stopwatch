
import React, { Component } from 'react';
import Timer from './components/Timer'
import Controls from './components/Controls'
import TimeList from './components/TimeList'

function Stoperwatch() {
    return(
        <div className="Stoperwatch">
            <h1>this is a stopwatch app</h1>

            <Timer  />

            <Controls />

            <TimeList />
        </div>
    );
}
export default Stoperwatch;

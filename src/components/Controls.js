import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Controls extends Component {
    static propTypes = {
        isRunning : PropTypes.bool,
        startTime: PropTypes.func.isRequired,
        stopTime: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
        addLap : PropTypes.func.isRequired
    };

    render() {
        const {isRunning,startTime, stopTime,reset,addLap} = this.props;

        return (
            <div>
                { !isRunning ?
                <button>start</button>
                : null
                }
                { isRunning ?
                <button>stop</button>
                : null
                }
                <button>Reset</button>
                <button>Time List</button> 
            </div>
        )
    }
}

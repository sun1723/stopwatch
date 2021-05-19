import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TimeFormat from '../utils/TimeFormat'

export default class Timer extends Component {
    static propTypes = {
        time: PropTypes.number
    }

    static defaultProps={
        time : 0
    };

    render() {
        const {time } = this.props;
        return (
            <div >
                {TimeFormat(time)}
            </div>
        );
    }
}



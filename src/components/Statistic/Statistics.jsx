import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

export default class Statistics extends Component {
    render() {
        const { stateKey, state, positivePercentage, total} = this.props;

        return (
            <div>
                <ul>
                    {stateKey.map(el =>
                        <li key={el}>
                           <p>
                            {el}: {state[el]}
                           </p>
                        </li>
                    )}
                    <li>
                        <p> Total: {total()}</p>
                    </li>
                    <li>
                        <p> Positive feedback: {positivePercentage()}%</p>
                    </li>
                </ul>
            </div>
        )
    }
}

Statistics.propTypes = {
    stateKey: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,
    state: PropTypes.objectOf(
        PropTypes.number
    ).isRequired,
    positivePercentage: PropTypes.func.isRequired,
    total: PropTypes.func.isRequired,
} 
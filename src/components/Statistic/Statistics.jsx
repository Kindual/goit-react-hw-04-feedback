import React from 'react'
import { PropTypes } from 'prop-types'

const Statistics = ({ stateKey, state, positivePercentage, total }) => {
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

export default Statistics


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
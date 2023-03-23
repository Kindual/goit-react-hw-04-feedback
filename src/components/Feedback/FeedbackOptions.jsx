import Button from 'components/Button/Button'
import React from 'react'
import { PropTypes } from 'prop-types'
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ updateState, keys }) => {
  return (
    <ul className={css.btnList}>
      {keys.map(k =>
        <li key={k}>
          <Button btnName={k} updateState={updateState} />
        </li>
      )}
    </ul>
  )
}

export default FeedbackOptions

FeedbackOptions.propTypes = {
  updateState: PropTypes.func.isRequired
}
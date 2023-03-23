import Button from 'components/Button/Button'
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import css from './FeedbackOptions.module.css'

export default class FeedbackOptions extends Component {
  render() {
    const { updateState } = this.props;
    
    return (
        <ul className={css.btnList}>
            {this.props.keys.map(k => 
                <li key={k}>
                    <Button btnName={k} updateState={updateState}/>
                </li>
            ) }        
        </ul>
    )
  }
}

FeedbackOptions.propTypes = {
  updateState: PropTypes.func.isRequired
}

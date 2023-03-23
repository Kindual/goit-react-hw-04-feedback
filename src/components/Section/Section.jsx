import React from 'react'
import css from "./Section.module.css";
import { PropTypes } from 'prop-types'

const Section = ({ title = '', children }) => {
  return (
    <div>
      <section className={css.section}>
        {title && <h2 className={css.title}>{title}</h2>}
        {children}
      </section>
    </div>
  )
}

export default Section

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
}

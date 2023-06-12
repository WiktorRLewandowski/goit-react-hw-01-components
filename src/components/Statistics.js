import PropTypes from "prop-types";
import css from '../css/Statistics.module.css'

export const Statistics = ({children}) => {
    return (
        <section className={css.statistics}>
          <h2 className={css.title}>Upload stats</h2>

          <ul className={css.statList}>
            {children}
          </ul>
        </section>
    )
}

Statistics.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
    })
  )
}
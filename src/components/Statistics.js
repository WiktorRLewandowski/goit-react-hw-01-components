import  PropTypes  from "prop-types";

export const Statistics = ({children}) => {
    return (
        <section className="statistics">
          <h2 className="title">Upload stats</h2>

          <ul className="stat-list">
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
export const Statistics = ({children}) => {
    return (
        <section class="statistics">
          <h2 class="title">Upload stats</h2>

          <ul class="stat-list">
            {children}
          </ul>
        </section>
    )

}
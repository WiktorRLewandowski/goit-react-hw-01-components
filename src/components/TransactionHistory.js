export const TransactionHistory = ({items}) => {
    return (
        <table className="transaction-history">
            <thead>
              <tr>    
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
            </thead>

        {
            items.map(({type, amount, currency, id}) => {
                return (
                    <tbody>
                        <tr key={id}>
                          <td>{type}</td>
                          <td>{amount}</td>
                          <td>{currency}</td>
                        </tr>
                    </tbody>
                )
            })
        }            
        </table>
    )
}
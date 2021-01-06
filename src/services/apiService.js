export const ApiService = {
    fetchExpenses() {
        return fetch("http://localhost:5000/graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `{
    expenses {
      id,
      expense_name,
      amount,
      category,
      date_created
    }
  }`
          })
     }).then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      },
      postExpense(expenseName, expenseAmount, expenseCategory){
      return fetch('http://localhost:5000/graphql',
        {
            method:'POST',
              headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({query: 
            ` mutation {
  addExpense(name: ${expenseName},
  amount: ${expenseAmount},
  category: ${expenseCategory}
  ) {
    id,
  } 
  }`})

      }).then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
}
}
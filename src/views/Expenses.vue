<template>
  <div>
  <div class="edit-form" v-if="editExpense == true">
       <editExpenseItem :expense="editExpenseKey" />
  </div>
  <div v-else-if="editExpense == false " class="Expenses">
    <h1>Expenses</h1>
    <table>
      <thead>
        <tr>
          <th>
            #
          </th>
          <th>
            Expense
          </th>
          <th>
            Amount
          </th>
          <th>
            Category
          </th>
          <th>
            Date Added
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(expense, idx) in expenses" :key="expense.id" v-on:click="editExpenseItem(expense)">
          <td>
            {{ idx }}
          </td>
          <td>
            {{ expense.expense_name }}
          </td>
          <td>
            {{ expense.amount }}
          </td>
          <td>
            {{ expense.category }}
          </td>
          <td>
            {{ expense.date_created }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import { ApiService } from "../services/apiService";
import editExpenseItem from "../components/editExpenseItem"
export default {
  name: "Expenses",
  components: {
    editExpenseItem
  },
  props: {},
  data() {
    return {
      expenses: [],
      editExpense: false,
      editExpenseKey: {},
    };
  },
  methods: {
    filter (type) {
      console.log(type)
    },
    editExpenseItem (expense) {
      console.log('expense id', expense)
      this.editExpenseKey = expense;
      this.editExpense = true;
    }
  },
  created() {
    console.log("created");
    ApiService.fetchExpenses().then(res => {
      this.expenses = [...res.data.expenses];
      console.log(res.data.expenses);
    }).catch(err => console.error(err))
  },
  updated() {
    console.log("update");
  }
};
</script>

<style scoped>
th {
  padding: 12px;
  border-bottom: 1px solid darkgrey;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

td {
  border-collapse:collapse;
  padding: 10px;
}

table {
  border: 1px solid lightgrey;
}

</style>

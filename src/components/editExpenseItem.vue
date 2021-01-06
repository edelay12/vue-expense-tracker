<template>
  <form @submit="editExpenseSubmit">
    <span>edit</span>
    <span>expense name</span>
    <input v-model='draftExpense.expense_name' />
    <span>expense amount</span>
    <input v-model='draftExpense.amount' />
    <span>expense category</span>
    <input v-model='draftExpense.category' />
    </form>
</template>

<script>
export default {
name: 'EditExpenseItem',
props: {
    expense: Object,
},
  data() {
      return {
       draftExpense: {
        id: this.expense.id,
        expense_name: this.expense.expense_name,
        amount: this.expense.amount,
        category: this.expense.category
      }
      }
  },
methods: {
        editExpenseSubmit() {
      this.editExpense = true;

    }
},
created() {
    console.log('pass expense', this.expense)
}   
}
</script>

<style>

</style>
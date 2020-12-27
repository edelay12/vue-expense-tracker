<template>
  <div>
      <form @submit="onSubmit">
          <input type="text" v-model="expenseName" placeholder="expense ..." />
          <input type="numberic" v-model="expenseAmount"/>
          <input type="text" v-model="expenseCategory" placeholder="expense ..." />
          <input type="submit" value="submit" />
      </form>
  </div>
</template>
<script>
import { ApiService } from '../services/apiService';
export default {
data () {
    return {
        expenseName: '',
        expenseAmount: '',
        expenseCategory: ''
    }
},
methods: {
  onSubmit (e) {
      e.preventDefault();
        ApiService.postExpense(this.expenseName, this.expenseAmount, this.expenseCategory)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
  }
  
  },
created() {
    //fetch user expenses

}

}
</script>

<style>

</style>
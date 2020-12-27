<template>
  <div class="Expenses">
    <h1>This is an expenses page</h1>
    <ul>
      <li v-for="expense in expenses" :key="expense.id"></li>
    </ul>
  </div>
</template>

<script>
import { ApiService } from '../services/apiService';
export default {
  name: "Expenses",
  // components: {
  //   HelloWorld,
  //   Todos,
  //   AddTodo
  // },
  props: {},
  data() {
    return {
      expenses: []
    };
  },
  methods: {
   
  },
  created() {
    console.log("created");
    // this.fetchExpenses()
ApiService.fetchExpenses()
.then(res => console.log(res.data.expenses))
  },
  updated() {
    console.log("update");
  }
};
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div @click="toggleAddForm">
      <span v-if="!addForm">Add expense</span>
      <span v-else>X</span>
      </div>
    <div v-if="addForm == true">
      <AddExpense />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddExpense from "../components/addExpense.vue";
export default {
  name: "Home",
  components: {
    AddExpense
  },
  data() {
    return {
      addForm: false,
    };
  },
  methods: {
    toggleAddForm() {
      return (this.addForm = !this.addForm);
    }
  }
};
</script>

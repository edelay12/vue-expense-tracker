<template>
  <div class="home">
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
import AddExpense from "../components/addExpense.vue";
export default {
  name: "Home",
  components: {
    AddExpense
  },
  data() {
    return {
      addForm: true
    };
  },
  methods: {
    toggleAddForm() {
      return (this.addForm = !this.addForm);
    }
  }
};
</script>

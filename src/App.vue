<template>
<div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/expenses">Expenses</router-link>
  </div>
  <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  background: #2c3e50;  
}

#nav a {
  font-weight: bold;
  color: white;
  margin: 0 5px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

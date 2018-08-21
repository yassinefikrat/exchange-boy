<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>Trying things</h2>
    <ul>
      <li v-for="(user, index) in users" :key="`user-${index}`">
        {{user.firstname}} {{user.lastname}}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      users: [
        { firstname: 'Sebastian', lastname: 'Eschweiler' },
        { firstname: 'Bill', lastname: 'Smith' },
        { firstname: 'John', lastname: 'Porter' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

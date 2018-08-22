<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>

      1 <span>{{base}}</span> is valued at <span>{{rate}}</span> <span>{{symbol}}</span>
      as of <span>{{date}}</span> by the European Central Bank.

    </p>

    <!-- <h2>Trying things</h2>
    <ul>
      <li v-for="(user, index) in users" :key="`user-${index}`">
        {{user.firstname}} {{user.lastname}}
      </li>
    </ul> -->

  </div>
</template>

<script>

import createUrl from './utils/create-url';

export default {
  name: 'Main',
  data() {
    return {
      msg: 'Welcome to Exchange Boy',
      rate: 'loading...',
      base: '',
      symbol: '',
      date: '',
    };
  },
  created() {
    const base = 'EUR';
    const symbol = 'GBP';

    this.base = base;
    this.symbol = symbol;

    // start loading
    fetch(createUrl(base, symbol))
      .then((response) => {
        if (response.status === 200) {
          response.json().then((payload) => {
            // stop loading
            this.rate = payload.rates[symbol];
            this.date = payload.date;
          });
        } else {
          // console.log('Error !');
        }
      });
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

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>

      1

      <select class="yy-select-inline"
        v-on:change="change"
        v-model="base">
        <option
          v-for="currency in currencies"
          :key="currency"
          :label="currency"
          :value="currency">
        </option>
      </select>

      is valued at <span class="yy-rate">{{rate}}</span>

      <select class="yy-select-inline"
        v-on:change="change"
        v-model="symbol">
        <option
          v-for="currency in currencies"
          :key="currency"
          :label="currency"
          :value="currency">
        </option>
      </select>

      as of <span>{{date}}</span> ago by the European Central Bank.

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

import timeAgo from 'date-fns/distance_in_words_to_now';

import createUrl from './utils/create-url';
import currencies from './utils/currencies';

const loading = 'loading...';

export default {
  name: 'Main',
  data() {
    return {
      msg: 'Welcome to Exchange Boy',
      rate: loading,
      base: 'EUR',
      symbol: 'GBP',
      date: '',
      currencies,
      change: () => {
        this.requestRate();
      },
      requestRate: () => {
        // start loading
        this.rate = loading;
        fetch(createUrl(this.base, this.symbol))
          .then((response) => {
            if (response.status === 200) {
              response.json().then((payload) => {
                // stop loading
                this.rate = payload.rates[this.symbol];
                this.date = timeAgo(payload.date);
              });
            } else {
              // console.log('Error !');
            }
          });
      },
    };
  },
  created() {
    this.requestRate();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .yy-select-inline {
    padding: 5px 5px;
    margin: 8px 0;
    box-sizing: border-box;

    border: none;
    border-bottom: 2px solid green;

    font-family: 'Overpass Mono', monospace;
    color: green;
    font-weight: bold;

    cursor: pointer;
  }

  .yy-select-inline > option {
    color: darkslategrey;
    font-weight: bold;
  }

  span.yy-rate {
    font-weight: bold;
  }

  p {
    color: darkslategrey;
    font-family: 'Overpass Mono', monospace;
  }

  h1, h2 {
    font-family: 'Overpass', monospace;
    font-weight: bold;
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

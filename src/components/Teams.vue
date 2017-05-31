<template>
  <div>
  </div>
</template>

<script>
const moment = require('moment');

export default {
  name: 'teams',
  props: { user: Object },
  data: () => ({}),
  computed: {
    profile() {
      return this.user || this.$root.user;
    },
  },
  methods: {
    last(t) {
      return moment.duration(t - (new Date().getTime() / 1000), 'seconds').humanize();
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log(to);
    next();
  },
};
</script>
<style scoped>
ul li{
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

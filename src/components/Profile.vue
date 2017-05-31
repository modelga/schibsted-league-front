<template>
  <span v-if="profile">
    <img :src="profile.avatar_url"/>
    <ul class="fa-ul">
    <li><i class="fa-li fa fa-user"></i>{{ profile.name }} ({{profile.login}})</li>
    <li><i :class="'fa-li fa fa-'+profile.provider"></i>{{ profile.id }}</li>
    <li v-if="profile.email"><i class="fa-li fa fa-envelope-o"></i>{{ profile.email }}</li>
    <li v-if="profile.exp"><i class="fa-li fa fa-clock-o"></i>Token valid for next {{ last(profile.exp) }}</li>
    </ul>
  </span>
</template>

<script>
const moment = require('moment');

export default {
  name: 'user',
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

<template>
  <div id="app">
    <Toolbar v-on:login="login" />
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar';

export default {
  name: 'schibsted-league',
  data: () => ({ }),
  created() {
    window.addEventListener('message', (event) => {
      if (event.data.jwt) {
        this.$emit('jwt', event.data.jwt);
      }
    });
  },
  methods: {
    login(data) {
      if (data === 'github') {
        const w = window.open('/api/_github', 'Github Login');
        const send = () => {
          w.postMessage('ready?', '*');
          if (!w.closed) { setTimeout(send, 150); }
        };
        send();
      }
      if (data === 'logout') {
        this.$emit('jwt', null);
      }
    },
  },
  components: { Toolbar },
};
</script>

<style style='scss'>
@import '~keen-ui/dist/keen-ui.css';
body, #app{
  margin: 0;
  font-family: 'Montserrat';
}
body{
  background-image: linear-gradient(rgba(44, 44, 44, 0.05), rgba(0, 0, 0, 0.1));
  background-attachment: fixed;
  background-size: cover;
}
html{
  width: 100%;
  display: block;
  margin-top: 56px;
}
#content{
  margin: 10px;
  min-height: 200px;
}
</style>

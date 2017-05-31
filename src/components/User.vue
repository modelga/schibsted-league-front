<template>
  <span v-if="user">: {{ user.name }}</span>
</template>

<script>
export default {
  name: 'user',
  props: { user: Object },
  data: () => ({}),
};
</script>
<style>
</style>

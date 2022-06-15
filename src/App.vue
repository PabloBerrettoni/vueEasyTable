<template>
  <div id="app">
    <table-mockup />
    <div class="links">
      <router-link to="/default"> Go to default Footer </router-link>
      <router-link to="/totalize"> Go to totalizer Footer </router-link>
      <router-link to="/none"> Go to none Footer </router-link>
    </div>
  </div>
</template>

<script>
import TableMockup from './components/TableMockup.vue'

export default {
  name: 'App',
  components: {
    TableMockup
  },
  data () {
    return {

    }
  }
}
</script>

<style>
  .links{
    display: flex;
    justify-content: space-around;
  }
</style>

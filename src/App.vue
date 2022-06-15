<template>
  <div id="app">
  
    <div class="links">
      <router-link to="/"> Go to Home </router-link>
      <router-link to="/default"> Go to default Footer </router-link>
      <router-link to="/totalize"> Go to totalizer Footer </router-link>
      <router-link to="/none"> Go to none Footer </router-link>
    </div> 
    <br>
    <h2>Welcome to our Vue2 mockup project</h2>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  h2 {
    margin: 0px;
    padding: 0px;
    text-align: center;
  }
  .links{
    display: flex;
    justify-content: space-around;
    margin: 0px;
  }
</style>

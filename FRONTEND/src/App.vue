<script>
import Header from './components/Header.vue';
import Home from './views/Home.vue';

export default {
  name: 'App',
  components: {
    Header,
    Home
  }

}
</script>

<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
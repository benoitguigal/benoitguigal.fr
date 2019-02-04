<template>
  <div id="app">
    <Title />
    <Menu />
    <router-view />
  </div>
</template>

<script>
import Title from './components/Title.vue';
import Menu from './components/Menu.vue';
import Photo from './components/Photo.vue';

export default {
  name: 'app',
  components: {
    Title,
    Menu,
    Photo
  },
  mounted() {
    console.log(this.$route)
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-left: 25px;
  padding-top: 25px;
}
</style>

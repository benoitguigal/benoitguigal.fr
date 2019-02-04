<template>
  <div id="menu">
    <p>
      — <router-link to="/about" class="is-uppercase">About</router-link>
    </p>
    <p>
      — <a href="#" class="is-uppercase">Work</a>
    </p>
    <p>
      — <a href="#" class="is-uppercase">Blog</a>
    </p>
    <p>
      — <a href="#" class="is-uppercase">Contact</a>
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  #menu {
    line-height: 1.3em;
  }

  a {
    color: black;
    text-decoration: underline;
  }

  a:hover {
    color: red;
    font-style: italic;
  }
</style>


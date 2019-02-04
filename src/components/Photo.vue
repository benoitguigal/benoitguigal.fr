<template>
  <img
    class="is-hidden-mobile"
    :src="imageUrl"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
  >
</template>

<script>

function getImageUrl(filename) {
  const images = require.context('../assets/images', false, /\.(png)$/);
  return images(`./${filename}`);
}


export default {
  data() {
    return {
      imageUrl: getImageUrl('maroc_500w.png')
    };
  },
  methods: {
    mouseOver() {
      this.imageUrl = getImageUrl('georgie_500w.png');
    },
    mouseLeave() {
      this.imageUrl = getImageUrl('maroc_500w.png');
    }
  }
};
</script>

<style lang="scss" scoped>
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -175px; /* Half the height */
    margin-left: -250px; /* Half the width */
    width: 500px;
  }

</style>

<template>
  <img
    class="lazy"
    :src="loadingSrc"
    :data-origin="src"
    :data-webp="wpSrc"
    @error="onError"
  />
</template>

<script>
export default {
  name: 'v-lazy-img',
  props: {
    src: {
      type: String,
      default: '',
    },
    wpSrc: {
      type: String,
      default: '',
    },
    loadingSrc: {
      type: String,
      default: 'https://img5.bitautoimg.com/yc-common/imgs/loading.png',
    },
    errorSrc: {
      type: String,
      default: 'https://img5.bitautoimg.com/yc-common/imgs/loading.png',
    },
  },
  methods: {
    onError(e) {
      e.target.src = this.errorSrc;
    },
  },
};
</script>

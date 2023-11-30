<template>
  <img :src="srcReal" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    srcWp: {
      type: String,
      default: '',
    },
    srcError: {
      type: String,
      default: 'https://img5.bitautoimg.com/yc-common/imgs/loading.png',
    },
    srcLoading: {
      type: String,
      default: 'https://img5.bitautoimg.com/yc-common/imgs/loading.png',
    },
  },
  data() {
    return {
      srcLoad: '',
      isLoad: false,
      isError: false,
    };
  },
  computed: {
    srcReal() {
      if (this.isError) {
        return this.srcError;
      }
      if (this.isLoad) {
        return this.srcLoad;
      }
      return this.srcLoading;
    },
  },
  mounted() {
    this.loadImg();
  },
  methods: {
    async loadImg() {
      const isSupportWebp = await this.detectSupportWebp();
      let img = new Image();
      img.src = isSupportWebp ? this.srcWp : this.src;
      img.onload = () => {
        this.srcLoad = img.src;
        this.isError = false;
        this.isLoad = true;
        img = null;
      };
      img.onerror = () => {
        this.isError = true;
        this.isLoad = false;
        img = null;
      };
    },
    detectSupportWebp() {
      if ('_yc_webp_support_' in window) {
        return window._yc_webp_support_;
      }
      return new Promise((resolve) => {
        let img = new Image();
        img.src =
          'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
        img.onload = function () {
          window._yc_webp_support_ = true;
          resolve(true);
          img = null;
        };
        img.onerror = function () {
          window._yc_webp_support_ = false;
          resolve(false);
          img = null;
        };
      });
    },
  },
};
</script>

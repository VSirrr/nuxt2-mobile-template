<script>
export default {
  name: "v-lazy",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    root: {
      type: typeof HTMLElement !== "undefined" ? HTMLElement : Object,
      default: null,
    },
    rootMargin: {
      type: String,
      default: "0px 0px 0px 0px",
    },
    threshold: {
      type: [Number, Array],
      default: 0,
    },
  },
  data() {
    return {
      iObserver: null,
      mObserver: null,
      isSupportWebp: false,
    };
  },
  async mounted() {
    this.isSupportWebp = await this.detectSupportWebp();
    this.initIntersectionObserver();
    this.initMutationObserver();
  },
  beforeDestroy() {
    this.destroy();
  },
  methods: {
    initIntersectionObserver() {
      this.iObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.loadImage(entry.target);
              // just emit 'exposure' once
              this.iObserver.unobserve(entry.target);
            }
          });
        },
        {
          root: this.root,
          rootMargin: this.rootMargin,
          threshold: this.threshold,
        }
      );
      this.$nextTick(() => {
        this.observeImages();
      });
    },
    initMutationObserver() {
      // when DOM changes to observe the added nodes
      this.mObserver = new MutationObserver(() => {
        this.observeImages();
      });
      this.mObserver.observe(this.$el, { childList: true });
    },
    observeImages() {
      const imgs = document.querySelectorAll("img.lazy");
      if (!imgs || !imgs.length) {
        return;
      }
      imgs.forEach((img) => {
        if (!img.dataset.load) {
          this.iObserver.observe(img);
        }
      });
    },
    async loadImage(elm) {
      // let img = new Image();
      elm.src =
        this.isSupportWebp && elm.dataset.webp
          ? elm.dataset.webp
          : elm.dataset.origin;
      elm.dataset.load = true;
      // img.onload = () => {
      //   elm.src = img.src;
      //   img = null;
      // };
      // img.onerror = () => {
      //   elm.src = elm.dataset.error;
      //   img = null;
      // };
    },
    detectSupportWebp() {
      if ("_v_webp_support_" in window) {
        return window._v_webp_support_;
      }
      return new Promise((resolve) => {
        let img = new Image();
        img.src =
          "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
        img.onload = function () {
          window._v_webp_support_ = true;
          resolve(true);
          img = null;
        };
        img.onerror = function () {
          window._v_webp_support_ = false;
          resolve(false);
          img = null;
        };
      });
    },
    destroy() {
      this.iObserver.disconnect();
      this.mObserver.disconnect();
      this.mObserver = this.iObserver = null;
    },
  },
  render(h) {
    return h(this.tag, this.$slots.default);
  },
};
</script>

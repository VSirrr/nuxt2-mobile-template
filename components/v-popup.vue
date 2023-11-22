<template>
  <div class="v-popup">
    <transition v-show="visible" name="v-popup-fade">
      <div
        ref="overlay"
        class="v-popup-overlay"
        v-show="overlay && visible"
        :style="{
          zIndex: zIndex + 1,
        }"
        @click="onOverlavlick"
      ></div>
    </transition>

    <transition
      :name="isCenter ? 'v-popup-fade' : `v-popup-slide-${position}`"
    >
      <div
        v-show="visible"
        :class="[
          'v-popup-body',
          round ? 'round' : '',
          safeAreaInsetBottom ? 'safe-area-inset-bottom' : '',
          isCenter ? 'v-popup-center' : `v-popup-${position}`,
        ]"
        :style="{
          [position]: 0,
          zIndex: zIndex + 2,
        }"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
function preventDefault(evt) {
  evt.preventDefault();
  return false;
}

function getScrollTop() {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop
  );
}

export default {
  name: 'v-popup',
  inheritAttrs: false,
  props: {
    // 是否圆角
    round: {
      type: Boolean,
      default: false,
    },
    // popup 的 z-index 值
    zIndex: {
      type: Number,
      default: 2000,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    // 是否显示遮罩层
    overlay: {
      type: Boolean,
      default: true,
    },
    // 内容区的位置 center|top|right|bottom|left
    position: {
      type: String,
      default: 'bottom',
    },
    // 打开 popup 是否锁定滚动
    lockScroll: {
      type: Boolean,
      default: true,
    },
    // 点击遮罩层是否关闭
    closeOnClickOverlay: {
      type: Boolean,
      default: false,
    },
    // iOS 是否添加底部安全边界
    safeAreaInsetBottom: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      top: 0,
    };
  },
  computed: {
    isCenter() {
      return this.position === 'center';
    },
  },
  watch: {
    visible(value) {
      if (this.lockScroll) {
        this.lockBodyScroll(value);
      }
    },
  },
  beforeDestroy() {
    if (this.lockScroll) {
      this.lockBodyScroll(false);
    }
  },
  methods: {
    lockBodyScroll(lock) {
      if (lock) {
        this.top = getScrollTop();
        document.body.style.top = -this.top + 'px';
        document.body.classList.add('v-popup-overflow-hidden');
        this.$refs.overlay.addEventListener('touchmove', preventDefault);
      } else {
        document.body.classList.remove('v-popup-overflow-hidden');
        window.scrollTo(0, this.top);
        this.$refs.overlay.removeEventListener('touchmove', preventDefault);
      }
    },
    close() {
      this.$emit('close');
      this.$emit('update:visible', false);
    },
    onOverlavlick() {
      if (this.closeOnClickOverlay) {
        this.close();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-popup {
  width: 0;
  height: 0;

  &-overlay {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }

  &-body {
    position: fixed;
    max-width: 100%;
    max-height: 100%;
    overflow-y: auto;
    background: #fff;

    &.safe-area-inset-bottom {
      padding-bottom: 1px;
      padding-bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */
      padding-bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */
    }
  }

  &-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: visible;
    background: transparent;
  }

  &-top,
  &-bottom {
    left: 0;
    width: 100%;
  }

  &-right,
  &-left {
    top: 0;
    height: 100%;
  }

  &-top.round {
    border-radius: 0 0 12px 12px;
  }

  &-right.round {
    border-radius: 12px 0 0 12px;
  }

  &-bottom.round {
    border-radius: 12px 12px 0 0;
  }

  &-left.round {
    border-radius: 0 12px 12px 0;
  }
}
</style>

<style lang="scss">
.v-popup {
  &-overflow-hidden {
    position: fixed;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden !important;
  }

  &-fade-enter-active,
  &-fade-leave-active {
    transition: transform 0.3s ease;
  }

  &-fade-enter,
  &-fade-leave-to {
    opacity: 0;
  }

  &-slide-top-enter-active,
  &-slide-top-leave-active,
  &-slide-right-enter-active,
  &-slide-right-leave-active,
  &-slide-bottom-enter-active,
  &-slide-bottom-leave-active,
  &-slide-left-enter-active,
  &-slide-left-leave-active {
    transition: transform 0.4s ease;
  }

  &-slide-top-enter,
  &-slide-top-leave-to {
    transform: translateY(-100%);
  }

  &-slide-right-enter,
  &-slide-right-leave-to {
    transform: translateX(100%);
  }

  &-slide-bottom-enter,
  &-slide-bottom-leave-to {
    transform: translateY(100%);
  }

  &-slide-left-enter,
  &-slide-left-leave-to {
    transform: translateX(-100%);
  }
}
</style>

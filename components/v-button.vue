<template>
  <button
    class="v-button"
    :class="{
      round: round,
      inline: inline,
      inactive: inactive,
      disabled: disabled,
      small: size === 'sm',
      middle: size === 'md',
      primary: type === 'primary',
      default: type === 'default',
      warnning: type === 'warnning',
    }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "v-button",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    inactive: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "lg",
    },
  },
  computed: {
    disabled() {
      return this.type === "disabled";
    },
  },
};
</script>

<style>
.v-button {
  padding: 0 20px;
  width: 100%;
  height: 40px;
  border: 1px solid;
  border-radius: 4px;
  outline: none;
  color: #fff;
  background-color: #fff;
}

.v-button.default {
  color: #313233;
  border-color: #ccc;
  background-color: #fff;
}

.v-button.primary {
  border-color: #2f86f6;
  background-color: #2f86f6;
}

.v-button.warnning {
  border-color: #ff5257;
  background-color: #ff5257;
}

.v-button.disabled {
  border-color: #e2e4ea;
  background-color: #e2e4ea;
}

.v-button.round {
  border-radius: 20px;
}

.v-button.inline {
  width: auto;
}

.v-button.small {
  padding: 0 10px;
  height: 28px;
}

.v-button.middle {
  padding: 0 14px;
  height: 34px;
}

.v-button.inactive {
  opacity: 0.6;
}
</style>

<template>
  <div class="car-price" :key="value">
    <template v-if="value">
      <AnimateNum
        v-for="(n, i) in integerNum"
        :value="n"
        :key="'integer-' + i"
      />
      <AnimateNum value="?" />
      <span>.</span>
      <AnimateNum v-for="(n, i) in floatNum" :value="n" :key="'float-' + i" />
    </template>
    <template v-else>
      <span>?</span>
      <span>?</span>
      <span>.</span>
      <span>?</span>
      <span>?</span>
    </template>
    <span>万</span>
  </div>
</template>

<script>
import AnimateNum from './animate-num';

export default {
  name: 'car-price',
  props: ['value'],
  components: {
    AnimateNum,
  },
  computed: {
    integerNum() {
      if (this.value && ~this.value.indexOf('.')) {
        return this.value.split('.')[0].slice(0, -1);
      }
      return '??';
    },
    floatNum() {
      if (this.value && ~this.value.indexOf('.')) {
        return this.value.split('.')[1];
      }
      return '??';
    },
  },
};
</script>

<style lang="scss" scoped>
.car-price {
  display: inline-block;
  height: 33px;
  line-height: 33px;
  font-family: DINAlternate-Bold;
  font-size: 24px;
  color: #ff4b3b;
  text-align: center;
  font-weight: 700;

  span {
    display: inline-block;
    height: 33px;
    vertical-align: top;
  }
}
</style>

<template>
  <client-only placeholder="Loading...">
    <div>
      <nuxt-link to="/todo">to todo page</nuxt-link>
      <v-button type="default">default</v-button>
      <v-button type="primary" round inactive>primary</v-button>
      <v-button type="warnning">warnning</v-button>
      <v-button type="disabled">disabled</v-button>
      <animate-price value="66.66"/>
    </div>
  </client-only>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

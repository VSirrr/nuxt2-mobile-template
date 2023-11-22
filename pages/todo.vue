<template>
  <div>
    <input type="text" @keydown.enter="onEnter" />
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.value }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  head: {
    title: "todo list",
  },
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState("todo", ["list"]),
  },
  methods: {
    ...mapActions("todo", ["addTodo"]),
    onEnter(e) {
      this.addTodo({
        value: e.target.value,
        id: Date.now(),
      });
      e.target.value = "";
    },
  },
  asyncData() {},
  async fetch({ store }) {
    await store.dispatch("todo/addTodo", {
      value: Math.random().toString(32).slice(2),
      id: Date.now(),
    });
  },
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped></style>

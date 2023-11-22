import { delay } from "~/utils";

export const state = () => ({
  list: [],
});

export const mutations = {
  ADD_TODO(state, todo) {
    state.list.push(todo);
  },
};

export const actions = {
  async addTodo({ commit }, todo) {
    await delay();
    commit("ADD_TODO", todo);
  },
};

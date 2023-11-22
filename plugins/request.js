// todo 添加额外逻辑
export default (ctx, inject) => {
  const get = (url, params, config = {}) =>
    ctx.$axios.$get(url, {
      params,
      ...config,
    });

  const post = (url, data, config = {}) =>
    ctx.$axios.$post(url, {
      data,
      ...config,
    });

  inject("get", get);
  inject("post", post);
};

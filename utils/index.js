export const delay = (time = 200) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

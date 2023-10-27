export default {
  fetch: async (_, env) => {
    console.log("env.B", env.B);
    const req = new Request("http://stub/", {
      method: "GET",
    });
    const res = await env.B.fetch(req);

    return res;
  },
};

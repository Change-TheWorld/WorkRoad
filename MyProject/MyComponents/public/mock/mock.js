Mock.setup({
  //timeout: '1000-2000'
});
Mock.mock(/\/getInfo/, function(options) {
  console.log("ajax %s %s ", options.url, options.type);

  return Mock.mock({
    status: 200,
    desc: "success~",
    data: {
      list: [1, 2, 3, 4, 5]
    }
  });
});

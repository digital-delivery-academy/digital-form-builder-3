module.exports = {
  ci: {
    collect: {
      url: [
        "http://localhost:3000/app",
        "http://localhost:3000/app/new",
        "http://localhost:3000/app/choose-existing",
        "http://localhost:3000/app/designer/test-form-a",
        "http://localhost:3009/components/all-components",
      ],
      startServerCommand: "",
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: "filesystem",
      //target: "temporary-public-storage",
    },
  },
};

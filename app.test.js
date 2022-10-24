const request = require("supertest");

const app = require("./app");

describe("Test example", () => {
  test("GET /", (done) => {
    request(app).get("/").expect(200);
  });
});

const request = require("supertest");
const app = require("../application");

describe("Test the root path", () => {

  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  test("recuperer tout les persos", async () => {
    const response = await request(app).get("/Perso/afficheLesPersos");
    expect(response.statusCode).toBe(200)
  })

});


    




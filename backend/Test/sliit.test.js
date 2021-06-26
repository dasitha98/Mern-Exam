const app = require('../server');
const mongoose = require('mongoose');
const supertest = require('supertest');

//npm i -D jest supertest

beforeEach((done) => {
    mongoose.connect(
        "mongodb+srv://admin:admin123@cluster0.p5osx.mongodb.net/sliit?retryWrites=true&w=majority",
        {useNewUrlParser: true, useUnifiedTopology: true},
        () => done()
    );
});

test("get all categories api testing", () => {
    return supertest(app)
    .get('/category/getallcategory/')
    .then((response) => {
        expect(response.statusCode).toBe(200);
    });
});


afterEach((done) => {
    mongoose.disconnect();
    return done();
});
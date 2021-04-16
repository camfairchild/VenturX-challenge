let chai = require("chai");
let chaiHttp = require("chai-http");

var app = require("../server");

chai.use(chaiHttp);
chai.should();

/** Test greetings
 * We don't impose restrictions on names as theoretically, they could be anything
 * this means we don't restrict characters in the input
 */
describe("greetings", () => {
    // Test with valid name
    it("should show the correct message: 'Hello, Name!'", done => {
        chai
            .request(app)
            .get("/greetings/Example")
            .end((err, res) => {
                res.text.should.equal("Hello, Example!");
                done();
            })
    });

    it("should send an error message on empty input: 'ERROR: ...'", done => {
        chai
            .request(app)
            .get("/greetings/")
            .end((err, res) => {
                res.text.should.contain("ERROR:");
                done();
            })
    });

    it("should correctly handle names containing code e.g. \";eval(...);", done => {
        chai
            .request(app)
            .get("/greetings/\";eval(console.log(\"test\");")
            .end((err, res) => {
                res.text.should.contain("Hello, ");
                res.text.should.contain("eval");
                done();
            })
    });

    it("should correctly handle the name null", done => {
        chai
            .request(app)
            .get("/greetings/%00")
            .end((err, res) => {
                res.text.should.contain("Hello, ");
                done();
            })
    });

    it("should correctly handle the name \"undefined\"", done => {
        chai
            .request(app)
            .get("/greetings/undefined")
            .end((err, res) => {
                res.text.should.contain("Hello, ");
                res.text.should.contain("undefined");
                done();
            })
    });

    it("should correctly handle the name \"'\"", done => {
        chai
            .request(app)
            .get("/greetings/'")
            .end((err, res) => {
                res.text.should.contain("Hello, ");
                done();
            })
    });

    it("should correctly handle the regex in the name", done => {
        chai
            .request(app)
            .get("/greetings/w+")
            .end((err, res) => {
                res.text.should.contain("Hello, ");
                done();
            })
    });
})
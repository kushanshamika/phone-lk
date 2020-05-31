const {readDataFileAsync, readDataFileSync} = require("../src/util");

describe("Function Definitions", ()=>{
    test("readDataFileAsync should be defined", () =>{
        expect(readDataFileAsync).toBeDefined();
    })

    test("readDataFileSync should be defined", () =>{
        expect(readDataFileSync).toBeDefined();
    })
})

describe("Synchronous File Read", ()=>{
    it("should return a string", () =>{
        expect(readDataFileSync()).toBeInstanceOf(String);
    })

    it("should return non-empty string", () =>{
        expect(readDataFileSync().length).toBeGreaterThan(0);
    })
})

describe("Asynchronous File Read", ()=>{
    it("should return a string", () =>{
        return readDataFileAsync().then(data => expect(data).toBeInstanceOf(String));
    })

    it("should return non-empty string", () =>{
        return readDataFileAsync().then(data => expect(data.length).toBeGreaterThan(0));
    })
})

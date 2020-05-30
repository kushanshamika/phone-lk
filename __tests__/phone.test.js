var rewire = require("rewire"); 

var phoneModule = rewire("../src/phone");
var sanitizePhoneNumber = phoneModule.__get__("sanitizePhoneNumber");

describe("Testing Phone Number sanitization", ()=>{

    it("should remove leading zero", ()=>{
        expect(sanitizePhoneNumber("0772691370")).toEqual('772691370')
    })

    it("should not change", ()=>{
        expect(sanitizePhoneNumber("94772691370")).toEqual('94772691370')
    })

    it("should remove leading +", ()=>{
        expect(sanitizePhoneNumber("+94772691370")).toEqual('94772691370')
    })

    it("should remove leading and following characters", ()=>{
        expect(sanitizePhoneNumber("abc94772691370def")).toEqual('94772691370')
    })

    it("should remove whitespaces", ()=>{
        expect(sanitizePhoneNumber(" 9477269 1370  ")).toEqual('94772691370')
    })
})
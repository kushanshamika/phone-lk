const {phone} = require("../index");

describe("Function Definition", ()=>{
    it("Should be defined", () =>{
        expect(phone).toBeDefined();
    })
})

describe("Testing mobile numbers", ()=>{

    it("Testing mobile number pattern I", ()=>{
        expect(phone("0775489485")).toEqual([ '94775489485', 'mobile', 'dialog', null ])
    })

    it("Testing mobile number pattern II", ()=>{
        expect(phone("+94775489485")).toEqual([ '94775489485', 'mobile', 'dialog', null ])
    })

    it("Testing mobile number pattern III", ()=>{
        expect(phone("775489485")).toEqual([ '94775489485', 'mobile', 'dialog', null ])
    })
})

describe("Testing landline numbers", ()=>{

    it("Testing landline number pattern I", ()=>{
        expect(phone("0912225492")).toEqual([ '94912225492', 'landline', 'sri lanka telecom', 'galle' ])
    })

    it("Testing landline number pattern II", ()=>{
        expect(phone("+94912225492")).toEqual([ '94912225492', 'landline', 'sri lanka telecom', 'galle' ])
    })

    it("Testing landline number pattern I", ()=>{
        expect(phone("912225492")).toEqual([ '94912225492', 'landline', 'sri lanka telecom', 'galle' ])
    })
})

describe("Testing invalid numbers", ()=>{

    it("Should be return empty array for invalid numbers", ()=>{
        expect(phone("0795489485")).toEqual([])
    })

    it("Should be return empty array for empty string", ()=>{
        expect(phone()).toEqual([])
    })

})
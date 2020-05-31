const {phone, phoneAsync} = require("../index");

describe("Function Definition", ()=>{
    it("Synchronous should be defined", () =>{
        expect(phone).toBeDefined();
    })
    it("Asynchronous should be defined", () =>{
        expect(phoneAsync).toBeDefined();
    })
})

/**
 * 
 * Syncronous Array Format
 * 
 */
describe("Testing mobile numbers - Synchronous(Array)", ()=>{

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

describe("Testing landline numbers - Synchronous(Array)", ()=>{

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

describe("Testing invalid numbers - Synchronous(Array)", ()=>{

    it("Should be return empty array for invalid numbers", ()=>{
        expect(phone("0795489485")).toEqual([])
    })

    it("Should be return empty array for empty string", ()=>{
        expect(phone()).toEqual([])
    })

})

/**
 * 
 * Asyncronous Array Format
 * 
 */
describe("Testing mobile numbers - Asynchronous(Array)", ()=>{

    it("Testing mobile number pattern I", ()=>{
        return phoneAsync("0775489485").then(data => expect(data).toEqual([ '94775489485', 'mobile', 'dialog', null ]));
    })

    it("Testing mobile number pattern II", ()=>{
        return phoneAsync("+94775489485").then(data => expect(data).toEqual([ '94775489485', 'mobile', 'dialog', null ]));
    })

    it("Testing mobile number pattern III", ()=>{
        return phoneAsync("775489485").then(data => expect(data).toEqual([ '94775489485', 'mobile', 'dialog', null ]));
    })
})

describe("Testing landline numbers - Asynchronous(Array)", ()=>{

    it("Testing landline number pattern I", ()=>{
        return phoneAsync("0912225492").then(data => expect(data).toEqual([ '94912225492', 'landline', 'sri lanka telecom', 'galle' ]));
    })

    it("Testing landline number pattern II", ()=>{
        return phoneAsync("+94912225492").then(data => expect(data).toEqual([ '94912225492', 'landline', 'sri lanka telecom', 'galle' ]));
    })

    it("Testing landline number pattern I", ()=>{
        return phoneAsync("912225492").then(data => expect(data).toEqual([ '94912225492', 'landline', 'sri lanka telecom', 'galle' ]));
    })
})

describe("Testing invalid numbers - Asynchronous(Array)", ()=>{

    it("Should be return empty array for invalid numbers", ()=>{
        return phoneAsync("0795489485").then(data => expect(data).toEqual([]));
    })

    it("Should be return empty array for empty string", ()=>{
        return phoneAsync().then(data => expect(data).toEqual([]));
    })

})

/**
 * 
 * Syncronous Object Format
 * 
 */
describe("Testing mobile numbers - Synchronous(Object)", ()=>{

    it("Testing mobile number pattern I", ()=>{
        expect(phone("0775489485", true)).toEqual({ isValid: true, formattedNumber: '94775489485', category: 'mobile', operator: 'dialog', area: null })
    })

    it("Testing mobile number pattern II", ()=>{
        expect(phone("+94775489485", true)).toEqual({ isValid: true, formattedNumber: '94775489485', category: 'mobile', operator: 'dialog', area: null })
    })

    it("Testing mobile number pattern III", ()=>{
        expect(phone("775489485", true)).toEqual({ isValid: true, formattedNumber: '94775489485', category: 'mobile', operator: 'dialog', area: null })
    })
})

describe("Testing landline numbers - Synchronous(Object)", ()=>{

    it("Testing landline number pattern I", ()=>{
        expect(phone("0912225492", true)).toEqual({ isValid: true, formattedNumber: '94912225492', category: 'landline', operator: 'sri lanka telecom', area: 'galle' })
    })

    it("Testing landline number pattern II", ()=>{
        expect(phone("+94912225492", true)).toEqual({ isValid: true, formattedNumber: '94912225492', category: 'landline', operator: 'sri lanka telecom', area: 'galle' })
    })

    it("Testing landline number pattern I", ()=>{
        expect(phone("912225492", true)).toEqual({ isValid: true, formattedNumber: '94912225492', category: 'landline', operator: 'sri lanka telecom', area: 'galle' })
    })
})

describe("Testing invalid numbers - Synchronous(Object)", ()=>{

    it("Should be return object with isValid: false for invalid numbers", ()=>{
        expect(phone("0795489485", true)).toEqual({ isValid : false })
    })

    it("Should be return object with isValid: false for empty string", ()=>{
        expect(phone('', true)).toEqual({ isValid: false })
    })

})

/**
 * 
 * Asyncronous Object Format
 * 
 */
describe("Testing mobile numbers - Asynchronous(Object)", ()=>{

    it("Testing mobile number pattern I", ()=>{
        return phoneAsync("0775489485", true).then(data => expect(data).toEqual({ isValid: true, formattedNumber: '94775489485', category: 'mobile', operator: 'dialog', area: null }));
    })

    it("Testing mobile number pattern II", ()=>{
        return phoneAsync("+94775489485", true).then(data => expect(data).toEqual({ isValid: true, formattedNumber: '94775489485', category: 'mobile', operator: 'dialog', area: null }));
    })

    it("Testing mobile number pattern III", ()=>{
        return phoneAsync("775489485", true).then(data => expect(data).toEqual({ isValid: true, formattedNumber: '94775489485', category: 'mobile', operator: 'dialog', area: null }));
    })
})

describe("Testing landline numbers - Asynchronous(Object)", ()=>{

    it("Testing landline number pattern I", ()=>{
        return phoneAsync("0912225492", true).then(data => expect(data).toEqual({ isValid: true, formattedNumber: '94912225492', category: 'landline', operator: 'sri lanka telecom', area: 'galle' }));
    })

    it("Testing landline number pattern II", ()=>{
        return phoneAsync("+94912225492", true).then(data => expect(data).toEqual({ isValid: true, formattedNumber: '94912225492', category: 'landline', operator: 'sri lanka telecom', area: 'galle' }));
    })

    it("Testing landline number pattern I", ()=>{
        return phoneAsync("912225492", true).then(data => expect(data).toEqual({ isValid: true, formattedNumber: '94912225492', category: 'landline', operator: 'sri lanka telecom', area: 'galle' }));
    })
})

describe("Testing invalid numbers - Asynchronous(Object)", ()=>{

    it("Should be return object with isValid: false for invalid numbers", ()=>{
        return phoneAsync("0795489485", true).then(data => expect(data).toEqual({ isValid : false }));
    })

    it("Should be return object with isValid: false for empty string", ()=>{
        return phoneAsync('', true).then(data => expect(data).toEqual({ isValid: false }));
    })

})
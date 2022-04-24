const user1 =require('./../../app/services/UserService')
describe ("Test for UserService",()=>{
    test("1. Creando un numero usuario para User Service",()=>{
        const User=user1.created(1,"monseeligio", "monserrat","bio")
        expect(User.id).toBe(1)
        expect(User.username).toBe("monseeligio")
        expect(User.name).toBe("monserrat")
        expect(User.bio).toBe("bio")
    })
})
const user =require('./../../app/models/user')

describe ("prueba de jest",()=>{
    
    test("prueba 1",()=>{
        const User=new user(1,"monseeligio", "monserrat","bio")
        expect(User.id).toBe(1)
        expect(User.username).toBe("monseeligio")
        expect(User.name).toBe("monserrat")
        expect(User.bio).toBe("bio")


    })

    test("requerimiento 2: fechas en atributos de User,",()=>{
        const User=new user(1,"monseeligio", "monserrat","bio")
        expect(User.id).toBe(1)
        expect(User.username).toBe("monseeligio")
        expect(User.name).toBe("monserrat")
        expect(User.bio).toBe("bio")
        expect(User.datecreated).not.toBeUndefined()
        expect(User.lastUpdate).not.toBeUndefined()
    })

    test("requerimiento 3 : agregando getters,",()=>{
        const User=new user(1,"monseeligio", "monserrat","bio", "dateCreated", "lastUpdate")
        expect(User.getUsername).toBe("monseeligio")
    })
    test("requerimiento 4 : agregando setters,",()=>{
        const User=new user(1,"monseeligio", "monserrat","bio", "dateCreated", "lastUpdate")
        User.setUsername = "monseeligio"
    })

})
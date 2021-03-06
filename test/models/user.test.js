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
        const User=new user(1,"monseeligio", "monserrat","bio")
        expect(User.getUsername).toBe("monseeligio")
        expect(User.getBio).toBe("bio")
        expect(User.getDateCreated).not.toBeUndefined()
        expect(User.getLastUpdate).not.toBeUndefined()
    })


    test("requerimiento 4 : agregando setters,",()=>{
        const User=new user(1,"monseeligio", "monserrat","bio")
        User.setUsername = "monseeligio"
        expect(User.username).toBe("monseeligio")
        User.setBio="New bio"
        expect(User.bio).toBe("New bio")

    })

})
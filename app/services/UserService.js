const User=require('./../models/user')
class UserService{
    static created(id,username,name,bio){
        return new User(id,username,name,bio)        
    }
}
module.exports=UserService
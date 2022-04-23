class user{
constructor(id,username,name,bio){
    this.id=id
    this.username=username
    this.bio=bio
    this.name=name
    this.datecreated= new Date()
    this.lastUpdate=new Date()
}
get getUsername(){
    return this.username
}
set setUsername(NewUsername){
    this.username=NewUsername
}
}
module.exports=user
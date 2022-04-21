class user{
constructor(id,username,name,bio,datecreated, lasUpdate){
    this.id=id
    this.username=username
    this.bio=bio
    this.name=name
    this.datecreated=datecreated
    this.lasUpdate=lasUpdate
}
get getUsername(){
    return this.username
}
set setUsername(NewUsername){
    this.username=NewUsername
}
}
module.exports=user
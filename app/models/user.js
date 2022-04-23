class user{
constructor(id,username,name,bio){
    this.id=id
    this.username=username
    this.bio=bio
    this.name=name
    this.datecreated= new Date()
    this.lastUpdate=new Date()
}
get getId(){
    return this.id
}
get getUsername(){
    return this.username
}
get getName(){
    return this.name
}
get getBio(){
    return this.bio
}
get getDateCreated(){
    return this.datecreated
}
get getLastUpdate(){
    return this.lastUpdate
}

set setUsername(NewUsername){
    this.username=NewUsername
}
set setBio(newBio){
    this.bio=newBio
}
}
module.exports=user
class Patient {
    constructor(){
        this.index=null;
        this.name=null;
        this.phone=null;
        this.age=null;
    }
    updateCount(count){
        dataBase.ref('/').update({
            patientCount:count
        })
    }
    update(){
        var patientIndex="patients/patient"+this.index
        dataBase.ref(patientIndex).set({
            name:this.name,
            age:this.age,
            phone:this.phone
        })
    }
}
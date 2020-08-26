class Form {
    constructor(){
    this.title= createElement('h1',"Medical Directory")
    this.register=createButton('Register Log')
    this.about=createButton('About Me')
    this.name= createInput('name')
    this.age = createInput('age')
    this.phone = createInput('phone number') 
    this.submit = createButton('submit')
    this.result = createElement('h2',"Your appoinment has been registered successfully   and doctor's team will contact you shortly")
    this.result.hide()
    this.aboutText = createElement('h2',"1.This app will allow you to book an appoinment <br>2. This app will not share your information with anyone<br>3.This app will save you from standing queue for hours ")
    this.aboutText.hide()
    this.back = createButton('back')
    this.name.hide()
    this.age.hide()
    this.phone.hide()
    this.submit.hide()
    this.back.hide()
    }
    display(){
    this.title.position(displayWidth/2+80,150)
    this.register.position(displayWidth/2-5,500)
    this.about.position(displayWidth/2+300,500)
    this.register.mousePressed(()=>{
        c=1;
        this.title.hide()
        this.register.hide()
        this.about.hide()
     this.name.show()
        this.age.show()
        this.phone.show()
        this.submit.show()
        this.name.position(displayWidth/2-50,300)
        this.age.position(displayWidth/2-50,400)
        this.phone.position(displayWidth/2-50,500)
        this.submit.position(displayWidth/2,600)
    })
    this.submit.mousePressed(()=>{
        patient.name=this.name.value()
        patient.age=this.age.value()
        patient.phone=this.phone.value()
        count=count+1;
        patient.index=count
        patient.updateCount(count)
        patient.update()
        c=1;
        this.name.hide()
        this.age.hide()
        this.phone.hide()
        this.submit.hide()
        this.back.show()
        this.back.position(displayWidth-100,30)
        this.result.show()
        this.result.position(displayWidth/2-750,300)  
    })
    this.about.mousePressed(()=>{
        c=1;
        this.title.hide()
        this.register.hide()
        this.about.hide()
        this.back.show()
        this.back.position(displayWidth-100,30)
        this.aboutText.show()
        this.aboutText.position(displayWidth/2-350,300)
    })
    
    this.back.mousePressed(()=>{
        c=0;
        this.back.hide()
        this.title.show()
        this.register.show()
        this.about.show()
        this.result.hide()
        this.aboutText.hide()
    })
    }
}
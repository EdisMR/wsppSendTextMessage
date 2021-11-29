const form=document.forms[0],
	inputTel=form.telephone,
	inputName=form.username,
	inputMessage=form.message,
	buttonSendForm=document.getElementById("openurl"),
	innerURL=document.getElementById("innerGeneratedURL"),
	inputs=Array.from(form.querySelectorAll("input,textarea"))

var generatedMessage=[]

inputs.forEach(elm=>{
	elm.addEventListener("input",showURLprocess,false)
})

form.addEventListener("submit",openChat,false)

function showURLprocess(e){
	e.preventDefault()
	generatedMessage[0]=inputTel.value
	generatedMessage[1]="Your name is: "+inputName.value
	generatedMessage[2]=inputMessage.value

	innerURL.innerText=wsppSendTextMessage(generatedMessage,false)

}

function openChat(e){
	e.preventDefault()
	if(inputMessage.value!=""){
		wsppSendTextMessage(generatedMessage)
	}
}
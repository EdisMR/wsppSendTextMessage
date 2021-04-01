# wsppSendTextMessage

Link generator to open Whatsapp with a dynamic message

It is very useful when you have to send a message to the site owner, through WhatsApp with your phone number

You have to generate your message and send it to wsppSendTextMessage to generate and open the Whatsap url

See the project for more information

## How to use:
- You have to capture and validate the data in your own function
- Remember link the js: src="wsppSendTextMessage.js"
- You have to send the data to the wsppSendTextMessage function in an Array
- The first element in the Array is the phone number where you will send the message
- Each element of the Array is a line of the Whatsapp text message
- You can use the simbols you use in the app, to format the text, for example *bold* or _italic_
- When you have the complete data in the Array, you are ready to call wsppSendTextMessage(data) - with your Array as the first parameter
- The wsppSendTextMessage function ever return the processed string (the generated link to open Whatsapp)
- By default the wsppSendTextMessage function open a new window with the generated URL
- The function open the Whatsapp chat and return the processed string, but to return only the string you have to add a second parameter with the value "false". Example: wsppSendTextMessage(data,false)
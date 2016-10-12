// application specific code to update my page.

const secretCoder = new Encryption();

function processRequest(msg){

let mykey, mymessage;

if (document.getElementById('mykey').value !='') {
	 mykey = document.getElementById('mykey').value.toUpperCase();
}else{   mykey = "magickey".toUpperCase();
}

if (document.getElementById('mymessage').value !=''){
	mymessage = document.getElementById('mymessage').value.toUpperCase();
}	

if (document.getElementById('encrypt').checked) {
 		 document.getElementById('mymessage').value=secretCoder.encrypt(mymessage, mykey);
	}

if (document.getElementById('decrypt').checked) {
	 document.getElementById('mymessage').value=secretCoder.decrypt(mymessage, mykey);
	}
}// end processRequest()



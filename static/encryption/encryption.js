// my basic encryption algorithm to only handle text massages.
function Encryption() {

const alphaCount = 26;
const maxCharCode = "Z".charCodeAt(0);
const baseCharCode = "A".charCodeAt(0);

function IsChar(char){
	return /[A-Z]/.test(char);
}

function EncodeChar(char, codechar){
	let mychar = char.charCodeAt(0);
	let mycodechar = codechar.charCodeAt(0);

 	if  (IsChar( char.charAt(0))){
	if (mychar+(mycodechar-baseCharCode) > maxCharCode ){
		return mychar+(mycodechar-baseCharCode)-alphaCount;
	}else{
		return mychar+(mycodechar-baseCharCode)
	}
	}else{
		return mychar;
	}
}

function DecodeChar(char, codechar){
	let mychar = char.charCodeAt(0);
	let mycodechar = codechar.charCodeAt(0);

 	if  (IsChar( char.charAt(0))){
	if (mychar-(mycodechar-baseCharCode) < baseCharCode ){
		return mychar-(mycodechar-baseCharCode)+alphaCount;
	}else{
		return mychar-(mycodechar-baseCharCode)
	}
	}else{
		return mychar;
	}
}

this.encrypt = function encrypt( msg, mykey){
	let mykey2 = mykey.replace(/\s+/g, '');
	let keylength = mykey2.length;
	let msglength = msg.length;
	let newmsg = [];

	for ( let i=0; i < msglength; i++){
		newmsg.push(EncodeChar(msg.charAt(i),mykey2.charAt(i%keylength)));
	}

	return String.fromCharCode.apply(String, newmsg)
}

this.decrypt = function decrypt( msg, mykey){
	let mykey2 = mykey.replace(/\s+/g, '');
	let keylength = mykey2.length;
	let msglength = msg.length;
	let newmsg = [];

	for ( let i=0; i < msglength; i++){
		newmsg.push(DecodeChar(msg.charAt(i),mykey2.charAt(i%keylength)));
	}

	return String.fromCharCode.apply(String, newmsg)
}
}


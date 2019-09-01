var User="";
while(User=="")User=prompt("WHAT IS YOUR NAME");
var password="";
var audio = new Audio('Pop.mp3');
while(password=="")password=prompt("Choose Password for your chat");
var RSAkey=cryptico.generateRSAKey(password,1024);
var publicKey=cryptico.publicKeyString(RSAkey);

$("#Public_Key").append("Public Key of ChatRoom is: "+publicKey);

var socket = io();
socket.emit('joined',User);
$('form').submit(function(){
        var EncryptedMessage=cryptico.encrypt($('#m').val(),publicKey)
        socket.emit('chat message', 
        {
        "message":EncryptedMessage.cipher,
        "user":User
        });
        $('#m').val('');
        return false;
        });
socket.on('chat message', function(msg){
    var decrypt=cryptico.decrypt(msg.message,RSAkey).plaintext;
    if(decrypt!=undefined){
        $('#messages').append($('<li><em style="color:blue;">'+msg.user+": </em><br>"+
        "Message Sent to Server:-"+msg.message+"<br>Real Message:-<div class='real'>"
        +decrypt+"</div></li>"));
        audio.play();
        window.scrollTo(0, document.body.scrollHeight);}
    });
socket.on('add',function(User){
        $('#messages').append($('<li>'+User.Name+" joined</li>"));     
        $('#Users').html('<em style="color:blue;">Total People Joined:-'+User.Users+'</em><br>');
    });
      

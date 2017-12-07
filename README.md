# Cryptography_Chat
Simple Node,Express,Socket-Io App to acheive End to End Encryption using RSA algorithm.  
If you dont want to see the encrypted messages just choose dont show EncryptedMessages when it is prompted  
Simple Beep Sound plays whenever we recieve message   
To start
```javascript
npm install
node server.js
open browser with localhost:3000
```

>Socket IO sends messages to all clients but the clients which have correct Passphrase(Asked during page Loading) will get the message. So even if 1000's people are talking in this site but the people with same Passphrase can see each others messages  

![ScreenShot](https://github.com/djvu97/Cryptography-Chat/blob/master/1.JPG)  
Thanks to https://github.com/wwwtyro/cryptico for encryption library

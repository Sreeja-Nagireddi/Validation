function validate(){
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;
    var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^-{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var reg1 = /^[a-zA-Z0-9]{6,}$/;
    if(email.match(reg)){
    document.getElementById('emailerror').innerHTML = " ";
    }
    else{
    document.getElementById('emailerror').innerHTML = "Invalid email";
    return false;
    }
    if(pwd.match(reg1)){
    document.getElementById('pwderror').innerHTML = " ";
    }
    else{
    document.getElementById('pwderror').innerHTML = "Invalid password";
    return false;
    }
    }
    
    
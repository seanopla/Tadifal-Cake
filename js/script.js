function chpw(){
    let password = document.querySelector("#pw").value;
    let cpassword = document.querySelector("#cpw").value;
    
    if(password == cpassword) {
        alert("akun berhasil dibuat");
    }
    else{
        alert("Password Doesnt match");
    }
}

function product(){
    alert("Thank you for order 😃");
}
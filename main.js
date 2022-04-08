var form_register = document.getElementById ("Registro");
var form_Iniciar_Sesion = document.getElementById ("Iniciar_Sesion");

form_register.addEventListener("submit",function(e){
    e.preventDefault();
    var info = new FormData(form_register);
    var aux = 0 , data = new Object();
    for(var i of info){
        if(i[0] == "input_password_registro"){
            aux = i[1];
        }
        if(i[0] == "input_password_confirm_registro"){
            if(aux == i[1]){
                setValues(data)
            }
            else{
                alert("Las contraseñas no coinciden")
                return 0;
            }
        }
        data[i[0]] = i[1];
    }  
    
})
function setValues(data){
    localStorage.setItem("email" , JSON.stringify(data))
    
}


form_Iniciar_Sesion.addEventListener("submit",function(e){
    e.preventDefault();
    var info = new FormData(form_Iniciar_Sesion);
    var localdata = JSON.parse(localStorage.getItem("email"));
    for(var i of info){
        if(i[0] == "input_email_login"){
            if(i[1] == localdata.input_correo_registro){
               console.log(localdata.input_correo_registro)    
            }
            else{
                alert("Usuario no existente")
            }
        }
        if(i[0] == "input_password_login"){
            if(i[1] == localdata.input_password_registro){
                console.log(localdata.input_password_registro)
            }
            else{
                alert("La contraseña no coincide")
            }
        }
    }
    
})
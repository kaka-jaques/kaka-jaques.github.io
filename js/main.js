function changeDDI(element){
    if(element.value == 1){
        $("#tel").attr("value", "+55");
    }else if(element.value == 2){
        $("#tel").attr("value", "+44");
    }else if(element.value == 3){
        $("#tel").attr("value", "+1")
    }else if(element.value == 4){
        $("#tel").attr("value", "+351")
    }else if(element.value == 5){
        $("#tel").attr("value", "+54")
    }else if(element.value == 6){
        $("#tel").attr("value", "+49")
    }else if(element.value == 7){
        $("#tel").attr("value", "+34")
    }else if(element.value == 8){
        $("#tel").attr("value", "+33")
    }
}

function redirect(element){
    if(element.value == 1){
        window.location.replace("https://kaka-jaques.github.io/");
    }else if(element.value == 2){
        window.location.replace("../lang/uk.html");
    }else if(element.value == 3){
        window.location.replace("../lang/us.html");
    }else if(element.value == 4){
        window.location.replace("../lang/pt.html");
    }else if(element.value == 5){
        window.location.replace("../lang/arg.html");
    }else if(element.value == 6){
        window.location.replace("../lang/ger.html");
    }else if(element.value == 7){
        window.location.replace("../lang/esp.html");
    }else if(element.value == 8){
        window.location.replace("../lang/fr.html");
    }
}

function sendSucessful(){
    $("#send-success").attr("class", "alert alert-success alert-dismissible fade show")
    $("#send-success").append("<strong>EMAIL ENVIADO COM SUCESSO!</strong><button type='button' class='btn-close' data-bs-dismiss='alert'></button>")
    $("form-control").attr("value", " ")
}
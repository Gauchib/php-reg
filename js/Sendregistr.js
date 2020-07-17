$('#sendMail').on("click", function() {
    var login = $("#login").val().trim();
    var email = $("#email").val().trim();
    var pass = $("#pass").val().trim();
    var repass = $("#repass").val().trim();

    if(login == "") {
        $("#errorMess").text("Введите логин");
        return false;
    }else if(email == "") {
        $("#errorMess").text("Введите email");
        return false;
    }else if(pass == "") {
        $("#errorMess").text("Введите пароль");
        return false;
    }else if(repass == "") {
        $("#errorMess").text("Введите повторный пароль");
        return false;
    }else if(pass != repass){
        $("#errorMess").text("Ваши пароли не совпадают");
        return false;
    }else if(pass.length < 5){
        $("#errorMess").text("Ваш пароль должен быть больше 5 символов");
        return false;
    }

    $("#errorMess").text("");

   $.ajax({
        url: 'ajax/registr.php',
        type: 'POST',
        cache: false,
        data: { 'login': login, 'email': email, 'pass': pass, 'repass': repass },
        dataType: 'html',
        beforeSend: function() {
            $("#sendMail").prop("disabled", true);
        },
        success: function(data) {
            if (!data){
                alert('Аккаунт с таким email или логином уже создан!');
                $("#sendMail").prop("disabled", false);
            }else{
                $('#mailForm').trigger('reset');

                window.location.href = "http://a0453884.xsph.ru/code.php";
            }
            $("#sendMail").prop("disabled", false);
        }

    });
});
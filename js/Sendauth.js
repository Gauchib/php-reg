$('#sendAuth').on("click", function() {
    var login = $("#login").val().trim();
    var pass = $("#pass").val().trim();
    if(login == "") {
        $("#errorMess").text("Введите логин");
        return false;
    }else if(pass == "") {
        $("#errorMess").text("Введите пароль");
        return false;
    }else if(pass.length < 5){
        $("#errorMess").text("Ваш пароль должен быть больше 5 символов");
        return false;
    }

    $("#errorMess").text("");



   $.ajax({
        url: 'ajax/auth.php',
        type: 'POST',
        cache: false,
        data: { 'login': login, 'pass': pass},
        dataType: 'html',
        beforeSend: function() {
            $("#sendAuth").prop("disabled", true);
        },
        success: function(data) {
            if (!data){
                alert('Неправильный логин или пароль!');
                $("#sendAuth").prop("disabled", false);
            }else{
                $('#mailForm').trigger('reset');
                window.location.href = "http://a0453884.xsph.ru/akkaunt.php";
            }
            $("#sendAuth").prop("disabled", false);
        }

    });
});
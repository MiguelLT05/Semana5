const $usuario = $("#usuario");
const $password = $("#password");

/* CREDENCIALES VERDADERAS */
const credenciales = {
    usuario: "GatoWaza",
    pass: "VuelaAltoPPK"
};

$("#login").on("click", function(){
    const valueUsuario = $usuario.val();
    const valuePassword = $password.val();
    if (valueUsuario == credenciales.usuario) {
        if (valuePassword == credenciales.pass) {
            location.href = "dashboard.html";
        } else {
            Swal.fire({
                title: "ERROR",
                text: "Contraseña incorrecta",
                icon: "error"
            });
        }
    } else {
        Swal.fire({
            title: "ERROR",
            text: "Usuario no encontrado",
            icon: "error"
        });
    }
});


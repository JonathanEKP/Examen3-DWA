// Wait for the DOM to be ready
$().ready(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form-val").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      nombre: "required",
      apellido: "required",
      masc: "required",
      feme: "required",
      correo: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rul
        correo: true
      },
      comentario: "required",
      edad: {
        required: true,
        length: 1 || 2,
      },
      tel: {
        required: true,
        length: 8
      },
      check: "required",
      select: "required",
      user: {
        required: true,
        minlength: 8
      },
      contra: {
        required: true,
        minlength: 8
      },
    },
    // Specify validation error messages
    messages: {
      nombre: "Por favor introduzca su nombre",
      apellido: "Por favor introduzca su apellido",
      masc: "Por favor seleccione el sexo",
      feme: "Por favor seleccione el sexo",
      correo: {
        required: "Correo requerido",
        // Specify that email should be validated
        // by the built-in "email" rul
        correo: "Introduzca correo correctamente"
      },
      comentario: "Comentario requerido",
      edad: {
        required: "Edad requerida",
        length: "Introduzca una edad válida",
      },
      tel: {
        required: "Teléfono requerido",
        length: "Telefono de 8 numeros, sin espacios."
      },
      check: "Seleccione por lo menos un interes",
      select: "Seleccione un departamento",
      user: {
        required: "Usuario requerido",
        minlength: "Usuario de 8 caracteres por lo menos"
      },
      contra: {
        required: "Contraseña requerida",
        minlength: "Por favor contraseña de por lo menos 8 caracteres"
      },
    },
    debug: true,errorElement: "label",
    submitHandler: function(form) {
      form.submit();
    }
    
  });
});
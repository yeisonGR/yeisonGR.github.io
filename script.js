function encriptar() {
    var texto = document.getElementById('text').value;
    var textoEncriptado = ""; // Variable para almacenar el texto encriptado
  
    // Lógica de encriptación (aquí puedes implementar el algoritmo que desees)
    for (var i = 0; i < texto.length; i++) {
      var charCode = texto.charCodeAt(i); // Obtiene el código ASCII del carácter
      charCode += 1; // Por ejemplo, aumentamos en 1 el código ASCII
      var encriptadoChar = String.fromCharCode(charCode); // Convierte el código ASCII de nuevo a carácter
      textoEncriptado += encriptadoChar; // Agrega el carácter encriptado al texto encriptado
    }
  
    document.getElementById('encryptedText').textContent = textoEncriptado; // Muestra el texto encriptado
  }
  
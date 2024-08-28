document.addEventListener("DOMContentLoaded", function () {
    
    const textarea = document.getElementById("encriptador");
    const encryptButton = document.querySelector(".Encrypt");
    const decryptButton = document.querySelector(".Decrypt");
    const copyButton = document.querySelector(".Copy");
    const messageContainer = document.querySelector(".container-message h3");
    const infoText = document.querySelector(".container-message h4");
  
    
    function encrypt(text) {
      const encryptionKeys = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
      };
  
      return text.replace(/[eioua]/g, letter => encryptionKeys[letter]);
    }
  
    
    function decrypt(text) {
      const decryptionKeys = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
      };
  
      return text.replace(/enter|imes|ai|ober|ufat/g, encrypted => decryptionKeys[encrypted]);
    }
  
   
    encryptButton.addEventListener("click", function () {
      const inputText = textarea.value;
      if (!inputText.match(/^[a-z ]*$/)) {
        alert("Por favor, ingresa solo letras minúsculas y sin acentos.");
        return;
      }
      const encryptedText = encrypt(inputText);
      messageContainer.textContent = encryptedText;
      infoText.textContent = "Texto encriptado correctamente.";
    });
  
    
    decryptButton.addEventListener("click", function () {
      const inputText = textarea.value;
      if (!inputText.match(/^[a-z ]*$/)) {
        alert("Por favor, ingresa solo letras minúsculas y sin acentos.");
        return;
      }
      const decryptedText = decrypt(inputText);
      messageContainer.textContent = decryptedText;
      infoText.textContent = "Texto desencriptado correctamente.";
    });
  
   
    copyButton.addEventListener("click", function () {
      const textToCopy = messageContainer.textContent;
      navigator.clipboard.writeText(textToCopy).then(function () {
        alert("Texto copiado al portapapeles.");
      }).catch(function (error) {
        alert("Error al copiar el texto: ", error);
      });
    });
  });
  
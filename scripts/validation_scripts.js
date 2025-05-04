function ValidateAll() {
    emailValidation = ValidateEmail(document.contact_form.email);
    firstNameValidation = allLetter(document.contact_form.firstName);
    lastNameValidation = allLetter(document.contact_form.lastName);
    messageLengthValidation = stringlength(document.contact_form.message,10,150);

    if (!emailValidation || !firstNameValidation || !lastNameValidation || !messageLengthValidation) {
        return false;
    }

    return true;
}
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
    {

        document.contact_form.email.focus();
        return true;
    }
else
    {
    alert("Has ingresado una dirección de correo electrónico no válida.");
    document.contact_form.email.focus();
    return false;
}
}
function allLetter(inputtxt)
    { 
        var letters = /^[A-Za-z]+$/;
        if(inputtxt.value.match(letters))
            {
                return true;
            }
        else
        {
        alert('Por favor, ingresá solo caracteres alfabéticos.');
        return false;
    }
    }

    function stringlength(inputtxt, minlength, maxlength)
    { 
    var field = inputtxt.value; 
    var mnlen = minlength;
    var mxlen = maxlength;
    
    if(field.length<mnlen || field.length> mxlen)
    { 
    alert("El mensaje debe tener entre " +mnlen+ " y " +mxlen+ " caracteres.");
    return false;
    }
    else
    { 
    return true;
    }
    }
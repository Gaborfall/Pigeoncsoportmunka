function moveTexts() {

    var messageValue = document.getElementById("message").value;

    var nameValue = document.getElementById("name").value;

    var phoneValue = document.getElementById("phone").value;

    var emailValue = document.getElementById("email").value;

    var subjectValue = document.getElementById("subject").value;

    var messageValue = document.getElementById("message").value;

    messageValue = messageValue.replace(/\n/gi, "%0D%0A")
    
    var actualMessageValue;

    var lineBreak = "%0D%0A";

    actualMessageValue = "" + "Név: " + nameValue + lineBreak +"Telefon: " + phoneValue + lineBreak + "Email: " + emailValue + lineBreak + lineBreak + messageValue;

    window.location.assign("mailto:pigeon@pigeon.com?subject=" + subjectValue + "&body=" + actualMessageValue );

}
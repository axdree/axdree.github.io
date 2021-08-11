// Password Strength Checker
// when user releases a key on the keyboard
$("#password").on("keyup", function(){
    // regex to check for numbers
    const number = /([0-9])/;
    // regex to check for alphabets
    const letters = /([a-zA-Z])/;
    // regex to check for special characters
    const special = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

    // if password below 6 char and does not contain special characters or letters
    if($("#password").val().length == 0){
        // reset classes
        $("#pw-strength").removeClass();
        $('#pw-strength').empty();

    // if password below 8 char and does not contain special characters or letters
    }else if($("#password").val().length < 8 || !(($("#password").val().match(special) || $("#password").val().match(letters)))){
        // reset classes
        $("#pw-strength").removeClass();
        // set weak password bar
        $('#pw-strength').addClass('weak-pass');
        // explains password
        $('#pw-strength').html("Weak Password! (Should contain atleast 8 characters and letters!)");

    // if password contains all requirements
    }else if($('#password').val().match(number) && $('#password').val().match(letters) && $('#password').val().match(special)){
        // reset classes
        $('#pw-strength').removeClass();
        // set medium password bar
        $('#pw-strength').addClass('strong-pass');
        // explains password
        $('#pw-strength').html("Strong Password!");

    }else{
        // reset classes
        $("#pw-strength").removeClass();
        // set medium password bar
        $('#pw-strength').addClass('medium-pass');
        // explains password
        $('#pw-strength').html("Medium Password! (Should include alphabets, numbers and special characters or some combination!)");
    };
    // reset nicescroll if page size changes
    $('html, body').getNiceScroll().resize()
});


// Password Generator
$("#passwordGenBTN").click(function(){
    // defining character set and length of password
    const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*-_+=?><.,/"
    const length = 20
    var generated = ""

    // iterates number of times specified in length
    for(var i = 0; i < length; i++){
        // randomly select a character from character set and append to generated
        generated += charSet.charAt(Math.floor(Math.random() * charSet.length));
    };

    // Places generated password in read only input field's placeholder
    $("#password-gen").attr("value", generated);
});


// TEST ACCOUNT: multiple-breaches@hibp-integration-tests.com
// Email Breach Checker using haveibeenpwned API v3
$("#breach-form").submit( function(e){
    e.preventDefault();
    // using array to fulfil array requirement of CA2
    var breaches = [];
    // Send asynchronous Ajax HTTP Request, basically sending a web request and update page without reloading.
    $.ajax({
        type: "GET",
        crossDomain: true,
        // Hosting a CORS-Anywhere proxy server on my AWS EC2 Instance to bypasss CORS policy set by hibp API v3 for Authenticated requests as a proof of concept.
        // Encodes email for url.
        url: "http://ec2-13-212-180-200.ap-southeast-1.compute.amazonaws.com:8080/https://haveibeenpwned.com/api/v3/breachedaccount/" + encodeURIComponent($("#breachEmail").val()),
        // API Key is valid until 6/9/2021
        headers: {'hibp-api-key': '9dcd56fc261f4a96827bdb232d3be940'},
        // Ref: https://haveibeenpwned.com/API/v3#ResponseCodes
        statusCode:{
            200: function(result){
                // add every object's "Name" attribute to breaches array
                for(var i in result){
                    breaches.push(result[i].Name);
                }
                // reset classes
                $("#breach-check").removeClass();
                // sets bar to breach positive css
                $('#breach-check').addClass('breach-positive');
                // Add Breach sites to div innerhtml with ", " seperating item
                $("#breach-check").html(`WARNING!! <a href="https://haveibeenpwned.com/">Detected</a> ${$("#breachEmail").val()} in the following Data-Breaches:<br>${breaches.join(", ")}`);
            },
            404: function(){
                // reset classes
                $("#breach-check").removeClass();
                // sets bar to breach negative css
                $('#breach-check').addClass('breach-negative');
                // Add to div innerhtml
                $("#breach-check").html(`No Breaches Detected on ${$("#breachEmail").val()}`)
            },
            401: function(){
                // reset classes
                $("#breach-check").removeClass();
                // sets bar to breach error css
                $('#breach-check').addClass('breach-error');
                // Add to div innerhtml
                $("#breach-check").html(`Unauthorised Error!`);
            },
            400: function(){
                // reset classes
                $("#breach-check").removeClass();
                // sets bar to breach error css
                $('#breach-check').addClass('breach-error');
                // Add to div innerhtml
                $("#breach-check").html(`Bad Request Error, Please Check your Email and try again!`);
            }
        },
        error: function(){
            // reset classes
            $("#breach-check").removeClass();
            // sets bar to breach error css
            $('#breach-check').addClass('breach-error');
            // Add to div innerhtml
            $("#breach-check").html(`Error! Please Check your Email and try again!`);
        }
    });
    // reset nicescroll incase size of breaches is too long
    $('html, body').getNiceScroll().resize()
});
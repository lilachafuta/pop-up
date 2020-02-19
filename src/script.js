$(document).ready(function(){

    // add event listener on the login button

    $("#login").click(function(){

        facebookLogin();


    });

    // add event listener on the logout button
    function facebookLogin()
    {
        FB.getLoginStatus(function(response) {
            console.log(response);
            statusChangeCallback(response);
        });
    }

    function statusChangeCallback(response)
    {
        console.log(response);
        if(response.status === "connected")
        {
            $("#login").hide();
            $("#logout").show();
            fetchUserProfile();
        }
        else{
            // Logging the user to Facebook by a Dialog Window
            facebookLoginByDialog();
        }
    }

    function fetchUserProfile()
    {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me?fields=id,name,email,gender,birthday', function(response) {
            console.log('Successful login for: ' + response.name);
            let profile = `<span>${response.name}</span>`;
            $("#status").append(profile);
        });
    }

    function facebookLoginByDialog()
    {
        FB.login(function(response) {

            statusChangeCallback(response);

        }, {scope: 'public_profile,email'});
    }

    // logging out the user from Facebook

    function facebookLogout()
    {
        FB.logout(function(response) {
            statusChangeCallback(response);
        });
    }


});
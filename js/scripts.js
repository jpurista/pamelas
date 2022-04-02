
$(function(){ //from jquery UI
        $('#tabs').tabs();
});

function validate() {
        var zipcode = $("#zip").val();
        var date = new Date($("#start").val());

        console.log(' validate');
        if (zipcode.length != 5) {
                alert("This zipcode is not valid.")
                return false;
        }
        else if (date <= new Date()){
                alert("Please enter a date after today.")
                return false;
        }
        else {
                mailto()
        }
}

// contact.html
function mailto() {
        console.log(' mailto');

        var email = 'pam@pamelasdiner.com';
        var emailBody = $('#msg').val();

        if ($('#type').val() == 'Other') {
                var subject = 'Other (' + $('#subject').val() + ') - Pamela\'s Diner';
        }
        else {
                var subject = $('#type').val() + ' - Pamela\'s Diner';
        }

        if ($('#type').val() == 'Job') {
                emailBody += '\n\nI\'m interested in working at the ' +$('#location').val()+ ' location as a ' + $('#position').val() + ' with availability to start on ' + $('#start').val() + '. My resume can be found at: ' + $('#resume-link').val() + '.';
        }
        console.log(' complete');

        window.location = 'mailto:' + email + '\n\n\n?subject=' + subject + '\n\n\n&body=' +   emailBody
}

function checkform(){
        $('.work, .other').css('display', 'none');
        $('.work, .other').children().prop("required", false);

        if ($('#type').val() == 'Job') {
                $('.work').css('display', 'block');
                $('.work').children().prop("required", true);
        }
        else if ($('#type').val() == 'Other'){
                $('.other').css('display', 'block');
                $('.other').children().prop("required", true);
        }
}
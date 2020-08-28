$(document).ready(function(){

    $("#but_upload").click(function(){

        var fd = new FormData();
        var files = $('#file')[0].files[0];
        fd.append('file',files);

        $.ajax({
            url: '/classify',
            type: 'post',
            data: fd,
            contentType: false,
            processData: false,
            success: function(response){
                if(response != 0){
                    console.log(response);
                    $("#result").text("You caught a " + response.prediction + "!").show();
                }else{
                    alert('file not uploaded');
                }
            },
        });
    });
});
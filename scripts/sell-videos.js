$(function () {
    var setTestData = function() {
        $('#seller-name').val('山田　太郎');
        $('#seller-email').val('yamada.taro@example.com');
        $('#seller-phone-number').val('99-9999-9999');
        $('#video-url').val('http://example.com');
        $('#video-explain').val('これは\r\n動画説明文\r\nのテストです。');
    }
    setTestData();
    
    $('#form-input-container').submit(function (event) {
        event.preventDefault();

        var $form = $(this);
        console.log($form.serialize());

        $.ajax({
            url: $form.attr('action'),
            type: $form.attr('method'),
            data: $form.serialize(),
            timeout: 10000,
            success: function(result, textStatus, xhr) {
                console.log(result);
                alert('send success!');
            },
            error: function(xhr, textStatus, error) {
                console.log(error);
                alert('send error!');
            }
        });
    });
});
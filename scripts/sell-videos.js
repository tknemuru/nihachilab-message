$(function () {
    var setTestData = function() {
        $('#seller-name').val('山田　太郎');
        $('#seller-email').val('yamada.taro@example.com');
        $('#seller-phone-number').val('99-9999-9999');
        $('#video-url').val('http://example.com');
        $('#video-explain').val('これは\r\n動画説明文\r\nのテストです。');
    }
    setTestData();
    
    // 投稿するボタン押下処理
    $('#form-input-container').submit(function (event) {
        event.preventDefault();

        var $form = $(this);
        var idKey = nihachilab.config.queryString.agreementedId;
        var data = $form.serialize();
        data += '&' + idKey + '=' + nihachilab.urlHelper.getParam(idKey);

        $.ajax({
            url: nihachilab.config.api.baseUrl,
            type: $form.attr('method'),
            data: data,
            timeout: 10000,
            success: function(result, textStatus, xhr) {
            },
            error: function(xhr, textStatus, error) {
            }
        });
        
        alert('ご投稿ありがとうございました。');
        document.location = '/';
    });
});
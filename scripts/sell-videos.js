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

        // メール送信
        $(".loader").show();
        $.ajax({
            url: nihachilab.config.api.baseUrl,
            type: $form.attr('method'),
            data: data,
            timeout: 10000,
            success: function(result, textStatus, xhr) {
                $(".loader").hide();
                alert('ご投稿ありがとうございました。');
                document.location = '/';
            },
            error: function(xhr, textStatus, error) {
                $(".loader").hide();
                console.log(error);
                var message = "処理中にエラーが発生しました。時間をおいても解決しない場合は、お手数ですが、" +
                                    "info@28lab.com にご連絡ください。";
                alert(message);
            }
        });
    });
});
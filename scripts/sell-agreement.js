$(function () {
    // 次へ進むボタン押下処理
    $('#next-page').click(function (event) {
        // 同意していなければNG
        if($('#agreement').prop('checked') !== true) {
            alert('利用規約をお読み頂き、「利用規約に同意する」にチェックを入れてください。');
            return;
        }
        
        // メール送信
        $(".loader").show();
        $.ajax({
            url: nihachilab.config.api.agreementRegister,
            type: 'GET',
            timeout: 20000,
            success: function(result, textStatus, xhr) {
                $(".loader").hide();
                location.href = '/sell_videos.html?' + nihachilab.config.queryString.agreementedId
                    + '=' + result;
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
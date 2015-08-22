$(function () {
    // 次へ進むボタン押下処理
    $('#next-page').click(function (event) {
        // 同意していなければNG
        if($('#agreement').prop('checked') !== true) {
            alert('利用規約をお読み頂き、「利用規約に同意する」にチェックを入れてください。');
            return;
        }
        
        // メール送信
        $.ajax({
            url: nihachilab.config.api.agreementRegister,
            type: 'GET',
            timeout: 10000,
            success: function(result, textStatus, xhr) {
                location.href = '/sell_videos.html?' + nihachilab.config.queryString.agreementedId
                    + '=' + result;
            },
            error: function(xhr, textStatus, error) {
                console.log(error);
            }
        });
    });
});
$(function () {
    // 同意するボタン押下処理
    $('#agreement').click(function (event) {
        $.ajax({
            url: nihachilab.config.api.agreementRegister,
            type: 'GET',
            timeout: 10000,
            success: function(result, textStatus, xhr) {
                console.log(result);
                console.log('agreement register success!');
                location.href = '/sell_videos.html?' + nihachilab.config.queryString.agreementedId
                    + '=' + result;
            },
            error: function(xhr, textStatus, error) {
                console.log(error);
                alert('agreement register error!');
            }
        });
    });
});
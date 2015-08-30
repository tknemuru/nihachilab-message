/**
 * 設定情報を提供します。
 */
 var nihachilab;
(function (nihachilab) {
    var config = (function () {
         function config() {
            this.api = {
                //baseUrl: '//192.168.33.10:5000/',
                //agreementRegister: '//192.168.33.10:5000/agreement_register/'
                baseUrl: 'https://nihachilab-transfer.herokuapp.com/',
                agreementRegister: 'https://nihachilab-transfer.herokuapp.com/agreement_register/'
            };
            this.queryString = {
                agreementedId: 'id'
            };
         };
         return config;
     })();
    nihachilab.config = new config();
})(nihachilab || (nihachilab = {}));
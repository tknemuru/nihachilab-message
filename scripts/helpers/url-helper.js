/**
 * 設定情報を提供します。
 */
var nihachilab;
 (function (nihachilab) {
     var urlHelper = (function () {
          function urlHelper() {
             /**
              * 指定したキーのGETパラメータを取得します。
              */
             this.getParam = function(key, url) {
                return  this.getParams(url)[key];
             };

             /**
              * 指定したURLのGETパラメータを取得します。
              */
             this.getParams = function(url) {
                 url = (url || (url = location.href));
                 paramUnit = url.split('?');
                 paramKeyValues = paramUnit[1].split('&');
                 var params = {};
                 for(var i = 0; i < paramKeyValues.length; i++) {
                     splitKeyValue = paramKeyValues[i].split('=');
                     params[splitKeyValue[0]] = splitKeyValue[1];
                 }
                 return params;
             };
          };
          return urlHelper;
      })();
     nihachilab.urlHelper = new urlHelper();
 })(nihachilab || (nihachilab = {}));
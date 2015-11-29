require(["gitbook", "jQuery"], function(gitbook, $) {
    gitbook.events.bind("start", function(e, config) {
        console.log("START");
        // var _body = document.getElementsByTagName('body')[0];
        // var _div = document.createElement('div');
        // _div.id = "_webengage_script_tag";
        // _body.appendChild(_div);

        // window._weq = window._weq || {};
        // window._weq['webengage.licenseCode'] = config.webengage.licenseCode;
        // window._weq['webengage.widgetVersion'] = "4.0";

        // var _we = document.createElement('script');
        // _we.type = 'text/javascript';
        // _we.async = true;
        // _we.src = (document.location.protocol == 'https:' ? "https://ssl.widgets.webengage.com" : "http://cdn.widgets.webengage.com") + "/js/widget/webengage-min-v-4.0.js";
        // var _sNode = document.getElementById('_webengage_script_tag');
        // _sNode.parentNode.insertBefore(_we, _sNode);
    });

    gitbook.events.bind("page.change", function() {
        console.log("page.change");
        //ga('send', 'pageview', window.location.pathname+window.location.search);
    });
});

(function() {
  var gdprHtml = '<div id="consent_blackbar"></div><div id="teconsent"></div>';

  var url = window.location.search;
  if (url.length > 0) {
    url = "&" + url.substring(1);
  }

  var newUrl =
    "https://consent.trustarc.com/notice?domain=cendyn.com&c=teconsent&js=nj&noticeType=bb" +
    url;

  $("body").append(gdprHtml);

  $.getScript(newUrl, function() {});
})();

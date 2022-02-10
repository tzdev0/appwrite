(function(window) {
  "use strict";

  window.ls.container.get("view").add({
    selector: "data-analytics-pageview",
    controller: function(window, router, env) {
      if (typeof ga === 'undefined') {
        console.error("Google Analytics ga object is not available");
      }
      
      let doNotTrack = window.navigator.doNotTrack;
      let analyticsOption = APP_ENV.ANALYTICS_OPTION;

      if (doNotTrack == "1" || analyticsOption === 'disabled') {
        return;
      }

      let project = router.params["project"] || 'None';

      ga("set", "page", window.location.pathname);

      ga("set", "dimension1", project);
      ga('set', 'dimension2', env.VERSION);
      ga('set', 'dimension3', env.SETUP);

      ga("send", "pageview");
    }
  });
})(window);

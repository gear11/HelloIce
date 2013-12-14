// This application is using EQATEC Analytics
// Insert this script snippet in an appropriate place in your code and
// call Start and Stop when your application starts and ends.
// See the documentation at http://www.telerik.com/analytics/resources/documentation
//
(function(g) {
  // Make analytics available via the window.analytics variable
  // Start analytics by calling window.analytics.Start()
  var analytics = g.analytics = g.analytics || {};

  analytics.Start = function()
  {
    // Handy shortcuts to the analytics api
    var factory = window.plugins.EqatecAnalytics.Factory;
    var monitor = window.plugins.EqatecAnalytics.Monitor;

    // Create the monitor instance using the unique product key for Hello Ice
    var productId = "e021b5af4e784646b9fe0969cc3248de";
    var version = "1.2.3";
    var settings = factory.CreateSettings(productId, version);
    settings.LoggingInterface = factory.CreateTraceLogger();
    factory.CreateMonitorWithSettings(settings,
      function() {
        console.log("Monitor created");
        // Start the monitor inside the success-callback
        monitor.Start(function() {
          console.log("Monitor started");
        });
      },
      function(msg) {
        console.log("Error creating monitor: " + msg);
      });
      analytics.started = true;
  }

  analytics.Stop = function()
  {
          if (!analytics.started) {
        return null;
    }
    var monitor = window.plugins.EqatecAnalytics.Monitor;
    monitor.Stop();
  }

  analytics.Monitor = function()
  {
    if (!analytics.started) {
        return null;
    }
    return window.plugins.EqatecAnalytics.Monitor;
  }    
})(window);
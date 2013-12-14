(function (global) {
    var app = global.app = global.app || {};

 
  
    app.logViewStart = function(e){
             //Log the view show to our app analytics

        
        var currentView = "View."+ e.view.title;
        console.log("Log feature", currentView);
        
        var analytics = global.analytics;
        if (!analytics) {
            console.log("No analytics yet");
            return;
        }
        var mon = analytics.Monitor();
        if (!mon) {
            console.log("No monitor yet");
            return;
        }
        try {
        mon.TrackFeature(currentView);
        
        //Start view timer
        mon.TrackFeatureStart(currentView);
        } catch (ex) {
            console.log("Oops 1");
        }
    };

    app.logViewEnd = function(e){
 
        
        var currentView = "View."+ e.view.title;
        console.log("End timing for feature", currentView);
        
        var analytics = global.analytics;
        if (!analytics) {
            console.log("No analytics yet");
            return;
        }
        var mon = analytics.Monitor();
        if (!mon) {
            console.log("No monitor yet");
            return;
        }
        try {
            mon.TrackFeatureStop(currentView);
        } catch (ex) {
            console.log("Oops 2");
        }
    }
    

    
})(window);
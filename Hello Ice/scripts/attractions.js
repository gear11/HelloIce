(function (global) {
    var AttractionsViewModel,
        app = global.app = global.app || {};

    AttractionsViewModel = kendo.data.ObservableObject.extend({
        data: null,

        init: function () {
            var that = this,
                dataSource;

            kendo.data.ObservableObject.fn.init.apply(that, []);

            dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        //url: "http://cdn.m.amp.avai.com/Menu/List/204380?ajax=1&pixelWidth=320&devicewidth=320",
                        url: "data/attractions.json",
                        //url: "data/weather.json",
                        //url: "data/simple.json",
                        dataType: "json"
                    }
                }
            });
            
            console.log("Setting data source");

            that.set("data", dataSource);
        }
    });
    


    app.attractionsService = {
        viewModel: new AttractionsViewModel()
    };
    
    //kendo.bind($("#attractions"), app.attractionsService.viewModel);
})(window);
(function(){

    var Component = ng.core.Component;
    var Module = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var platformBrowserDynami = ng.platformBrowserDynamic.platformBrowserDynamic();
    
var AppComponent = Component({
    selector:'my-app',
    template: '<h1>Angular 2.0 - manualnie utworzone</h1>',
    // styleURLs: ['./style.css']
    styles: ['h1 {color: blue;}']
})
.Class({
    constructor : function(){}
});


var AppModule = Module({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
.Class({
    constructor: function(){}
});

platformBrowserDynami.bootstrapModule(AppModule);

})();
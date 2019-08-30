(function(){

    var Component = ng.core.Component;
    var Module = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var platformBrowserDynami = ng.platformBrowserDynamic.platformBrowserDynamic;

var SecoundComponent = Component({
    selector: 'two-app',
    template: '<p><em>{{quote.textQuote}}</em><br/>{{quote.author}}</p>',
    styles: ['p {color: green;}']
})
.Class({
    constructor: function(){
        var randomIndex = Math.floor(Math.random()*quotes.length);
        this.quote = quotes[randomIndex];
    }
});
    
var AppComponent = Component({
    selector:'my-app',
    template: `<h1>Angular 2.0 - manualnie utworzone</h1>
                <two-app>Wczytywanie two-app ...</two-app>`,
    styles: ['h1 {color: blue;}']
})
.Class({
    constructor : function(){}
});


var AppModule = Module({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent, SecoundComponent]
})
.Class({
    constructor: function(){}
});

platformBrowserDynami().bootstrapModule(AppModule);

const quotes = [
{"textQuote":"Wybierz pracę, którą kochasz, a nie przepracujesz, ani jednego dnia więcej w Twoim życiu.",       
    "author":"KONFUCJUSZ"},
{"textQuote":"Pomysły są powszechnym towarem. Wprowadzanie ich w życie nie jest.",                              
    "author":"MICHAEL DELL, Dell CEO"},
{"textQuote":"Ponoś porażki często, abyś mógł odnieść sukces szybciej.",                                        
    "author":"TOM KELLEY, Ideo"},
{"textQuote":"Jeśli nie możesz robić rzeczy wielkich, rób małe rzeczy w wielki sposób.",                        
    "author":"NAPOLEON HILL"},
{"textQuote":"Sukces to nie to, co masz, ale to, kim jesteś.",                                                  
    "author":"BO BENNET"},
{"textQuote":"Pracuj, aby się stawać, nie aby zdobywać.",                                                       
    "author":"ELBERT HUBBARD"},
{"textQuote":"Okazje biznesowe są jak autobusy, zawsze przyjedzie następny.",                                   
    "author":"RICHARD BRANSON"},
{"textQuote":"Twoi najbardziej niezadowoleni klienci są najlepszym źródłem do nauki.",                          
    "author":"BILL GATES, Microsoft"},
{"textQuote":"Nie to, co osiągasz, ale to, co przezwyciężasz, definiuje Twoją karierę.",                        
    "author":"CARLTON FISK"},
{"textQuote":"Skoro i tak będziesz myśleć, myśl odważnie.",                                                     
    "author":"DONALD TRUMP"}]

})();
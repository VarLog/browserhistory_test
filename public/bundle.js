//window.onpopstate = function(event) {
//    window.location.reload(true);
//};

var h = window.History.createBrowserHistory();
h.listen((location, action) => {
    console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`);
    console.log(`The last navigation action was ${action}`)

    window.location.reload(true);
});

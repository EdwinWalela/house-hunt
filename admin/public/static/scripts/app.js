$('document').ready(function(){

    let filterSelector = $('#filter');

    filterSelector.on('change',function(){
        if(this.value !== 'sort'){
            let updateQueryStringParam = function (key, value) {
                let baseUrl = [location.protocol, '//', location.host, location.pathname].join(''),
                    urlQueryString = document.location.search,
                    newParam = key + '=' + value,
                    params = '?' + newParam;
            
                // If the "search" string exists, then build params from it
                if (urlQueryString) {
                    keyRegex = new RegExp('([\?&])' + key + '[^&]*');
            
                    // If param exists already, update it
                    if (urlQueryString.match(keyRegex) !== null) {
                        params = urlQueryString.replace(keyRegex, "$1" + newParam);
                    } else { // Otherwise, add it to end of query string
                        params = urlQueryString + '&' + newParam;
                    }
                }
                window.location.replace(baseUrl + params);
            };
            updateQueryStringParam('beds',this.value)
        }
    })
})
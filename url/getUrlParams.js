const getUrlParams = () => {
    const search = location.search;
    const query = new Object();
    if(search.indexOf('?')) {
        const queryStr = search.substr(1);
        const strArray = queryStr.split('&');
        for(const str of strArray) {
            query[str.split('=')[0]] = decodeURI(str.split('=')[1]);
        }
    }
    return query;
}
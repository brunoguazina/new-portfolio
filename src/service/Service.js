const Api = {
    get: (url, callback) => {
        fetch(url)
        .then((result) => {
            return result.json().then((response) => {
                callback(response);
            });
        },(error) => {
            console.log(error);
            return callback(null);
        });
    }
};

export default Api;


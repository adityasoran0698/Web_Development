let button = document.getElementById('submit');

button.addEventListener('click', function () {
    let input = parseInt(document.getElementById('number').value);
    
    let promise = new Promise((resolve, reject) => {
        if (input % 2 === 0) {
            resolve("EVEN");
        } else {
            reject("ODD");
        }
    });

    promise
        .then((message) => {
            console.log("Promise fulfilled: " + message);
        })
        .catch((error) => {
            console.log("Promise rejected: " + error);
        });
});

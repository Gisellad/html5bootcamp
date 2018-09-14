function showHello(){
    document.getElementById("hello").style.visibility = "visible";
}
window.onload = showHello;

function callFast(){
    alert("Hello, again.");
}
function chuckJoke() {
    config = {
        method: "GET",
        url: "http://api.icndb.com/jokes/random",
        async: "true"
    };
    return onClick(config);
}

function onClick(config) {
    const xhttp = new XMLHttpRequest();
    xhttp.open(config.method, config.url, config.async);
    xhttp.onload = function (e) {
        if (this.readyState == 4 && this.status == 200) {
            const answer = JSON.parse(xhttp.response);
            const ans = answer.value;
            document.getElementById("hello").innerText = ans.joke;
        } else {
            document.getElementById("hello").innerText = xhttp.statusText;
            document.getElementById("hello").style.backgroundColor = "red";
        }
    }
    xhttp.onerror = function (e) {
        document.getElementById("hello").innerText = xhttp.statusText;
        document.getElementById("hello").style.backgroundColor = "red";
    };
    xhttp.send();
};

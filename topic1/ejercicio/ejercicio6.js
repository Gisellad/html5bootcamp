let base = [
    [1, "hansolo@gmail.com"],
    [2, "Chewbacca@gmail.com"],
    [3, "LukeSkywalker@gmail.com"],
    [4, "AnakinSkywalker@gmail.com"],
]
function starkTable() {
    const table = document.getElementById("idAndEmails");
    const tr = document.createElement("tr");
    table.appendChild(tr);
    const th = document.createElement("th");
    const id = document.createTextNode("ID");
    th.appendChild(id);
    tr.appendChild(th);
    const thTwo = document.createElement("th");
    const email = document.createTextNode("Email");
    thTwo.appendChild(email);
    tr.appendChild(thTwo);
}
function createTableContent(e) {
    e.forEach((x) => {
        let tr = document.createElement("tr");
        x.forEach(function (std) {
            let td = document.createElement("td");
            td.innerHTML = std;
            tr.appendChild(td);
            const table = document.getElementById("idAndEmails");
            table.appendChild(tr);
        });
    });
}
function finalTable() {
    starkTable();
    createTableContent(base);
}
finalTable();

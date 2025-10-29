

    let baseURL = "https://localhost:8080/";
    let name = document.getElementById("name").value.trim();
    let year = document.getElementById("year").value.trim();

    let query = [];

    if (name !== "") {
        query.push("name=" + encodeURIComponent(name));
    }

    if (year !== "") {
        query.push("year=" + encodeURIComponent(year));
    }

    if (query.length > 0) {
        baseURL += "?" + query.join("&");
    }

    document.getElementById("url").innerText = baseURL;
});


document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search");
    const query = document.getElementById("query");
    const result = document.getElementById("result");

    searchButton.addEventListener("click", function () {
        const searchText = query.value.trim();

        fetch("superheroes.php?query=" + encodeURIComponent(searchText))
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                result.innerHTML = data;
            });
    });
});
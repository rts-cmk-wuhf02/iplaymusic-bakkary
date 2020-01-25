var currentTheme = localStorage.getItem("currentTheme");
document.documentElement.setAttribute("data-theme", currentTheme);
const changeTheme = document.querySelector(".changeTheme");

changeTheme.addEventListener("click", () => {
    if (document.documentElement.dataset.theme == "light") {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("currentTheme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("currentTheme", "light");
    }
});

const spotify__refreash_token = window.btoa("dd3653ce833e46cdbf87e00e030ae06c:1d8b6302e97d45f5ad7ed1a40f52bb16")


fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    withCredentials: true,
    headers: {
        Authorization: "Bearer " + spotify__refreash_token,
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
    .then(resp => resp.json())
    .then(function (data) {
        fetch("https://api.spotify.com/v1/albums?ids=4jX7WkXgBupTiZR5xVtXtO%2C05ytRpOKQ4bEj5IJIrDONK%2C4cJY0mS3aDyO6IltK41rAK%2C4QXkUPo1KPQ0SI3JhnAvFe%2C6t7DDURGibSzno4cfwmAWa")
    }

    )
    .catch(function (error) {
        console.log(error);
    });
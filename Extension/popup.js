console.log("Hello World");
let state = 0;
let enlarge = document.getElementById("max");
let popup = document.getElementById("sentiment")



document.addEventListener('DOMContentLoaded', function () {
    console.log(getCurrentTab());
    console.log(getCurrentTab().url);
document.getElementById("max").addEventListener("click", function(){

    if (state == 0)
        {
    document.body.style.width="500px";
    popup.style.width="500px";
    document.getElementsByTagName("html")[0].style.width="500px"
    document.body.style.height ="500px";
    popup.style.height="500px";
    document.getElementsByTagName("html")[0].style.height="500px"
    document.body.style.backgroundImage ="url('Gradient-Background-500.png')";
    state = 1;
    return;
        }

        if (state == 1)
        {
    document.body.style.width="200px";
    popup.style.width="200px";
    document.getElementsByTagName("html")[0].style.width="208px"
    document.body.style.height ="200px";
    popup.style.height="200px";
    document.getElementsByTagName("html")[0].style.height="208px"
    document.body.style.backgroundImage = "url('Gradient-Background.png')";
    state = 0;
    return;
        }
    
});
});

async function getCurrentTab(){
    let queryOptions = { active: true, lastFocusedWindow: true};
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("light-theme")
    if(document.body.classList.contains("light-theme")){
        icon.src="bilder/moon.png"
    }else{icon.src="bilder/sun.png"}

    if(document.body.classList.contains("light-theme")){
        logo.src="bilder/titel_dark.png"
    }else{logo.src="bilder/titel.png"}
}
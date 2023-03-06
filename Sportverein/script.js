var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.src="bilder/sun.png"
    }else{icon.src="bilder/moon.png"}

    if(document.body.classList.contains("dark-theme")){
        logo.src="bilder/logo.png"
    }else{logo.src="bilder/logo_black.png"}
}
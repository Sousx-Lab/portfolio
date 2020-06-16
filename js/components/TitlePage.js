
function titlePage(){
    let activeItems = document.getElementsByClassName('active')[0];
    document.title = "Nassim Hattab 👋" 
    if(activeItems !== undefined)
    {
       let newTitle = activeItems.innerHTML;
       document.title += " "  + newTitle;
    }
}

export {
    titlePage
}


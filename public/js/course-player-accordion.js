let bt = document.querySelectorAll('.accordion')
bt.forEach(element => {
    element.addEventListener("click", function () {
        this.classList.toggle('active');
         let panel = this.nextElementSibling;
        
        if (panel.style.display === "block") {
            while(1>0){
                panel.style.display = "none"
                if(panel.nextElementSibling.className!='panel')
                 break;
                else
                panel=panel.nextElementSibling
            }
            
        }
        else {
            while(1>0){
                panel.style.display = "block"
                if(panel.nextElementSibling.className!='panel')
                 break;
                else
                panel=panel.nextElementSibling
            }
        }

    })
});
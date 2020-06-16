export class Clipboard{
/**
 * 
 * @param {string} selector 
 * @param {string} target
 * @param {string} attribute
 */
    constructor(selector, target, attribute){
        this.selector = selector;
        this.target = target;
        this.attribute = attribute;
    }

    getEmail() {
        let selector = document.querySelector(this.selector);
            if(selector !== null){
                selector.addEventListener("click", (event) => {
                event.preventDefault();
                const target = event.target.closest(this.target);
                const value = target.getAttribute(this.attribute);
                this.copyEmail(value);
                });
            }
        return;
    }
    
    /**
     * 
     * @param {string} value 
     */
    copyEmail(value) {
        navigator.clipboard.writeText(value)
        .then(() => {
            let msg = document.getElementById("copyEmail")
            msg.innerHTML = "Email copié ✔";
            setTimeout(() => {
                msg.innerHTML = "Copier l'email"
            }, 3000)
        }, () =>{
            msg.innerHTML = "copy error: ✖ " + "Email: nssmhttb@gmail.com ";
        })
    }   
}




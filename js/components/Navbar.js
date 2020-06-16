export class Navbar {
/**
* 
* @param {Array} navElement 
*/
    constructor(navElement){
        this.navElement = navElement;
    };

    markup(){
        const html = `
        <!--header -->
            <div class="container-fluid " id="navbar">
                <div class="container ">
                    <header class="header">
                        <a href="apropos.html" class="profil">
                            <img class="img-profil-sm" src="img/profil.jpg" alt="image de profil">
                            <h1><strong class="name">Nassim HATTAB</strong></h1>
                        </a>
                        <!-- Nav -->
                        <div class="nav-wrapper" id="nav-icon">
                        <a href="javascript:void(0);">
                            <i class="fa fa-bars fa-2x"></i>
                        </a>
                        </div>
                        <nav class="navbar">
                            <ul id="nav-items"> 
                            ${this.navElement.map(elem => `
                                <li><a class="${this.activeItems(elem.link)}" href="${elem.link}">${elem.name}</a></li>
                                `).join('')}
                            </ul>
                        </nav>
                    </header>
                </div>
            </div>`
        return html;
    };

    /**
     * 
     * @param {string} [ElementById = null ] - ElementById
     */
    render(ElementById = null){
        if(ElementById !== null){
             document.getElementById(ElementById)
            .insertAdjacentHTML('afterbegin', this.markup());
        }else {
            document.querySelector('body')
            .insertAdjacentHTML('afterbegin', this.markup());
        };
        this.reponsive();
    };

    /**
     * 
     * @param {string} link 
     */
    activeItems(link){
        let currentURI = window.location.pathname.split('/');
        let active = " "
        if(location.hash && location.hash === link){
            location.assign('/#contact')
            active = "active";
            return active;
        }else if(link === currentURI[1]){
            active = "active";
            return active;
        }else{
            return active;
        };
        
    };

    reponsive(){
        let bars = document.getElementById("nav-icon");
        let close = bars.getElementsByClassName('fa fa-bars fa-2x')[0];
        let navItems = document.getElementById("nav-items");

        bars.addEventListener('click', function(){
           if(navItems.className === ""){
              navItems.className = "wrap";
              close.className = "fa fa-times fa-2x"
           }else if(navItems.className === "wrap"){
             navItems.className = "";
             close.className = "fa fa-bars fa-2x"
           }
        })
    }

};
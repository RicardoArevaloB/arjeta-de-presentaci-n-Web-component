

class RicardoElement extends HTMLElement{
    constructor(){ // se ejecuta cade vez que se crea un nuevo elemento
        super();    // el super lo necitamos para que el HTMLELEMENT funcione
        this.id = "miId";
        this.innerHTML = `
            <section>
                <div class="grid-container">
                    <div class="item1">
                        <div class="name">
                            <img src="" alt="">
                            <h1>Nombre: Ricardo Arevalo</h1>
                        </div>
                    </div>
                    <div class="hobbies">
                        <div class="titlehobbit">
                        <h3>cosas que me justan hacer</h3>
                    
                        </div>
                        

                        <div class="contenidoo">
                            <li> jugar videojuegos</li>
                            <li> ver peliculas</li>
                            <li> maquetar paginas web</li>
                            <li> pasar tiempoo con mi familia</li>
                        </div>
                    </div>

                    <div class="contenido1">
                        <div class="title1">
                            <h3>Informacion profecional</h3>
                        </div>
                        <div class="title2">
                            <h3>Estudios Academicos</h3>
                            <li>Tecnico en sistemas</li>
                            <li>Actualmente estrudiando programacion</li>
                        </div>
                            <h3>Experiencia laboral</h3>
                            <li>1 año como tecnico en sistemas </li>
                            <li>2 años como axiliar tecnico en una ips</li>
                        </div> 
                    
                    </div>
            </section>
        `
    }


    connectedCallback(){
        console.log("se ha creado el documento ");
    
    }

    //se ejecuta cuundo se elimina el elemento 
    disconnectedCallback(){
        console.log("se ha eliminado la etiqueta")
    }
}

// Registro mi elemento en la lista de elementos disponibles HTML

customElements.define("ricardo-element", RicardoElement);  
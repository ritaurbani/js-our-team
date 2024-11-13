const teamMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];

//Stampare in pagine una card per ogni membro del team

const teamContainerElem = document.querySelector(".team-container");

// Description
// @param {object} member //posso distrutturare oggetto subito: const createCard = (name, role, img)
// @returns {string}

//Invece di scrivere member.name, member.role, e member.img, le assegna direttamente a variabili con gli stessi nomi (name, role, img)
const createCard = (member) => {  //questa funzione input un oggetto e crea html di una card - return a string/card html
    const { name, role, img } = member; 
    return `                
      <div class="team-card">
        <div class="card-image">
          <img src="${img}" alt="${name}" />
        </div>
        <div class="card-text">
          <h3>${name}</h3>
          <p>${role}</p>
        </div>
      </div>
     `;

}

const renderTeam = () => {  //generare e inserire in pagina tutte le card dei membri del team.
    let items = "";  //accumulare tutte le card HTML
    for (let i = 0; i < teamMembers.length; i++) {
        console.log(teamMembers[i])

        // const {name, role, img} = teamMembers[i]   //ad ogni iterazione stampa un oggetto, ma io voglio solo questi 3. //con destrutturazione evitiamo curMember.name 
        // console.log(name, role, img)               // altrimenti sarebbe cosi const curMem = teamMembers[i] > invece di prendere tutto l oggetto prendo solo quello ceh mi serve     
        const card = createCard(teamMembers[i])       
      

        //qui possiamo mettere funzione che crea card
            //div ..
            //<img ${img}...
            //<h3> ${name}..
            //<p> ${role}..

        items += card; //stringa che contiena la card - 
                       //Alla fine, items conterrà una lunga stringa con tutte le card, pronte per essere inserite nel contenitore HTML della pagina
    }
    console.log(items)
    teamContainerElem.innerHTML = items;// Inserisce tutte le card nel contenitore HTML
};
    

// renderTeam() //generare e visualizzare tutte le card dei membri del team sulla pagina. Essa:


//////////////////////////// FORM ////////////////////////

const memberForm = document.getElementById("member-form");

const inputs = document.querySelectorAll("#member-form input");
const [nameInput, roleInput, imageInput] = inputs;

const handleSubmit = (event) => {  
    event.preventDefault();  //per gestire l'invio del form senza ricaricare la pagina.
    const name = nameInput.value.trim();//preleviamo i valori dai campi nameInput, roleInput, e imageInput del form, usando.value per ottenere il valore inserito dall'utente
    const role = roleInput.value.trim();
    const image = imageInput.value.trim();

    const newMember = { //Creazione dell'oggetto newMember
        name,
        role,
        image
    }

    teamMembers.push(newMember);
    console.log(teamMembers);

    renderTeam();
    // teamContainerElem.innerHTML += createCard(newMember); //alternativa - aggiungerebbe solo la nuova card

    memberForm.reset(); //Reset del form: memberForm.reset() pulisce tutti i campi del form, riportandoli al loro stato iniziale vuoto dopo l'invio dei dati.
};

// Invocazioni delle funzioni
renderTeam();

memberForm.addEventListener("submit", handleSubmit); //collega handleSubmit all'evento submit del form memberForm. Ogni volta che l'utente preme il pulsante di submit del form, handleSubmit viene eseguita.
(function(){
    "use strict";

    
    const form_details = document.querySelector("#destination_details");
    form_details.addEventListener("submit",handleformsubmit);
    function handleformsubmit(evt){
        evt.preventDefault();
        const destination = evt.target.elements["name"].value;
        const destname = evt.target.elements["location"].value;
        const photo = evt.target.elements["photo"].value;
        const description = evt.target.elements["Description"].value;
    
        /* Clearing out the form fields */
        for(let i=0;i<form_details.length;i++){
            form_details.elements[i].value = ""; /* HTMLformelement property "elements will return DOM elements text select and text area" */
    
        }
    
        /* creating card */
        const destcard = createDestinationcard(destination,destname,photo,description);
    
        const wishlist = document.getElementById("destination_container");
        if (wishlist.children.length === 0){
            document.querySelector("#title").innerHTML = "My Wishlist";
        }
        document.querySelector("#destination_container").appendChild(destcard);
    }
    
    function createDestinationcard(name,location,photourl,desc){
    
        const card = document.createElement("div");
        card.className = "card"; 
        const img = document.createElement("img");
        img.setAttribute('alt',name);
        const constantphotourl = "signpost.jpg" ;
    
        if(photourl ===0){
            img.setAttribute("src",constantphotourl);
        }
        else{
            img.setAttribute("src",photourl);
        }
        card.appendChild(img);
    
        const cardbody = document.createElement("div");
        cardbody.className = "card-body";
        const cardtitle = document.createElement("h3");
        cardtitle.innerText = name;
        cardbody.appendChild(cardtitle);
    
        const subtitle = document.createElement("h4");
        subtitle.innerText = location;
        cardbody.appendChild(subtitle);
    
        if(desc.length!==0){
            const cardtext = document.createElement("p");
            cardtext.className = "card-text";
            cardtext.innerText = desc;
            cardbody.appendChild(cardtext);
        }
    
        const cardelete = document.createElement("button");
        cardelete.innerText = "remove";
        cardelete.addEventListener("click",removedestination);
        cardbody.appendChild(cardelete);
    
        card.appendChild(cardbody);
        
        return card;   
    }
    function removedestination(event){
        const card = event.target.parentElement.parentElement;
        card.remove(); 
    }

})();


const formulaire =
 document.querySelector("#formulaire-contact");
formulaire.addEventListener("submit", function (event) {
 event.preventDefault();
 const nom = document.querySelector("#nom").value;
 const prenom = document.querySelector("#prenom").value;
 const telephone = document.querySelector("#telephone").value;
 const budget = document.querySelector("#budget").selectedOptions[0].text;
 const datedenaissance = document.querySelector("#datedenaissance").value;
 const email = document.querySelector("#email").value;
 const message = document.querySelector("#message").value;
 const sujet = encodeURIComponent("Contact depuis le site");
 const contenu = encodeURIComponent(
 `Nom : ${nom}\nPrénom : ${prenom}\nDate de Naissance : ${datedenaissance}\nEmail : ${email}\nTéléphone : ${telephone}\nBudget envisagé : ${budget}\n\n${message}`
 );
 window.location.href =
 `mailto:Catherine.Raverdy@exemple.be?subject=${sujet}` +
 `&body=${contenu}`;
}); 

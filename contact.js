const formulaire =
 document.querySelector("#formulaire-contact");
formulaire.addEventListener("submit", function (event) {
 event.preventDefault();
 const nom = document.querySelector("#nom").value;
 const prenom = document.querySelector("#prenom").value;
 const email = document.querySelector("#email").value;
 const message = document.querySelector("#message").value;
 const sujet = encodeURIComponent("Contact depuis le site");
 const contenu = encodeURIComponent(
 `Nom : ${nom}\nPrénom : ${prenom}\nEmail : ${email}\n\n${message}`
 );
 window.location.href =
 `mailto:contact@entreprise.be?subject=${sujet}` +
 `&body=${contenu}`;
}); 

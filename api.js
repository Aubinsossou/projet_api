const button_precedent = document.querySelector(".button_content_1")
const button_suivant = document.querySelector(".button_content_2")
const button_premiere_page = document.querySelector(".button_content_3")
const button_derniere_page = document.querySelector(".button_content_4")
const page_actuel_tag = document.querySelector(".page_actuel")
const test = document.querySelector(".test")
let first = 0
let numb_drapeau = 5;
let page_actuel = 1

//console.log(button)



function api() {
    const url = "https://restcountries.com/v3.1/independent?status=true"
    const countrie = document.querySelector(".countrie")
    //countrie.innerHTML = ""
    let content = ``
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP! Statut: ${response.status}`);
            }
            return response.json(); 
        })
        .then(data => {

            console.log(data.length)

            page_actuel_tag.innerHTML = `${page_actuel}`
            for (x = first; x <= numb_drapeau; x++) {
                const langages = data[x].languages
                const langage = Object.values(langages)
                if (countrie) {
                    content += `
                        <div class="countrie_item">
                            <div class="countrie_item_part1">
                                <span class="img_pays"><img src="${data[x].flags.svg}" alt="" ></span>
                                <h2 class="name_pays">Pays: ${data[x].name.common}</h2><br>
                            </div>
                            <div class="countrie_item_part2">
                                <img src="${data[x].coatOfArms.png}" alt="" class="devise_pays">
                            </div>
                            <div class="countrie_item_part3">
                                <h3>Langue: ${langage[0]}</h3>
                                <h3>Populations: ${data[x].population}</h3>
                                <h3>Capital: ${data[x].capital[0]}</h3>
                                <div class="countrie_content_part3_icon">
                                    <span><img src="icon1.png" alt="" class="countrie_item_part3_icon_1"></span>
                                    <span><img src="icon_3.png" alt="" class="countrie_item_part3_icon_1"></span>
                                    <span><img src="icon_2.png" alt="" class="countrie_item_part3_icon_1"></span>
                                </div>
                            </div>
                        </div>
                        
                        `
                }
            }


            countrie.innerHTML = content


            countrie_item_active = document.querySelectorAll(".countrie_item")
            if (countrie_item_active) {

                countrie_item_active.forEach((item, index) => {
                    item.addEventListener("click", () => {
                        countrie_item_active.forEach((element, id) => {
                            if (id !== index) {
                                element.classList.toggle("active", false)
                            }
                        })
                        item.classList.toggle("active")
                    })
                });
            }
             if (page_actuel == 1 && first == 0 && numb_drapeau == 5) {

                button_premiere_page.disabled = true
                button_precedent.disabled = true
                button_premiere_page.classList="disable"
                button_precedent.classList="disable"
            }
            else if (page_actuel !== 1 && first !== 0 && numb_drapeau !== 5) {

                button_precedent.disabled = false
                button_premiere_page.disabled = false
                button_precedent.classList="button_content_1"
                button_premiere_page.classList="button_content_3"
            }
              if (page_actuel == 33 ) {

                button_suivant.disabled = true
                button_derniere_page.disabled = true
                button_suivant.classList="disable"
                button_derniere_page.classList="disable"
            }
            else if (page_actuel !== 33 ) {

                button_suivant.disabled = false
                button_derniere_page.disabled = false
                button_suivant.classList="button_content_2"
                button_derniere_page.classList="button_content_4"
            } 
        })
}



if (button_precedent) {
    button_precedent.addEventListener("click", (e) => {
        e.preventDefault();
        if (page_actuel == 1) {
            return false
        }
        if (first == 192) {
            first -= 9, numb_drapeau -= 6, page_actuel -= 1
            api()

        }
        else {
            first -= 6, numb_drapeau -= 6, page_actuel -= 1
            api()

        }
    })
}
api()

if (button_suivant) {
    button_suivant.addEventListener("click", (e) => {
        e.preventDefault();
        first += 6, numb_drapeau += 6, page_actuel += 1
        if (first <= 186) {
            api()
        } else if (first >= 192 && first < 195) {
            console.log("oui je suis")
            first -= 3, numb_drapeau -= 3, page_actuel += 0
            api()
        } else {
            first = 192
            console.log(first)
            api()
           // return false
        }
        
        
    })

}
let actualisation = true
if (button_premiere_page) {
    button_premiere_page.addEventListener("click", (e) => {
        e.preventDefault();
        if (actualisation && page_actuel !== 1) {
            first = 0
            numb_drapeau = 5
            page_actuel = 1

            api()
        }

        
    })
}
if (button_derniere_page) {
    button_derniere_page.addEventListener("click", (e) => {
        e.preventDefault();
        if (actualisation && page_actuel !== 33) {
            first = 192, numb_drapeau = 194, page_actuel = 33
            api()
        }
    })
}

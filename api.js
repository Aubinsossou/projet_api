const button_content_1 = document.querySelector(".button_content_1")
const button_content_2 = document.querySelector(".button_content_2")

const test = document.querySelector(".test")

//console.log(button)



function api() {
    const url = "https://restcountries.com/v3.1/independent?status=true"
    const countrie = document.querySelector(".countrie")
    countrie.innerHTML = ""
    let content = ``
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP! Statut: ${response.status}`);
            }
            return response.json(); // Convertit la réponse en JSON
        })
        .then(data => {
            console.log(data[0])
            let x=0;
            const langages = data[x].languages
            const langage = Object.values(langages)
            console.log(langage[0])
            for(x = 1;x <= 6 ; x++) {
                if (countrie) {
                    content += `
                        <div class="countrie_item">
                            <div class="countrie_item_part1">
                                <span><img src="${data[x].flags.svg}" alt="" class="img_pays"></span>
                                <h2 class="name_pays">Pays: ${data[x].continents}</h2><br>
                            </div>
                            <div class="countrie_item_part2">
                                <img src="${data[x].coatOfArms.png}" alt="" class="devise_pays">
                            </div>
                            <div class="countrie_item_part3">
                                <h3>Langue: ${langage[0]}</h3>
                                <h3>Populations: ${data[x].population}</h3>
                                <h3>Capital: ${data[x].capital[0]}</h3>
                                <div class="countrie_content_part3_icon">
                                    <span><img src="icon_1.png" alt="" class="countrie_item_part3_icon_1"></span>
                                    <span><img src="icon_3.png" alt="" class="countrie_item_part3_icon_1"></span>
                                    <span><img src="icon_2.png" alt="" class="countrie_item_part3_icon_1"></span>
                                </div>
                            </div>
                        </div>
                        
                        `
                    
                }
            }
            if (button_content_2) {
                button_content_2.addEventListener("click", (e) => {
                    e.preventDefault();
                    console.log("boutton cliqué")
                    x=x+6
                })

            }
                    countrie.innerHTML = content

            if (button_content_1) {
                button_content_1.addEventListener("click", () => {

                })
            }


        })
}
api()

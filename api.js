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
           
            console.log(data[5])
            const langages = data[0].languages
            const langage = Object.values(langages)
            const page_actuel_tag=document.querySelector(".page_actuel")
            console.log(langage[0])
            let first=0
            let numb_drapeau=5;
            let page_actuel=0
            page_actuel_tag.innerHTML=`${page_actuel+1}`
            for(x = first;x <=numb_drapeau ; x++) {
                if (countrie) {
                    content += `
                        <div class="countrie_item">
                            <div class="countrie_item_part1">
                                <span><img src="${data[x].flags.svg}" alt="" class="img_pays"></span>
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
                    console.log(first+=5, numb_drapeau+=5,page_actuel+=1)
                    
                })

            }
                    

            if (button_content_1) {
                button_content_1.addEventListener("click", (e) => {
                     e.preventDefault();
                    console.log(first-=5, numb_drapeau-=5,page_actuel-=1)
                })
            }
            countrie.innerHTML = content


        })
}
api()

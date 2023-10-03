const token='328656936348532'
superhero_url=`https://superheroapi.com/api.php/${token}`
const getsuperherodiv=document.getElementById('getsuperhero1')
const superbtndiv=document.getElementById('getsuperbtn')
const searchinputdiv=document.getElementById('SearchInput')
const searchfordiv=document.getElementById('searchfor')
const superheronamediv=document.getElementById('superheroname')
const getsuperhero=(id)=>{
    fetch(`${superhero_url}/${id}`)
    .then(response=>response.json())
    .then(json=> {
        console.log(json)
        superheronamediv.innerText=`Name of Super Hero:${json.name}
                                    Intelligence:${json.powerstats.intelligence}
                                    Strength:${json.powerstats.strength}
                                    Speed:${json.powerstats.speed}
                                    Durability:${json.powerstats.durability}
                                    Power:${json.powerstats.power}
                                    Gender:${json.appearance.gender}`
        console.log(json.powerstats.intelligence)
        getsuperherodiv.innerHTML=`<img src="${json.image.url}" height="200px" width="200px"/>`
    })       
}
const getrandomsuperhero=()=>{
    const randomnumber=731
    return Math.floor(Math.random()*randomnumber)+1
}
const Searchyourhero=(name)=>{
    fetch(`${superhero_url}/search/${name}`)
    .then(response=>response.json())
    .then(json=> {
        const hero=json.results[0]
        superheronamediv.innerText=`Name of Super Hero:${hero.name}
                                    Intelligence:${hero.powerstats.intelligence}
                                    Strength:${hero.powerstats.strength}
                                    Speed:${hero.powerstats.speed}
                                    Durability:${hero.powerstats.durability}
                                    Power:${hero.powerstats.power}
                                    Gender:${hero.appearance.gender}`
       
        getsuperherodiv.innerHTML=`<img src="${hero.image.url}" height="200px" width="200px"/>`
    }
    )
}
superbtndiv.onclick=()=>getsuperhero(getrandomsuperhero())
searchinputdiv.onclick=()=>Searchyourhero(searchfordiv.value)

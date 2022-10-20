
buttonla = document.querySelector('.lang')
buttonla.addEventListener('click',()=>{
laMain = document.querySelector('.bottom')
laMain.innerHTML = ''

let laTitle = document.createElement('p')
laTitle.style.cssText = 'margin:-30px 0px 7px 0px;font-size:20px;text-align:center'
laTitle.innerHTML = '10 most Spoken languages in the world'

let laCountry = document.createElement('p')
laCountry.style.cssText = 'line-height:41px;text-align:left;margin:20px 120px;font-size:20px;position:absolute'
laCountry.innerHTML = 'Englsih<br>French<br>Arabic<br>Spanish<br>Portuguese<br>Russian<br>Dutch<br>German<br>Chinese<br>Serbian'

let laBar = document.createElement('img')
laBar.style.cssText = 'margin:23px 250px'
 laBar.src = 'lang.png'

let laNum = document.createElement('p')
laNum.style.cssText = 'line-height:41px;text-align:left;margin:-445px 870px;font-size:20px;position:absolute'
laNum.innerHTML='91<br>45<br>25<br>24<br>9<br>9<br>8<br>7<br>5<br>4'

laMain.appendChild(laTitle)
laMain.appendChild(laCountry)
laMain.appendChild(laBar)
laMain.appendChild(laNum)
})

buttonpo = document.querySelector('.popu')
buttonpo.addEventListener('click',()=>{
laMain = document.querySelector('.bottom')
laMain.innerHTML = ''

let laTitle = document.createElement('p')
laTitle.innerHTML = '10 most populated countries in the world'
laTitle.style.cssText = 'margin:-30px 0px 7px 0px;font-size:20px;text-align:center'


let laCountry = document.createElement('p')
laCountry.style.cssText = 'line-height:42px;text-align:left;margin:20px 120px;font-size:20px;position:absolute'
laCountry.innerHTML = 'World<br>China<br>India<br>USA<br>Indonesia<br>Brazil<br>Pakistan<br>Nigeria<br>Babgladesa<br>Russia<br>Japan'

let laBar = document.createElement('img')
laBar.style.cssText = 'margin:23px 250px'
 laBar.src = 'popu.png'

let laNum = document.createElement('p')
laNum.style.cssText = 'line-height:42px;text-align:left;margin:-485px 870px;font-size:20px;position:absolute'
laNum.innerHTML='8,000,000,000<br>1,402,756,160<br>1,362,549,958<br>329,731,224<br>266,911,900<br>220,892,331<br>211,557,363<br>206,139,587<br>168,653,220<br>146,745,098<br>126,577,691'

laMain.appendChild(laTitle)
laMain.appendChild(laCountry)
laMain.appendChild(laBar)
laMain.appendChild(laNum)
})
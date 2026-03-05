/* ========================= */
/* QUIZ SYSTEM */
/* ========================= */

const quiz = [

{
question:"Largest land animal?",
answers:["Lion","Elephant","Tiger"],
correct:"Elephant"
},

{
question:"King of the jungle?",
answers:["Lion","Tiger","Wolf"],
correct:"Lion"
},

{
question:"Fastest land animal?",
answers:["Horse","Cheetah","Tiger"],
correct:"Cheetah"
}

]

let current = 0
let score = 0

function loadQuestion(){

if(!document.getElementById("question")) return

let q = quiz[current]

document.getElementById("question").innerText = q.question

let html=""

q.answers.forEach(ans=>{

html += `<button onclick="answer('${ans}')">${ans}</button>`

})

document.getElementById("answers").innerHTML = html

}

function answer(ans){

if(ans === quiz[current].correct){
score++
}

current++

if(current < quiz.length){

loadQuestion()

}
else{

document.getElementById("question").innerHTML = "Quiz Finished!"

document.getElementById("answers").innerHTML =
`
<h2>Your Score: ${score}/${quiz.length}</h2>
<button onclick="location.reload()">Play Again</button>
`

}

}

loadQuestion()


/* ========================= */
/* ANIMAL SLIDER */
/* ========================= */

function slideLeft(){

const slider = document.getElementById("slider")

if(!slider) return

slider.scrollBy({
left:-300,
behavior:"smooth"
})

}

function slideRight(){

const slider = document.getElementById("slider")

if(!slider) return

slider.scrollBy({
left:300,
behavior:"smooth"
})

}


/* ========================= */
/* ANIMAL TRIVIA MODAL */
/* ========================= */

function showAnimal(animal){

const info = {

lion:"Scientific name: Panthera leo. Lions live in groups called prides and are apex predators in African savannas.",

elephant:"Scientific name: Loxodonta africana. Elephants are the largest land animals and have excellent memory.",

panda:"Scientific name: Ailuropoda melanoleuca. Pandas mainly eat bamboo and are native to China.",

dolphin:"Scientific name: Delphinidae. Dolphins are highly intelligent marine mammals that communicate using sound.",

tiger:"Scientific name: Panthera tigris. Tigers are the largest cats and powerful solitary hunters.",

bear:"Scientific name: Ursidae. Bears are omnivorous mammals found in forests and mountains.",

kangaroo:"Scientific name: Macropus. Kangaroos are marsupials from Australia that carry babies in a pouch.",

crocodile:"Scientific name: Crocodylus niloticus. Crocodiles are ancient reptiles that have existed for over 200 million years.",

eagle:"Scientific name: Aquila chrysaetos. Eagles have extremely sharp eyesight and powerful talons for hunting.",

giraffes:"Scientific name: Giraffa camelopardalis. Giraffes are the tallest land animals and feed on tree leaves.",

graywolf:"Scientific name: Canis lupus. Wolves are social predators that live in organized packs.",

leopard:"Scientific name: Panthera pardus. Leopards are strong climbers and often store prey in trees.",

monkey:"Scientific name: Cercopithecidae. Monkeys are intelligent primates known for social behavior.",

parrot:"Scientific name: Psittaciformes. Parrots are intelligent birds capable of mimicking human speech.",

rhinoceros:"Scientific name: Rhinocerotidae. Rhinos have horns made of keratin, the same material as human fingernails.",

snake:"Scientific name: Serpentes. Snakes are legless reptiles that swallow prey whole.",

turtle:"Scientific name: Chelonioidea. Sea turtles migrate thousands of kilometers across oceans.",

whale:"Scientific name: Balaenoptera musculus. The blue whale is the largest animal to ever live on Earth.",

zebra:"Scientific name: Equus quagga. Zebras have unique stripe patterns used for camouflage."

}

const name = document.getElementById("animalName")
const infoBox = document.getElementById("animalInfo")
const modal = document.getElementById("animalModal")

if(!name || !infoBox || !modal) return

name.innerText = animal.toUpperCase()
infoBox.innerText = info[animal]

modal.style.display = "flex"

}

function closeModal(){

const modal = document.getElementById("animalModal")

if(!modal) return

modal.style.display = "none"

}
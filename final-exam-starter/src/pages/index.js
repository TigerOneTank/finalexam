import { url, getAllPets, addNewPet } from "../api/api.js"
import Client from "../lib/pocketbase.es.mjs"

async function displayAllPets() {
  // 1. get the data of all pets from the api: getAllPets()
  const pets = await getAllPets()
  console.log(pets)
  const petsWrapper = document.querySelector('.petWrapper')
  // 2. select the .petWrapper
  petsWrapper.innerHTML = ``
  // 3. loop through the pet data to dipslay all pet card
  for (let i = 0; i < pets.length; i++) {
    let pet = pets[i]
    console.log(pet)
    petsWrapper.innerHTML += `
    <div class="petWrapper">

        <a href="detail.html?id=${pet.id}">
          <div class="pet">
            <img src="${url}/api/files/${pet.collectionName}/${pet.id}/${pet.field}" alt="">
            <h4>${pet.name}</h4>
          </div>
        </a>

      </div>
    `
  }

}


async function addNewPetForm() {
  // 1. select the #addNewPetForm
  const form = document.querySelector("#addNewPetForm")
  // 2. add event listener to the form
  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    // 2.a select all the input elements in the form: photo, animal, gender, name, age, description, contact
    const photo = document.querySelector("#photo")
    const animal = document.querySelector('#animal')
    const gender = document.querySelector('#gender')
    const name = document.querySelector('#name')
    const age = document.querySelector('#age')
    const description = document.querySelector('#description')
    const contact = document.querySelector('#contact')

    // 2.b prepare the data to send to the api to create a new pet
    const data = {
      'field': photo.files[0],
      'animal': animal.value,
      'gender': gender.value,
      'name': name.value,
      'age': age.value,
      'description': description.value,
      'contact': contact.value
    }
    console.log(data)
    
    

    // 2.c pass the data to addNewPet to write it on the api
    await addNewPet(data)
  
    // 2.d display all pets
    await getAllPets()

    // 2.e clear the form input
    photo.value = ``
    animal.value = ``
    gender.value = ``
    name.value = ``
    age.value = ``
    description.value = ``
    contact.value = ``


  })
}

window.addEventListener("DOMContentLoaded", async () => {

  // 1. display all pet cards
  displayAllPets()
  


  // 2. working on add new pet
  console.log('working on add new pet')




})


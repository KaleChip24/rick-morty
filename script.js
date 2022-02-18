const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector(".search-char");
const button = document.querySelector("#search-btn")


async function getCharacters(name) {
  try {
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`
    const res = await axios.get(url);
    if (res.data.results) {
      const charactersData = res.data.results
      getCharacters(charactersData)
      console.log(charactersData)
    }
  } catch (error) {
    console.log(error)
    alert(`${name} does not exist in this world, try again`)
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = searchInput.value
  getCharacters(name)
})

function renderData(characters) {
  characters.forEach(character => {
    const divContainer = document.createrElement("div")
    divContainer.className = ("character")
    const image = document.createElement("img")
    image.src = character.url;
    divContainer.appendChild(image)
  })
}
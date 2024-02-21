const img = document.querySelector('.logo');
const head = document.querySelector('.head');

let toggler = false;

img.addEventListener('click', () => {
    img.setAttribute('src', `${toggler ? 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YokAsVo2zLWymx-RsDQvdwHaEK%26pid%3DApi&f=1&ipt=2b93ac47b50e30d15cc3fe0f9b97acfdbecade24ffc38ea5750451d0e6dfa4fb&ipo=images' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.a_pHB8cfiNV-BOJK9ZaT9QAAAA%26pid%3DApi&f=1&ipt=39fc714f7aa4c538f19d587a3565fb29fe442dbb2b4e590509a2c39fc114ffc2&ipo=images'}`)
    toggler = !toggler;
})

const name = prompt("Your name: ")
head.innerHTML = `hello, ${name}`

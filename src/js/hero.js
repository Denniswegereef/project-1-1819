let hero = document.getElementById('hero')

function render(data) {
  hero.innerHTML = ''

  let current = data.aquabrowser
  console.log(current)
  console.log('Titel + ')
  console.log('Schrijven + ')
  console.log('Schrijven + ')
  const markup = `
  <div class="hero">
    <img src="https://v19.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/418840660&token=c1322402" alt=""/>
    <div class="content">
      <h2>Titel van het boek</h2>
      <h3>Schrijven van het boek</h3>
    </div>
  </div>`
}

export { render }

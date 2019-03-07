'use strict'

import { autocomplete } from './autoSuggestions.js'

let search = document.getElementById('searchInput')

search.addEventListener('input', e => {
  autocomplete(search.value)
})

location.hash = '#'

const conspiratorList = ['Brutus', 'Antony', 'Cassius', 'Calpurnia', 'Portia',]

const conspiratorHtml = conspiratorList.map(function(conspirator){
  return `<div class="box">${conspirator}</div>`
})

document.getElementById('list').innerHTML = conspiratorHtml.join(" ")

console.log(conspiratorHtml)


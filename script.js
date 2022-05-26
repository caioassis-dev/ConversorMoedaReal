let inputBRL = document.getElementById('BRL')

let conversions = document.getElementById('conversions')

function converter() {
  let brl = inputBRL.value

  let brlEuro = brl / 6
  let brlPound = brl / 7
  let brlCad = brl / 4
  let brlDollar = brl / 5

  conversions.innerHTML = `<p>Euro: €${Math.ceil(brlEuro)}</p>`
  conversions.innerHTML += `<p>British Pound: £${Math.ceil(brlPound)}</p>`
  conversions.innerHTML += `<p>Canadian Dollar: CAD$${Math.ceil(brlCad)}</p>`
  conversions.innerHTML += `<p>US Dollar: CAD$${Math.ceil(brlDollar)}</p>`
}

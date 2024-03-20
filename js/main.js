let registerBLock = document.querySelector('.register-block')
let loginBLock = document.querySelector('.login-container')
let globalBlock = document.querySelector('.global')
let buttonRegister = document.querySelector('.button-register')
let buttonLogin = document.querySelector('.register-back')

let inputs = document.querySelectorAll('input')

buttonRegister.addEventListener('click', function () {
   loginBLock.classList.remove('active')
   registerBLock.classList.add('active')
})
buttonLogin.addEventListener('click', function () {
   loginBLock.classList.add('active')
   registerBLock.classList.remove('active')
})

registerBLock.addEventListener('submit', function (ev) {
   ev.preventDefault()
   let login = registerBLock.querySelector('input[name="login"]')
   let password = registerBLock.querySelector('input[name="password"]')

   localStorage.setItem('login', login.value)
   localStorage.setItem('password', password.value)

   registerBLock.classList.remove('active')
   globalBlock.classList.add('active')
})

loginBLock.addEventListener('submit', function (ev) {
   ev.preventDefault()

   let login = localStorage.getItem('login')
   let password = localStorage.getItem('password')
   let loginCheck = loginBLock.querySelector('input[name="login"]')
   let passworCheck = loginBLock.querySelector('input[name="password"]')
   let error = loginBLock.querySelector('.error-form')
   let logo = document.querySelector('.logo')


   if (loginCheck.value !== login) {
      console.log('error')
      error.classList.add('active')
      return
   } else {
      error.classList.remove('active')
      console.log('true')
   }
   if (passworCheck.value !== password) {
      console.log('error')
      error.classList.add('active')
      return
   } else {
      error.classList.remove('active')
      console.log('true')
   }
   loginBLock.classList.remove('active')
   globalBlock.classList.add('active')
})



inputs.forEach(el => {
   el.addEventListener('change', function () {
      console.log(el.classList.value.includes('input'))
      if (el.classList.value.includes('weight-vehichal')) {
         localStorage.setItem('weight-vehichal', el.value)
      }
      if (el.classList.value.includes('lenght-vehichal')) {
         localStorage.setItem('lenght-vehichal', el.value)
      }
      if (el.classList.value.includes('height-vehichal')) {
         localStorage.setItem('height-vehichal', el.value)
      }
      if (el.classList.value.includes('vehichal-8-vehichal')) {
         localStorage.setItem('vehichal-8-vehichal', el.value)
      }
      if (el.classList.value.includes('type-of-trailer')) {
         localStorage.setItem('type-of-trailer', el.value)
      }
      if (el.classList.value.includes('vehichal-9-vehichal')) {
         localStorage.setItem('vehichal-9-vehichal', el.value)
      }
      if (el.classList.value.includes('width-vehichal')) {
         localStorage.setItem('width-vehichal', el.value)
      }
      if (el.classList.value.includes('name-track-vehichal')) {
         localStorage.setItem('name-track-vehichal', el.value)
      }
      if (el.classList.value.includes('fullname-vehichal')) {
         localStorage.setItem('fullname-vehichal', el.value)
      }
      if (el.classList.value.includes('country-vehichal')) {
         localStorage.setItem('country-vehichal', el.value)
      }
      if (el.classList.value.includes('city-vehichal')) {
         localStorage.setItem('city-vehichal', el.value)
      }
      if (el.classList.value.includes("raon-vehichal")) {
         localStorage.setItem("raon-vehichal", el.value)
      }
      if (el.classList.value.includes("house-vehichal")) {
         localStorage.setItem("house-vehichal", el.value)
      }
      if (el.classList.value.includes("numberhouse-vehichal")) {
         localStorage.setItem("numberhouse-vehichal", el.value)
      }
      if (el.classList.value.includes("email-vehichal")) {
         localStorage.setItem("email-vehichal", el.value)
      }
      if (el.classList.value.includes("name-vehichal")) {
         localStorage.setItem("name-vehichal", el.value)
      }
      if (el.classList.value.includes("markcar-vehichal")) {
         localStorage.setItem("markcar-vehichal", el.value)
      }
      if (el.classList.value.includes("modelcar-vehichal")) {
         localStorage.setItem("modelcar-vehichal", el.value)
      }
      if (el.classList.value.includes("tel-vehichal")) {
         localStorage.setItem("tel-vehichal", el.value)
      }
      if (el.classList.value.includes("statusllow-vehichal")) {
         localStorage.setItem("statusllow-vehichal", el.value)
      }
      if (el.classList.value.includes("organ-vehichal")) {
         localStorage.setItem("organ-vehichal", el.value)
      }
      if (el.classList.value.includes("date-vehichal")) {
         localStorage.setItem("date-vehichal", el.value)
      }
      if (el.classList.value.includes("allownumber-vehichal")) {
         localStorage.setItem("allownumber-vehichal", el.value)
      }
      if (el.classList.value.includes("map-x-1")) {
         localStorage.setItem("map-x-1", el.value)
      }
      if (el.classList.value.includes("map-x-2")) {
         localStorage.setItem("map-x-2", el.value)
      }
      if (el.classList.value.includes("map-x-3")) {
         localStorage.setItem("map-x-3", el.value)
      }
      if (el.classList.value.includes("map-x-4")) {
         localStorage.setItem("map-x-4", el.value)
      }
      if (el.classList.value.includes("map-x-5")) {
         localStorage.setItem("map-x-5", el.value)
      }
      if (el.classList.value.includes("map-x-6")) {
         localStorage.setItem("map-x-6", el.value)
      }
      if (el.classList.value.includes("map-y-1")) {
         localStorage.setItem("map-y-1", el.value)
      }
      if (el.classList.value.includes("map-y-2")) {
         localStorage.setItem("map-y-2", el.value)
      }
      if (el.classList.value.includes("map-y-3")) {
         localStorage.setItem("map-y-3", el.value)
      }
      if (el.classList.value.includes("map-y-4")) {
         localStorage.setItem("map-y-4", el.value)
      }
      if (el.classList.value.includes("map-y-5")) {
         localStorage.setItem("map-y-5", el.value)
      }
      if (el.classList.value.includes("map-y-6")) {
         localStorage.setItem("map-y-6", el.value)
      }
      if (el.classList.value.includes("name-city-1")) {
         localStorage.setItem("nmct-1", el.value)
      }
      if (el.classList.value.includes("name-city-2")) {
         localStorage.setItem("nmct-2", el.value)
      }
      if (el.classList.value.includes("name-city-3")) {
         localStorage.setItem("nmct-3", el.value)
      }
      if (el.classList.value.includes("start-date-vehichal")) {
         localStorage.setItem("start-date-vehichal", el.value)
      }
      if (el.classList.value.includes("gbg-text")) {
         localStorage.setItem("gbg-text", el.value)
      }
      if (el.classList.value.includes("truckbehind-vehichal")) {
         localStorage.setItem("truckbehind-vehichal", el.value)
      }
      if (el.classList.value.includes("finish-date-vehichal")) {
         localStorage.setItem("finish-date-vehichal", el.value)
      }
      if (el.classList.value.includes("counttrips-vehichal")) {
         localStorage.setItem("counttrips-vehichal", el.value)
      }
      if (el.classList.value.includes("type-of-truck-vehichal")) {
         localStorage.setItem("type-of-truck-vehichal", el.value)
      }
      if (el.classList.value.includes("vehichal-1-vehichal")) {
         localStorage.setItem("vehichal-1-vehichal", el.value)
      }
      if (el.classList.value.includes("vehichal-2-vehichal")) {
         localStorage.setItem("vehichal-2-vehichal", el.value)
      }
      if (el.classList.value.includes("vehichal-3-vehichal")) {
         localStorage.setItem("vehichal-3-vehichal", el.value)
      }
      if (el.classList.value.includes("vehichal-4-vehichal")) {
         localStorage.setItem("vehichal-4-vehichal", el.value)
      }
      if (el.classList.value.includes("vehichal-5-vehichal")) {
         localStorage.setItem("vehichal-5-vehichal", el.value)
      }
      if (el.classList.value.includes("vehichal-6-vehichal")) {
         localStorage.setItem("vehichal-6-vehichal", el.value)
      }
      if (el.classList.value.includes("vehichal-7-vehichal")) {
         localStorage.setItem("vehichal-7-vehichal", el.value)
      }

      if (el.classList.value.includes("number-picture-1")) {
         localStorage.setItem("number-picture-1", el.value)
      }
      if (el.classList.value.includes("number-picture-2")) {
         localStorage.setItem("number-picture-2", el.value)
      }
      if (el.classList.value.includes("number-picture-3")) {
         localStorage.setItem("number-picture-3", el.value)
      }
      if (el.classList.value.includes("number-picture-4")) {
         localStorage.setItem("number-picture-4", el.value)
      }
      if (el.classList.value.includes("number-picture-5")) {
         localStorage.setItem("number-picture-5", el.value)
      }
      if (el.classList.value.includes("number-picture-6")) {
         localStorage.setItem("number-picture-6", el.value)
      }
      if (el.classList.value.includes("number-picture-7")) {
         localStorage.setItem("number-picture-7", el.value)
      }
      if (el.classList.value.includes("number-picture-8")) {
         localStorage.setItem("number-picture-8", el.value)
      }
      if (el.classList.value.includes("number-picture-9")) {
         localStorage.setItem("number-picture-9", el.value)
      }
      if (el.classList.value.includes("number-picture-10")) {
         localStorage.setItem("number-picture-10", el.value)
      }
      if (el.classList.value.includes("number-picture-11")) {
         localStorage.setItem("number-picture-11", el.value)
      }
      if (el.classList.value.includes("number-picture-12")) {
         localStorage.setItem("number-picture-12", el.value)
      }
      if (el.classList.value.includes("number-picture-13")) {
         localStorage.setItem("number-picture-13", el.value)
      }
      if (el.classList.value.includes("number-picture-14")) {
         localStorage.setItem("number-picture-14", el.value)
      }
      if (el.classList.value.includes("number-picture-15")) {
         localStorage.setItem("number-picture-15", el.value)
      }
      if (el.classList.value.includes("number-picture-16")) {
         localStorage.setItem("number-picture-16", el.value)
      }
      if (el.classList.value.includes("number-picture-17")) {
         localStorage.setItem("number-picture-17", el.value)
      }
      if (el.classList.value.includes("number-picture-18")) {
         localStorage.setItem("number-picture-18", el.value)
      }
      if (el.classList.value.includes("number-picture-19")) {
         localStorage.setItem("number-picture-19", el.value)
      }
      if (el.classList.value.includes("number-picture-20")) {
         localStorage.setItem("number-picture-20", el.value)
      }


      if (el.classList.value.includes("map-number-1")) {
         localStorage.setItem("map-number-1", el.value)
      }
      if (el.classList.value.includes("map-subnumber-1")) {
         localStorage.setItem("map-subnumber-1", el.value)
      }
      if (el.classList.value.includes("map-city-1")) {
         localStorage.setItem("map-city-1", el.value)
      }
      if (el.classList.value.includes("map-number-2")) {
         localStorage.setItem("map-number-2", el.value)
      }
      if (el.classList.value.includes("map-subnumber-2")) {
         localStorage.setItem("map-subnumber-2", el.value)
      }
      if (el.classList.value.includes("map-city-2")) {
         localStorage.setItem("map-city-2", el.value)
      }
      if (el.classList.value.includes("map-number-3")) {
         localStorage.setItem("map-number-3", el.value)
      }
      if (el.classList.value.includes("map-subnumber-3")) {
         localStorage.setItem("map-subnumber-3", el.value)
      }
      if (el.classList.value.includes("map-city-3")) {
         localStorage.setItem("map-city-3", el.value)
      }
      if (el.classList.value.includes("map-number-4")) {
         localStorage.setItem("map-number-4", el.value)
      }
      if (el.classList.value.includes("map-subnumber-4")) {
         localStorage.setItem("map-subnumber-4", el.value)
      }
      if (el.classList.value.includes("map-city-4")) {
         localStorage.setItem("map-city-4", el.value)
      }
      if (el.classList.value.includes("map-number-5")) {
         localStorage.setItem("map-number-5", el.value)
      }
      if (el.classList.value.includes("map-subnumber-5")) {
         localStorage.setItem("map-subnumber-5", el.value)
      }
      if (el.classList.value.includes("map-city-5")) {
         localStorage.setItem("map-city-5", el.value)
      }
      if (el.classList.value.includes("map-number-6")) {
         localStorage.setItem("map-number-6", el.value)
      }
      if (el.classList.value.includes("map-subnumber-6")) {
         localStorage.setItem("map-subnumber-6", el.value)
      }
      if (el.classList.value.includes("map-city-6")) {
         localStorage.setItem("map-city-6", el.value)
      }
      if (el.classList.value.includes("map-number-7")) {
         localStorage.setItem("map-number-7", el.value)
      }
      if (el.classList.value.includes("map-subnumber-7")) {
         localStorage.setItem("map-subnumber-7", el.value)
      }
      if (el.classList.value.includes("map-city-7")) {
         localStorage.setItem("map-city-7", el.value)
      }
      if (el.classList.value.includes("map-number-8")) {
         localStorage.setItem("map-number-8", el.value)
      }
      if (el.classList.value.includes("map-subnumber-8")) {
         localStorage.setItem("map-subnumber-8", el.value)
      }
      if (el.classList.value.includes("map-city-8")) {
         localStorage.setItem("map-city-8", el.value)
      }
      if (el.classList.value.includes("map-number-9")) {
         localStorage.setItem("map-number-9", el.value)
      }
      if (el.classList.value.includes("region-vehichal")) {
         localStorage.setItem("region-vehichal", el.value)
      }
      if (el.classList.value.includes("stroine-vehichal")) {
         localStorage.setItem("stroine-vehichal", el.value)
      }
      if (el.classList.value.includes("ulica-vehichal")) {
         localStorage.setItem("ulica-vehichal", el.value)
      }

      if (el.classList.value.includes("FIO")) {
         localStorage.setItem("FIO", el.value)
      }
      if (el.classList.value.includes("vinVehichal")) {
         localStorage.setItem("vinVehichal", el.value)
      }

      if (el.classList.value.includes("ИНН")) {
         localStorage.setItem("ИНН", el.value)
      }
      if (el.classList.value.includes("typePaper")) {
         localStorage.setItem("typePaper", el.value)
      }
      if (el.classList.value.includes("ОГРНИП")) {
         localStorage.setItem("ОГРНИП", el.value)
      }
      if (el.classList.value.includes("ОГРН")) {
         localStorage.setItem("ОГРН", el.value)
      }
      if (el.classList.value.includes("map-subnumber-9")) {
         localStorage.setItem("map-subnumber-9", el.value)
      }
      if (el.classList.value.includes("map-city-9")) {
         localStorage.setItem("map-city-9", el.value)
      }
      if (el.classList.value.includes("map-number-10")) {
         localStorage.setItem("map-number-10", el.value)
      }
      if (el.classList.value.includes("map-subnumber-10")) {
         localStorage.setItem("map-subnumber-10", el.value)
      }
      if (el.classList.value.includes("map-city-10")) {
         localStorage.setItem("map-city-10", el.value)
      }
      if (el.classList.value.includes("map-number-11")) {
         localStorage.setItem("map-number-11", el.value)
      }
      if (el.classList.value.includes("map-subnumber-11")) {
         localStorage.setItem("map-subnumber-11", el.value)
      }
      if (el.classList.value.includes("map-city-11")) {
         localStorage.setItem("map-city-11", el.value)
      }
      if (el.classList.value.includes("photo1")) {
         localStorage.removeItem("photo2", el.value)
         localStorage.setItem("photo1", el.value)
      }
      if (el.classList.value.includes("photo2")) {
         localStorage.removeItem("photo1", el.value)

         localStorage.setItem("photo2", el.value)
      }
   })
})
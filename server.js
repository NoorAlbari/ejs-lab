// imports
const express = require("express") //importing express package
const app = express() // creates a express application












app.use(express.static('public')); //all static files are in the public folder



// DATABASE
const resturaunts = [
  {
    id: 1,
    name: 'Al Baik',
    isOpen: true,
    address: 'City Centre Road 4650, Manama',
    phone: '55509876',
    menu: [
      {
        name: 'Chicken Filtet Sandwich',
        price: .750,
        rating: 5
      },
      {
        name: 'Fish Filet Sandwich',
        price: .900,
        rating: 5
      },
      {
        name: 'Chicken Nuggets',
        price: 1.8,
        rating: 4.9
      },
        ]
  },
  {
    id: 2,
    name: "Haji's Traditional Cafe",
    isOpen: false,
    address: '150 شارع الحكومة, Manama',
    phone: '06892543',
    menu: [
      {
        name: 'Chicken Machboos',
        price: 2.2,
        rating: 4.5,
      },
            {
        name: 'Balaleet',
        price: 1.8,
        rating: 5,
      },
      {
        name: 'Cheese Omlette',
        price: .7,
        rating: 5,
      },
          ]
  },
  {
    id: 3,
    name: 'Al Jabriya Turkish Restaurant',
    isOpen: true,
    address: 'Rd No 2643, Busaiteen',
    phone: '17330108',
    menu: [
      {
        name: 'Roosy Sarookh',
        price: 1.8,
        rating: 5,
      },
      {
        name: 'Cheese Pizza',
        price: 2.5,
        rating: 3.5,
      },
      {
        name: 'French Fries',
        price: 1.2,
        rating: 4.3,
      },
        ]
  }
];


// Routes go here


app.get('/', (request,respones)=>{
respones.render('homepage.ejs')

})

app.get('/resturaunts', (request,respones)=>{
respones.render('all-resturaunts.ejs',{
resturaunts: resturaunts
     
     
    })

})


app.get('/resturaunts/:id', (request, respones) => {
  console.log('Id = ' + request.params.id);

  const foundresturaunt = resturaunts.find((oneResturaunt) => {
    return oneResturaunt.id === Number(request.params.id);
  });

  // If the file is directly inside views/:
  respones.render('resturaunts-details.ejs', { resturaunt: foundresturaunt });

  // OR if it is inside views/resturaunts/:
  // respones.render('resturaunts/resturaunts-details.ejs', { resturaunt: foundresturaunt });
});



 
 
 




app.listen(3000,()=>{
    console.log("Listening on port " + 3000)
}) // Listen on port 3000



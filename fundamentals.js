const aCar = {
  owner: "Joe Bloggs",
  previous_owners: [
    "Pat Smith - 1 Main Street",
    "Sheila Dwyer - 2 High Street"
  ],
  type: {
    make: 'Toyota',
    model: 'Corolla',
    cc: 1.8
  },
  registration: {
    year: 201,
    country: 'WD',
    number: 1058
  }
};

aCar.milage = 10000
aCar.color = {
  exterior: "red",
  interior: { texture: "leather", shade: "cream" }
}

console.log(aCar.owner +
  ' drives a ' + aCar.type.make)

console.log("Reg. = " +
  aCar.registration.year +
  "-" +
  aCar.registration.county +
  "-" +
  aCar.registration.number
);

console.log(
  "It is a " +
  aCar.color.exterior +
  " car, " +
  aCar.milage +
  " milage, with " +
  aCar.color.interior.texture +
  " interior."
);

console.log(
  "First owner: " +
    aCar.previous_owners[0].name +
    ' - ' +
    aCar.previous_owners[0].address
)

for (let i = 0 ; i < aCar.features.length ; i += 1) {
  console.log(aCar.features[i]) ;
}
for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
  console.log(aCar.previous_owners[i].name);
}
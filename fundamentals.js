const aCar = {
  owner: "Joe Bloggs",
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




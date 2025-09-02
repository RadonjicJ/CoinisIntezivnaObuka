const studenti = [
  { ime: "Marko", prezime: "Petrović", godina: 3, ocjene: [9, 8, 7, 10, 9] },
  { ime: "Ana", prezime: "Jovanović", godina: 1, ocjene: [7, 6, 8, 6, 7] },
  { ime: "Luka", prezime: "Simić", godina: 2, ocjene: [10, 9, 10, 8, 9] },
  { ime: "Maja", prezime: "Nikolić", godina: 4, ocjene: [6, 5, 7, 6, 6] },
  { ime: "Ivana", prezime: "Stanković", godina: 1, ocjene: [9, 10, 9, 8, 9] },
];

//Napisati funkciju koja prolazi kroz niz i ispisuje studente koji imaju prosjek veći od 8.5.
//Ukoliko student ne zadovoljava kriterijum, ispiši samo njegovo ime.

function obidjiStudente(studenti) {
  studenti.forEach((element) => {
    let prosjek = izracunajProsjek(element.ocjene);

    student = { prosjek: prosjek, student: element };

    console.log(`Prosjek  ${prosjek}`);
    if (prosjek > 8.5) {
      console.log(element);
    } else {
      console.log(element.ime);
    }
  });

  return student;
}

const studentArray = obidjiStudente(studenti);

function izracunajProsjek(ocjene) {
  let sum = 0;
  ocjene.forEach((element) => {
    sum += element;
  });
  return sum / ocjene.length;
}

console.log(studentArray);

// Napisati funkciju koja pronalazi i ispisuje studenta sa najvišim prosjekom.

function najvisiProsjek(studentArray) {
  let student = {};
  studentArray.forEach((element) => {
    if (element.prosjek > max) {
      student = element;
    }
  });
  return student;
}

console.log(`Student sa najvisim prosjekom : ${najvisiProsjek(studentArray)}`);

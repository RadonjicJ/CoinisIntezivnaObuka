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
  let studentArr = [];
  studenti.forEach((element) => {
    let prosjek = izracunajProsjek(element.ocjene);

    student = { prosjek: prosjek, ...element };
    studentArr.push(student);

    console.log(`Prosjek  ${prosjek}`);
    if (prosjek > 8.5) {
      console.log(element);
    } else {
      console.log(element.ime);
    }
  });

  return studentArr;
}

let studentArray = obidjiStudente(studenti);

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
  let max = 0;
  studentArray.forEach((element) => {
    if (element.prosjek > max) {
      max = element.prosjek;
      student = element;
    }
  });
  console.log(student);
  return student;
}
let najboljiStudent = najvisiProsjek(studentArray);
console.log("Student sa najvisim prosjekom :", najboljiStudent);

// Napisati funkciju koja izračunava i ispisuje prosječan prosjek svih studenata u nizu.
function prosjecanProsjek(studentArray) {
  let sum = 0;
  studentArray.forEach((element) => {
    sum += element.prosjek;
  });
  console.log(sum);
  return (sum / studentArray.length).toFixed(2);
}

console.log(`Prosjecni prosjek studenata: ${prosjecanProsjek(studentArray)}`);

//Napisati funkciju koja sortira studente po prosjeku u opadajućem redosledu i ispisuje ih.
function sortiranjePoProsjeku(studentArray) {
  studentArray.sort((s1, s2) => s2.prosjek - s1.prosjek);
  return studentArray;
}

studentArray = sortiranjePoProsjeku(studentArray);
console.log("Sortirani niz: ", studentArray);

// Za svakog studenta u nizu, dodajte novi ključ prosjek sa odgovarajućom vrijednošću i
// ispišite novonastali niz studenata.

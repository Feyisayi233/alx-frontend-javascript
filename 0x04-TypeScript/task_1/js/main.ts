interface Teacher {
  readonly firstName: string; // read-only
  readonly lastName: string; // read-only
  fullTimeEmployee: boolean; // mandatory
  location: string; // mandatory
  yearsOfExperience?: number; // optional
  [key: string]: any; // allow extra attributes
}

interface Directors extends Teacher {
  numberOfReports: number; // mandatory for Directors
}

// Example Teacher object
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

console.log(teacher3);

// Example Directors object
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

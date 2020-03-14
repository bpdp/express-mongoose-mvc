db = connect("localhost:27017/mydb");

emps = [
  {
    name : "Zaky",
    address : "Griya Purwa Asri"
  },
  {
    name : "Ahmad",
    address : "Purwomartani",
    email : "zakyahmadaditya@gmail.com"
  },
  {
    name : "Aditya",
    address : "Kalasan",
    phone: "08787878787"
  }
];

db.employees.insertMany(emps);

db = connect("localhost:27017/mydb") 
emp1 = { name : "Zaky", address : "Griya Purwa Asri" }
emp2 = { name : "Ahmad", address : "Purwomartani", email : "zakyahmadaditya@gmail.com" }
emp3 = { name : "Aditya", address : "Kalasan", phone: "08787878787" }
db.employees.insert( emp1 )
db.employees.insert( emp2 )
db.employees.insert( emp3 )

const users = [ 
    {userName: "deepak_kumar", firstName: "deepak", middleName: "kumar"},
    {userName: "rahul_krishna", firstName: "rahul", middleName: "krishna"},
    {userName: "aly_goni", firstName: "aly", middleName: "singh"}
]

const [{userName}] = users
users.map((i)=>{
    console.log(i.userName)
})
let company = {
    name: `Caldera Interactive`,
    yearly_revenue: 1000000,
    ceo: `Isael`,
    number_of_employees: 3,
    managers: [
        {
            name:`Jeff`, 
            salary: 50000, 
            is_senior: false
        }, 
        {
            name: `Mike`, 
            salary: 80000, 
            is_senior:true
        }, 
        {
            name: `Titus`, 
            salary: 60000, 
            is_senior:false}
    ]
};

if (company[`yearly_revenue`] >= 1000000) 
{
    console.log(`Congratulations to ${company[`ceo`]} of ${company[`name`]} and their ${company[`number_of_employees`]} employees.`);
} else {
    console.log(`Keep up the good work!`);
}

let i = 0;
while(i< company.managers.length) 
{
    console.log(company.managers[i].name);
    console.log(company.managers[i].salary);
    if (company.managers[i].is_senior === true) 
    {
        console.log(`Congrats ${company.managers[i].name} on your many years of service`);
    }
    i++;
}

for(let i = 0; i < company.managers.length; i++) 
{
    console.log(company.managers[i].name);
    console.log(company.managers[i].salary);
    if (company.managers[i].is_senior === true) 
    {
        console.log(`Congrats on your many years of service`);
    }
}



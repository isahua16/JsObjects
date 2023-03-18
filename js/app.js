let company = {
    name: `Caldera Interactive`,
    yearly_revenue: 1000000,
    ceo: `Isael`,
    number_of_employees: 3
}

if (company[`yearly_revenue`] >= 1000000) {
    console.log(`Congratulations to ${company[`ceo`]} of ${company[`name`]} and their ${company[`number_of_employees`]} employees.`);
} else {
    console.log(`Keep up the good work!`);
}


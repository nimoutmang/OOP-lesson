class Country{
    name: string;
    population: number;
    capital: string;
    currency: string;

    constructor(name:string, population: number, capital: string, currency: string){
        this.name = name;
        this.population = population;
        this.capital = capital;
        this.currency = currency;   
    };

    getInformation(Country){
        return "Welcome to "+ countries1.name + ", " + countries1.population + " millions people"+", capital" +
         countries1.capital + " and currency " + countries1.currency +"!"+"\n"+
        "Welcome to "+ countries2.name + ", " + countries2.population + " millions people"+", capital" + 
        countries2.capital + " and currency " + countries2.currency+"!"+"\n"+
        "Welcome to "+ countries3.name + ", " + countries3.population + " millions people"+", capital" +
         countries3.capital + " and currency " + countries3.currency;
    }
    

};
let countries1 = new Country("France", 70,"Paris","Euro");
let countries2 = new Country("Cambodia", 17,"Phnom Penh","Riel");
let countries3 = new Country("UK", 80,"London","Pound");

console.log(countries1.getInformation(Country));
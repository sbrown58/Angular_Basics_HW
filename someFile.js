function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("id1").innerHTML = sayHello(user);
var Person = /** @class */ (function () {
    function Person(first_name, last_name, age, phone_number, state, zip_code, occupation, hourly_wage, certifications) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.phone_number = phone_number;
        this.state = state;
        this.zip_code = zip_code;
        this.occupation = occupation;
        this.hourly_wage = hourly_wage;
        this.certifications = certifications;
    }
    Person.prototype.combo1 = function () {
        var combo1var = this.first_name + " " + this.last_name + " " + this.occupation;
        return combo1var;
    };
    Person.prototype.combo2 = function () {
        var combo2var = this.first_name + " " + this.age + " " + this.phone_number;
        return combo2var;
    };
    Person.prototype.getWeeklyWage = function () {
        var hours;
        if (hours != undefined) {
            var weeklyWage = this.first_name + ": " + (hours * this.hourly_wage);
        }
        var weeklyWage = this.first_name + ": " + (40 * this.hourly_wage);
        return weeklyWage;
    };
    Person.prototype.getAddCerts = function () {
        var allCerts = this.certifications;
        return allCerts;
    };
    return Person;
}());
function getPerson(personObj) {
    return personObj;
}
var sydney = new Person("Sydney", "Brown", 23, "919", "nc", 27707, "student", 0, "MBA");
var jane = new Person("Jane", "doe", 23, "704", "sc", 28203, "athlete", 15, "CSM");
document.getElementById("id2").innerHTML = sydney.combo1();
document.getElementById("id3").innerHTML = jane.combo2();
document.getElementById("id4").innerHTML = jane.getWeeklyWage();

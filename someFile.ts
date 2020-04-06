
function sayHello(person: string): string {
    return "Hello, " + person;
}
   var user = "Super Student";
   document.getElementById("id1").innerHTML = sayHello(user);

   interface PersonOptions{

    first_name: string;
    last_name: string;
    age?: number;
    phone_number?: string;
    state?: string;
    zip_code?: number;
    occupation?: string;
    hourly_wage?: number;
    certifications?: any;
   }


   class Person implements PersonOptions{

        first_name: string;
        last_name: string;
        age: number;
        phone_number: string;
        state: string;
        zip_code: number;
        occupation: string;
        hourly_wage: number;
        certifications: any;


       constructor(first_name, last_name, age, phone_number, state, zip_code, occupation, hourly_wage, certifications){
           this.first_name = first_name;
           this.last_name=last_name;
           this.age=age;
           this.phone_number=phone_number;
           this.state=state;
           this.zip_code=zip_code;
           this.occupation=occupation;
           this.hourly_wage=hourly_wage;
           this.certifications=certifications;
       }

        combo1(): string {
           var combo1var: string = this.first_name + " " +  this.last_name +  " " +  this.occupation;
           return combo1var;
        }
        combo2(): string {
        var combo2var: string =  this.first_name + " " +  this.age + " " +  this.phone_number;
        return combo2var;
        }      

        getWeeklyWage(): any{
            var hours: number;
            if (hours != undefined){
                var weeklyWage: any = this.first_name + ": " + (hours * this.hourly_wage);
            }
            var weeklyWage: any = this.first_name + ": " + (40 * this.hourly_wage);
            return weeklyWage;
        }

        getAddCerts(): string[] {
            let allCerts: string[] = this.certifications;
            return allCerts;
        }
   }

 

    function getPerson(personObj: PersonOptions): any {
        type personObj = [keyof PersonOptions];
        return personObj;
    }

        const sydney = new Person("Sydney", "Brown" , 23, "919", "nc", 27707, "student", 0, "MBA");
        const jane = new Person("Jane", "doe" , 23, "704", "sc", 28203, "athlete", 15, "CSM");
        
        document.getElementById("id2").innerHTML = sydney.combo1();
        document.getElementById("id3").innerHTML = jane.combo2();
        document.getElementById("id4").innerHTML = jane.getWeeklyWage();



        

 
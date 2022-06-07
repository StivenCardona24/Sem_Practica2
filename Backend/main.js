var app = new Vue({
    el: "#app",
    data: {

        ussers:[

            
            {id:0,
            name:"Juan",
            appointment: 1,
            telephone: 23454,
            mail:"juan@gmail.com",
            salary: 3000000,
            pin:1234,
            // cargo: this.appointment[0],
            // salario: cargo.salary 
        },

            {id:1,
            name:"Camilo",
            appointment: 2,
            telephone: 32545466,
            mail:"camilo@gmail.com",
            salary: 2000000,
            pin:1234 },

            {id:2,
            name:"sebas",
            appointment: 3,
            telephone: 4565767,
            mail:"sebas@gmail.com",
            salary: 2000000,
            pin:1234 },

            {id:3,
            name:"carlos",
            appointment: 4,
            telephone: 5675355,
            mail:"carlos@gmail.com",
            salary: 2500000,
            pin:1234 },


        ],

        appointment:[
            {id: 1,
            name: "Administrador",
            salary: 3000000,
            },
            {
                id: 2,
                name: "Secretario",
                salary: 2000000,
            },
            {
                id: 3,
                name: "Vendedor",
                salary: 2000000,
                commission1: 10,
                commission2: 20
            },
            {
                id: 3,
                name: "Ensamblador",
                salary: 2500000,
                cantMaxZo: 10,
                cantMaxZa: 10,
                priceZo: 20,
                priceZa: 20
            }
            
        
            

        ],

        usser:"",
        usserT:"",
        usserP:"",
        page:1,
        adminCargo: 0,
         
        
        fecha: "",

        zapatosEn: 0,
        cantMax: 12,



    },
    methods: {

        login: function(){
            this.ussers.forEach(usuario => {
                if(usuario.appointment == this.usserT&& usuario.pin == this.usserP){

                    this.usser = usuario;
                  
                    switch(this.usserT){
                        case 1:
                            
                           
                            console.log(this.usserT)
                            this.page= 1;
                            break;
                        
                        case 2:
                                this.page= 2;
                                break;
                        
                         case 3:
                                this.page= 3;
                                break;
                         case 4:
                                    this.page= 4;
                                    break;
                        
                        default:
                            break;
                    


                    }

                    this.fecha = this.date();

                  

                    console.log("Bienvenido");
                    
                }
            });
        },

        logOut: function(){
            this.page = 0;
        },
        
        date: function(){
            let da = new Date();

            let fecha = `Fecha: ${da.getDay()}/${da.getMonth()}/${da.getFullYear()} Hora: ${da.getHours()}:${da.getMinutes()}`

            return fecha;
        },

        updateSec: function(){
            let salario = document.getElementById("salarioSec").value;
            this.appointment[0].salary = salario;
            console.log(this.appointment[1].salary);
        },
        
        updateVen(){
            let salario = document.getElementById("salarioVen").value;
            let commission1 = document.getElementById("comision1").value;
            let commission2 = document.getElementById("comision2").value;
            console.log(this.appointment[2].salary);
            console.log(this.appointment[2].commission1 );
            console.log(this.appointment[2].commission2 );

            this.appointment[2].salary = salario;
            this.appointment[2].commission1 = commission1;
            this.appointment[2].commission2 = commission2;
            console.log(this.appointment[2].salary);
            console.log(this.appointment[2].commission1 );
            console.log(this.appointment[2].commission2 );

        },

        updateEns(){
            let salario = document.getElementById("salarioVen").value;
            let commission1 = document.getElementById("comision1").value;
            let commission2 = document.getElementById("comision2").value;

        }


       


    },


  });
  
    //v-for="i in array" es una directiva de bue que permite recorrer un arreglo
  
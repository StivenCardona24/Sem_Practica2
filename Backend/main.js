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
            pin:1234 },

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
            "Administrador",
            "Secretario",
            "Vendedor",
            "Ensamblador"

        ],

        usser:"",
        usserT:"",
        usserP:"",
        page:0,
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
        }

       


    },
  });
  
    //v-for="i in array" es una directiva de bue que permite recorrer un arreglo
  
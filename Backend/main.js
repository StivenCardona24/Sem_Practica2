var app = new Vue({
    el: "#app",
    data: {

        ussers:[
            {name:"Juan",
            appointment: 1,
            pin:1234 },

            {name:"Camilo",
            appointment: 2,
            pin:1234 },
            {name:"sebas",
            appointment: 3,
            pin:1234 },
            {name:"Camilo",
            appointment: 4,
            pin:1234 },


        ],

        usser:"",
        usserT:"",
        usserP:"",
        page:0,
        adminCargo: 0,
         
        
        fecha: this.date(),

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

                  

                    console.log("Bienvenido");
                    
                }
            });
        },

        logOut: function(){
            this.page = 0;
        },

       


    },
  });
  
    //v-for="i in array" es una directiva de bue que permite recorrer un arreglo
  
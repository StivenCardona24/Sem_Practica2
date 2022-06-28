var app = new Vue({
  el: "#app",
  data: {
    ussers: [
      {
        id: 0,
        cc: 43247859,
        name: "Juan",
        appointment: 1,
        telephone: 23454,
        mail: "juan@gmail.com",
        salary: 3000000,
        pin: 1234,
        hourE: 0,
        // cargo: this.appointment[0],
        // salario: cargo.salary
      },

      {
        id: 1,
        cc: 234552,
        name: "Camilo",
        appointment: 2,
        telephone: 32545466,
        mail: "camilo@gmail.com",
        salary: 2000000,
        pin: 1234,
        hourE: 4,
      },

      {
        id: 2,
        cc: 345657,
        name: "sebas",
        appointment: 3,
        telephone: 4565767,
        mail: "sebas@gmail.com",
        salary: 2000000,
        pin: 1234,
        
        totalV: 8000000,
        
      },

      {
        id: 3,
        cc: 234344,
        name: "carlos",
        appointment: 4,
        telephone: 5675355,
        mail: "carlos@gmail.com",
        salary: 2500000,
        pin: 1234,
        hourE: 6,
        sons: 1,
        shoesE: 1500,
        sneakersE: 2000,
      },
    ],

    appointment: [
      { id: 1, name: "Administrador", salary: 3000000 },
      {
        id: 2,
        name: "Secretario",
        salary: 2000000,
        porcE: 180,
      },
      {
        id: 3,
        name: "Vendedor",
        salary: 2000000,
        commission1: 10,
        commission2: 20,
        totalC1: 5000000,
        totalC2: 10000000,
        auxTrans: 117171
      },
      {
        id: 3,
        name: "Ensamblador",
        salary: 2500000,
        cantMaxZo: 3500,
        cantMaxZa: 4000,
        priceZo: 300,
        priceZa: 400,
        porcE: 220,
        bono1: 80000,
        bono2: 60000,
        auxTrans: 117171
      },
    ],

    usser: "",
    usserT: "",
    usserP: "",
    page: 0,
    adminCargo: 0,
    employee: null,
    fecha: "",
    nomina: null,
    shoesEn: 0,
    sneakersEn: 0,
    cantMax: 12,
    option: 0,
    person:{
      id: "",
      cc: "",
      name:"",
      appointment: 0,
      telephone:"",
      mail: "",
      pin: "",


    },

    sale: 0,
    x : false,

  },
  methods: {
    login: function () {
      if (this.usserT == "" || this.usserP == "") {
        alert("Ingrese correctamente los datos");
        console.log("Hikaaaaa");
        return;
      }

      if(this.usserP <= 999){
        this.x = true;

      }
      this.ussers.forEach((usuario) => {
        if (usuario.appointment == this.usserT && usuario.pin == this.usserP) {
          this.usser = usuario;

          switch (this.usserT) {
            case 1:
              console.log(this.usserT);
              this.page = 1;
              break;

            case 2:
              this.page = 2;
              break;

            case 3:
              this.page = 3;
              break;
            case 4:
              this.page = 4;
              break;

            default:
              break;
          }

         this.date();
         this.x = false;

          console.log("Bienvenido");
        }
      });
      if(this.usser == ""){
        alert("Datos Incorrectos");
      }
    },

    logOut: function () {
      this.page = 0;
    },

    date: function () {
      let da = new Date();

      let fecha = `Fecha: ${String(da.getDate()).padStart(2, '0')}/${String(da.getMonth() + 1).padStart(2, '0')}/${da.getFullYear()} Hora: ${da.toLocaleTimeString()}`;

      this.fecha = fecha;
      setTimeout(this.date,100)
    },

    updateSec: function () {
      let salario = document.getElementById("salarioSec").value;
      this.appointment[1].salary = salario;
      console.log(this.appointment[1].salary);
      this.updateSal(2);
    },

    updateVen() {
      let salario = document.getElementById("salarioVen").value;
      let commission1 = document.getElementById("comision1").value;
      let commission2 = document.getElementById("comision2").value;
      // console.log(this.appointment[2].salary);
      // console.log(this.appointment[2].commission1 );
      // console.log(this.appointment[2].commission2 );

      this.appointment[2].salary = salario;
      this.appointment[2].commission1 = commission1;
      this.appointment[2].commission2 = commission2;
      // console.log(this.appointment[2].salary);
      // console.log(this.appointment[2].commission1 );
      // console.log(this.appointment[2].commission2 );

      this.updateSal(3);
    },

    updateEns() {
      let salario = document.getElementById("salarioEns").value;
      let cantMaxZo = document.getElementById("cantMaxZo").value;
      let cantMaxZa = document.getElementById("cantMaxZa").value;
      let priceZo = document.getElementById("priceZo").value;
      let priceZa = document.getElementById("priceZa").value;

      this.appointment[3].salary = salario;
      this.appointment[3].cantMaxZo = cantMaxZo;
      this.appointment[3].cantMaxZa = cantMaxZa;
      this.appointment[3].priceZa = priceZa;
      this.appointment[3].priceZo = priceZo;

      this.updateSal(4);
    },

    updateSal(id) {
      this.ussers.forEach((usser) => {
        if (usser.appointment == id) {
          usser.salary = this.appointment[id - 1].salary;
        }
      });
    },

    updateHour() {
      // usser.hourE = employee.hourE;
      this.employee = null;
    },

    bill(usser) {
      switch (usser.appointment) {
        case 2:

            this.billSec(usser);
          

          break;

        case 3:
            this.billVen(usser);
          break;

        case 4:
            this.billEns(usser);
          break;

        default:
          break;
      }
    },

    billSec(usser){
        let priceHE =
            (usser.salary / 240) *
            (this.appointment[usser.appointment - 1].porcE / 100);
          let priceHT = parseFloat(priceHE) * usser.hourE;
          priceHE = priceHE.toFixed(2);
          priceHT = priceHT.toFixed(2);
          let salaryTo = parseFloat(usser.salary) + parseFloat(priceHT);

          salaryTo = salaryTo.toFixed(2);

          this.nomina = {
            name: usser.name,
            appointment2: this.appointment[usser.appointment - 1].name,
            salaryB: usser.salary,
            hourE: usser.hourE,
            priceHourE: priceHE,
            priceHourT: priceHT,
            salaryT: salaryTo,
          };

          this.option = 1;
        
    },


    billVen(usser){

        let salary = usser.salary;
        let salaryT = usser.salary;
        let auxTrans = this.appointment[usser.appointment-1].auxTrans;
        let comision = 0;

        if(usser.totalV > this.appointment[usser.appointment-1].totalC1){
           comision = salary * this.appointment[usser.appointment-1].commission1 / 100

        }
        else if(usser.totalV > this.appointment[usser.appointment-1].totalC2){
            comision += salary * this.appointment[usser.appointment-1].commission2 / 100

        }

        salaryT += comision + auxTrans;

        this.nomina = {
            name: usser.name,
            appointment2: this.appointment[usser.appointment - 1].name,
            salaryB: usser.salary,
            totalV: usser.totalV,
            commission: comision, 
            auxTr: auxTrans,  
            salaryT: salaryT,

        }

        this.option = 2;

        


    },


    billEns(usser){
        let priceHE =
            (usser.salary / 240) *
            (this.appointment[usser.appointment - 1].porcE / 100);
          let priceHT = parseFloat(priceHE) * usser.hourE;
          priceHE = priceHE.toFixed(2);
          priceHT = priceHT.toFixed(2);
          let auxTrans = this.appointment[usser.appointment-1].auxTrans;
          let shoesE = usser.shoesE;
        let sneakerE = usser.sneakersE;
         let aumShoesE = 0;
         let aumSneakerE= 0;

        let son = usser.sons;
          if(usser.shoesE > 1000){
              aumShoesE = usser.shoesE * this.appointment[usser.appointment - 1].priceZo * 0.1;

            

          }
          else if( usser.shoesE > 2000){
            aumShoesE = usser.shoesE * this.appointment[usser.appointment - 1].priceZo * 0.2;

          }

          if(usser.sneakersE > 1700){
            aumSneakerE = usser.sneakersE * this.appointment[usser.appointment - 1].priceZa * 0.15;

          

        }
        else if( usser.sneakersE > 3000){
            aumSneakerE = usser.sneakersE * this.appointment[usser.appointment - 1].priceZa * 0.3;

        }

        let bono = 0
        if(usser.sons == 1){
            bono = this.appointment[usser.appointment-1].bono1
        }

        else  if(usser.sons > 1){
            bono = usser.sons * this.appointment[usser.appointment-1].bono2;
        }

        let salaryTo = parseFloat(usser.salary) + parseFloat(priceHT) + auxTrans + bono+ aumShoesE + aumSneakerE;

          salaryTo = salaryTo.toFixed(2);

          this.nomina = {
            name: usser.name,
            appointment2: this.appointment[usser.appointment - 1].name,
            salaryB: usser.salary,
            hourE: usser.hourE,
            priceHourE: priceHE,
            priceHourT: priceHT,
            shoesE1: shoesE,
            sneakerE1: sneakerE,
            aumShoes: aumShoesE,
            aumSneaker: aumSneakerE,
            sons : son,
            bonos: bono,
            auxTr: auxTrans,  
            salaryT: salaryTo,
          };

          this.option = 3;
        
    },

    close(){
      this.option = 0;
    },


    addEmployee(){

      let id = this.ussers.length ;
      this.person.id = id
      this.ussers.push(this.person);


    },

    addSale(){
        this.usser.totalV += this.sale;
    },

    addShoes(){
      this.usser.shoesE += this.shoesEn;

      this.usser.sneakerE += this.sneakersEn;
    }

    // (() => {
    //   'use strict'
    
    //   // Fetch all the forms we want to apply custom Bootstrap validation styles to
    //   const forms = document.querySelectorAll('.needs-validation')
    
    //   // Loop over them and prevent submission
    //   Array.from(forms).forEach(form => {
    //     form.addEventListener('submit', event => {
    //       if (!form.checkValidity()) {
    //         event.preventDefault()
    //         event.stopPropagation()
    //       }
    
    //       form.classList.add('was-validated')
    //     }, false)
    //   })
    // })()



  },
});

//v-for="i in array" es una directiva de bue que permite recorrer un arreglo

//define the rules


module.exports = 
 [

{
	"condition": function(R) {
		R.when(this && (this.ambulancia.especialidad == this.pedido.edadPaciente));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 20;
		this.ambulancia.reglas += "R1" 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.ambulancia.especialidad == 'adulto-pediatrico'));  
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 7;
		this.ambulancia.reglas += "R2" 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.sintoma == 'grave' && this.pedido.edadPaciente== this.ambulancia.especialidad));
        
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 20;
		this.ambulancia.reglas += "R3" 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.sintoma == 'grave' && this.pedido.edadPaciente != this.ambulancia.especialidad
        && this.ambulancia.especialidad == 'adulto-pediatrico'));
        
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 15;
		this.ambulancia.reglas += "R4" 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.sintoma == 'grave' && this.pedido.edadPaciente != this.ambulancia.especialidad
        && this.ambulancia.especialidad != 'adulto-pediatrico'));
        
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 12;
		this.ambulancia.reglas += "R5" 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.sintoma == 'media' && this.pedido.edadPaciente== this.ambulancia.especialidad));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 10;
		this.ambulancia.reglas += "R6" 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.sintoma == 'media' && this.pedido.edadPaciente != this.ambulancia.especialidad
        && this.ambulancia.especialidad == 'adulto-pediatrico'));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 8;
		this.ambulancia.reglas += "R7" 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.sintoma == 'media' && this.pedido.edadPaciente != this.ambulancia.especialidad
        && this.ambulancia.especialidad != 'adulto-pediatrico')); 
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 5; 
		this.ambulancia.reglas += "R8"
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.sintoma == 'leve' && this.pedido.edadPaciente == this.ambulancia.especialidad ));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 3; 
		this.ambulancia.reglas += "R9"
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.sintoma == 'leve'  
        && this.ambulancia.especialidad == 'adulto-pediatrico'));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 2; 
		this.ambulancia.reglas += "R10"
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.prestacionTipo == 'rojo' && this.ambulancia.distancia < 1));  
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 30;
		this.ambulancia.reglas += "R11" 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.prestacionTipo == 'rojo' && this.ambulancia.distancia > 1 && this.ambulancia.distancia < 3));  
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 20;
		this.ambulancia.reglas += "R12" 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.prestacionTipo == 'rojo' && this.ambulancia.distancia > 3));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 10;
		this.ambulancia.reglas += "R13" 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.prestacionTipo == 'amarillo' && this.ambulancia.distancia < 1));
	},
	"consequence": function(R) {
		console.log("1");
		this.ambulancia.ranking += 10;
		this.ambulancia.reglas += "R14" 
		R.next();
	}
}   ,
{
	"condition": function(R) {
		R.when(this && (this.pedido.prestacionTipo == 'amarillo' && this.ambulancia.distancia >= 1 && this.ambulancia.distancia <= 5));
	},
	"consequence": function(R) {
		console.log(this.ambulancia.ranking);
		this.ambulancia.ranking += 20; 
		this.ambulancia.reglas += "R15"
		console.log(this.ambulancia.ranking);
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.prestacionTipo == 'amarillo' && this.ambulancia.distancia > 5));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 5;
		this.ambulancia.reglas += "R16"
		console.log("5"); 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.necesidadAdicionales && this.ambulancia.equipoAdicional 
		&& this.ambulancia.medicoRespirados));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 30;
		this.ambulancia.reglas += "R17" 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.necesidadAdicionales && !this.ambulancia.equipoAdicional
		&& this.ambulancia.medicoRespirados));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 20;
		this.ambulancia.reglas += "R18"; 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.necesidadAdicionales && !this.ambulancia.equipoAdicional
		&& !this.ambulancia.medicoRespirados));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 10; 
		this.ambulancia.reglas += "R19";
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.ambulancia.carga));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 10;
		this.ambulancia.reglas += "R20"; 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (!this.ambulancia.libre));
	},
	"consequence": function(R) {
		this.ambulancia.ranking -= 15;
		this.ambulancia.reglas += "R21"; 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && ( this.ambulancia.cantidadAsignaciones / this.ambulancia.tiempoOperativo) <= 1);
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 15;
		this.ambulancia.reglas += "R22"; 
		R.next();
	}
},
{
	"condition": function(R) {
		var productividad = ( this.ambulancia.cantidadAsignaciones / this.ambulancia.tiempoOperativo);
		R.when(this && productividad <= 2 && productividad >= 1);
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 8; 
		this.ambulancia.reglas += "R23";
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && this.ambulancia.tiempoLibre < 15);
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 5; 
		this.ambulancia.reglas += "R24";
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && this.ambulancia.tiempoLibre >= 15 && this.ambulancia.tiempoLibre < 30);
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 10;
		this.ambulancia.reglas += "R25"; 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && this.ambulancia.tiempoLibre >= 30);
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 20; 
		this.ambulancia.reglas += "R26";
		R.next();
	}
}];

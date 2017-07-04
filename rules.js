//define the rules


module.exports = 
 [{
	"condition": function(R) {
		R.when(this && (this.ambulancia.distancia < 1));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 30; 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.ambulancia.distancia > 1) && (this.ambulancia.distancia < 5));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 10; 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.ambulancia.especialidad == this.pedido.edadPaciente));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 10; 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.ambulancia.especialidad == 'adulto-pediatrico'));  
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 5; 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.sintoma == 'grave' && this.pedido.edadPaciente== this.ambulancia.especialidad));
        
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 20; 
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
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.sintoma == 'media' && this.pedido.edadPaciente== this.ambulancia.especialidad));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 10; 
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
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.sintoma == 'leve' && this.pedido.edadPaciente == this.ambulancia.especialidad 
        && this.ambulancia.especialidad == 'adulto-pediatrico'));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 3; 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.sintoma == 'leve' && this.pedido.edadPaciente == this.ambulancia.especialidad 
        && this.ambulancia.especialidad != 'adulto-pediatrico'));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 2; 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.sintoma == 'leve' && this.pedido.edadPaciente == this.ambulancia.especialidad 
        && this.ambulancia.especialidad != 'adulto-pediatrico'));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 2; 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.prestacionTipo == 'rojo' && this.ambulancia.distancia < 1));  
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 30; 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.prestacionTipo == 'rojo' && this.ambulancia.distancia > 1 && this.ambulancia.distancia < 3));  
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 20; 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.prestacionTipo == 'rojo' && this.ambulancia.distancia > 3));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 10; 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.prestacionTipo == 'amarillo' && this.ambulancia.distancia < 1));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 10; 
		R.next();
	}
}   ,
{
	"condition": function(R) {
		R.when(this && (this.pedido.prestacionTipo == 'amarillo' && this.ambulancia.distancia > 1 && this.ambulancia.distancia < 5));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 20; 
		R.next();
	}
},
{
	"condition": function(R) {
		R.when(this && (this.pedido.prestacionTipo == 'amarillo' && this.ambulancia.distancia > 5));
	},
	"consequence": function(R) {
		this.ambulancia.ranking += 5; 
		R.next();
	}
}];

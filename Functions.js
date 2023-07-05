var Television = {
    encendida: false,
    volumen: 0,
    canal: 0,
  
    encender: function() {
      if (!this.encendida) {
        this.encendida = true;
        this.volumen = 3; 
        this.canal = 7;
        console.log('La televisión está encendida.');
        console.log('Volumen actual:', this.volumen);
        console.log('Canal actual:', this.canal);
      } else {
        console.log('La televisión ya está encendida.');
      }
    },
  
    apagar: function() {
      if (this.encendida) {
        this.encendida = false;
        console.log('La televisión está apagada.');
      } else {
        console.log('La televisión ya está apagada.');
      }
    },
  
    subirVolumen: function() {
      if (this.encendida) {
        if (this.volumen < 10) {
          this.volumen++;
          console.log('Volumen actual:', this.volumen);
        } else {
          console.log('El volumen ya está al máximo.');
        }
      } else {
        console.log('La televisión está apagada. No se puede subir el volumen.');
      }
    },
  
    bajarVolumen: function() {
      if (this.encendida) {
        if (this.volumen > 1) {
          this.volumen--;
          console.log('Volumen actual:', this.volumen);
        } else {
          console.log('El volumen ya está al mínimo.');
        }
      } else {
        console.log('La televisión está apagada. No se puede bajar el volumen.');
      }
    },
    mutear: function(){
        if (this.encendida) {
            if (this.volumen > 1) {
              this.volumen;
              console.log('Muteado, volumen actual:', this.volumen);
            } else {
              console.log('No hay audio.');
            }
          } else {
            console.log('La televisión está apagada. No se puede bajar el volumen.');
          }
    },
  
    siguienteCanal: function() {
      if (this.encendida) {
        if (this.canal < 100) {
          this.canal++;
          console.log('Canal actual:', this.canal);
        } else {
          console.log('Ya estás en el canal máximo.');
        }
      } else {
        console.log('La televisión está apagada. No se puede cambiar de canal.');
      }
    },

    anteriorCanal: function() {
        if (this.encendida) {
          if (this.canal > 1 ) {
            this.canal--;
            console.log('Canal actual:', this.canal);
          } else {
            console.log('Ya estás en el canal mínimo.');
          }
        } else {
          console.log('La televisión está apagada. No se puede cambiar de canal.');
        }
      }
  };
  
  Television.encender();
  Television.subirVolumen(); 
  Television.bajarVolumen();  
  Television.siguienteCanal(); 
  Television.anteriorCanal();
  Television.apagar(); 
  Television.siguienteCanal();
  
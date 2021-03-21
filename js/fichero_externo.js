//FICHERO EXTERNO DE FUNCIONES JAVASCRIPT DEL PROYECTO EXAMEN 2 MI PRIMER JUEGO DE CARTAS

//EL USUARIO SELECCIONA UNA CARTA DE TRES CARTAS MOSTRADAS EN CARA REVERSA
//AL HACER CLIC SOBRE LA CARTA,ESTA SE MUESTRA, SE CALCULA LA POSCION DEL AS EN 
//MODO ALEATORIO.
//SI LA POSICION DEL AS ES IGUAL A LA POSICION SELECCIONADA POR EL USUARIO, ESTE GANA
//SI NO ES ASI PIERDE Y PUEDE SEGUIR JUGANDO HASTA QUE EL CONTADOR DE JUEGO SEA IGUAL A 0 (CERO)

//EL ARREGLO DE IMÁGENES MOSTRADAS SE MUEVE DE ACUERDO A LA POSICIÓN QUE SELECCIONA EL USUARIO 
// Y LA POSICION ALEATORIA DEL AS


 //VARIABLES GLOBALES DE ESTE ALGORITMO
          //SIN BARAJAR CARTAS CON EL BOTON NI RECURSIVO PARA BARAJAR
      
             var anterior           = 4;
             var topeCartasInterfaz = 3;
             var posAS;
             var pos2da;
             var arrayImagenes = new Array("0", "1", "2");  // 0 3Basto 1 CaballoBasto  2 ReyOros
             var yaJugado      = false;
             var usuarioSelecc;
             var contJugadas=0;
             var acumDinero=3;
             var juegosGanados=0;
             var juegosPerdidos=0;
             var contenidoCapaMsg;
             var retardador  =  1*1000;
             
             
             
            
     //FUNCION QUE PINTA LAS CARTAS EN REVERSO, PARA INICIAR EL JUEGO        
                  
             function  f_colocarRev() {
             //   alert("ENTRE A LA FUNCION COLOCAR CARTAS EN REVERSO");
                
                var arrayImagenReverso = new Array ("ReversoCartaRoja.jpg","ReversoCartaRoja.jpg", "ReversoCartaRoja.jpg" );
                var arrayinterfazCajas = document.getElementsByName("cajas");
                              
            //   alert ("tamano del arrayinterfazCajas " + arrayinterfazCajas.length); 
                for (var ind=0; ind < arrayinterfazCajas.length; ind++) {
              //      alert ("CARGANDO IMAGEN EN ARRAYINTERFAZCAJAS EN POSICION  " + ind); 
                    arrayinterfazCajas[ind].innerHTML = "<img src='imagenes/" + arrayImagenReverso[ind] + "'/>";
                }
                
                f_mostrarAcumConta();
               }
            
         
                             
            ///FUNCIONES DEL FRENTE DE LAS CARTAS PARA EL JUEGO
            
            function f_destaparCartas(){
            
                var lasCajas = document.getElementsByName("cajas");
                
                for (var indice = 0; indice < lasCajas.length; indice++) {
                    
                    lasCajas[indice].innerHTML =
                            "<img src='imagenes/" + arrayImagenes[indice]
                                + ".jpg'/>";
                        
                                   
                }
            }
            
            
             // FUNCION QUE CALCULA UN VALOR ALEATORIO ENTRE 0 Y topeCartasInterfaz-1,  RECIBE DE PARAMETRO A numAleatorio (EL CUAL SE RETORNA)
            // RECIBE DE PARAMENTRO A _anterior, CON EL CUAL SE COMPARA numAleatorio Y  ESTE NO RETORNA DE LA FUNCION MIENTRAS SEA IGUAL A _anterior
               function f_calcularAleatorio(numAleatorio, _anterior){
                   do {
                        numAleatorio = parseInt(Math.random() * topeCartasInterfaz);
                      } while (numAleatorio === _anterior); 
                      return numAleatorio;   
               }  
               
            function f_seleccionJugador(seleccionUsua){
                             
                if(yaJugado) {
                      return;
                  }
               var posicion = seleccionUsua.id;   //capa_0 capa_1 capa_2
              
                posicion=posicion.substring(posicion.indexOf("_")+1);   //capa_0 capa_1 capa_2
                usuarioSelecc= parseInt(posicion);
             
            // alert ("VALOR DE POSICION ES ---> " + posicion +"  " + typeof(posicion));
           // alert  ("VALOR DE USUARIOSELECC--->" + usuarioSelecc +" "+ typeof(usuarioSelecc) ) ;
              
                contenidoCapaMsg= "<span>HAS SELECCIONADO LA POSICION " + posicion +" </br> </span>";
                document.getElementById("capa_Mensajes").innerHTML+=contenidoCapaMsg;

                yaJugado=true;
                document.getElementById("btnMostrar").style.visibility="visible";
              //   alert ("CARTA EN LA POSCION USUARIOSELECC ES ->> " + arrayImagenes[usuarioSelecc]);
                      
              //  var lasCajas = document.getElementsByName("cajas");  
               
               // alert ("CARTA EN LA POSCION USUARIOSELECC ES ->>" + arrayImagenes[usuarioSelecc]);
            //    var lasCajas = document.getElementsByName("cajas");  
              //  lasCajas[usuarioSelecc].innerHTML =
                 //           "<img src='imagenes/" + arrayImagenes[usuarioSelecc]
                 //               + ".jpg'/>";
               //   f_seleccCartaSound();
            //*************************************************************************************
              posAS = f_calcularAleatorio(posAS,anterior); 
              //pos2da = f_calcularAleatorio(pos2da,posAS);
              anterior = posAS;
          //  alert ("posAS: -->" + posAS + " UsuarioSelecc --> " + usuarioSelecc); 
              arrayImagenes[posAS]="as";
                            
              var arregloCartasInterfaz = document.getElementsByName("cajas");
              if (posAS === usuarioSelecc) {
                //	alert ("ME HE METIDO EN EL IF");
                        //arrayImagenes[usuarioSelecc]="0";
                	 arregloCartasInterfaz[usuarioSelecc].innerHTML= "<img src='imagenes/" + "as"+ ".jpg'/>";
                } 
                else {	
                  //  alert ("ME HE METIDO EN EL ELSE");
                    var seleccUsua=usuarioSelecc.toString();
                  //  alert ("seleccUsua ES...." + seleccUsua + typeof(seleccUsua));
                    arregloCartasInterfaz[usuarioSelecc].innerHTML= "<img src='imagenes/" + seleccUsua + ".jpg'/>";
                    arrayImagenes[usuarioSelecc]=seleccUsua;
                } 
               
             f_seleccCartaSound();  
               
            }
   
           
    
             //f_bararjarCartas, POSICIONA EN MEMORIA DE MODO ALEATORIO AL AS Y A UNA SEGUNDA CARTA, LA TERCERA CARTA LA ASIGNA EN LA POSICIÓN QUE LE QUEDE
             //DISPONIBLE EN EL ARRAY DE TRES POSICIONES
              function f_mostrarCartas(){
                  
              //    alert ("ENTRANDO A MOSTRARCARTAS..........");
                    document.getElementById("btnVolverJugar").style.visibility="visible";
                    document.getElementById("btnMostrar").style.visibility="hidden";
               
                    
                       // arrayImagenes[posAS]  = "0";
                      //  arrayImagenes[pos2da] = "1";
             //   alert ("pos2da AL POSICIONAR EL CABALLO EN EL ARRAYIMAGENES  TIENE EL VALOR DE " + pos2da);
               // alert ("posAS AL POSICIONAR EL AS EN EL ARRAYIMAGENES  TIENE EL VALOR DE " + posAS);
               
                       var longitudArray = arrayImagenes.length;
            //   alert ("longitudArrayImagenes   TIENE EL VALOR DE " + longitudArray);
                
                       for (indice=0; indice < longitudArray; indice++)
                    {
               //     alert ("posAS: -->" + posAS + " pos2da --> " + pos2da); 
               //   alert ("indice  ANTES DE ENTRAR AL IF es --> "+ indice);
                         //   if ((indice !== posAS)  && (indice !== pos2da)) 
                            if ((indice !== posAS)  && (indice !== usuarioSelecc) ) 
                            {
                //     alert ("indice DENTRO DEL IF  es --> "+ indice);
                                 // var indiceCadena=indice.toString();
                                  arrayImagenes[indice] = indice.toString();
                                 // break;
                            }
                    }
                    
              //      alert ( "VALORES EN EL ARRAYIMAGENES  POS 0 " + arrayImagenes[0]);
              //      alert ( "VALORES EN EL ARRAYIMAGENES  POS 1 " + arrayImagenes[1]);
              //      alert ( "VALORES EN EL ARRAYIMAGENES  POS 2 " + arrayImagenes[2]);
                    f_destaparCartas();   
                    
                  
                    var contenidoCapaMsg= "<span>EL AS HA SALIDO EN LA POSICION " + posAS +" </br> </span>";
                    document.getElementById("capa_Mensajes").innerHTML+=contenidoCapaMsg;
                    
                //   alert ("valor de usuarioSelecc -->  " + usuarioSelecc  + "  " + typeof(usuarioSelecc) );
                //   alert ("valor de posAS -->  " + posAS + "  " + typeof(posAS));
                    var contenidoCapaMsg =  usuarioSelecc === posAS ? "<span>HAS GANADO  LA JUGADA</span> </br>"
                                                                    : "<span>HAS PERDIDO LA JUGADA</span> </br> ";
                                                                    
                
                //   alert ("valor de contenidoCapaMsg -->  " + contenidoCapaMsg );                        
                    
                    document.getElementById("capa_Mensajes").innerHTML+=contenidoCapaMsg;
                    
                   if (usuarioSelecc === posAS) {
                        juegosGanados+=1;
                        acumDinero+=1;
                        contJugadas+=1;
                    } else {
                        juegosPerdidos+=1;
                        acumDinero-=1; 
                        contJugadas+=1;
                    }           
      
                 f_mostrarAcumConta();
                }
               
            //MUESTRA LOS CONTADORES DE DINERO Y NUMERO DE JUGADAS
      
            function f_mostrarAcumConta() {
                    var contenidoCapacontadores= "</br> <span>CONTADOR DE JUGADAS: " + contJugadas +"</span> </br>" +
                                                               "<span style='color:blue;'>CONTADOR DE DINERO: " + acumDinero + "</span> </br>";
                    contenidoCapacontadores+="<span> ----------------------- </span> </br>";                                   
                    contenidoCapacontadores+= "<span>JUGADAS GANADAS: " + juegosGanados +"</span> </br>" +
                                                               "<span style='color:blue;'>JUGADAS PERDIDAS: " + juegosPerdidos +"</span> </br>";                                  
                   document.getElementById("contadoresDineroJugadas").innerHTML=contenidoCapacontadores;
                    
             } 
                
                //FUNCION QUE REMITE A UN NUEVO JUEGO SIEMPRE QUE EL USUARIO TENGA SALDO EN EL CONTADOR DE DINERO
            
                function f_volverJugar(){
                     
               //      alert ("ENTRE A LA FUNCION F_VOLVERJUAGAR");
                    //AL VOLVER A JUGAR SE OCULTAN LOS BOTONES DE "btnMotrar" y "btnVolverJugar"
                    //SE DEBEN BORRAR LA CAPA DE MENSAJES 
                    //LOS MENSAJES ANTERIORES DE HAS SELECCIONADO LA POSICION TAL Y HA SALIDO...
                    //Y DEJAR SOLO EL MENSAJE DE QUE HAGA CLIC SOBRE ALGUNA DE LAS CARTAS
                      document.getElementById("btnVolverJugar").style.visibility="hidden";
                      document.getElementById("btnMostrar").style.visibility="hidden";
                      contenidoCapaMsg="";
                      document.getElementById("capa_Mensajes").innerHTML=contenidoCapaMsg;
                  

                   //   alert ("OCULTÉ EL BOTON VOLVER A JUGAR");
                    
                       
                            if (acumDinero <= 0) {
                                 
                                  var contenidoMsgContadores = document.getElementById("contadoresDineroJugadas");
                                  contenidoMsgContadores="SE HA AGOTADO EL SALDO, PRESIONE RECARGAR SI DESEA CONTINUAR...!!!";
                                  document.getElementById("contadoresDineroJugadas").innerHTML+="</br> <span>" +contenidoMsgContadores +"</span>";
                                  document.getElementById("btnRecargar").style.visibility="visible";
                          //        alert ("SU CONTADOR DE DINERO ES " + acumDinero +" DEBE RECARGAR LA PAGINA PARA TENER SALDO NUEVAEMENTE ");
                               
                            }
                          
                         else {
                                // alert ("EL ACUMDINERO NO ES MENOR O IGUAL A 0");
                           
                                  f_colocarRev();
                                  yaJugado=false;
                                  f_finJuegoSound();
                                 // setTimeout(f_finJuegoSound,retardador);
                          } 
                    
                            
                        }  

    
                function f_recargarJuego(){
                      
                        document.getElementById("btnRecargar").style.visibility="visible";
                        alert("!!! SE HARÁ RECARGA DE LA PAGINA Y DE SU SALDO PARA JUGAR !!! ");
                        document.getElementById("btnRecargar").style.visibility="hidden"; 
                        location.reload(); 
                        
                        
                    }
                    
                function f_ayuda() {
                
                      window.open("ayuda.jsp", "AYUDA JUEGO UBICA AL AS DE OROS", "width=640, height=300");
                }
                
                function f_seleccCartaSound(){
                    var sonidoSeleccionCarta = document.getElementById("sonidoSelecc");
                    sonidoSeleccionCarta.play();
                }
                
                function f_finJuegoSound(){
                    var sonidofinJuego = document.getElementById("sonidoFinJuego");
                    sonidofinJuego.play();
                }
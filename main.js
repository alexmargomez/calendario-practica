//function Calendario() {
	var data = new Date();
	var ano = data.getFullYear(); // Ano atual
	var mes = data.getMonth(); // 0 - 11
	var dia = data.getDate(); // dia do mes atual 
	var diaSemana = data.getDay(); // 0 - 6

	var a_mes = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio",	"Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro",
	"Dezembro"); 
	var a_diaSem = new Array("Dom", "Seg", "Ter", "Qua", "Qui",	"Sex", "Sab");

	data.setDate(1);

	calendario = "<center><table><thead><tr><th colspan='7'>"+ a_mes[mes]+ " de "+ ano +"</th></tr></thead>";

	calendario += "<tr>";
	for(var i=0;i<7;i++){
		if(diaSemana == i){
			calendario += "<td><b>"+ a_diaSem[i] + "</b></td>";
		} else {
			calendario += "<td>"+ a_diaSem[i] + "</td>";
		}

	}
	calendario += "</tr>";
  calendario += "<tr>";


	for(i=0;i<data.getDay();i++){
		calendario += "<td></td>";
	}

	for (i=0;i<31;i++) {
		if (data.getDate()>i) {
			diaSemana = data.getDay();
			if (diaSemana == 0) {
				calendario += "</tr><tr>";
			}
			if (diaSemana != 7) {
				if (dia == data.getDate()) {
					calendario +="<td><b>"+(i+1)+"</b></td>";
				} else {
					calendario +="<td>"+(i+1)+"</td>";
				}
			}

			if (diaSemana == 7) {
				calendario += "</tr>";
			}
		}
		data.setDate(data.getDate()+1);
	}

	calendario += "</tr></table></center>";

document.getElementById("calendar").innerHTML = calendario;


//}
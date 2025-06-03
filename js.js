window.onload = function() {
    conta_tempo("Oct 8, 2023 21:00:00", "countup1");
};

function conta_tempo(inicio,id) {
    inicio = new Date(inicio).getTime();
    var agora = new Date(), inicio = new Date(inicio), dif = (agora - inicio);

var seghora = 60*60*1000, segdia = seghora*24;

dias = Math.floor(dif / (segdia) * 1);
anos = Math.floor(dias / 365);

if (anos >= 1) {
    dias = dias - (anos * 365); 
}
horas = Math.floor((dif % (segdia)) / (seghora) * 1);
minutos = Math.floor((dif % (segdia) % (seghora)) / (60*1000) * 1);
segundos = Math.floor((((dif % (segdia)) % (seghora)) % (60*1000)) / 1000 * 1);

var idEl = document.getElementById(id);
    idEl.getElementsByClassName("years")[0].innerHTML = anos;
    idEl.getElementsByClassName("days")[0].innerHTML = dias;
    idEl.getElementsByClassName("hours")[0].innerHTML = horas;
    idEl.getElementsByClassName("minutes")[0].innerHTML = minutos;
    idEl.getElementsByClassName("seconds")[0].innerHTML = segundos;

    clearTimeout(conta_tempo.interval);
    conta_tempo.interval = setTimeout(function() {
        conta_tempo(inicio, id);
    }, 1000);
}
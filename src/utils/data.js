const getData = () => {

  var dataAtualCompleta = '';
  var dataAtual = new Date();

  var dia = dataAtual.getDate().toLocaleString('pt-BR');
  var mes = (dataAtual.getMonth() + 1).toLocaleString('pt-BR');

  if (mes.length > 1 && dia.length > 1) {
    dataAtualCompleta = `${dia}/${mes}`;  
  } else if (mes.length > 1 && dia.length == 1) {
    dataAtualCompleta = `0${dia}/${mes}`;
  } else if (mes.length == 1 && dia.length > 1) {
    dataAtualCompleta = `${dia}/0${mes}`;
  } else if (mes.length == 1 && dia.length == 1) {
    dataAtualCompleta = `0${dia}/0${mes}`;
  }   


  return dataAtualCompleta;
};

export default getData;

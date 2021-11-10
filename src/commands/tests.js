import { MessageAttachment } from 'discord.js';
import { Canvas } from 'canvas-constructor/cairo.js';

const test = async (message, args) => {

  var dados = args.split('/');

  var mensagem = {
    sizeX: parseInt(dados[0]),
    sizeY: parseInt(dados[1]),
    color: dados[2],
    fontSize: dados[3],
    fontFamily: dados[4],
    text: dados[5].split(',').join(' '),
    positionTextX: parseInt(dados[6]),
    positionTextY: parseInt(dados[7])
  };

  console.log(mensagem);
  //'28px Impact'
  const img = new Canvas(mensagem.sizeX, mensagem.sizeY)
    .setColor(`${mensagem.color}`)
    .setTextFont(`${mensagem.fontSize} ${mensagem.fontFamily}`)
    .printText(mensagem.text, mensagem.positionTextX, mensagem.positionTextY);

  const attachment = new MessageAttachment(img.toBuffer(), 'profile-image.png');
  
  
  message.reply({ files: [attachment] });

};

export default test;

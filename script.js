const canvas =document.getElementById('canv');
const ctx = canvas.getContext('2d');
const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
//calcula o número de colunas de texto baseando-se na tela
const cols = Math.floor(w/10)+1;
//array que apresenta a posição Y de cada coluna de texto
const yPos = Array(cols).fill(0);

ctx.fillStyle = '#Fff';//cor da flash-bang
ctx.fillRect(0,0,w,h);

function DesenhaMatrix(){
    ctx.fillStyle = '#00f1';//cor de fundo
    ctx.fillRect(0,0,w,h);

    ctx.fillStyle = '#ff0'; //cor da letra
    ctx.font = '10 monospace'; //tamanho e tipo de fonte
    //itera por cada coluna do texto
    yPos.forEach((y,ind)=>{
        //gera um caractere aleatório com código ascii entre 0 e 128
        const text = String.fromCharCode(Math.random()*128);
        //define a posição x com base no indice da coluna
        const x = ind * 10;
        //desenha o texto na posição x e y artuais
        ctx.fillText(text,x,y);
        //renicia a posição y da coluna quando atinge um valor aleatório

        if(y>100 + Math.random() * 10000) yPos[ind] = 0;
        else yPos[ind] = y + 1 + (Math.random()*10);/*Espaçamento (altura) entre as letras*/
    })
}
setInterval(DesenhaMatrix, 30);/*Sped*/
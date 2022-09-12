function main() {
    let frame = document.getElementById('frame');
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}:?><,./';[]";

  function generateString(length) {
    let result = "  ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result +=
        "<br>" +
        characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }


  function asciiChar(column){
    let count = 0;
    const matrixInterval = setInterval(() => {
        let columnDom = document.getElementById(column);
        if (count <= Math.floor(Math.random() * 100)) {
          let ganeratedChr = generateString(1);
          console.log(ganeratedChr);      
          columnDom.innerHTML += `<span class="mchr">${ganeratedChr}</span>`;
        }else{
            const coordinates = columnDom.getBoundingClientRect();
            let xVectorCount = coordinates['top'];
            let firstGo = true;
            function yVector(){

                function vectorAlive(){
                    firstGo = false;
                    columnDom.style.top = xVectorCount +  'px';
                    xVectorCount+= 10;
                    if (xVectorCount >= 700){
                        clearInterval(VectorInterval);
                        columnDom.innerText = '';
                       setTimeout(() => {
                        columnDom.style.top = '0';
                        asciiChar(column);
                       }, 500);
                    }
                }

                if (firstGo === true){
                    vectorAlive();
                }

                const VectorInterval =  setInterval(() => {
                   vectorAlive();
                }, 100);
            }
            yVector();
            clearInterval(matrixInterval);
        }
        count++;
      }, 50);
  }

  let i;
  for (i=0; i < 100; i++){
    let element = document.createElement("div");
    element.id = i;
    
    if (i > 0){
        let wakeSepMin = i - 1;
        let domElement = document.getElementById(wakeSepMin);
        let sepPrvDisMin = domElement.getBoundingClientRect();
        element.style.left = parseInt(sepPrvDisMin['left'] + 20);

    }

    element.className = 'matrixRow';
    frame.append(element);
    asciiChar(i);
  }

}
main();

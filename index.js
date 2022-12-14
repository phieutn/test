
    
// Bài tập 1
function getValue() {           
    let myInput = document.getElementById("str");
    let str = myInput.value; 
    const tachchuHt = str.split(''); 
    const tachchu = str.split(''); 
    const daochu = tachchu.reverse();    
    document.getElementById("document-1").innerHTML = "Tách chuỗi string: " + "'" + tachchuHt +"'";    
    document.getElementById("document-2").innerHTML = "Chuỗi string đảo ngược: " + "'" + daochu +"'";       
    document.getElementById("document-3").innerHTML = "Ghép chuỗi string đã đảo: " + "'" + daochu.join('') +"'";             
}
// Bài tập 2
function nhapMang()
{
    let myInputNum = document.getElementById("num");
    let NumI = myInputNum.value; 
    const numMang = NumI.split(' '); 
    document.getElementById("document-4").innerHTML = "Mãng đã tạo: " + "[" + numMang +"]";  
    let i = 0;
    let j = 0;
    let fla = true;
    const arr1=[]
    for(i=0; i < numMang.length; i++)
    {
        for(j=i+1; j < numMang.length-1; j++)
        {
        if(numMang[i]!=numMang[j]){
            fla = true;
        }
        if(numMang[i]===numMang[j]) {
            fla = false;
            break;
        }
        }
     if (fla == true){
            arr1.push(numMang[i]); 
          }
     }
     document.getElementById("document-5").innerHTML = "Lọc bỏ các phần tử trùng: " + "[" + arr1 +"]";  

}
// Bài tập 3
function baiTap3(){
    let myInputNum3 = document.getElementById("num-1");
    let NumI3 = myInputNum3.value; 
    const numMang3 = NumI3.split(' ');
    let i = 0;
    let j = 0;
    let sum = 1;
    let max = 0;
    let phantu =[];
    const arrSum = [];
    for(i=0; i<numMang3.length; i++){
       for(j=i+1; j<numMang3.length; j++){
         if (numMang3[i]==numMang3[j]){
            sum = sum + 1;
         }
       }
       arrSum.push(sum);
       sum = 1;
    }
    for(i=0;i<arrSum.length;i++){
    if ( max <= arrSum[i]){
       max = arrSum[i];
    }
}
    for(i=0;i<arrSum.length;i++){
       if(max==arrSum[i]){
        phantu.push(numMang3[i])
       }
    }

document.getElementById("document-6").innerHTML = "Phần tử lặp lại nhiều nhất: " + "[" + phantu +"]";  
document.getElementById("document-7").innerHTML = "Số lần xuất hiện trong mảng: " + "[" + max +"]";  
}
// Bài tập 4
const data =[];
function hienthidanhda(){
    let list = data;
    let table =  '<table id="taoban">'
    for(let i = 0; i<list.length;i++){
        table+= '<tr>';
        table+= '<td class = "tenn">' + list[i].tenmoi + '</td>';
        table+= '<td class = "soo">' + list[i].sodtmoi + '</td>';
        table+= '</tr>';  
    }
    table += '</table>';
    document.getElementById('table').innerHTML=table;
}
function adddanhba(){
  let ten = document.getElementById('nhapten').value;
  let sdt = document.getElementById('nhapsodt').value;
  const itemm = {
    tenmoi : ten,
    sodtmoi : sdt
  };
  data.push(itemm);
  hienthidanhda();
  localStorage.setItem("account", JSON.stringify({
    data
  }));
}
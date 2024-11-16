    let time = document.getElementById("box1");

    let curent= new Date();
        time.innerHTML = curent.getDay()+':'+curent.getMonth()+':'+curent.getFullYear();


    let tet= document.getElementById("box2")
    let mucdich=new Date("2025-01-13");
    let count = Math.ceil((mucdich-curent)/(1000*60*60*24));
    console.log(count)
    tet.innerHTML=count


    let box3= document.getElementById("box3")
    let chttm=new Date("2024-11-29");
    let count3 = Math.ceil((chttm-curent)/(1000*60*60*24));
    box3.innerHTML=count3

    let box4= document.getElementById("box4")
    let httt=new Date("2024-12-02");
    let count4 = Math.ceil((httt-curent)/(1000*60*60*24));
    box4.innerHTML=count4

    let box5= document.getElementById("box5")
    let qttn=new Date("2024-12-06");
    let count5 = Math.ceil((qttn-curent)/(1000*60*60*24));
    box5.innerHTML=count5


    let box6= document.getElementById("box6")
    let av4=new Date("2024-12-08");
    let count6 = Math.ceil((av4-curent)/(1000*60*60*24));
    box6.innerHTML=count6



//29/11  he thong thong mih 
//  2/12 he thong thong tin quan ly 
//6/12 quan tri tac nghiep thuong mai dien tu 
//8/12 anh van 4
///13/12 ptud 
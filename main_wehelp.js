//透過AJAX fetch API連線到遠端的網址，抓取資料
        /*
            fetch(網址).then(function(response){
                //Response物件，代表伺服器的回應
            })
*/
/*
const mybox(number)= document.querySelectorAll(".box"+number);
let src="https://christinemf.github.io/WeHelp/data/answer.json";        
fetch(src).then(function(response){
    return response.json();
}).then(function(result){
    console.log("final answer",result);
    mybox.innerHTML="";
    let wequestion;
    let weanswer;
    for(let i=0; i<result.length; i++){
        wequestion=result[i];
        console.log(wequestion);
        mybox.innerHTML+=wequestion.question[i].bold();
    }
    
    function toggleMenu2(number)
        { //menu選單被藏起來
            var menu=document.getElementById("menu-"+number);//取得相對應的標題數字區塊，做出收合的功能
            menu.classList.toggle("hide");//切換標籤物件 class 的 hide 設定，判斷若原本關閉則開，若開則關  
        }
     
});*/
    function questionMenu()
    { //menu選單被藏起來
            
        var answerno=document.getElementById("answerNo");    
        if(answerno.style.display="none")
        { //目前是藏起來的狀態
            answerno.style.display="inline";
            qMenu.style.display="none";    
        }
        else
        { //目前是秀出來的狀態
            answerno.style.display="none";
            qMenu.style.display="inline";  
        }
    }

    function questionNo(number)
    {
        var answerno=document.getElementById("answerNo-"+number);
        var qmenuno=document.getElementById("qMenu-"+number);
        answerno.classList.toggle("inline");
        qmenuno.classList.toggle("hide");
    }
        

       
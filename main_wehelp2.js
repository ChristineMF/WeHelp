//透過AJAX fetch API連線到遠端的網址，抓取資料
        /*
            fetch(網址).then(function(response){
                //Response物件，代表伺服器的回應
            })
*/
//box的id,統計元素id,允許輸入字元數

    
let src="https://christinemf.github.io/WeHelp/data/answer.json";
fetch(src).then(function(response){
                                    return response.json();
                                  }).then(function(result)
                                          {
                                              //console.log("final data",result[0]);
                                              let wequestion;
                                              
                                              for(let i=0; i<result.length; i++)
                                              {
                                                  
                                                  let questionlist=document.getElementById("question-"+i);
                                                  let answerlist=document.getElementById("answer-"+i);
                                                  
                                                        var qmenuno=document.getElementById("qMenu-"+i);
                                                          questionlist.innerHTML="";
                                                          answerlist.innerHTML="";
                                                            wequestion=result[i];
                                                            //console.log(wequestion);
                                                            answerlist.innerHTML+=wequestion.answer;
                                                            questionlist.innerHTML+=wequestion.question+"<hr/>";
                                                      
                                                          
                                                }                           
                                            })




/*
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
    */
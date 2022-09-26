//透過AJAX fetch API連線到遠端的網址，抓取資料
        /*
            fetch(網址).then(function(response){
                //Response物件，代表伺服器的回應
            })
*/
    
let src="https://christinemf.github.io/WeHelp/data/answer.json";
fetch(src).then(function(response){
                                    return response.json();
                                  }).then(function(result)
                                          {
                                              
                                              let wequestion;  
                                              for(let i=0; i<result.length; i++)
                                              {
                                                  let questionlist=document.getElementById("question-"+i);//題目
                                                  let answerlist=document.getElementById("answer-"+i);//回答
                                                  let qmenuno=document.getElementById("qMenu-"+i);//......更多
                                                  
                                                    questionlist.innerHTML="";
                                                    answerlist.innerHTML="";
                                                    wequestion=result[i];//json檔內第i筆資料
                                                            
                                                    questionlist.innerHTML+=wequestion.question+"<hr/>";//題目
                                                       
                                                    let length=(wequestion.answer.length).toString();//回覆的字數轉成字串
                                                    //console.log(length);  //取得回覆的字數
                                                    let maxlength=80;       //設定最大字數
                                                    //判斷字數是否小於等於最大字數
                                                    if(length<=maxlength)
                                                    {
                                                        answerlist.innerHTML+=wequestion.answer;
                                                    }
                                                    else
                                                    {
                                                        maxlength=(wequestion.answer).toString();//若字數大於最大字數則將字數設為最大字數
                                                        maxlength=maxlength.substring(0,56);//取第0-56個字數的字串
                                                        answerlist.innerHTML=maxlength+qmenuno.innerHTML;
                                                        answerlist.addEventListener('click',showall);
                                                                    
                                                        function showall()
                                                        {
                                                            answerlist.innerHTML="";
                                                            wequestion=result[i];                   
                                                            answerlist.innerHTML=wequestion.answer;
                                                            //console.log(i);
                                                                        
                                                        }
                                                            //console.log(maxlength); 
                                                    }                         
                                                }                           
                                            })


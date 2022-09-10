window.addEventListener('load',()=>{
    const newForm=document.querySelector("#form_newTask");//取得新增事項的輸入表單(form_newTask)的內容到newForm
    const newInput=document.querySelector("#input_new");//取得輸入待辦事項(input_new)的內容到newInput
    const listAll=document.querySelector("#taskAll");//列出所有事項(taskAll)到listAll
    const clearAll=document.querySelector(".btnClearAll");
    
    newForm.addEventListener('submit',(e)=>{  //按submit後，新增事件
        e.preventDefault();
        
        const newTask = newInput.value;       //將輸入的待辦事項放入newTask變數
        
        if(!newTask){                         //若newTask為空值，則跳出請輸入的訊息
            alert("請輸入待辦事項");
            return;
        }
        
        const taskAllList=document.createElement("div");  //在div元素建立taskList(新輸入)節點
        taskAllList.classList.add("newTask");             //為taskList節點新增newTask（輸入待辦事項）類
        
        const task_contentAll=document.createElement("div");//在div元素建立task_contentAll「列出所有待辦事項」節點
        task_contentAll.classList.add("content");           //為task_contentAll節點新增content（待辦事項內容）類
        taskAllList.appendChild(task_contentAll);              //將task_contentAll(所有待辦事項)放入taskList這個div節點內
        
        const newInputAll=document.createElement("input");  //在input元素建立newInputAll(全部輸入的待辦事項）節點
        newInputAll.classList.add("text");                  //為newInputAll節點增加text(文字)類
        newInputAll.type="text";                            //newInputAll為文字
        newInputAll.value= newTask;                         //將newTask(輸入的待辦事項)設為newInputAll的值
        newInputAll.setAttribute("readonly","readonly");    //設定newInputAll輸入框為只能讀取
        task_contentAll.appendChild(newInputAll);           //將newInputAll(全部輸入的待辦事項）放入task_contentAll(所有待辦事項)
        
        
        
        //修改及刪除按鈕
        const taskActions = document.createElement("div");  //在div元素建立taskActions(動作)節點
        taskActions.classList.add("actions");               //為taskActions動作節點新增actions（動作）類
        
        const taskEdit=document.createElement("button");    //在button元素建立taskEdit(修改)節點
        taskEdit.classList.add("edit");                     //為taskEdit增加edit(修改)類
        taskEdit.innerHTML="修改";                           //按鈕上的文字為修改
        
        const taskDelete=document.createElement("button");  //在button元素建立taskDelete(刪除)節點
        taskDelete.classList.add("delete");                 //為taskDelete增加delete(刪除)類
        taskDelete.innerHTML="刪除";                         //按鈕上的文字為刪除
        
        taskActions.appendChild(taskEdit);                  //將taskEdit(修改)放入taskActions(動作)
        taskActions.appendChild(taskDelete);                //將taskDelete(刪除）放入taskActions(動作)
        
        taskAllList.appendChild(taskActions);                  //將動作加入taskList(新輸入)節點內
        listAll.appendChild(taskAllList);                      //將taskList(新輸入)節點加到所有待辦事項
       
        
        newInput.value="";                                  //輸入待辦事項框為空白
        
        
        taskEdit.addEventListener('click',()=>{             //需按修改鍵才能修改並儲存
            if(taskEdit.innerHTML=="修改"){
            newInputAll.removeAttribute("readonly");
            newInputAll.focus();
            taskEdit.innerHTML="儲存";
            }else{
                newInputAll.setAttribute("readonly","readonly");
                taskEdit.innerHTML="修改";
            }
        });
        
        taskDelete.addEventListener('click',()=>{           //刪除
           listAll.removeChild(taskAllList); 
        });
        
        
        clearAll.addEventListener('click',()=>{             //全部清除
            while(listAll.firstChild){
                 listAll.removeChild(listAll.lastChild);
            }
         
        });
        
        
    })
    
})
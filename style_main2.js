    
    let task_contentAll = JSON.parse(localStorage.getItem("todoList"));//使用JSON.parse(JSON格式字串);將字串轉換成物件
window.addEventListener('load',()=>{
    const newForm=document.querySelector("#form_newTask");//取得新增事項的輸入表單(form_newTask)的內容到newForm
    const newInput=document.querySelector("#input_new");//取得輸入待辦事項(input_new)的內容到newInput
    const listAll=document.querySelector(".taskAll");//列出所有事項(taskAll)到listAll
    
            newForm.addEventListener('submit',(e)=>{  //按submit後，新增事件
                e.preventDefault();

                let newTask = newInput.value.trim();       //將輸入的待辦事項放入newTask變數
                console.log(newTask);

                if(!newTask){                         //若newTask為空值，則跳出請輸入的訊息
                    alert("請輸入待辦事項");
                    return;
                }

                if(!task_contentAll){
                    task_contentAll=[];
                }

                newInput.value="";
                let taskData= {name: newTask, status: "pending"};
                task_contentAll.push(taskData); //增加新的todo到task_contentAll
                localStorage.setItem("todoList", JSON.stringify(task_contentAll));//使用JSON.stringify（物件）；將物件轉換成JSON格式的字串  
                console.log(task_contentAll);
                showTask();
        })
      
          
          function showTask(){
            var li="";
            if(task_contentAll){
                task_contentAll.forEach((task, id)=>{
                const ifCompleted=task_contentAll.status;
                ifCompleted=="completed" ? "checked" :"";
                
                li+= `<li class="myTask">
                        <label for="${id}">
                            <input onclick="changeStatus(this)" type="checkbox" id="${id}" &{ifCompleted}>
                            <p class="${ifCompleted}">${task.name}</p>
                        </label>
                        <div class="setting">
                            <i onclick="showTaskMenu(this)" class="uil uil-ellipsis-h"></i>
                            <ul class="taskMenu">
                                <li ><i class="uil uil-pen"></i>修改</li>
                                <li onclick= "deleteTask(${id})"><i class="uil uil-trash"></i>刪除</li>
                            </ul>
                        </div>
                       </li>`;   
                });
            listAll.innerHTML=li;
            }
        } 
    })

    /*顯示修改及刪除鈕*/
    function showTaskMenu(selectTask){                            
        const taskMenu=selectTask.parentElement.lastElementChild;
        taskMenu.classList.add("show");
        document.addEventListener("click", e=>{
            if(e.target.tagName != "I" || e.target !=selectTask){
                taskMenu.classList.remove("show");  
            }
        })
    }
/*改變狀態為執行中或完成*/
    function changeStatus(selectTask){
        const taskName=selectTask.parentElement.lastElementChild;
        if(selectTask.checked){
            taskName.classList.add("checked");
            task_contentAll[selectTask.id].status="completed";
        }else{
            taskName.classList.remove("checked");
            task_contentAll[selectTask.id].status="pending";
        }
        localStorage.setItem("todoList", JSON.stringify(task_contentAll));//使用JSON.stringify（物件）；將物件轉換成JSON格式的字串
    
    }
    /*刪除（尚未完成）*/
    function deleteTask(deletedId){
        task_contentAll.splice(deletedId,1);
        localStorage.setItem("todoList", JSON.stringify(task_contentAll));//使用JSON.stringify（物件）；將物件轉換成JSON格式的字串
       
    }
    /*修改（尚未完成*/
    function editTask(){
        
    }
    
    
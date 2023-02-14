



//change the theme to day time
$(document).ready(function (){

    
    //change to day time
   function changetoday(){
        $(".sun").attr("src", "./images/icon-moon.svg");
        $(".header-pic").attr("src", "./images/bg-desktop-light.jpg");
        $(".wraper").css("background-color", "white");
        $("#activities").css("background-color", "white");
        $(".rest").css("color", "black");
        $(".activity-one").css("background-color", "white");
        $(".bottom-part").css("background-color", "white");
        $(".btn1").css({"color":"red", "background-color":"black", "border-color":"black" });

   }

   //change to night
   function changetonight(){
        $(".sun").attr("src", "./images/icon-sun.svg");
        $(".header-pic").attr("src", "./images/bg-desktop-dark.jpg");
        $(".wraper").css("background-color", "black");
        $("#activities").css("background-color", "hsl(235, 24%, 19%)");
        $(".rest").css("color", "white");
        $(".activity-one").css("background-color", "hsl(235, 24%, 19%)");
        $(".bottom-part").css("background-color", "hsl(235, 24%, 19%)");
   };

    //toggle btween the day and night
   $(".sun").click(function(){
    if($(".sun").attr("src") === "./images/icon-moon.svg"){
           changetonight();
       }else {
        changetoday();
       }
   })

   
   //append new task$

   
   $("#add-task").click(function(){
   
    var inputTask = $("#input-task").val();
  if (inputTask.length ==0){
    alert("please Enter a Task")
    return
  }else{
    var task = `<div class="activity">
    <div class="create-btn">
      <div class="btn1">
        <img src="./images/icon-check.svg" alt="icon-check" class="icon-check">
      </div>
      <div class="inputText">${inputTask}</div>
    </div>
    <div class="cancel">
      <img src="./images/icon-cross.svg" alt="icon-cross" class="cross">
    </div>
  </div>`;
    $("#activities").append(task);

    //show the cross icon
    $(".activity").each(function(){
        $(".activity").click(function(){
           $(this).children(".cancel").css("display", "inline-block")
        })
    })

    //cancel a complted task
    $(".cancel").each(function(){
        $(".cancel").click(function(){
          $(this).parent().remove();
          getitemsno()
        })
    })
    // show a completed task 
    $(".btn1").each(function(){
        $(".btn1").click(function(){
           $(this).children(".icon-check").css("display", "inline-block");
           $(this).parent().children(".inputText").addClass("crosedtask");
           
        })
    })


   getitemsno()
  }
    })


    //clear inputTask
  $(".cancel-create").click(function(){
    $("#input-task").val("");
  })  


  //get items number
  function getitemsno(){
    let itemsNo = $("#activities").children().length
   $("#items-left").text(itemsNo)
  }
  //clear completed items
  function clearcomplted(){
        $(".crosedtask").each(function(){
            $(".crosedtask").closest(".activity").remove()
        })
        getitemsno()//get the number of the remaining tasks
  }
  
  $(".clear-completed").click(function(){
    clearcomplted()
  })

  //count completed tasks
  
   


















});
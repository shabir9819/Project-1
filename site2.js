// PAGE_2_ MONTHLY-YEARLY_BTN

// const page_1_result_1 = page_1_result.toString();
// console.log(page_1_result_1)
// if(page_1_result_1 == "complete"){
    const monthly = document.getElementById("monthly_btn");
    const yearly = document.getElementById("yearly_btn");
    const btn = document.getElementById("monthly_yearly_btn");
    console.log("page2loaded..")
    const toggleBtn =()=>{
      const toggleBtnValue = btn.checked;
      if(toggleBtnValue == true){
        monthly.style.cssText = ("color:var(--placeholder_color)");
        yearly.style.cssText = ("color:var(--heading_color)");
        console.log("yes")
      }
      else if(toggleBtnValue == false){
        monthly.style.cssText = ("color:var(--heading_color)");
        yearly.style.cssText = ("color:var(--placeholder_color)");
      }
      else{
        console.log("error in toggle btn.")
      }
    }
    
    btn.addEventListener("click", toggleBtn);
    
    // }
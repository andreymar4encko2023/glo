const modal = ()=>{
    const  popap = document.querySelector('.popup') 
    const popapBtn = document.querySelectorAll('.popup-btn')
    const popupClose = popap.querySelector('.popup-close')
    const Content = popap.querySelector(".popup-content");
    let count =0
    const animation = () => {
        count++;
        if (popap.clientWidth > 768) {
            Content.style.left = (count * popap.clientWidth) / 250 + "px";
           
          if (count < 90) {
            requestAnimationFrame(animation);
          }
        } 
      };

    popapBtn.forEach(btn=>{
        btn.addEventListener('click',()=>{
            popap.style.display ="block"
           
              requestAnimationFrame(animation);
              
            console.log(btn)
        })
    })
    popupClose.addEventListener('click',()=>{
        popap.style.display ="none"
        count =0
    })

}
export default modal
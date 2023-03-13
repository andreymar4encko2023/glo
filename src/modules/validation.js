const validation = () => {
    const calcBlock = document.querySelectorAll('.calc-block>input')
    const form = document.querySelectorAll(`.form-name`)
    const formPhone = document.querySelectorAll('.form-phone')
    const formEmail = document.querySelectorAll('.form-email')
    const masendg = document.querySelector('.mess')
    formPhone.placeholder = "+7(000)000-00-00"
    const validateMeseng = (r) => {
        r.addEventListener("input", (e) => {
         
    
          if (!/[а-я-\s]+/gi.test(e.target.value.trim())) {
          
            r.style.color = "red"
             e.target.value = e.target.value.replace(/[a-z\s]+/gi,'');
          } else {
            r.style.color = "blue"
            e.target.value;
          }
        });
      };

    function email(r){
        r.addEventListener('input', (e) => {


            if (/(([\-\.\_\~\*\'\d\w]+)(@)([\w]+\.)+([\w]{2,4}))/gi.test(
                    e.target.value
                )) {
                r.style.color = "blue"

            } else {
                r.style.color = "red"
            }
        })
       }
       function phoen(r){
        r.addEventListener('input', (e) => {

            if (/^[+7]{2}[(]{1}\d{3}[)][0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/.test(e.target.value)) {
                r.style.color = "blue"

                e.target.value
                console.log(true)
            } else {
                r.style.color = "red"
            }

        })
       }
  

       function name(r){
        r.addEventListener('input', (e) => {
            if (!/[а-я-\s]+/gi.test(e.target.value)) {
                r.style.color = 'red'
            } else {
                r.style.color = 'blue'
               
            }



        })
       }
      
    function validationCalculet() {
        calcBlock.forEach(el => {
            el.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/\D/, "")
            })

        });

    }


       
        validationCalculet()

    
    formEmail.forEach(i=>{
        email(i)
    })
    form.forEach(i=>{
        name(i)
    })
    formPhone.forEach(i=>{
        i.placeholder = "+7(000)000-00-00"
        phoen(i)
    })
    validateMeseng(masendg)
  
}

export default validation
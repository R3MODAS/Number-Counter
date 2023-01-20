let counter = 0;

const btns = document.querySelectorAll('.btn');
const numberChange = document.getElementById("number");

btns.forEach((btn)=>{
    btn.addEventListener('click', (event)=>{
        const styles = event.currentTarget.classList;
        console.log(styles);

        if(styles.contains("increase")){
            counter++;
        }

        else if(styles.contains("decrease")){
            counter--;
        }

        else if(styles.contains("reset")){
            counter = 0;
        }

        if(counter > 0){
            numberChange.style.color = 'green';
        }

        else if(counter == 0){
            numberChange.style.color = '#000';
        }

        else if(counter<0){
            numberChange.style.color = 'red';
        }

        numberChange.innerHTML = counter;
    });
})





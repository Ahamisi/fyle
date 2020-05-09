var toggleCount = 0;
document.querySelector('#toggle').addEventListener('click',(e) =>{
    toggleCount++
    if(toggleCount % 2 !== 0){
        document.querySelectorAll('.currency').forEach((elem) =>{
            let monthly = elem.getAttribute('monthly-currency');
            elem.textContent = monthly;
        });
        document.querySelectorAll('.serving-duration').forEach((elem) =>{
            elem.textContent = 'per month';
        });
    }else{
        document.querySelectorAll('.currency').forEach((elem) =>{
            let annual = elem.getAttribute('annual-currency');
            elem.textContent = annual;
        });
        document.querySelectorAll('.serving-duration').forEach((elem) =>{
            elem.textContent = 'per year';
        });
    }
})
document.querySelectorAll('.variation-component').forEach((e) =>{
    e.addEventListener('click', (z) =>{
        document.querySelector('.serving-active').classList.remove('serving-active')
        z.target.classList.add('serving-active');

        // make other single max invisible
       
        let visible = document.querySelector('.housing-div-one > .serving-active').getAttribute('data-target');
        document.querySelectorAll('.single-max').forEach( (e) => {
            e.classList.add('no-display');
            e.classList.remove('can-display')
        })
        let showable = document.getElementById(`${visible}`);
        showable.classList.add('can-display'); showable.classList.remove('no-display');


    });
})

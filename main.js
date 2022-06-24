// код начнёт выполняться после загрузки страницы
// когда окно загрузится, сработает метод window.onLoad
window.addEventListener('load', function load() {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    const input = document.getElementById('mainInput')
    const reset = document.getElementById('reset')
    const numbBtn = document.querySelectorAll('.numb')

    for (i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }

    numbBtn.forEach((element) => {
        element.addEventListener('click', function numbClick() {
            console.log(element)
        })
    })

    // numbBtn.forEach((element) => {
    //     element.addEventListener('click', function numbClick() {
    //         input.value = element.innerText
    //     })
    // })

    reset.addEventListener('click', resetCalc)
    function resetCalc() {
        input.value = '0'
        console.log('0')
    }
})

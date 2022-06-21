// код начнёт выполняться после загрузки страницы
// когда окно загрузится, сработает метод window.onLoad
window.addEventListener("load", function OnWindowLoaded() {
    const input = document.getElementById("mainInput");
    const reset = document.getElementById("reset");
    reset.addEventListener("click", resetCalc);
    
    function resetCalc() {
        input.value = '0';
        console.log();
    }
});

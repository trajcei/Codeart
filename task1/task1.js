/**
 *
 * Да се направи функција која за даден број на чекори `n` и низа од вредности, ќе ги поместува елементите кои се наоѓаат во неа
 * следејќи ги следните правила:
 *
 * - Доколку `n` е ПОЗИТИВЕН број, тогаш секој од елементите во низата треба да ја промени својата позиција кон десно, за онолку места колку
 *  што изнесува `n`.
 *
 * - Доколку `n` е НЕГАТИВЕН број, тогаш секој од елементите во низата треба да ја промени својата позиција кон лево, за онолку места колку
 *  што изнесува `n`.
 *
 * Пример:
 *  - n = 2, низата ['1', '2', '3'] треба да се претвори во ['2', '3', '1']
 *  - n = -3, низата ['1', '2', '3', '4', '5'] треба да се претвори во ['4', '5', '1', '2', '3']
 */
var array1 = [];

function myFunction() {

    document.getElementById("niza1").value = array1;

    if(array1.length < 1)
    {
        return;
    }

    var n = parseInt(document.getElementById("number2").value);

//Positive
    if(n > 0)
    {
        while(n > array1.length){
            n = n - array1.length;
        }
        var z = array1.length - n;
        var copy = array1.slice(0,z);
        array1 = array1.slice(z);

        for (i = 0; i < copy.length; i++) 
        {
            array1.push(copy[i]);
        }

        document.getElementById("niza2").value = array1;
    }
//Negative
    else
    {
        n = Math.abs(n);

         while(n > array1.length){
            n = n - array1.length;
        }

        var copy = array1.slice(0, n);
        array1 = array1.slice(n);

        for (i = 0; i < copy.length; i++) 
        {
            array1.push(copy[i]);
        }

        document.getElementById("niza2").value = array1;
    }

}

function fillArray(){
    array1.push(parseInt(document.getElementById("number1").value));
    document.getElementById("niza1").value = array1;
}

function ResetArray(){
    array1 = [];
    document.getElementById("niza1").value = array1;
    document.getElementById("niza2").value = array1;
}


document.getElementById("submit").addEventListener("click", myFunction);
document.getElementById("add").addEventListener("click", fillArray);
document.getElementById("reset").addEventListener("click", ResetArray);

function isPerfectSquare(num)
{
    let n = parseInt(Math.sqrt(num));
    return (n * n == num);
}
function checkFib(array, n)
{
    let count = 0;
    for (let i = 0; i < n; i++)
    {
        if (isPerfectSquare(5 * array[i] *
                                array[i] + 4) ||
            isPerfectSquare(5 * array[i] *
                                array[i] - 4))
        {
            console.log(array[i] + " ");
            count++;
        }
    }
    if (count == 0)
        console.log("None present + <br>");
}

let array = [15, 1, ,3];
let n = array.length;

checkFib(array, n);
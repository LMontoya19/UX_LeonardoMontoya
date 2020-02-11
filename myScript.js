var x = 0;
function myFunctionOn(){
    if(x==1){
    document.getElementById('myImage').src='https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940319kdxsp3rf0i.png';
    x=0;
    }
    else{
        document.getElementById('myImage').src='https://4.bp.blogspot.com/-YfW3uEVIwGA/WCKOS936dpI/AAAAAAAATNQ/m_U-umtcKuwqfgJ23j5kx5oZNu4OhpzAQCLcB/s1600/juan-orlando-hernandez.jpg';
        x=1;
    }
    }

function myFunctionOff(){
    document.getElementById('myImage').src='https://4.bp.blogspot.com/-YfW3uEVIwGA/WCKOS936dpI/AAAAAAAATNQ/m_U-umtcKuwqfgJ23j5kx5oZNu4OhpzAQCLcB/s1600/juan-orlando-hernandez.jpg';
}
var bulb=0;
function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src ="light.jpg";
        bulb=1;
        
    }
    else
    {
        document.getElementById("image").src ="lightoff.jpeg";
        bulb=0;
    }
}
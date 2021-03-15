var i = 0 ;
document.getElementById('img').src = 'slide1.jpg'
function increment()
{   
    i = i + 1 ;
    if(i % 4 == 0)
    {
        document.getElementById('img').src = 'slide1.jpg'
    }
    if (i % 4 == 1)
    {
        document.getElementById('img').src = 'slide2.jpg'
    }
    if(i % 4 == 2)
    {
        document.getElementById('img').src = 'slide3.jfif'
    }
    if(i % 4 == 3)
    {
        document.getElementById('img').src = 'slide4.jpg'
    }
    
    if(i % 4 == -1 )
    {
        document.getElementById('img').src = 'slide2.jpg'
        
    }
    if (i %4 == -2 )
    {
        document.getElementById('img').src = 'slide3.jfif'
    }
    if (i %4 == -3 )
    {
        document.getElementById('img').src = 'slide4.jpg'
    }   
}
function decrement()
{
    i = i - 1 ;
    
    if(i%4 ==0)
    {
        document.getElementById('img').src = 'slide1.jpg'
    }
    if(i % 4 == 1 )
    {
        document.getElementById('img').src = 'slide2.jpg'
        
    }
    if (i % 4 == 2 )
    {
        document.getElementById('img').src = 'slide3.jfif'
    }
    if(i % 4 == 3)
    {
        document.getElementById("img").src = "slide4.jpg"
    }
    if(i % 3 == -1 )
    {
        document.getElementById('img').src = 'slide3.jfif'
        
        
    }
    if (i %4 == -2 )
    {
        document.getElementById('img').src = 'slide2.jpg'
    }
    if (i % 4 == -2 )
    {
        document.getElementById('img').src = 'slide4.jpg'
    }

}
// function button()
// {
//     document.getElementsById('but').style.border = 'none'
//     document.getElementsById('but').style.backgroundColor = 'rgb(47,67,87)' 
// }
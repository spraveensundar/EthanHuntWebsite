/*---progress bar---*/

window.onscroll=function() {myFunction()};

function myFunction(){
	
	let window=document.body.scrollTop || document.documentElement.scrollTop;
	
	let height=document.documentElement.scrollHeight - document.documentElement.clientHeight;
	
	let scrolled=(window / height) * 100;
	
	document.getElementById("mybar").style.width=scrolled +"%";
	
	
	
	
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
		
		document.getElementById("progress").style.display="block";
	}else{
		
		document.getElementById("progress").style.display="none";
	}
	
	
	
	let btn=document.getElementById("top-btn");
	
	if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
		
		btn.style.display="block";
	}else{
		
		btn.style.display="none";
	}
}


/*----Navbar----*/

window.addEventListener("scroll",function(){
	
	let navbar=document.getElementById("navbar");
	
	navbar.classList.toggle("sticky",window.scrollY > 0)
})


/*---Toggler---*/

let toggler=document.getElementById("toggler");


toggler.addEventListener("click",function(){
	
	
toggler.classList.toggle("active");


})



/*----TopDown------*/



function TopDown(){
	
	document.body.scrollTop="0";
	document.documentElement.scrollTop="0";
}



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	dots:false,
	autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPaue:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



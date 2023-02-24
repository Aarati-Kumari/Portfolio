let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav i');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 80;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top >= offset && top<offset + height){
          navlinks.forEach(links=>{
            links.classList.remove('active');
            document.querySelector('header nav i[href*=' + id +']').classList.add('active');
          });
        };

    });
}
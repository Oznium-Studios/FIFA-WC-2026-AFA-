let removeitem = document.getElementById('first_div_that_gets_permission');
let removeby = document.getElementById('button_of_all_permissions')

document.getElementById('first_div_that_gets_permission').style.overflowY='hidden';

removeby.addEventListener('click', ()=>{
    removeitem.style.opacity='0';
    document.getElementById('div1').style.opacity='0';
    document.getElementById('div2').style.opacity='0';
    document.getElementById('div3').style.opacity='0';
    document.getElementById('main_div_of_permission').style.opacity='0';
    document.getElementById('div_of_txt_permission').style.opacity='0';
    document.getElementById('h1as').style.opacity='0';
    document.getElementById('button_of_all_permissions').style.opacity='0';
    document.getElementById("logo_of_afa_from_logo_background_from_intro_background").classList.add("show");
    document.getElementById("logo_devider_from_logo_background_from_intro_background").classList.add("show");
    document.getElementById("FIFA_LOGO_from_logo_background_from_intro_background").classList.add("show");
    document.getElementById("OS_logo_from_name_and_logo_div").classList.add("show");
    document.getElementById("texts_from_name_and_logo_div").classList.add("show");
    document.getElementById("diclaimer_txt_from_disclaimer_div_bottom").classList.add("show");
    document.body.style.overflowY='hidden'
    document.getElementById("fifa2026song").play();
    const item = document.getElementById("loader");
    setTimeout(() => {
        item.classList.add("show");
    }, 8500);
    setTimeout(() => {
        item.classList.remove("show");
        document.getElementById('intro_background').style.opacity='0';
        document.getElementById('intro_background').style.visibility='none';
        document.getElementById('logo_background_from_intro_background').style.opacity='0';
        document.getElementById('logo_of_afa_from_logo_background_from_intro_background').style.opacity='0';
        document.getElementById('logo_devider_from_logo_background_from_intro_background').style.opacity='0';
        document.getElementById('FIFA_LOGO_from_logo_background_from_intro_background').style.opacity='0';
        document.getElementById('loading_div').style.opacity='0';
        document.getElementById('loading_div').style.visibility='none';
        document.getElementById('loader').style.opacity='0';
        document.getElementById('name_and_logo_div').style.opacity='0';
        document.getElementById('name_and_logo_div').style.visibility='none';
        document.getElementById('texts_from_name_and_logo_div').style.opacity='0';
        document.getElementById('OS_logo_from_name_and_logo_div').style.opacity='0';
        document.getElementById('disclaimer_div_bottom').style.opacity='0';
        document.getElementById('disclaimer_div_bottom').style.visibility='none';
        document.getElementById('diclaimer_txt_from_disclaimer_div_bottom').style.opacity='0';
        document.body.style.backgroundColor='#ffffff'
        //document.getElementById('').style.opacity='0';
    }, 11000);
    setTimeout(()=>{
        document.getElementById("afa_logo_from_topperdiv").classList.add("show");
        document.getElementById("fifa_logo_from_topperdiv").classList.add("show");
        document.getElementById("three_starts").classList.add("show");
        document.getElementById("world_cup_detail_div").classList.add("show");
        document.getElementById("fifa2026afa").classList.add("show");
        document.body.style.overflowY='visible';
    },11111);
});
let removeitem = document.getElementById('first_div_that_gets_permission');
let removeby = document.getElementById('button_of_all_permissions')

document.body.style.overflowY='hidden';

removeby.addEventListener('click', ()=>{
    removeby.style.visibility='hidden';
    removeby.style.opacity='0';
    removeitem.style.visibility='hidden';
    document.getElementById('first_div_that_gets_permission').style.visibility='hidden';
    document.getElementById('first_div_that_gets_permission').style.opacity='0';
    document.getElementById('first_div_that_gets_permission').style.display = 'none';
    document.getElementById('first_div_that_gets_permission').style.pointerEvents = 'none'
    document.getElementById('div1').style.visibility='hidden';
    document.getElementById('div1').style.opacity='0';
    document.getElementById('div2').style.visibility='hidden';
    document.getElementById('div2').style.opacity='0';
    document.getElementById('div3').style.visibility='hidden';
    document.getElementById('div3').style.opacity='0';
    document.getElementById('main_div_of_permission').style.visibility='hidden';
    document.getElementById('main_div_of_permission').style.opacity='0';
    document.getElementById('div_of_txt_permission').style.visibility='hidden';
    document.getElementById('div_of_txt_permission').style.opacity='0';
    document.getElementById('h1as').style.visibility='hidden';
    document.getElementById('h1as').style.opacity='0';
    document.getElementById('button_of_all_permissions').style.visibility='hidden';
    document.getElementById('button_of_all_permissions').style.opacity='0';
    document.getElementById("logo_of_afa_from_logo_background_from_intro_background").classList.add("show");
    document.getElementById("logo_devider_from_logo_background_from_intro_background").classList.add("show");
    document.getElementById("FIFA_LOGO_from_logo_background_from_intro_background").classList.add("show");
    document.getElementById("OS_logo_from_name_and_logo_div").classList.add("show");
    document.getElementById("texts_from_name_and_logo_div").classList.add("show");
    document.getElementById("diclaimer_txt_from_disclaimer_div_bottom").classList.add("show");
    document.body.style.cursor='none';
    document.body.style.overflowY='hidden'
    document.getElementById("fifa2026song").play();
    const item = document.getElementById("loader");
    setTimeout(() => {
        item.classList.add("show");
    }, 8500);
    setTimeout(() => {
        item.classList.remove("show");
        document.getElementById('intro_background').style.opacity='0';
        document.getElementById('intro_background').style.visibility='hidden';
        document.getElementById('intro_background').style.height = '0';
        document.getElementById('logo_background_from_intro_background').style.opacity='0';
        document.getElementById('logo_of_afa_from_logo_background_from_intro_background').style.opacity='0';
        document.getElementById('logo_devider_from_logo_background_from_intro_background').style.opacity='0';
        document.getElementById('FIFA_LOGO_from_logo_background_from_intro_background').style.opacity='0';
        document.getElementById('loading_div').style.opacity='0';
        document.getElementById('loading_div').style.visibility='hidden';
        document.getElementById('loading_div').style.display = 'none';
        document.getElementById('loader').style.opacity='0';
        document.getElementById('name_and_logo_div').style.opacity='0';
        document.getElementById('name_and_logo_div').style.visibility='hidden';
        document.getElementById('name_and_logo_div').style.height = '0';
        document.getElementById('texts_from_name_and_logo_div').style.opacity='0';
        document.getElementById('OS_logo_from_name_and_logo_div').style.opacity='0';
        document.body.style.cursor='default';
        document.body.style.backgroundColor='#ffffff'
        //document.getElementById('').style.opacity='0';
    }, 9500);
    setTimeout(()=>{
        document.getElementById("afa_logo_from_topperdiv").classList.add("show");
        document.getElementById("fifa_logo_from_topperdiv").classList.add("show");
        document.getElementById("three_starts").classList.add("show");
        document.getElementById("world_cup_detail_div").classList.add("show");
        document.getElementById("fifa2026afa").classList.add("show");
        document.body.style.overflowY='visible';
        document.getElementById('fifa2026afa').style.display = 'block';
        document.body.style.overflowY='visible';
        document.getElementById('disclaimer_div_bottom').style.opacity='1';
        document.getElementById('disclaimer_div_bottom').style.visibility='visible';
        document.getElementById('diclaimer_txt_from_disclaimer_div_bottom').style.opacity='1';
    },10000);
});
const countdowns = document.querySelectorAll(".countdown");

function updateCountdown(){
    countdowns.forEach(counter => {
        const target = new Date(counter.dataset.date).getTime();
        const now = new Date().getTime();
        const diff = target - now;
        if(diff <= 0){
            counter.innerHTML = `
                <div class="live">
                    🔥 MATCH DAY 🔥
                    <br>
                    Vamos Argentina!
                </div>
            `;
            return;
        }
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (diff % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (diff % (1000 * 60 * 60))
            / (1000 * 60)
        );
        const seconds = Math.floor(
            (diff % (1000 * 60))
            / 1000
        );
        counter.innerHTML = `
            <div class="box">
                <span>${days}</span>
                <small>Days</small>
            </div>
            <div class="box">
                <span>${hours}</span>
                <small>Hours</small>
            </div>
            <div class="box">
                <span>${minutes}</span>
                <small>Minutes</small>
            </div>
            <div class="box">
                <span>${seconds}</span>
                <small>Seconds</small>
            </div>
        `;
    });
}
updateCountdown();
setInterval(updateCountdown,1000);

document.querySelectorAll(".cardd").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});
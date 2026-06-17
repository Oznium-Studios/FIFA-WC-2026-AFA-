let removeitem = document.getElementById('first_div_that_gets_permission');
let removeby = document.getElementById('button_of_all_permissions');

document.body.style.overflowY='hidden';
document.body.style.overflowX='hidden';

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
    document.body.style.overflowY='hidden';
    document.body.style.overflowX='hidden';
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
        document.body.style.overflowY='hidden';
        document.body.style.overflowX='hidden';
        document.body.style.backgroundColor='#ffffff';
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
        document.getElementById('diclaimer_txt_from_disclaimer_div_bottom').style.opacity='1'
        document.body.style.overflowY='scroll';
        document.body.style.overflowX='hidden';
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

const allQuestions = [
{
question:"Who is Argentina's most famous football player?",
options:["Lionel Messi","Cristiano Ronaldo","Neymar","Kylian Mbappe"],
answer:0
},
{
question:"What color is Argentina's home jersey?",
options:["Red and White","Blue and White","Green and Yellow","Black and White"],
answer:1
},
{
question:"How many FIFA World Cups had Argentina won before 2022?",
options:["1","2","3","4"],
answer:1
},
{
question:"Who did the first Hat-trick from argentina in world cup 2026?",
options:["Alvarez","E. Martinez","Messi","De Paul"],
answer:3
},
{
question:"Who was Argentina's captain in the 2022 World Cup?",
options:["Di Maria","Messi","Otamendi","Martinez"],
answer:1
},
{
question:"Which country did Argentina defeat in the 2022 World Cup final?",
options:["France","Brazil","Germany","Croatia"],
answer:0
},
{
question:"What is Lionel Messi's jersey number for Argentina?",
options:["7","9","10","11"],
answer:2
},
{
question:"Which goalkeeper helped Argentina win the 2022 World Cup?",
options:["Martinez","Romero","Caballero","Armani"],
answer:0
},
{
question:"Which continent is Argentina located in?",
options:["Europe","Asia","South America","Africa"],
answer:2
},
{
question:"What is the capital city of Argentina?",
options:["Buenos Aires","Cordoba","Rosario","Mendoza"],
answer:0
},
{
question:"Who is nicknamed 'La Pulga'?",
options:["Aguero","Messi","Di Maria","Alvarez"],
answer:1
},
{
question:"Which Argentine player scored in the 2022 World Cup final?",
options:["Messi","Di Maria","Both","Neither"],
answer:2
},
{
question:"Which Argentine legend wore the number 10 before Messi?",
options:["Batistuta","Riquelme","Maradona","Crespo"],
answer:2
},
{
question:"What is Argentina's national team nickname?",
options:["The Lions","La Albiceleste","The Eagles","The Blues"],
answer:1
},
{
question:"Who won the Golden Ball at the 2022 World Cup?",
options:["Mbappe","Modric","Messi","Alvarez"],
answer:2
},
{
question:"Which Argentine player is known as 'El Fideo'?",
options:["Messi","Di Maria","Martinez","Aguero"],
answer:1
},
{
question:"How many stars are on Argentina's jersey after 2022?",
options:["2","3","4","5"],
answer:1
},
{
question:"Who scored Argentina's winning penalty in the 2022 final shootout?",
options:["Messi","Di Maria","Montiel","Alvarez"],
answer:2
},
{
question:"Which club did Messi play for before Inter Miami?",
options:["Chelsea","PSG","Liverpool","Juventus"],
answer:1
},
{
question:"Who is known as one of Argentina's greatest players ever?",
options:["Maradona","Ronaldo","Pele","Zidane"],
answer:0
},
{
question:"Which Argentine city is Messi from?",
options:["Rosario","Cordoba","Mendoza","Salta"],
answer:0
},
{
question:"What year did Argentina win the World Cup with Messi?",
options:["2018","2020","2022","2026"],
answer:2
},
{
question:"Which player scored Argentina's first goal in the 2022 final?",
options:["Messi","Alvarez","Di Maria","Mac Allister"],
answer:0
},
{
question:"Who coached Argentina in the 2022 World Cup?",
options:["Scaloni","Sampaoli","Sabella","Martino"],
answer:0
},
{
question:"Which player is called 'Dibu'?",
options:["Messi","Martinez","Otamendi","Enzo"],
answer:1
},
{
question:"Argentina won Copa America in which year with Messi?",
options:["2019","2020","2021","2022"],
answer:2
},
{
question:"Who was Argentina's opponent in the 2021 Copa America final?",
options:["Chile","Brazil","Colombia","Uruguay"],
answer:1
},
{
question:"Who scored in the 2021 Copa America final?",
options:["Messi","Di Maria","Martinez","Paredes"],
answer:1
},
{
question:"Which foot does Messi mainly use?",
options:["Right","Left","Both","Neither"],
answer:1
},
{
question:"Which Argentine striker plays for Manchester City?",
options:["Alvarez","Messi","Dybala","Lautaro"],
answer:0
},
{
question:"What is Argentina's flag color?",
options:["Blue and White","Red and Blue","Green and White","Yellow and White"],
answer:0
},
{
question:"Who wore the number 10 shirt for Argentina in 1986?",
options:["Batistuta","Maradona","Caniggia","Passarella"],
answer:1
},
{
question:"Which country hosted the 2022 FIFA World Cup?",
options:["Russia","Brazil","Qatar","USA"],
answer:2
},
{
question:"Who scored the final penalty in the 2022 World Cup final shootout?",
options:["Montiel","Messi","Di Maria","Alvarez"],
answer:0
},
{
question:"Which Argentine player won the Golden Glove in 2022?",
options:["Messi","Martinez","Otamendi","Alvarez"],
answer:1
},
{
question:"Which player is famous for the 'Hand of God' goal?",
options:["Messi","Maradona","Batistuta","Riquelme"],
answer:1
},
{
question:"Which country did Maradona score the 'Hand of God' goal against?",
options:["Germany","Brazil","France","England"],
answer:3
},
{
question:"How many players are on the field for one football team?",
options:["9","10","11","12"],
answer:2
},
{
question:"What shape is a football?",
options:["Square","Circle","Oval","Triangle"],
answer:1
},
{
question:"What is the name of Argentina's football association?",
options:["AFA","FIFA","UEFA","CONCACAF"],
answer:0
},
{
question:"Which Argentine player played for Barcelona for many years?",
options:["Messi","Alvarez","Dybala","Otamendi"],
answer:0
},
{
question:"Which tournament is the biggest in football?",
options:["Copa America","Champions League","World Cup","Europa League"],
answer:2
},
{
question:"Who is Argentina's all-time top scorer?",
options:["Batistuta","Messi","Aguero","Di Maria"],
answer:1
},
{
question:"Which player is famous for free kicks?",
options:["Messi","Martinez","Romero","Paredes"],
answer:0
},
{
question:"What is the nickname of Diego Maradona?",
options:["El Diego","El Toro","El Rey","El Capitán"],
answer:0
},
{
question:"Who is an Argentine defender from the 2022 squad?",
options:["Otamendi","Mbappe","Kane","Modric"],
answer:0
},
{
question:"Who won the 1986 FIFA World Cup with Argentina?",
options:["Messi","Maradona","Scaloni","Batistuta"],
answer:1
},
{
question:"What trophy did Argentina win in 2022?",
options:["Copa America","World Cup","Confederations Cup","Olympics"],
answer:1
},
{
question:"Who assisted Di Maria's goal in the 2022 final?",
options:["Messi","Mac Allister","Alvarez","Otamendi"],
answer:1
},
{
question:"Which Argentine player is known for speed on the wing?",
options:["Di Maria","Martinez","Romero","Tagliafico"],
answer:0
},
{
question:"Which number is strongly associated with Messi?",
options:["7","9","10","11"],
answer:2
},
{
question:"What sport is Argentina's national team famous for?",
options:["Cricket","Football","Rugby","Basketball"],
answer:1
},
{
question:"Which Argentine club is famous for Messi's youth career?",
options:["River Plate","Newell's Old Boys","Boca Juniors","Racing Club"],
answer:1
},
{
question:"Which city is Boca Juniors based in?",
options:["Rosario","Buenos Aires","Cordoba","Mendoza"],
answer:1
},
{
question:"Which stadium is home of Argentina national team often used?",
options:["Old Trafford","La Bombonera","Monumental","Camp Nou"],
answer:2
},
{
question:"What is Argentina's FIFA ranking often associated with top teams?",
options:["Low rank","Mid rank","Top rank","Not ranked"],
answer:2
},
{
question:"Who is Argentina's current football superstar?",
options:["Messi","Ronaldo","Mbappe","Neymar"],
answer:0
},
{
question:"Which position does Messi mainly play?",
options:["Goalkeeper","Defender","Midfielder","Forward"],
answer:3
},
{
question:"Which Argentine player is famous for penalty saves?",
options:["Martinez","Otamendi","Romero","Alvarez"],
answer:0
},
{
question:"What is Argentina's football jersey primary color?",
options:["Red","Blue and White","Green","Yellow"],
answer:1
},
{
question:"Which trophy did Argentina win in 2022 besides World Cup?",
options:["None","Finalissima","Euro Cup","Gold Cup"],
answer:1
},
{
question:"Who did Argentina beat in Finalissima 2022?",
options:["Italy","France","Brazil","Spain"],
answer:0
},
{
question:"Which Argentine coach won World Cup 2022?",
options:["Scaloni","Sampaoli","Sabella","Bielsa"],
answer:0
},
{
question:"Which club did Di Maria play for in France?",
options:["PSG","Marseille","Lyon","Monaco"],
answer:0
},
{
question:"Which Argentine player plays for Atletico Madrid?",
options:["Correa","Messi","Alvarez","Martinez"],
answer:0
},
{
question:"What is Argentina's style of football known for?",
options:["Defensive only","Attacking flair","No passing","Rugby style"],
answer:1
},
{
question:"Which country hosted Copa America 2021 final?",
options:["Argentina","Brazil","Chile","Peru"],
answer:1
},
{
question:"Which trophy did Argentina win in 2021?",
options:["World Cup","Copa America","Euro Cup","Confederations"],
answer:1
},
{
question:"Who scored in Copa America 2021 final?",
options:["Di Maria","Messi","Aguero","Lautaro"],
answer:0
},
{
question:"Which Argentine player is known as 'Kun'?",
options:["Aguero","Messi","Di Maria","Romero"],
answer:0
},
{
question:"Which club did Aguero play for in England?",
options:["Chelsea","Manchester City","Liverpool","Arsenal"],
answer:1
},
{
question:"What is Argentina's football federation abbreviation?",
options:["AFA","FIFA","UEFA","CAF"],
answer:0
},
{
question:"Which continent is Copa America played in?",
options:["Europe","Asia","South America","Africa"],
answer:2
},
{
question:"Which team is Argentina's biggest rival?",
options:["Brazil","Germany","France","Italy"],
answer:0
},
{
question:"What color is Argentina's away kit often?",
options:["Blue","Black","White","Yellow"],
answer:2
},
{
question:"Who scored many goals in 2022 World Cup for Argentina?",
options:["Alvarez","Messi","Di Maria","All of them"],
answer:3
},
{
question:"Which Argentine player is a midfielder in 2022 squad?",
options:["Enzo Fernandez","Messi","Martinez","Romero"],
answer:0
},
{
question:"Which club did Enzo Fernandez join after World Cup?",
options:["Chelsea","PSG","Barcelona","Real Madrid"],
answer:0
},
{
question:"Which World Cup did Maradona shine the most?",
options:["1978","1982","1986","1990"],
answer:2
},
{
question:"What is Argentina's national sport passion?",
options:["Football","Cricket","Baseball","Hockey"],
answer:0
},
{
question:"Which Argentine player is a defender?",
options:["Otamendi","Messi","Aguero","Di Maria"],
answer:0
},
{
question:"What does AFA stand for?",
options:["Argentine Football Association","Asian Football Alliance","America Football Agency","None"],
answer:0
},
{
question:"Which club did Messi join in USA?",
options:["Inter Miami","LA Galaxy","New York City","Chicago Fire"],
answer:0
},
{
question:"Which jersey number did Maradona wear?",
options:["7","9","10","11"],
answer:2
},
{
question:"Which player is known for dribbling skills?",
options:["Messi","Martinez","Romero","Otamendi"],
answer:0
},
{
question:"What is Argentina's football culture known for?",
options:["Passion and skill","Only defense","No fans","Low energy"],
answer:0
},
{
question:"Which trophy is for South America?",
options:["Euro Cup","Copa America","World Cup","AFCON"],
answer:1
},
{
question:"Which country lost 2022 World Cup final?",
options:["Brazil","France","Germany","Spain"],
answer:1
},
{
question:"Which Argentine player is goalkeeper?",
options:["Martinez","Messi","Di Maria","Aguero"],
answer:0
},
{
question:"What is Messi's full name?",
options:["Lionel Messi","Lionel Andres Messi","Lionel Ronaldo Messi","Lionel Diego Messi"],
answer:1
},
{
question:"Which club made Messi famous?",
options:["Barcelona","PSG","Chelsea","Bayern"],
answer:0
},
{
question:"Which Argentina player is known for headers?",
options:["Romero","Messi","Di Maria","Aguero"],
answer:0
},
{
question:"Which trophy did Argentina win in Qatar 2022?",
options:["World Cup","Copa America","Euro Cup","None"],
answer:0
},
{
question:"Which coach is Argentina's national team coach?",
options:["Scaloni","Guardiola","Ancelotti","Klopp"],
answer:0
},
{
question:"Which player scored against Mexico 2022?",
options:["Messi","Alvarez","Di Maria","Martinez"],
answer:0
},
{
question:"Which team did Argentina beat in semifinal 2022?",
options:["Croatia","Brazil","France","Germany"],
answer:0
},
{
question:"Which Argentine player is known for assists?",
options:["Messi","Romero","Martinez","Otamendi"],
answer:0
},
{
question:"What is Argentina famous for besides football?",
options:["Wine","Ice hockey","Baseball","Cricket"],
answer:0
},
{
question:"Which color represents Argentina national identity?",
options:["Red","Blue and White","Green","Black"],
answer:1
},
{
question:"What is Argentina's biggest football achievement?",
options:["World Cup win","Euro Cup","Olympics only","None"],
answer:0
}

];
let quizQuestions = [];
let currentQuestion = 0;
let selectedAnswer = null;
let correct = 0;
let wrong = 0;
function startQuiz(){
    quizQuestions = [...allQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0,10);
    currentQuestion = 0;
    selectedAnswer = null;
    correct = 0;
    wrong = 0;
    document.getElementById("quizBox").style.display = "block";
    document.getElementById("resultBox").style.display = "none";
    loadQuestion();
}
function loadQuestion(){
    document.getElementById("warning").style.display = "none";
    selectedAnswer = null;
    const q = quizQuestions[currentQuestion];
    document.getElementById("questionNumber").textContent =
        `Question ${currentQuestion + 1} / 10`;
    document.getElementById("scoreDisplay").textContent =
        `Score: ${correct * 10}`;
    document.getElementById("question").textContent =
        q.question;
    const optionsBox = document.getElementById("options");
    optionsBox.innerHTML = "";
    q.options.forEach((option,index)=>{
        const div = document.createElement("div");
        div.className = "option";
        div.textContent = option;
        div.onclick = ()=>{
            document
                .querySelectorAll(".option")
                .forEach(opt =>
                    opt.classList.remove("selected")
                );
            div.classList.add("selected");
            selectedAnswer = index;
        };
        optionsBox.appendChild(div);
    });
}
function nextQuestion(){
    if(selectedAnswer === null){
        document.getElementById("warning").style.display =
            "block";
        return;
    }
    const q = quizQuestions[currentQuestion];
    if(selectedAnswer === q.answer){
        correct++;
    }else{
        wrong++;
    }
    currentQuestion++;
    if(currentQuestion >= 10){
        showResult();
    }else{
        loadQuestion();
    }
}
function showResult(){

    document.getElementById("quizBox").style.display =
        "none";
    document.getElementById("resultBox").style.display =
        "block";
    document.getElementById("finalScore").textContent =
        correct * 10;
    document.getElementById("correctCount").textContent =
        correct;
    document.getElementById("wrongCount").textContent =
        wrong;
}
function restartQuiz(){
    startQuiz();
}
startQuiz();

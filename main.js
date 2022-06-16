//GET CANVAS
console.log("Test 2")

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const canvas_matter = document.getElementById("canvas_matter");
const c_matter = canvas_matter.getContext("2d")

canvas.width = innerWidth 
canvas.height = innerHeight
canvas_matter.width = canvas.width
canvas_matter.height = canvas.height

addEventListener('resize', function () {
    canvas.width = innerWidth
    canvas.height = innerHeight
})

// localStorage.clear()

//KEYBOARD ACTIONS
document.addEventListener("keydown", doKeyDown, true);


function doKeyDown(key) {
    if (key.keyCode == 32) { //spacebar
        key.preventDefault()
        StartAnimation()
    }
    if (key.keyCode == 82) { //r
        ResetAnimation()
     }

    if (key.keyCode == 38) { //up arrow
        FasterAnimation()
    }
    if (key.keyCode == 40) { //down arrow
        SlowerAnimation()
    }
    if (key.keyCode == 69) { //e
        for (let i = 0; i < coll.length; i++) {
            coll[i].addEventListener("keydown", function() {
                this.classList.toggle("active");
                var content = this.previousElementSibling;
                if (content.style.display === "block") {
                  content.style.display = "block";
                } else {
                  content.style.display = "block";
                }
                if (content.style.maxHeight){
                    content.style.maxHeight = null;
                    content.style.border = "none";
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                    content.style.borderColor = "none";
                } 
            });
            }
    }
}

//CACHE
                        var wavelengthCache
                        var eigenfrequenz_nmCache
                        var eigenfrequenzCache
                        var animIntervalCache
                        var drawwavecheckedCache
                        var drawarrowscheckedCache
                        var drawfieldcheckedCache
                        var showexplcheckedCache

                        if(localStorage.length === 0){
                            wavelengthCache = "500";
                            eigenfrequenz_nmCache = "500";
                            eigenfrequenzCache = Math.round(300/(eigenfrequenz_nmCache*0.001));
                            animIntervalCache = 0;
                            drawwavecheckedCache = true
                            drawarrowscheckedCache = true
                            drawfieldcheckedCache = true
                            showexplcheckedCache = true 

                            localStorage.setItem("drawwavecheckedCacheKey", drawwavecheckedCache)
                            localStorage.setItem("drawarrowscheckedCacheKey", drawarrowscheckedCache)
                            localStorage.setItem("drawfieldcheckedCacheKey", drawfieldcheckedCache)
                            localStorage.setItem("showexplcheckedCacheKey", showexplcheckedCache)
                            localStorage.setItem("wavelengthCacheKey", wavelengthCache);   
                            localStorage.setItem("eigenfrequenzCacheKey", eigenfrequenzCache);
                            localStorage.setItem("eigenfrequenz_nmCacheKey", eigenfrequenz_nmCache);
                            localStorage.setItem("animIntervalCacheKey", animIntervalCache);
                        }else{
                            wavelengthCache = localStorage.getItem("wavelengthCacheKey")
                            eigenfrequenz_nmCache = localStorage.getItem("eigenfrequenz_nmCacheKey")
                            eigenfrequenzCache = localStorage.getItem("eigenfrequenzCacheKey")
                            animIntervalCache = localStorage.getItem("animIntervalCacheKey")
                            drawwavecheckedCache = localStorage.getItem("drawwavecheckedCacheKey")
                            drawarrowscheckedCache = localStorage.getItem("drawarrowscheckedCacheKey")
                            drawfieldcheckedCache = localStorage.getItem("drawfieldcheckedCacheKey")
                            showexplcheckedCache = localStorage.getItem("showexplcheckedCacheKey")
                        }

                        function store(){
                            drawwavecheckedCache = document.getElementById('show_wave').checked
                            localStorage.setItem("drawwavecheckedCacheKey", drawwavecheckedCache)

                            drawarrowscheckedCache = document.getElementById('show_arrows').checked
                            localStorage.setItem("drawarrowscheckedCacheKey", drawarrowscheckedCache)

                            drawfieldcheckedCache = document.getElementById('show_field').checked
                            localStorage.setItem("drawfieldcheckedCacheKey", drawfieldcheckedCache)
                            
                            showexplcheckedCache = document.getElementById('show_expl').checked
                            localStorage.setItem("showexplcheckedCacheKey", showexplcheckedCache)

                            wavelengthCache = wave.wavelength
                            localStorage.setItem("wavelengthCacheKey", wavelengthCache);
                            
                            eigenfrequenzCache = eigenfrequenz
                            localStorage.setItem("eigenfrequenzCacheKey", eigenfrequenzCache);

                            eigenfrequenz_nmCache = eigenfrequenz_nm
                            localStorage.setItem("eigenfrequenz_nmCacheKey", eigenfrequenz_nmCache);

                            animIntervalCache = anim_interval
                            localStorage.setItem("animIntervalCacheKey", animIntervalCache);
                        }

                        if (localStorage.getItem("drawwavecheckedCacheKey") == 'true'){
                            document.getElementById('show_wave').checked = true 
                        } else {document.getElementById('show_wave').checked = false}
                        if (localStorage.getItem("drawarrowscheckedCacheKey") == 'true'){
                            document.getElementById('show_arrows').checked = true
                        } else {document.getElementById('show_arrows').checked = false}
                        if (localStorage.getItem("drawfieldcheckedCacheKey") == 'true'){
                            document.getElementById('show_field').checked = true
                        } else {document.getElementById('show_field').checked = false}
                        if (localStorage.getItem("showexplcheckedCacheKey") == 'true'){
                            document.getElementById('show_expl').checked = true
                        } else {document.getElementById('show_expl').checked = false}


//CREATE WAVE OBJECT
const wave = {
    y:canvas.height/2,
    wavelength: localStorage.getItem("wavelengthCacheKey"),
    amplitude: 100
}

//EXPLANATION
var expl1 = document.getElementById('expl1')
var expl2 = document.getElementById('expl2')
var expl3 = document.getElementById('expl3')
var expl4 = document.getElementById('expl4')
var expl5 = document.getElementById('expl5')
var expl6 = document.getElementById('expl6')
var expl7 = document.getElementById('expl7')

function explFunction() {
    if(document.getElementById('show_expl').checked){
        
        if (i_x == 0) {
            expl1.innerHTML = '1. Hier siehst du eine <b><u>Lichtwelle</u></b> und ein <b><u>Nanopartikel</u></b>.'
            expl1.style.display = 'block'
            expl2.innerHTML = '2. In dem Nanopartikel siehst du frei bewegliche <b><u>Elektronen</u></b>, die zur Zeit noch ruhen.'
            expl2.style.display = 'block'
            expl3.innerHTML = '3. Starte die Simulation, wenn du bereit bist. Pausiere, wenn du die Erklärungen lesen willst. Mit Reset kannst du neustarten.'
            expl3.style.display = 'block'
            
        }
        else {
            expl1.innerHTML = ''
            expl1.style.display = 'none'
            expl2.innerHTML = ''
            expl2.style.display = 'none'
            expl3.innerHTML = ''
            expl3.style.display = 'none'
        }
        if (i_x > 210 && i_x < 450) {
            expl4.innerHTML = '4. Die frei beweglichen Elektronen in dem Nanopartikel werden durch das elektrische Feld der Lichtwelle ausgelenkt. Da die Feldvektoren immer in positive Richtung zeigen, werden die Elektronen in die entgegengesetzte Richtung ausgelenkt.'
            expl4.style.display = 'block'
        }
        else {
            expl4.innerHTML = ''
            expl4.style.display = 'none'
        }
        if (i_x > 460 && i_x < 750) {
            expl5.innerHTML = '5. Durch die verschobenen Ladungen baut sich um das Nanopartikel ein <b><u>entgegensetzt gerichtetes Feld</b></u> auf. Dieses Feld ist der Grund für die <b><u>Abschwächung</b></u> der Lichtwelle.'
            expl5.style.display = 'block'
        }
        else {
            expl5.innerHTML = ''
            expl5.style.display = 'none'
        }
        if (i_x > 460 && i_x < 750) {
            expl6.innerHTML = '6. Je genauer die <b><u>Eigenfrequenz</b></u> der Elektronen und die <b><u>Wellenlänge</b></u> des Lichtes übereinstimmen, desto besser können die Elektronen der Anregung folgen und die Lichtwelle wird stärker abgeschwächt.'
            expl6.style.display = 'block'
        }
        else {
            expl6.innerHTML = ''
            expl6.style.display = 'none'
        }
        if (i_x > 770 && i_x < 1100) {
            expl7.innerHTML = '7. Probiere verschiedene Einstellungen der Regler aus und beobachte, was mit der Welle passiert!'
            expl7.style.display = 'block'
        }
        else {
            expl7.innerHTML = ''
            expl7.style.display = 'none'
        }
        
    }
    else {
        expl1.innerHTML = ''
        expl1.style.display = 'none'
        expl2.innerHTML = ''
        expl2.style.display = 'none'
        expl3.innerHTML = ''
        expl3.style.display = 'none'
        expl4.innerHTML = ''
        expl4.style.display = 'none'
        expl5.innerHTML = ''
        expl5.style.display = 'none'
        expl6.innerHTML = ''
        expl6.style.display = 'none'
        expl7.innerHTML = ''
        expl7.style.display = 'none'
    }
    
}



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++UTILITY FUNCTIONS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//RANDOM INTEGER FROM RANGE
function randomIntFromRange (min,max) {
    return Math.floor(Math.random()*(max-min + 1) +min)
}


//DEGTORAD
let deg = 180
const degsToRads = deg => (deg * Math.PI) / 180.0;
const radsToDegs = rad => rad * 180 / Math.PI;


//COLLAPSIBLE (EXPLANATION)
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.previousElementSibling;
        if (content.style.display === "block") {
            content.style.display = "block";
        } else {
            content.style.display = "block";
        }
        if (content.style.maxHeight){
            content.style.maxHeight = null;
            content.style.border = "none";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.borderColor = "none";
        } 
    });
}

//COLORCHANGE
let hue_wellelaenge = 640 - wavelengthCache
function changeColor() {
    if (wave.wavelength < 410) {
        hue_wellelaenge = 280
    }
    else if (wave.wavelength > 655){
        hue_wellelaenge = 720
    }
    else{
        hue_wellelaenge = 640-wave.wavelength
    }
    c.strokeStyle = 'hsl('+ hue_wellelaenge + ', 100%, 50%)'
}

let eigenfrequenz = eigenfrequenzCache
let eigenfrequenz_nm = eigenfrequenz_nmCache
let np_size = Math.abs(400-eigenfrequenz_nm)/3
let hue_eigenfrequenz = 640 - eigenfrequenz_nmCache
function changeColorEigenfrequenz() {
    if (eigenfrequenz_nm < 410) {
        hue_eigenfrequenz = 280
    }
    else if (eigenfrequenz_nm > 655){
        hue_eigenfrequenz = 720
    }
    else{
        hue_eigenfrequenz = 640-eigenfrequenz_nm
    }
    c.strokeStyle = 'hsl('+ hue_eigenfrequenz + ', 100%, 50%)'
}

//SLIDER WAVELENGTH
var slider_wellenlaenge = document.getElementById("myRange_wellenlaenge");
var output_wellenlaenge = document.getElementById("output_wellenlaenge");
var newSliderthumbColor_wellenlaenge = 'hsl(300, 100%, 50%)'
slider_wellenlaenge.value = wavelengthCache
output_wellenlaenge.innerHTML = slider_wellenlaenge.value; // Display the default slider value

slider_wellenlaenge.oninput = function() {
    output_wellenlaenge.innerHTML = this.value;
    wave.wavelength = this.value;
    changeColor()
    newSliderthumbColor_wellenlaenge = 'hsl('+ hue_wellelaenge + ', 100%, 50%)'
    slider_wellenlaenge.style.setProperty('--sliderthumbColor', newSliderthumbColor_wellenlaenge);
}
changeColor()
newSliderthumbColor_wellenlaenge = 'hsl('+ hue_wellelaenge + ', 100%, 50%)'
slider_wellenlaenge.style.setProperty('--sliderthumbColor', newSliderthumbColor_wellenlaenge);




//********************************************ANIMATE************************************************** */

//TICKER FOR ANIMATION PROGRESSION
let i_x = 0

// BOOLEANS FOR START AND RESTART
var initAnim = true;
var runAnim = false;

//FETCH BUTTONS FROM INDEX
var startButton = document.getElementById( 'startButtonId' );
var resetButton = document.getElementById( 'resetButtonId' );
var schnellerButton = document.getElementById( 'schnellerButtonId');
var langsamerButton = document.getElementById( 'langsamerButtonId');


// RESET BUTTON
function ResetAnimation(){
    store()
    window.location.reload();
}
resetButton.onclick = function () {ResetAnimation()}

//START BUTTON
function StartAnimation() {
    if (initAnim) { 
      initAnim = false;
      runAnim = true;
    }else {
        initAnim = true;
        runAnim = false;
    }
    // START AND PAUSE
    if (runAnim) {
      startButton.innerHTML = 'Pause';
      startButton.style.background = '#f3e260';
      runAnim = false;
      animate_wave();
    }else {
      startButton.innerHTML = 'Start';
      startButton.style.background = '#7bc86c';
      runAnim = true;
      animate_wave_paused()
    }
}
startButton.onclick = function () {StartAnimation()}


//ANIMATION SPEED
let anim_interval = parseInt(localStorage.getItem("animIntervalCacheKey"))

function SlowerAnimation() {  
        if (anim_interval < 4){
        anim_interval += 1
        output_geschw.innerHTML = (1+(4-anim_interval)) 
        slider_geschw.value = (4-anim_interval)
    }      
}
langsamerButton.onclick = function () {SlowerAnimation()}

function FasterAnimation() {
    if (anim_interval > 0){
        anim_interval -= 1
        output_geschw.innerHTML = (1+(4-anim_interval)) 
        slider_geschw.value = (4-anim_interval)
    }  
}
schnellerButton.onclick = function () {FasterAnimation()}

//ANIMATION SPEED SLIDER
var slider_geschw = document.getElementById("speedRange");
var output_geschw = document.getElementById("output_geschw");
slider_geschw.value = 4-localStorage.getItem("animIntervalCacheKey")
output_geschw.innerHTML = (1+(4-anim_interval)) ; // Display the default slider value

slider_geschw.oninput = function() {
    anim_interval = 4-slider_geschw.value
    output_geschw.innerHTML = (1+(4-anim_interval)) 
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++DRAWING FUNCTIONS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


//CREATE NANOPARTICLE
var circle_center_x = canvas.width/2;
var circle_center_y = canvas.height/2;
//var circle_radius = Math.abs(wave.amplitude/2) + 5/2;
var circle_radius = (eigenfrequenz_nm/3 - 250/3 + 5/2)/2;
circle_radius = (Math.abs(400-eigenfrequenz_nm)/3+10)/2
//var circle_radius = eigenfrequenz_nm;
var wave_start_pos = circle_center_x - 200

//DRAWING NP
function drawCircle() {
    c.beginPath()
    c.arc(circle_center_x, circle_center_y, circle_radius, 0, 2*Math.PI, false)
    c.lineWidth = 0
    c.lineWidth = 5
    c.strokeStyle = 'black'
    c.stroke()
    c.closePath()
}

//DRAWING FIELD
var extra_fieldradius = 10 
var uppergradient = c.createRadialGradient(circle_center_x, circle_center_y, 0, circle_center_x, circle_center_y, circle_radius*2+extra_fieldradius)
var lowergradient = c.createRadialGradient(circle_center_x, circle_center_y, 0, circle_center_x, circle_center_y, circle_radius*2+extra_fieldradius)
var uppergradient2 = c.createRadialGradient(circle_center_x, circle_center_y, 0, circle_center_x, circle_center_y, circle_radius*2+extra_fieldradius)
var lowergradient2 = c.createRadialGradient(circle_center_x, circle_center_y, 0, circle_center_x, circle_center_y, circle_radius*2+extra_fieldradius)

var lowergradientTransparency
var uppergradientTransparency
var lowergradientTransparency2
var uppergradientTransparency2 

function drawUpperHalfCircle(){
    c.beginPath()
    c.arc(circle_center_x, circle_center_y, 200, 0, Math.PI, true)
    c.lineWidth = 0
    c.fillStyle = uppergradient
    c.fill()
    c.closePath()
}
function drawLowerHalfCircle(){
    c.beginPath()
    c.arc(circle_center_x, circle_center_y, 200, 0, Math.PI, false)
    c.lineWidth = 0
    c.fillStyle = lowergradient
    c.fill()
    c.closePath()
}
function drawUpperHalfCircle2(){
    c.beginPath()
    c.arc(circle_center_x, circle_center_y, 200, 0, Math.PI, true)
    c.lineWidth = 0
    c.fillStyle = uppergradient2
    c.fill()
    c.closePath()
}
function drawLowerHalfCircle2(){
    c.beginPath()
    c.arc(circle_center_x, circle_center_y, 200, 0, Math.PI, false)
    c.lineWidth = 0
    c.fillStyle = lowergradient2
    c.fill()
    c.closePath()
}

//DRAWING WAVE
var wave_width = 400 + (wave.wavelength-400)
//var wave_damp = 0.005 * Math.abs(wave_width-eigenfrequenz_nmCache)
var wave_damp_absorptionwidth = 20
var wave_damp = 1 - Math.exp(-((Math.abs(eigenfrequenz_nm) + Math.abs(wave_width-eigenfrequenz_nm))-Math.abs(eigenfrequenz_nm))/(2*wave_damp_absorptionwidth))

function drawWaveDamp(damping) {
    if (document.getElementById('show_wave').checked) {
    changeColor()
    wave_width = 400 + (wave.wavelength*2-400)
   
        c.beginPath()
            // for (let i = 0; i < circle_center_x + stack_offset - (wave_start_pos-wave_width) - i_x && i < wave_width + 1 ; i++) { 
                
            //     c.lineTo(i+i_x + (wave_start_pos-wave_width),wave.y + wave.amplitude*Math.sin(-i*2* Math.PI/(0.5*wave.wavelength*4)))
                
            // }
            for (let i = 0; i < circle_center_x + circle_radius - (wave_start_pos-wave_width) - i_x && i < wave_width + 1 ; i++) { 
                
                c.lineTo(i+i_x + (wave_start_pos-wave_width),wave.y + wave.amplitude*Math.sin(-i*2* Math.PI/(0.5*wave.wavelength*2)))
                
            }
        c.stroke()
        c.beginPath()
            for (let i = 0; i < i_x - (circle_center_x + circle_radius -wave_start_pos) && i < wave_width; i++) { 
                
                c.lineTo(wave_start_pos-(i-i_x),wave.y + wave.amplitude*damping*Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)))
                
            }
        c.stroke()
    
        //ARROW AT FRONT OF THE SINE WAVE
        // c.beginPath()
        //     
        //     c.moveTo(i_x+wave_start_pos-1, wave.y)
        //     c.lineTo(i_x+wave_start_pos-1+50, wave.y)
        
        //     c.moveTo(i_x+wave_start_pos-1+49, wave.y)
        //     c.lineTo(i_x+wave_start_pos-1+50-10, wave.y+10)
        
        //     c.moveTo(i_x+wave_start_pos-1+49, wave.y)
        //     c.lineTo(i_x+wave_start_pos-1+50-10, wave.y-10)
        
        //     c.lineWidth = 4
        //     c.stroke()
        // c.closePath()
        
    }
}

//DRAWING ARROWS
function drawArrowsDamp(damping) {
    if (document.getElementById('show_arrows').checked) {
        wave_width = 400 + (wave.wavelength-400)
        
            c.beginPath()
            for(let i= 5; i < circle_center_x + circle_radius + wave_width && i < wave_width*2 ;i++){

                if ((i-i_x)%19 == 0) {
                    if(-i+i_x < circle_center_x+circle_radius-wave_start_pos){
                        if (Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)) < 0) {
                            c.moveTo(wave_start_pos-(i-i_x), wave.y)
                            c.lineTo(wave_start_pos-(i-i_x), wave.y + wave.amplitude * Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)))
        
                            c.moveTo(wave_start_pos-(i-i_x), wave.y)
                            c.lineTo(wave_start_pos-(i-i_x), wave.y + wave.amplitude * Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)))
                            c.lineTo(wave_start_pos-(i-i_x)+3, wave.y + wave.amplitude * Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)) + 4 )
        
                            c.moveTo(wave_start_pos-(i-i_x), wave.y + wave.amplitude * Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)))
                            c.lineTo(wave_start_pos-(i-i_x)-3, wave.y + wave.amplitude * Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)) + 4 )
        
                        }
                        else {
                            c.moveTo(wave_start_pos-(i-i_x), wave.y)
                            c.lineTo(wave_start_pos-(i-i_x), wave.y + wave.amplitude * Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)))
                            c.lineTo(wave_start_pos-(i-i_x)+3, wave.y + wave.amplitude * Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)) - 4 )
                            c.moveTo(wave_start_pos-(i-i_x), wave.y + wave.amplitude * Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)))
                            c.lineTo(wave_start_pos-(i-i_x)-3, wave.y + wave.amplitude * Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)) - 4 )
                            
                        }
                    }
                }
            }
            
            if (wave_damp >= 0.05) {
                
            
                for(let i= 5; i < i_x - (circle_center_x + circle_radius -wave_start_pos) && i < wave_width*2;i++){
                    if ((i-i_x)%19 == 0) {
                        if (Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)) < 0) {
                            c.moveTo(wave_start_pos-(i-i_x), wave.y)
                            c.lineTo(wave_start_pos-(i-i_x), wave.y + wave.amplitude * damping * Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)))
        
                            c.moveTo(wave_start_pos-(i-i_x), wave.y)
                            c.lineTo(wave_start_pos-(i-i_x), wave.y + wave.amplitude * damping * Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)))
                            c.lineTo(wave_start_pos-(i-i_x)+3, wave.y + wave.amplitude * damping * Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)) + 4 )
        
                            c.moveTo(wave_start_pos-(i-i_x), wave.y + wave.amplitude * damping * Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)))
                            c.lineTo(wave_start_pos-(i-i_x)-3, wave.y + wave.amplitude * damping * Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)) + 4 )
        
                        }
                        else {
                            c.moveTo(wave_start_pos-(i-i_x), wave.y)
                            c.lineTo(wave_start_pos-(i-i_x), wave.y + wave.amplitude * damping * Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)))
                            c.lineTo(wave_start_pos-(i-i_x)+3, wave.y + wave.amplitude * damping * Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)) - 4 )
                            c.moveTo(wave_start_pos-(i-i_x), wave.y + wave.amplitude * damping * Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)))
                            c.lineTo(wave_start_pos-(i-i_x)-3, wave.y + wave.amplitude * damping * Math.sin(i*2* Math.PI/(0.5*wave.wavelength*2)) - 4 )
                            
                        }
        
                    }
                }
            }
            
            
            c.closePath()
        
        c.strokeStyle = "#000000"
        c.lineWidth = 2
        c.stroke()

        //DOTS ON ARROW FEET
        c.beginPath()
        for(let i= 5; i<wave_width*2;i++){
            if ((i-i_x)%19 == 0) {
                c.arc(wave_start_pos-(i-i_x), wave.y, 2.5, 0, 2 * Math.PI, false);
                c.fillStyle = 'black';
                c.fill();
            }
        }
        // c.strokeStyle = "#000000"
        // c.lineWidth = 1
        // c.stroke()
         c.closePath()
    }
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ELECTRONS+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                    //MATTER
                    var Bodies = Matter.Bodies,
                        Body = Matter.Body,
                        Engine = Matter.Engine,
                        Events = Matter.Events,
                        Render = Matter.Render,
                        Runner = Matter.Runner,
                        Collision = Matter.Collision,
                        Constraint = Matter.Constraint,
                        Composite = Matter.Composite,
                        Composites = Matter.Composites,
                        Common = Matter.Common,
                        Detector = Matter.Detector,
                        MouseConstraint = Matter.MouseConstraint,
                        Mouse = Matter.Mouse,
                        Query = Matter.Query,
                        Svg = Matter.Svg,
                        World = Matter.World

                    // // provide concave decomposition support library
                    // Common.setDecomp(require('poly-decomp'));

                    // CREATE ENGINE
                    var gravitydirection = 0
                    var engine = Engine.create({
                        gravity: {scale: gravitydirection*0.01},
                        timing: {timeScale: 1}
                    }),
                    world = engine.world;

                    // CREATE RENDERER
                    var render = Render.create({
                        canvas: canvas_matter,
                        engine: engine,
                        options: {
                            width: innerWidth,
                            height: innerHeight,
                            wireframes: false,
                            background: '#dadada'
                        }
                    });
                    Render.run(render);


                    // ADD MOUSE CONTROL
                    var mouse = Mouse.create(render.canvas),
                    mouseConstraint = MouseConstraint.create(engine, {
                        mouse: mouse,
                        constraint: {
                            stiffness: 0.2,
                            render: {
                                visible: false
                            }
                        }
                    });
                    Composite.add(world, mouseConstraint);

                    // keep the mouse in sync with rendering
                    // render.mouse = mouse;

                    // FIT RENDER TO THE VIEW SCENE
                    Render.lookAt(render, {
                        min: { x: 0, y: 0 },
                        max: { x: canvas_matter.width, y: canvas_matter.height }
                    });


                    //INVISIBLE BOUNDARIES FOR ELECTRONS
                    /**
                    * https://stackoverflow.com/questions/58507514/matter-js-hollow-circle-body
                    * Creates a polygon that can contain other objects by putting together
                    * rectangles for each edge of the polygon.
                    *
                    * @param x, y: the center of the polygon
                    * @param sides: the number of sides of the polygon
                    * @param radius: the radius of the circumscribing circle
                    * @param options: a set of properties applied to each edge of the polygon.
                    * There are a few special options:
                    *  'extraLength': The factor to increase the length of each rectangle by to
                    *  avoid inner and outer gaps. Typically around 1.15.
                    *  'width': the width of each rectangluar side. If this is too small, the
                    *  matter-js engine will require a smaller interval to prevent objects from
                    *  being pushed in / out of teh object.
                    *  'initialRotation': The initital rotation to be applied to the shape.
                    */
                    function containerPolygon(x, y, sides, radius, options){
                        const width = options.width || 20; delete options.width;
                        const extraLength = options.extraLength || 1.15; delete options.extraLength;
                        const initialRotation = options.initialRotation || 0; delete options.initialRotation;
                        const theta = 2 * Math.PI / sides;
                        const sideLength = 2 * radius * theta/2 * extraLength;
                        const parts = [];
                        for (let i = 0; i < sides; i++) {
                            // We'll build thin sides and then translate + rotate them appropriately.
                            const body = Bodies.rectangle(0, 0, sideLength, width, {
                                render:{
                                    fillStyle: 'transparent',
                                    lineWidth: 2,
                                    strokeStyle: 'black'
                                }
                            });
                            Body.rotate(body, i * theta);
                            Body.translate(body, {x: radius * Math.sin(i * theta), y: -radius * Math.cos(i * theta)});
                            parts.push(body);
                        }
                        const ret = Body.create(options);
                        Body.setParts(ret, parts);
                        if (initialRotation) {
                            Body.rotate(ret, initialRotation);
                        }
                        Body.translate(ret, {x: x, y: y});
                        return ret;
                    }

                

                    var rectangles_width = 50
                    var container_circle = containerPolygon(canvas_matter.width/2, canvas_matter.height/2, 20, circle_radius+rectangles_width/2, {
                        width: rectangles_width,
                        extraLength: 10,
                        initialRotation: 1,
                        isStatic: true,
                        restitution: 0,
                        mass: 100,
                        render: {
                            visible: false
                        }
                    })
                    Composite.add(world, container_circle)

                    var electronOptions = {
                        mass: 100,
                        restitution: 0,
                        friction: 0,
                        frictionAir: 2,
                        slop: 0,
                        collisionFilter: {
                            group: 1,
                            category: 1,
                        },
                        render: {
                            fillStyle: 'blue',
                            lineWidth: 1,
                        },
                    }

                    //CREATE STACK OF ELECTRONS
                    
                    var stack_rows = 13;
                    var stack_cols = 13;
                    var stack_gap = 5;
                    var stack_radius = 3;
                    var middle_electron = (stack_rows * stack_cols)/2 - 0.5
                    
                    var stack_offset = (stack_rows*2*stack_radius + (stack_rows-1)*stack_gap)*0.5
                    var stack_x = canvas_matter.width/2 - stack_offset + 2;
                    var stack_y = canvas_matter.height/2 - stack_offset;

                        var stack = Composites.stack(stack_x, stack_y, stack_cols, stack_rows, stack_gap, stack_gap, function (x, y) { 
                            return Bodies.circle(x, y, stack_radius,  electronOptions)
                        })
                        for (let i = 0; i < stack.bodies.length; i++) {
                            if (stack.bodies[i].position.x > circle_center_x + circle_radius - stack_radius || stack.bodies[i].position.x < circle_center_x - circle_radius + stack_radius|| stack.bodies[i].position.y > circle_center_y + circle_radius - stack_radius|| stack.bodies[i].position.y < circle_center_y - circle_radius + stack_radius) {
                                
                                stack.bodies[i].render.fillStyle = "red"
                                stack.bodies[i].render.visible = false
                                stack.bodies[i].collisionFilter.group = 2
                                stack.bodies[i].collisionFilter.category = 0
                                //Composite.remove(world, stack.bodies[i])
                            }
                        }
                        stack.bodies[middle_electron].render.fillStyle = "blue"
                        Composite.add(world, stack)  
                    

                    //SPRINGS TO IMITATE ELECTRON MOTION
                    var federn = []
                    for (let i = 0; i < stack.bodies.length; i++) {
                        var feder = Constraint.create({
                            pointA: { x: stack.bodies[i].position.x, y: stack.bodies[i].position.y },
                            bodyB: stack.bodies[i],
                            pointB: { x: 0, y: 0 },
                            // stiffness: 0.03,
                            // damping: 1,
                            stiffness: 0.004,
                            damping: 0.01,
                            render: {
                                visible: false
                            }
                        })
                        //Composite.add(world, feder)
                        federn.push(feder)
                    }
                    Composite.add(world, federn)

                    //AVOIDING ELECTRONS GOING NUTS
                    const limitMaxSpeed = () => {
                        let maxSpeed = 4;
                        for (let i = 0; i < stack.bodies.length; i++) {
                            if (stack.bodies[i].velocity.x > maxSpeed) {
                                Body.setVelocity(stack.bodies[i], { x: maxSpeed, y: stack.bodies[i].velocity.y });
                            }

                            if (stack.bodies[i].velocity.x < -maxSpeed) {
                                Body.setVelocity(stack.bodies[i], { x: -maxSpeed, y: stack.bodies[i].velocity.y });
                            }

                            if (stack.bodies[i].velocity.y > maxSpeed) {
                                Body.setVelocity(stack.bodies[i], { x: stack.bodies[i].velocity.x, y: maxSpeed });
                            }

                            if (stack.bodies[i].velocity.y < -maxSpeed) {
                                Body.setVelocity(stack.bodies[i], { x: -stack.bodies[i].velocity.x, y: -maxSpeed });
                            }
                        }
                    }

                    Events.on(engine, 'beforeUpdate', limitMaxSpeed);

                    

//SLIDER EIGENFREQUENZ
var slider_eigenfrequenz = document.getElementById("myRange_eigenfrequenz");
// var output_eigenfrequenz = document.getElementById("output_eigenfrequenz");
// //output_eigenfrequenz.innerHTML = slider_eigenfrequenz.value; // Display the default slider value
// // output_eigenfrequenz.innerHTML = Math.round(300/(eigenfrequenz_nmCache*0.001));
// output_eigenfrequenz.innerHTML = (Math.abs(400-eigenfrequenz_nmCache)/3 + 10)/2;
var newSliderthumbColor_eigenfrequenz = 'hsl('+ hue_eigenfrequenz + ', 100%, 50%)'
slider_eigenfrequenz.value = eigenfrequenz_nmCache


slider_eigenfrequenz.oninput = function() {
    //output_eigenfrequenz.innerHTML = (Math.abs(400-this.value)/3 + 10)/2;
    circle_radius = (Math.abs(400-this.value)/3 + 10)/2;
    eigenfrequenz_nm = this.value;
    eigenfrequenz =  Math.round(300/(this.value*0.001));
    changeColorEigenfrequenz()
    newSliderthumbColor_eigenfrequenz = 'hsl('+ hue_eigenfrequenz + ', 100%, 50%)'
    slider_eigenfrequenz.style.setProperty('--sliderthumbColor', newSliderthumbColor_eigenfrequenz);

    Composite.remove(world, container_circle, true)
    container_circle = containerPolygon(canvas_matter.width/2, canvas_matter.height/2, 20, circle_radius+rectangles_width/2, {
        width: rectangles_width,
        extraLength: 10,  
        initialRotation: 1,
        isStatic: true,
        restitution: 0,
        mass: 100,
        render: {
            visible: false
        }
    })
    Composite.add(world, container_circle)

    Composite.remove(world, stack, true)
    stack = Composites.stack(stack_x, stack_y, stack_cols, stack_rows, stack_gap, stack_gap, function (x, y) { 
        return Bodies.circle(x, y, stack_radius,  electronOptions)
    })
    for (let i = 0; i < stack.bodies.length; i++) {
        if (stack.bodies[i].position.x > circle_center_x + circle_radius - stack_radius || stack.bodies[i].position.x < circle_center_x - circle_radius + stack_radius|| stack.bodies[i].position.y > circle_center_y + circle_radius - stack_radius|| stack.bodies[i].position.y < circle_center_y - circle_radius + stack_radius) {
            
            stack.bodies[i].render.fillStyle = "red"
            stack.bodies[i].render.visible = false
            stack.bodies[i].collisionFilter.group = 2
            stack.bodies[i].collisionFilter.category = 0
            //Composite.remove(world, stack.bodies[i])
        }
    }
    stack.bodies[middle_electron].render.fillStyle = "blue"
    Composite.add(world, stack)

    Engine.update(engine, 16, 1)
    Engine.update(engine, 16, 1)
    Engine.update(engine, 16, 1)

}
changeColorEigenfrequenz()
newSliderthumbColor_eigenfrequenz = 'hsl('+ hue_eigenfrequenz + ', 100%, 50%)'
slider_eigenfrequenz.style.setProperty('--sliderthumbColor', newSliderthumbColor_eigenfrequenz);




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ANIMATE PAUSED WAVE+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function animate_wave_paused(){
    if (initAnim == false) return
    c.clearRect(0,0,canvas.width, canvas.height)
    requestAnimationFrame(animate_wave_paused)

    //UPDATE WAVE
    wave_width = 400 + (wave.wavelength-400)
    //wave_damp = 0.005 * Math.abs(wave_width-eigenfrequenz_nm)
    wave_damp = 1 - Math.exp(-((Math.abs(eigenfrequenz_nm) + Math.abs(wave_width-eigenfrequenz_nm))-Math.abs(eigenfrequenz_nm))/(2*wave_damp_absorptionwidth))
    if (wave_damp > 1) {
        wave_damp = 1
    }


    //FIELD AROUND NP
    lowergradientTransparency = Math.abs(circle_center_y - stack.bodies[middle_electron].position.y)*(1/circle_radius)
    uppergradientTransparency = Math.abs(circle_center_y - stack.bodies[middle_electron].position.y)*(1/circle_radius)
    lowergradientTransparency2 = Math.abs(circle_center_y - stack.bodies[middle_electron].position.y)*(1/circle_radius)
    uppergradientTransparency2 = Math.abs(circle_center_y - stack.bodies[middle_electron].position.y)*(1/circle_radius)

    uppergradient = c.createRadialGradient(circle_center_x, circle_center_y, 0, circle_center_x, circle_center_y, circle_radius*2+extra_fieldradius)
    lowergradient = c.createRadialGradient(circle_center_x, circle_center_y, 0, circle_center_x, circle_center_y, circle_radius*2+extra_fieldradius)
    uppergradient2 = c.createRadialGradient(circle_center_x, circle_center_y, 0, circle_center_x, circle_center_y, circle_radius*2+extra_fieldradius)
    lowergradient2 = c.createRadialGradient(circle_center_x, circle_center_y, 0, circle_center_x, circle_center_y, circle_radius*2+extra_fieldradius)

    
    if (stack.bodies[middle_electron].position.y < circle_center_y-2) {
        uppergradient.addColorStop(0, 'transparent') //transparent
        uppergradient.addColorStop(0.01, 'rgba(38, 132, 255,' + uppergradientTransparency + ')') //blue
        uppergradient.addColorStop(1, 'rgba(38, 132, 255, 0)') //blue

        lowergradient.addColorStop(0, 'transparent') //transparent
        lowergradient.addColorStop(0.01, 'rgba(255, 38, 38,' + lowergradientTransparency + ')') //red #ff2626
        lowergradient.addColorStop(1, 'rgba(255, 38, 38,0)') //grey
    }
    else if (stack.bodies[middle_electron].position.y > circle_center_y+2){
        lowergradient2.addColorStop(0, 'transparent') //transparent
        lowergradient2.addColorStop(0.01, 'rgba(38, 132, 255,' + uppergradientTransparency2 + ')') //blue
        lowergradient2.addColorStop(1, 'rgba(38, 132, 255, 0)') //blue

        uppergradient2.addColorStop(0, 'transparent') //transparent
        uppergradient2.addColorStop(0.01, 'rgba(255, 38, 38,' + lowergradientTransparency2 + ')') //red #ff2626
        uppergradient2.addColorStop(1, 'rgba(255, 38, 38,0)') //grey
    }
    else if (stack.bodies[middle_electron].position.y > circle_center_y-1 && stack.bodies[middle_electron].position.y < circle_center_y+1) {
        lowergradientTransparency = 0
        lowergradientTransparency2 = 0

        uppergradientTransparency = 0
        uppergradientTransparency2 = 0

    }

    if (document.getElementById('show_field').checked) {
        drawUpperHalfCircle()
        drawLowerHalfCircle()
        drawLowerHalfCircle2()
        drawUpperHalfCircle2()
    }
    
    //DRAWING WAVE,ARROWS, NP
    circle_radius = (eigenfrequenz_nm/3 - 250/3 + 5/2)/2;
    circle_radius = (Math.abs(400-eigenfrequenz_nm)/3 +10)/2
    drawCircle()
    drawWaveDamp(wave_damp)
    drawArrowsDamp(wave_damp)
    
    i_x += 0

    explFunction()
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ANIMATE WAVE++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                        function animate_wave(){
                            if (initAnim) return
                            c.clearRect(0,0,canvas.width, canvas.height)
                            setTimeout(() => {
                                requestAnimationFrame(animate_wave)
                            }, anim_interval*15);

                            //UPDATE WAVE
                            wave_width = 400 + (wave.wavelength-400)
                            //wave_damp = 0.005 * Math.abs(wave_width-eigenfrequenz_nm)
                            wave_damp = 1 - Math.exp(-((Math.abs(eigenfrequenz_nm) + Math.abs(wave_width-eigenfrequenz_nm))-Math.abs(eigenfrequenz_nm))/(2*wave_damp_absorptionwidth))
                            if (wave_damp > 1) {
                                wave_damp = 1
                            }
                            
                            //FIELD AROUND NP
                            uppergradient = c.createRadialGradient(circle_center_x, circle_center_y, 0, circle_center_x, circle_center_y, circle_radius*2+extra_fieldradius)
                            lowergradient = c.createRadialGradient(circle_center_x, circle_center_y, 0, circle_center_x, circle_center_y, circle_radius*2+extra_fieldradius)
                            uppergradient2 = c.createRadialGradient(circle_center_x, circle_center_y, 0, circle_center_x, circle_center_y, circle_radius*2+extra_fieldradius)
                            lowergradient2 = c.createRadialGradient(circle_center_x, circle_center_y, 0, circle_center_x, circle_center_y, circle_radius*2+extra_fieldradius)

                            lowergradientTransparency = Math.abs(circle_center_y - stack.bodies[middle_electron].position.y)*(1/circle_radius)
                            uppergradientTransparency = Math.abs(circle_center_y - stack.bodies[middle_electron].position.y)*(1/circle_radius)
                            lowergradientTransparency2 = Math.abs(circle_center_y - stack.bodies[middle_electron].position.y)*(1/circle_radius)
                            uppergradientTransparency2 = Math.abs(circle_center_y - stack.bodies[middle_electron].position.y)*(1/circle_radius)
                            if (stack.bodies[middle_electron].position.y < circle_center_y-2) {
                                uppergradient.addColorStop(0, 'transparent') //transparent
                                uppergradient.addColorStop(0.01, 'rgba(38, 132, 255,' + uppergradientTransparency + ')') //blue
                                uppergradient.addColorStop(1, 'rgba(38, 132, 255, 0)') //blue

                                lowergradient.addColorStop(0, 'transparent') //transparent
                                lowergradient.addColorStop(0.01, 'rgba(255, 38, 38,' + lowergradientTransparency + ')') //red #ff2626
                                lowergradient.addColorStop(1, 'rgba(255, 38, 38,0)') //grey
                            }
                            else if (stack.bodies[middle_electron].position.y > circle_center_y+2){
                                lowergradient2.addColorStop(0, 'transparent') 
                                lowergradient2.addColorStop(0.01, 'rgba(38, 132, 255,' + uppergradientTransparency2 + ')') //blue
                                lowergradient2.addColorStop(1, 'rgba(38, 132, 255, 0)') //blue

                                uppergradient2.addColorStop(0, 'transparent') //transparent
                                uppergradient2.addColorStop(0.01, 'rgba(255, 38, 38,' + lowergradientTransparency2 + ')') //red #ff2626
                                uppergradient2.addColorStop(1, 'rgba(255, 38, 38,0)') //grey
                            }
                            else if (stack.bodies[middle_electron].position.y > circle_center_y-1 && stack.bodies[middle_electron].position.y < circle_center_y+1) {
                                lowergradientTransparency = 0
                                lowergradientTransparency2 = 0 
                                uppergradientTransparency = 0
                                uppergradientTransparency2 = 0
                            }

                            if (document.getElementById('show_field').checked) {
                                drawUpperHalfCircle()
                                drawLowerHalfCircle()
                                drawLowerHalfCircle2()
                                drawUpperHalfCircle2()
                            }
                            
                            //DRAWING WAVE,ARROWS, NP
                            circle_radius = (eigenfrequenz_nm/3 - 250/3 + 5/2)/2;
                            circle_radius = (Math.abs(400-eigenfrequenz_nm)/3+10)/2
                            
                            drawCircle()
                            drawWaveDamp(wave_damp)
                            drawArrowsDamp(wave_damp)
                            
                            i_x += 1

                            explFunction() 

                            console.log(uppergradientTransparency)


                            //FORCE ON ELECTRONS
                            // if (i_x > stack_x - wave_start_pos && i_x < stack_x - wave_start_pos + wave_width/4) {
                            //     gravitydirection = -1
                            // }
                            // else if (i_x > stack_x - wave_start_pos && i_x < stack_x - wave_start_pos + 2*wave_width/4){
                            //     gravitydirection = +1
                            // }
                            // else if (i_x > stack_x - wave_start_pos && i_x < stack_x - wave_start_pos + 3*wave_width/4){
                            //     gravitydirection = -1
                            // }
                            // else if (i_x > stack_x - wave_start_pos && i_x < stack_x - wave_start_pos + 4*wave_width/4){
                            //     gravitydirection = +1
                            // }

                            if (i_x > circle_center_x - wave_start_pos && i_x < circle_center_x - wave_start_pos + 2*wave_width/4) {
                                gravitydirection = -1
                            }
                            else if (i_x > circle_center_x - wave_start_pos && i_x < circle_center_x - wave_start_pos + 4*wave_width/4){
                                gravitydirection = +1
                            }
                            else if (i_x > circle_center_x - wave_start_pos && i_x <  circle_center_x - wave_start_pos + 6*wave_width/4){
                                gravitydirection = -1
                            }
                            else if (i_x > circle_center_x - wave_start_pos && i_x < circle_center_x - wave_start_pos + 8*wave_width/4){
                                gravitydirection = +1
                            }
                            else {
                                gravitydirection = 0
                            }
                            engine.gravity.scale = gravitydirection*0.01

                            
                            if (eigenfrequenz_nm < 500 ) {
                                Engine.update(engine, 15, 1)
                            }
                            else if (eigenfrequenz_nm > 600) {
                                Engine.update(engine, 12, 1)
                            } 
                            else if (eigenfrequenz_nm >= 500 && eigenfrequenz_nm <= 600){
                                Engine.update(engine, 13, 1)
                            } 

                        }

//FIRST WIGGLE OF THE ELECTRONS
Engine.update(engine, 16, 1)
Engine.update(engine, 16, 1)
Engine.update(engine, 16, 1)
  


//DEFAULT AFTER LOADING
animate_wave_paused();


//ANPASSUNGEN

//NP-Radius mit eigenfrequenz
//kein Problem mehr beim ersten Laden
// Absorption nicht mehr linear mit Differenz, sondern mit exp-Funktion
//Hilfe Button mit Hover Effekt
//Transparenz der Regler angepasst

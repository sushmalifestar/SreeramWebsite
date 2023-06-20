1
function aboutme_click(){
    console.log('aboutme');
    document.getElementById('aboutme').style.display='block'
    document.getElementById('academics').style.display='none'
    document.getElementById('skills').style.display='none'
    document.getElementById('projects').style.display='none'
    document.getElementById('journals').style.display='none'
    document.getElementById('patents').style.display='none'
}

function academics_click(){
    console.log('academics');
    document.getElementById('aboutme').style.display='none'
    document.getElementById('academics').style.display='block'
    document.getElementById('skills').style.display='none'
    document.getElementById('projects').style.display='none'
    document.getElementById('journals').style.display='none'
    document.getElementById('patents').style.display='none'
}

function skills_click(){
    console.log('skills');
    document.getElementById('aboutme').style.display='none'
    document.getElementById('academics').style.display='none'
    document.getElementById('skills').style.display='block'
    document.getElementById('projects').style.display='none'
    document.getElementById('journals').style.display='none'
    document.getElementById('patents').style.display='none'
}

function projects_click(){
    console.log('projects');
    document.getElementById('aboutme').style.display='none'
    document.getElementById('academics').style.display='none'
    document.getElementById('skills').style.display='none'
    document.getElementById('projects').style.display='block'
    document.getElementById('journals').style.display='none'
    document.getElementById('patents').style.display='none'
}

function journals_click(){
    console.log('journals');
    document.getElementById('aboutme').style.display='none'
    document.getElementById('academics').style.display='none'
    document.getElementById('skills').style.display='none'
    document.getElementById('projects').style.display='none'
    document.getElementById('journals').style.display='block'
    document.getElementById('patents').style.display='none'
}

function patents_click(){
    console.log('patents');
    document.getElementById('aboutme').style.display='none'
    document.getElementById('academics').style.display='none'
    document.getElementById('skills').style.display='none'
    document.getElementById('projects').style.display='none'
    document.getElementById('journals').style.display='none'
    document.getElementById('patents').style.display='block'
}
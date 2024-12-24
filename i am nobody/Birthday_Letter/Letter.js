const openButton = document.getElementById('openButton');
        const closeButton = document.getElementById('closeButton');
        const coverPage = document.getElementById('coverPage');
        const content = document.getElementById('content');
        const sender = document.getElementById('to');
        const pic = document.getElementById('pic');
        const gif = document.querySelector('.gif');
        pic.style.opacity = 0; // Set initial opacity to 0

        openButton.addEventListener('click', () => {
            // Fade out the GIF
            gif.classList.add('fade-out'); // Add class to fade out the GIF
           
            // Move cover page and rotate content
            sender.classList.add('fade-out');
            pic.classList.add('fade-in');
            coverPage.style.transform = 'translateX(250px)'; // Move cover page
            content.style.transform = 'rotateY(180deg) translateX(150px)'; // Rotate content to show
            openButton.classList.add('fade-out'); // Fade out the open button
            
       });

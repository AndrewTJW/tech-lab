//document object model > DOM, try to get a specific html tag element with javascript
//once you get the tag, you could do like setting different style with javascript,toggle and change the classLIst, setting up the event listener.

const DOMS = {
    body: document.body,
    backToTopButton: document.getElementById('back-to-top'),
    scrollLinks: document.querySelectorAll('.scroll-link'),
    projectDetails: document.querySelectorAll('.project-details'),
};

// Handler to toggle state of anchor elements
DOMS.scrollLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active-link' class from all links
        DOMS.scrollLinks.forEach(item => {
            item.classList.remove('active-link');
        });
        // Add 'active-link' class to the clicked link except for the 'Download CV' link
        if (this.textContent !== 'Download CV'){
            this.classList.add('active-link');
        }
    });
});
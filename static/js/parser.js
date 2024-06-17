// Function to replace placeholders with JSON data
function renderTemplate(template, data) {
    return template.replace(/{(.*?)}/g, (match, key) => data[key.trim()] || '');
}

// Fetch JSON data
fetch('../static/json/content.json')
    .then(response => response.json())
    .then(data => {
        // Update the page title if available
        if (data.pageTitle) {
            document.title = data.pageTitle;
        }

        // Get the entire body content as a template
        const body = document.body.innerHTML;
        
        // Replace placeholders with JSON data
        const rendered = renderTemplate(body, data);
        
        // Replace the body content with the rendered content
        document.body.innerHTML = rendered;

        // Update CSS variables dynamically
        const root = document.documentElement;
        root.style.setProperty('--desc-color', data.descColor);
        root.style.setProperty('--btn-color', data.btnColor);
        root.style.setProperty('--primarybtnbg-color', data.primaryBtnBgColor);
        root.style.setProperty('--secondarybtnbg-color', data.secondaryBtnBgColor);
        root.style.setProperty('--testimonialsbg-color', data.testimonialsBgColor);
        root.style.setProperty('--btnstr-color', data.btnStrColor);
        root.style.setProperty('--navbg-color', data.navBgColor);
        root.style.setProperty('--herotxt-color', data.heroTxtColor);
        root.style.setProperty('--carouselcircle-color', data.carouselCircleColor);

        // Update the hero container background image
        const heroContainer = document.getElementById('hero-container');
        if (heroContainer && data.headerImg) {
            heroContainer.style.backgroundImage = `url(${data.headerImg})`;
        }
    })
    .catch(error => console.error('Error fetching JSON:', error));

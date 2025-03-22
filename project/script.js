document.addEventListener('DOMContentLoaded', function() {
    const expandableLinks = document.querySelectorAll('.expandable');

    expandableLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the link from actually navigating

            const nestedList = this.nextElementSibling; // Get the next element (the <ul>)

            if (nestedList.style.display === 'none' || nestedList.style.display === '') {
                nestedList.style.display = 'block';
            } else {
                nestedList.style.display = 'none';
            }
        });
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Remove active class from all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked button and corresponding content
            this.classList.add('active');
            const tabId = this.dataset.tab;
            document.getElementById(tabId).classList.add('active');
        });
    });


});
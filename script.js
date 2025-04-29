document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Sample memories data (in a real site, this might come from a database)
    const memories = [
        {
            title: "special Day",
            description: "puja",
            image: "special.jpg"
        },
        {
            title: "my",
            description: "My first hiking experience in the Rockies, breathtaking views!",
            image: "sir.jpg"
        }
    ];
    
    // Display memories
    const memoryGallery = document.querySelector('.memory-gallery');
    
    function displayMemories() {
        memoryGallery.innerHTML = '';
        
        memories.forEach(memory => {
            const memoryItem = document.createElement('div');
            memoryItem.className = 'memory-item';
            memoryItem.innerHTML = `
                <img src="${memory.image}" alt="${memory.title}">
                <h3>${memory.title}</h3>
                <p>${memory.description}</p>
            `;
            memoryGallery.appendChild(memoryItem);
        });
    }
    
    displayMemories();
    
    // Add memory functionality
    const addMemoryBtn = document.getElementById('add-memory-btn');
    
    addMemoryBtn.addEventListener('click', function() {
        const title = prompt("Enter memory title:");
        if (!title) return;
        
        const description = prompt("Enter memory description:");
        if (!description) return;
        
        // In a real application, you would upload an image file
        const image = "default-memory.jpg";
        
        memories.push({ title, description, image });
        displayMemories();
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', { name, email, message });
        
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
    
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
});
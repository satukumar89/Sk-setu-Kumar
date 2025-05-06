// বর্তমান বছর পাওয়ার ফাংশন
function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// স্ক্রল করলে নেভিগেশন বার এফেক্ট
function handleScroll() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// কন্টাক্ট ফর্ম সাবমিশন
function handleFormSubmission(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    // ভ্যালিডেশন চেক (সিম্পল)
    if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
        alert('সব ফিল্ড পূরণ করুন!');
        return;
    }
    
    // এখানে আপনি ফর্ম ডাটা সার্ভারে পাঠাতে পারেন
    // এটি জাস্ট একটি ডেমো মাত্র
    console.log('Form submitted:', {
        name: nameInput.value,
        email: emailInput.value,
        subject: subjectInput.value,
        message: messageInput.value
    });
    
    // ফর্ম রিসেট করুন
    document.getElementById('contact-form').reset();
    
    // সাবমিশন সাকসেস মেসেজ
    alert('আপনার মেসেজ সফলভাবে পাঠানো হয়েছে!');
}

// স্মুথ স্ক্রলিং ফাংশন
function initSmoothScrolling() {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// প্রোজেক্ট কার্ড অ্যানিমেশন
function initProjectCardAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// পেজ লোড হওয়ার সময় ইনিশিয়ালাইজেশন
document.addEventListener('DOMContentLoaded', function() {
    // বর্তমান বছর সেট করুন
    setCurrentYear();
    
    // স্ক্রল ইভেন্ট যোগ করুন
    window.addEventListener('scroll', handleScroll);
    
    // কন্টাক্ট ফর্ম হ্যান্ডলার যোগ করুন
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
    
    // স্মুথ স্ক্রলিং ইনিশিয়ালাইজ করুন
    initSmoothScrolling();
    
    // প্রোজেক্ট কার্ড অ্যানিমেশন ইনিশিয়ালাইজ করুন
    initProjectCardAnimations();
});

// স্কিল বার অ্যানিমেশন
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        
        // রিসেট
        bar.style.width = '0%';
        
        // অ্যানিমেট
        setTimeout(() => {
            bar.style.transition = 'width 1s ease-in-out';
            bar.style.width = width;
        }, 300);
    });
}

// স্ক্রল করলে স্কিল বার অ্যানিমেশন ট্রিগার করুন
function checkSkillsVisibility() {
    const skillsSection = document.querySelector('.skills');
    
    if (!skillsSection) return;
    
    const position = skillsSection.getBoundingClientRect();
    
    // যখন স্কিল সেকশন ভিউপোর্টে আসবে
    if (position.top < window.innerHeight && position.bottom >= 0) {
        animateSkillBars();
        // একবার অ্যানিমেশন হয়ে গেলে ইভেন্ট রিমুভ করা
        window.removeEventListener('scroll', checkSkillsVisibility);
    }
}

// স্ক্রল ইভেন্ট যোগ করুন স্কিল বার অ্যানিমেশনের জন্য
window.addEventListener('scroll', checkSkillsVisibility);
// পেজ লোড হওয়ার সময় চেক করুন
window.addEventListener('load', checkSkillsVisibility);
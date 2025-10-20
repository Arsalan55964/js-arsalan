// 1. Selecting Elements
const main = document.getElementById('main');
const buttons = document.querySelectorAll('.btn');
const form = document.querySelector('#myForm');

// 2. Creating Elements
function createCard(title, content) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    
    const contentElement = document.createElement('p');
    contentElement.textContent = content;
    
    card.appendChild(titleElement);
    card.appendChild(contentElement);
    
    return card;
}

// 3. Event Handling
function setupEventListeners() {
    // Click event
    document.addEventListener('click', (e) => {
        if (e.target.matches('.btn')) {
            console.log('Button clicked:', e.target.textContent);
        }
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        console.log('Form submitted:', Object.fromEntries(formData));
    });

    // Keyboard events
    document.addEventListener('keydown', (e) => {
        console.log('Key pressed:', e.key);
    });
}

// 4. DOM Manipulation Methods
function domManipulationExamples() {
    // Add class
    main.classList.add('active');
    
    // Remove class
    main.classList.remove('inactive');
    
    // Toggle class
    main.classList.toggle('visible');
    
    // Set attributes
    main.setAttribute('data-state', 'loaded');
    
    // Modify styles
    main.style.backgroundColor = '#f0f0f0';
    main.style.padding = '20px';
}

// 5. Dynamic Content Loading
async function loadContent() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        
        data.forEach(item => {
            const card = createCard(item.title, item.content);
            main.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

// HTML Structure (add to your HTML file)
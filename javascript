<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Interactive Showcase</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        :root {
            --primary: #6c63ff;
            --secondary: #ff6584;
            --accent: #36d1dc;
            --dark: #2a2a72;
            --light: #f8f9fa;
            --gray: #6c757d;
            --transition: all 0.3s ease;
            --shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            --radius: 12px;
        }

        body {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            color: #333;
            line-height: 1.6;
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        header {
            text-align: center;
            padding: 40px 0;
        }

        h1 {
            font-size: 3.5rem;
            background: linear-gradient(45deg, var(--primary), var(--accent));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            margin-bottom: 20px;
        }

        h2 {
            font-size: 2rem;
            color: var(--dark);
            margin-bottom: 30px;
            position: relative;
            display: inline-block;
        }

        h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 60px;
            height: 4px;
            background: var(--primary);
            border-radius: 2px;
        }

        p {
            font-size: 1.1rem;
            color: var(--gray);
            max-width: 800px;
            margin: 0 auto 30px;
        }

        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }

        .card {
            background: white;
            border-radius: var(--radius);
            padding: 30px;
            box-shadow: var(--shadow);
            transition: var(--transition);
            text-align: center;
        }

        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .card-icon {
            font-size: 3rem;
            color: var(--primary);
            margin-bottom: 20px;
        }

        .card h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: var(--dark);
        }

        .btn {
            display: inline-block;
            padding: 12px 25px;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
            text-decoration: none;
            box-shadow: var(--shadow);
            margin: 10px;
        }

        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(108, 99, 255, 0.2);
            background: var(--dark);
        }

        .interactive-section {
            background: white;
            border-radius: var(--radius);
            padding: 40px;
            margin: 50px 0;
            box-shadow: var(--shadow);
            text-align: center;
        }

        .counter {
            font-size: 4rem;
            font-weight: 700;
            color: var(--primary);
            margin: 20px 0;
        }

        .color-box {
            width: 200px;
            height: 200px;
            margin: 20px auto;
            border-radius: var(--radius);
            background: var(--primary);
            transition: var(--transition);
        }

        .slider-container {
            max-width: 600px;
            margin: 40px auto;
            position: relative;
            overflow: hidden;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
        }

        .slider {
            display: flex;
            transition: transform 0.5s ease;
        }

        .slide {
            min-width: 100%;
            padding: 40px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
            color: white;
            text-align: center;
        }

        .slide h3 {
            font-size: 1.8rem;
            margin-bottom: 20px;
        }

        .slider-controls {
            margin-top: 20px;
        }

        .todo-container {
            max-width: 500px;
            margin: 40px auto;
            background: var(--light);
            padding: 30px;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
        }

        #todo-input {
            width: 100%;
            padding: 15px;
            border: 2px solid #ddd;
            border-radius: 50px;
            font-size: 1rem;
            margin-bottom: 20px;
        }

        #todo-list {
            list-style: none;
            text-align: left;
        }

        #todo-list li {
            padding: 15px;
            background: white;
            border-radius: var(--radius);
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .todo-actions {
            display: flex;
            gap: 10px;
        }

        .todo-actions button {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            color: var(--gray);
            transition: var(--transition);
        }

        .todo-actions button:hover {
            color: var(--primary);
        }

        .completed {
            text-decoration: line-through;
            opacity: 0.7;
        }

        footer {
            text-align: center;
            padding: 40px 0;
            color: var(--gray);
            margin-top: 60px;
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 2.5rem;
            }
            
            h2 {
                font-size: 1.8rem;
            }
            
            .card-grid {
                grid-template-columns: 1fr;
            }
            
            .interactive-section {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>JavaScript Interactive Showcase</h1>
            <p>Explore the power of modern JavaScript with these interactive examples</p>
        </header>

        <div class="card-grid">
            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-calculator"></i>
                </div>
                <h3>Counter</h3>
                <p>Simple counter with increment and decrement functionality</p>
                <div class="counter" id="counter">0</div>
                <button class="btn" id="decrement">-</button>
                <button class="btn" id="increment">+</button>
            </div>

            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-palette"></i>
                </div>
                <h3>Color Changer</h3>
                <p>Change the color of the box using the buttons below</p>
                <div class="color-box" id="color-box"></div>
                <button class="btn" onclick="changeColor('#6c63ff')">Purple</button>
                <button class="btn" onclick="changeColor('#ff6584')">Pink</button>
                <button class="btn" onclick="changeColor('#36d1dc')">Blue</button>
            </div>

            <div class="card">
                <div class="card-icon">
                    <i class="fas fa-sliders-h"></i>
                </div>
                <h3>Slider</h3>
                <p>Simple image/content slider with navigation</p>
                <div class="slider-container">
                    <div class="slider" id="slider">
                        <div class="slide">
                            <h3>JavaScript</h3>
                            <p>The language of the web</p>
                        </div>
                        <div class="slide">
                            <h3>Interactive</h3>
                            <p>Create engaging user experiences</p>
                        </div>
                        <div class="slide">
                            <h3>Dynamic</h3>
                            <p>Update content without page reloads</p>
                        </div>
                    </div>
                </div>
                <div class="slider-controls">
                    <button class="btn" id="prev-slide">Previous</button>
                    <button class="btn" id="next-slide">Next</button>
                </div>
            </div>
        </div>

        <div class="interactive-section">
            <h2>To-Do List</h2>
            <p>A simple task manager using JavaScript</p>
            <div class="todo-container">
                <input type="text" id="todo-input" placeholder="Enter a new task...">
                <ul id="todo-list"></ul>
            </div>
        </div>

        <div class="interactive-section">
            <h2>Digital Clock</h2>
            <p>Real-time clock updating every second</p>
            <div class="counter" id="clock">00:00:00</div>
        </div>

        <footer>
            <p>JavaScript Interactive Showcase &copy; 2023</p>
            <p>Explore more JavaScript features and capabilities</p>
        </footer>
    </div>

    <script>
        // Counter functionality
        let count = 0;
        const counterElement = document.getElementById('counter');
        const incrementBtn = document.getElementById('increment');
        const decrementBtn = document.getElementById('decrement');

        function updateCounter() {
            counterElement.textContent = count;
            counterElement.style.color = count < 0 ? '#ff6584' : '#6c63ff';
        }

        incrementBtn.addEventListener('click', () => {
            count++;
            updateCounter();
        });

        decrementBtn.addEventListener('click', () => {
            count--;
            updateCounter();
        });

        // Color changer functionality
        function changeColor(color) {
            document.getElementById('color-box').style.backgroundColor = color;
        }

        // Slider functionality
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const slider = document.getElementById('slider');
        const prevButton = document.getElementById('prev-slide');
        const nextButton = document.getElementById('next-slide');

        function showSlide(index) {
            if (index >= slides.length) currentSlide = 0;
            else if (index < 0) currentSlide = slides.length - 1;
            else currentSlide = index;
            
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
        nextButton.addEventListener('click', () => showSlide(currentSlide + 1));

        // Auto-advance slides every 5 seconds
        setInterval(() => showSlide(currentSlide + 1), 5000);

        // To-Do List functionality
        const todoInput = document.getElementById('todo-input');
        const todoList = document.getElementById('todo-list');

        function addTodo() {
            const task = todoInput.value.trim();
            if (task) {
                const li = document.createElement('li');
                
                const taskText = document.createElement('span');
                taskText.textContent = task;
                
                const actions = document.createElement('div');
                actions.className = 'todo-actions';
                
                const completeBtn = document.createElement('button');
                completeBtn.innerHTML = '<i class="fas fa-check"></i>';
                completeBtn.addEventListener('click', () => {
                    taskText.classList.toggle('completed');
                });
                
                const deleteBtn = document.createElement('button');
                deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
                deleteBtn.addEventListener('click', () => {
                    li.remove();
                });
                
                actions.appendChild(completeBtn);
                actions.appendChild(deleteBtn);
                
                li.appendChild(taskText);
                li.appendChild(actions);
                
                todoList.appendChild(li);
                
                todoInput.value = '';
            }
        }

        todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addTodo();
            }
        });

        // Clock functionality
        function updateClock() {
            const now = new Date();

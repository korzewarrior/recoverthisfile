/**
 * RecoverThisFile - Enterprise Secure Recovery System
 * v1.0.0 - Last updated: 2025-04-10
 * 
 * Copyright (c) 2025 RecoverThisFile, Inc.
 * All rights reserved.
 */

;(function() {
    'use strict';
    
    // Core application configuration
    const app = {
        animationDuration: 300,  // ms
        processingSteps: [
            "Initializing quantum detective algorithms...",
            "Scanning for file fragments in sector 16A...",
            "Analyzing metadata signatures...",
            "Deploying forensic recovery probes...",
            "Bypassing security protocols...",
            "Reconstructing file headers...",
            "Combing through deleted sectors...",
            "Extracting data from quantum buffer...",
            "Assembling recovered fragments...",
            "Verifying data integrity...",
            "Finalizing recovery protocols..."
        ],
        fieldMessages: [
            "Interrogating suspicious sectors...",
            "Following deletion breadcrumbs...",
            "Uncovering hidden file fragments...",
            "Deploying quantum scanners in sector 7G...",
            "Collecting evidence from storage blocks...",
            "Tracking file movement patterns...",
            "Analyzing temporal deletion anomalies..."
        ],
        labMessages: [
            "Reconstructing file DNA sequence...",
            "Analyzing recovered fragments under quantum microscope...",
            "Cross-referencing file signatures...",
            "Matching partial checksums...",
            "Running recovery algorithms at 99.7% efficiency...",
            "Enhancing damaged sectors with AI prediction...",
            "Final assembly of recovered data..."
        ],
        // Animation and visual elements for investigation scenes
        investigationElements: {
            desk: [
                { html: '<div class="scene-element magnifying-glass">🔍</div>', css: { left: '20%', top: '30%', transform: 'rotate(-15deg)', animation: 'float 3s infinite alternate' } },
                { html: '<div class="scene-element papers">📋</div>', css: { left: '50%', top: '60%', transform: 'rotate(5deg)', animation: 'float 2.5s infinite alternate' } },
                { html: '<div class="scene-element coffee">☕</div>', css: { left: '75%', top: '40%', animation: 'float 4s infinite alternate' } }
            ],
            field: [
                { html: '<div class="scene-element binary">01</div>', css: { left: '15%', top: '20%', animation: 'float 3s infinite alternate' } },
                { html: '<div class="scene-element binary">10</div>', css: { left: '45%', top: '70%', animation: 'float 3.5s infinite alternate' } },
                { html: '<div class="scene-element detective">🕵️</div>', css: { left: '60%', top: '30%', animation: 'float 4s infinite alternate' } },
                { html: '<div class="scene-element binary">11</div>', css: { left: '80%', top: '50%', animation: 'float 2.5s infinite alternate' } }
            ],
            lab: [
                { html: '<div class="scene-element flask">🧪</div>', css: { left: '25%', top: '40%', animation: 'float 3s infinite alternate' } },
                { html: '<div class="scene-element microscope">🔬</div>', css: { left: '50%', top: '50%', animation: 'float 3.5s infinite alternate' } },
                { html: '<div class="scene-element atom">⚛️</div>', css: { left: '75%', top: '30%', animation: 'float 4s infinite alternate' } },
            ]
        }
    };
    
    // Gamification system configuration
    const gamification = {
        points: 0,
        achievements: [
            { id: "first_case", name: "First Case", description: "Submitted your first recovery case", unlocked: false, points: 50 },
            { id: "detective_novice", name: "Detective Novice", description: "Successfully recovered 5 files", unlocked: false, points: 100 },
            { id: "quantum_adept", name: "Quantum Adept", description: "Recovered data older than 1 year", unlocked: false, points: 150 },
            { id: "cold_case_specialist", name: "Cold Case Specialist", description: "Solved an 'Ancient history' case", unlocked: false, points: 200 },
            { id: "master_detective", name: "Master Detective", description: "Accumulated 500 recovery points", unlocked: false, points: 250 }
        ]
    };
    
    // Initialize application
    document.addEventListener('DOMContentLoaded', function() {
        createSceneStyles();
        bindEvents();
    });
    
    // Create CSS for investigation scene elements
    function createSceneStyles() {
        let style = document.createElement('style');
        style.innerHTML = `
            .scene-element {
                position: absolute;
                font-size: 1.5rem;
            }
            @keyframes float {
                0% { transform: translateY(0) rotate(0); }
                100% { transform: translateY(-10px) rotate(5deg); }
            }
            .binary {
                font-family: monospace;
                color: #64c5eb;
                text-shadow: 0 0 5px #64c5eb;
                font-size: 1rem;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Bind event handlers
    function bindEvents() {
        // Submit case button
        const submitBtn = document.getElementById('submit-case');
        if (submitBtn) {
            submitBtn.addEventListener('click', startInvestigation);
        }

        // New case button
        const newCaseBtn = document.getElementById('new-case');
        if (newCaseBtn) {
            newCaseBtn.addEventListener('click', resetInterface);
        }
    }
    
    // Start the investigation process
    function startInvestigation() {
        // Hide case form and show investigation progress
        document.getElementById('case-file-form').classList.add('hidden');
        document.getElementById('investigation-progress').classList.remove('hidden');
        
        // Populate the investigation scenes with elements
        populateScene('desk');
        
        // Start the progress animation
        animateProgress();
        
        // Unlock the first case achievement
        unlockAchievement('first_case');
        
        // Check for cold case achievement
        const timeRange = document.getElementById('time-range');
        if (timeRange && parseInt(timeRange.value) === 5) {
            unlockAchievement('cold_case_specialist');
        }

        // Start investigation animation sequence
        setTimeout(() => advanceToFieldStage(), 5000);
    }
    
    // Populate a scene with animated elements
    function populateScene(sceneType) {
        const scene = document.getElementById(`scene-${sceneType}`);
        if (!scene) return;
        
        // Clear existing elements
        scene.innerHTML = '';
        
        // Add new elements
        app.investigationElements[sceneType].forEach(element => {
            const div = document.createElement('div');
            div.innerHTML = element.html;
            const el = div.firstChild;
            
            // Apply styling
            Object.keys(element.css).forEach(key => {
                el.style[key] = element.css[key];
            });
            
            scene.appendChild(el);
        });
    }
    
    // Animate the progress bar
    function animateProgress() {
        let progress = 0;
        const progressBar = document.querySelector('.investigation-progress .progress-bar');
        const interval = setInterval(() => {
            progress += 1;
            progressBar.style.width = `${progress}%`;
            
            if (progress >= 100) {
                clearInterval(interval);
                showCaseSolved();
            }
        }, 100);  // 10 seconds total
    }
    
    // Advance to field investigation stage
    function advanceToFieldStage() {
        const fieldStage = document.getElementById('stage-field');
        fieldStage.classList.remove('hidden');
        
        // Update status message
        document.getElementById('status-field').textContent = getRandomMessage(app.fieldMessages);
        
        // Populate the field scene
        populateScene('field');
        
        // Continue to lab stage
        setTimeout(() => advanceToLabStage(), 4000);
    }
    
    // Advance to lab investigation stage
    function advanceToLabStage() {
        const labStage = document.getElementById('stage-lab');
        labStage.classList.remove('hidden');
        
        // Update status message
        document.getElementById('status-lab').textContent = getRandomMessage(app.labMessages);
        
        // Populate the lab scene
        populateScene('lab');
    }
    
    // Get random message from array
    function getRandomMessage(messageArray) {
        return messageArray[Math.floor(Math.random() * messageArray.length)];
    }
    
    // Show case solved screen
    function showCaseSolved() {
        document.getElementById('investigation-progress').classList.add('hidden');
        document.getElementById('case-solved').classList.remove('hidden');
        
        // Set random values for number of files recovered
        const filesCount = Math.floor(Math.random() * 10) + 1;
        document.getElementById('files-recovered').textContent = filesCount;
        
        // Update points gained
        const points = filesCount * 50;
        document.getElementById('recovery-points').textContent = points;
        
        // Add points to total
        gamification.points += points;
        
        // Check for master detective achievement
        if (gamification.points >= 500) {
            unlockAchievement('master_detective');
        }
        
        // Check for detective novice achievement
        if (filesCount >= 5) {
            unlockAchievement('detective_novice');
        }
        
        // Check for quantum adept achievement (based on time range)
        const timeRange = document.getElementById('time-range');
        if (timeRange && parseInt(timeRange.value) >= 3) {
            unlockAchievement('quantum_adept');
        }
    }
    
    // Reset the interface to show the case form again
    function resetInterface() {
        document.getElementById('case-solved').classList.add('hidden');
        document.getElementById('case-file-form').classList.remove('hidden');
        
        // Reset form fields
        const form = document.getElementById('case-file-form');
        const textareas = form.querySelectorAll('textarea');
        const selects = form.querySelectorAll('select');
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        const ranges = form.querySelectorAll('input[type="range"]');
        
        textareas.forEach(textarea => textarea.value = '');
        selects.forEach(select => select.selectedIndex = 0);
        checkboxes.forEach(checkbox => checkbox.checked = false);
        ranges.forEach(range => range.value = 3);
        
        // Reset investigation stages
        document.getElementById('stage-field').classList.add('hidden');
        document.getElementById('stage-lab').classList.add('hidden');
    }
    
    // Unlock achievement and show popup
    function unlockAchievement(achievementId) {
        const achievement = gamification.achievements.find(a => a.id === achievementId);
        if (!achievement || achievement.unlocked) return;
        
        // Mark as unlocked
        achievement.unlocked = true;
        
        // Update points
        gamification.points += achievement.points;
        
        // Show achievement popup
        const popup = document.getElementById('achievement-popup');
        document.getElementById('achievement-name').textContent = achievement.name;
        popup.classList.remove('hidden');
        
        // Hide after 3 seconds
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 3000);
    }
})(); 
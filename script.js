const inputField = document.getElementById('commandInput');
const outputDiv = document.getElementById('output');
const clearBtn = document.getElementById('clearBtn');
const clickableList = document.getElementById('clickableCommandList');

let commandHistory = [];
let historyIndex = -1;

// Base de datos de definiciones y ejemplos
const dictionary = {
    "init": {
        def: "📖 git init: Initializes a new, empty local repository.",
        ex: "📝 Example: git init"
    },
    "add": {
        def: "📖 git add: Adds file changes to the staging area.",
        ex: "📝 Example: git add .  (Adds all files) OR  git add index.html (Adds specific file)"
    },
    "commit": {
        def: "📖 git commit: Records a snapshot of the staged files in history.",
        ex: '📝 Example: git commit -m "added the animated GitBot"'
    },
    "branch": {
        def: "📖 git branch: Lists, creates, or deletes branches.",
        ex: "📝 Example: git branch feature-login  (Creates a new branch)"
    },
    "checkout": {
        def: "📖 git checkout: Switch between different branches (Older command).",
        ex: "📝 Example: git checkout main"
    },
    "switch": {
        def: "📖 git switch: Modern command to switch between branches.",
        ex: "📝 Example: git switch main"
    },
    "merge": {
        def: "📖 git merge: Merges an independent branch into your current branch.",
        ex: "📝 Example: git merge feature-login"
    },
    "push": {
        def: "📖 git push: Uploads your local commits to a remote repository.",
        ex: "📝 Example: git push origin main  OR  git push -u origin feature-login"
    },
    "pull": {
        def: "📖 git pull: Downloads changes from remote and merges them locally.",
        ex: "📝 Example: git pull origin main"
    }
};

// --- NOVEDAD 1: Escuchadores para Clic en Comandos de la izquierda ---
document.querySelectorAll('.command-item').forEach(item => {
    item.addEventListener('click', function() {
        const cmd = this.getAttribute('data-cmd');
        inputField.value = cmd;
        handleEnter(); // Ejecutar inmediatamente
        inputField.focus(); // Devolver foco a la terminal
    });
});

// Escuchadores de eventos de teclado (igual que antes)
inputField.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        handleEnter();
    } else if (e.key === 'ArrowUp') {
        handleArrowUp();
        e.preventDefault();
    } else if (e.key === 'ArrowDown') {
        handleArrowDown();
        e.preventDefault();
    }
});

clearBtn.addEventListener('click', clearOutput);

function handleEnter() {
    const input = inputField.value.trim().toLowerCase();

    if (input !== "") {
        // Añadir al historial
        if (commandHistory.length === 0 || commandHistory[commandHistory.length - 1] !== input) {
            commandHistory.push(input);
        }
        historyIndex = -1;
        processCommand(input);
    }
    inputField.value = '';
}

function handleArrowUp() {
    if (commandHistory.length > 0) {
        if (historyIndex === -1) {
            historyIndex = commandHistory.length - 1;
        } else if (historyIndex > 0) {
            historyIndex--;
        }
        inputField.value = commandHistory[historyIndex];
    }
}

function handleArrowDown() {
    if (commandHistory.length > 0 && historyIndex !== -1) {
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            inputField.value = commandHistory[historyIndex];
        } else {
            historyIndex = -1;
            inputField.value = '';
        }
    }
}

function printMessage(msg, className = '') {
    const newLine = document.createElement('div');
    newLine.textContent = msg;
    if (className) newLine.className = className;
    outputDiv.appendChild(newLine);
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

function clearOutput() {
    outputDiv.innerHTML = '<div class="system-msg">Terminal cleared. Visualizer reset.</div>';
    resetVisualizer();
    inputField.focus();
}

// --- NOVEDAD 2: Lógica LIVE del Visualizador de Flujo ---
function resetVisualizer() {
    document.querySelectorAll('.flow-node').forEach(node => node.classList.remove('active', 'highlight'));
    document.getElementById('node-wd').classList.add('active'); // Siempre empieza aquí
}

function updateVisualizer(cmd) {
    resetVisualizer(); // Empezar de cero para el nuevo comando
    const wd = document.getElementById('node-wd');
    const staging = document.getElementById('node-staging');
    const local = document.getElementById('node-local');
    const remote = document.getElementById('node-remote');

    // Nodos afectados según el comando
    switch (cmd) {
        case 'init':
            wd.classList.remove('active');
            local.classList.add('active', 'highlight');
            printMessage("SYSTEM: Visualizer showing initialized repository in Local Repo.", "system-msg");
            break;
        case 'add':
            wd.classList.add('active');
            staging.classList.add('active', 'highlight');
            printMessage("SYSTEM: Visualizer showing changes moving to Staging Area.", "system-msg");
            break;
        case 'commit':
            staging.classList.add('active');
            local.classList.add('active', 'highlight');
            printMessage("SYSTEM: Visualizer showing commit moving to Local Repository.", "system-msg");
            break;
        case 'push':
            local.classList.add('active');
            remote.classList.add('active', 'highlight');
            printMessage("SYSTEM: Visualizer showing commits moving to Remote Repo (GitHub).", "system-msg");
            break;
        case 'pull':
            remote.classList.add('active');
            wd.classList.add('active', 'highlight');
            local.classList.add('highlight');
            printMessage("SYSTEM: Visualizer showing changes moving from Remote to Working Dir & Local Repo.", "system-msg");
            break;
        case 'branch':
        case 'switch':
        case 'merge':
            wd.classList.add('active');
            local.classList.add('active', 'highlight');
            printMessage("SYSTEM: Visualizer showing internal Local Repo branch operation.", "system-msg");
            break;
    }
}

function processCommand(fullCmd) {
    printMessage(`> git ${fullCmd}`, 'echo-line');

    // Extraemos la primera palabra (ej: de "commit -m 'hola'" extraemos "commit")
    const args = fullCmd.split(' ');
    const baseCmd = args[0];

    if (baseCmd === "clear") {
        clearOutput();
    } else if (dictionary[baseCmd]) {
        // Mostramos la definición
        printMessage(dictionary[baseCmd].def, 'definition-line');
        // Mostramos el ejemplo exacto
        printMessage(dictionary[baseCmd].ex, 'example-line');

        updateVisualizer(baseCmd);
    } else {
        printMessage(`❌ Command 'git ${baseCmd}' not found in dictionary.`, 'error-msg');
        printMessage("Try: init, add, commit, branch, switch, merge, push, or pull.", 'system-msg');
        resetVisualizer();
    }
}

// --- 🧠 BASE DE DATOS DE CURIOSIDADES DE GIT (LORE) ---
const gitTrivia = [
    "大脑: Git was created by Linus Torvalds in 2005 for Linux kernel development.",
    "🚀 The name 'Git' is British slang for a silly or unpleasant person. Linus joked he names all projects after himself.",
    "⚡ Git is designed to be incredibly fast because most operations are local, no network needed.",
    "🔒 Everything in Git is check-summed (SHA-1). You can't change content without Git knowing.",
    "🐙 GitHub's 'Octocat' logo started as a simple illustration of an octopus with cat tentacles.",
    "A DAG (Directed Acyclic Graph) of commits is Git's core data structure."
];

// --- 🤖 LÓGICA DEL ROBOT TRIVIA MÓVIL ---
const triviaSpeech = document.getElementById('trivia-speech');
const triviaBotContainer = document.getElementById('trivia-bot-container');

// Función para cambiar el mensaje aleatoriamente
function changeTrivia() {
    const randomIndex = Math.floor(Math.random() * gitTrivia.length);
    const newText = gitTrivia[randomIndex];

    // Pequeña animación de desvanecimiento para el cambio de texto
    triviaSpeech.style.opacity = 0;
    setTimeout(() => {
        triviaSpeech.textContent = newText;
        triviaSpeech.style.opacity = 1;
    }, 300);
}

// 1. Cambiar mensaje automáticamente cada 15 segundos
setInterval(changeTrivia, 15000);

// 2. Cambiar mensaje inmediatamente si el usuario hace clic en el robot
triviaBotContainer.addEventListener('click', changeTrivia);
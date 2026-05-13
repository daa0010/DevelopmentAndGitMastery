const inputField = document.getElementById('commandInput');
const outputDiv = document.getElementById('output');
const clearBtn = document.getElementById('clearBtn');

let commandHistory = [];
let historyIndex = -1;

const dictionary = {
    "init": "📖 git init: Initializes a new, empty local repository or reinitializes an existing one.",
    "add": "📖 git add: Adds file changes to the staging area.",
    "commit": "📖 git commit: Records a permanent snapshot of the staged files in the version history.",
    "branch": "📖 git branch: Lists, creates, or deletes branches in your repository.",
    "checkout": "📖 git checkout: Switch between different branches in your project.",
    "switch": "📖 git switch: Modern command to switch between branches in your project.",
    "merge": "📖 git merge: Merges the history and changes of an independent branch into your current branch.",
    "push": "📖 git push: Uploads your local commits to a remote repository (e.g., GitHub).",
    "pull": "📖 git pull: Downloads changes from the remote repository and immediately merges them into your local branch."
};

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
    outputDiv.innerHTML = '<div class="system-msg">Terminal cleared.</div>';
    inputField.focus();
}

function processCommand(cmd) {
    printMessage(`> git ${cmd}`, 'echo-line');

    if (cmd === "clear") {
        clearOutput();
    } else if (dictionary[cmd]) {
        printMessage(dictionary[cmd], 'definition-line');
    } else {
        printMessage(`❌ Command 'git ${cmd}' not found in dictionary.`, 'error-msg');
        printMessage("Try: init, add, commit, branch, switch, merge, push, or pull.", 'system-msg');
    }
}
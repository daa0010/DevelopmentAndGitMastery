# Development and Git Mastery

This project is a comprehensive educational platform designed for Multiplatform Application Development (DAM) students. It combines a robust Java backend with an interactive web interface that serves as a professional Git simulator and technical dictionary.

## Web Application: Git Simulator & Dictionary

The main web page functions as a dynamic learning environment where users can experiment with the Git workflow visually.

### Key Features:
* **Terminal Simulator:** An interactive terminal that processes essential Git commands, providing precise definitions and usage examples.
* **Live Flow Visualizer:** A real-time diagram that illuminates to show how data moves between the Working Directory, Staging Area, Local Repository, and Remote Repository.
* **GitBot Mascot:** An animated assistant that provides "lore," trivia, and interesting facts about version control systems.
* **"Tech-Dark" Interface:** A professional UI optimized for code readability and an immersive developer experience.

## Project Structure

The repository is organized according to industry best practices, separating business logic, documentation, and the user interface:

```text
DevelopmentAndGitMastery/
├── .idea/                 # IDE internal configuration (IntelliJ)
├── docs/                  # Official documentation and project presentations
│   └── Development_and_Git_Mastery.pdf
├── src/                   # Backend logic and source code developed in Java
├── .gitignore             # Specifications for files and folders excluded from Git
├── index.html             # Main web platform structure and skeleton
├── pom.xml                # Project Object Model for dependency management (Maven)
├── README.md              # Main project documentation
├── script.js              # Interactive logic engine and simulator (JavaScript)
└── style.css              # Visual design, animations, and UI styles (CSS)
```

## Technologies Used

* **Backend:** Java with Maven for dependency management.
* **Frontend:** HTML5, CSS3 (Advanced animations), and JavaScript (State-based logic).
* **Version Control:** Git and GitHub.
* **Deployment:** GitHub Pages for hosting the interactive tool.

## Deployment

The interactive version of this project is publicly available. You can access the simulator through the following link:

**[Web Link](https://daa0010.github.io/DevelopmentAndGitMastery/)**

## Additional Documentation

The **`/docs`** folder contains the formal project presentation and the **Git Essential Cheat Sheet**. This quick-start guide covers the fundamental commands required for professional workflows:

## Development Workflow & Implementation Phases

## Phase 1: Initialization & Repository Setup
To start the project, a local repository was initialized in the IDE's integrated terminal, linked to a remote GitHub repository, and the base project structure was pushed.

### Workflow & Commands Used:
1. **Initial Setup:**
    - Created an empty public repository on GitHub named `DevelopmentAndGitMastery`.
    - Created a new project in IntelliJ IDEA (`DevelopmentAndGitMastery`).

2. **Linking to GitHub:**
    - Connected the local project to the remote repository:
      ```bash
      git remote add origin [https://github.com/daa0010/DevelopmentAndGitMastery.git](https://github.com/daa0010/DevelopmentAndGitMastery.git)
      ```
      
3. **Checking Status & Initial Commit:**
   - Verified the untracked files before staging them:
     ```bash
     git status
     ```
   - Staged foundational files (`.gitignore`, `pom.xml`, `README.md`):
     ```bash
     git add .
     ```
   - Committed the initial project state:
     ```bash
     git commit -m "Initial commit"
     ```
     
4. **Synchronization:**
    - Pushed the local `main` branch to the remote server:
      ```bash
      git push -u origin main
      ```

## Phase 2: Branching & Feature Development
To adhere to best practices and the assignment's constraints, a dedicated branch was created for implementing new features and AI-assisted logic.

### Workflow & Commands Used:

1. **Branch Creation:**
    - Created a new branch called `feature-update`:
      ```bash
      git branch feature-update
      ```

2. **Switching Branches:**
    - Moved from `main` to the new feature branch to begin development:
      ```bash
      git checkout feature-update
      ```
3. **Committing Branch Documentation:**
    - Updated the `README.md` to document the branching process, then staged and committed it:
      ```bash
      git add README.md
      git commit -m "new branch"
      ```

4. **Pushing the New Branch:**
    - Pushed the newly created branch (with its documentation commit) to the remote repository:
      ```bash
      git push -u origin feature-update
      ```
      
## Phase 3: Merging & Integration
Once the core logic was completed and tested in the `feature-update` branch, it was integrated back into the stable `main` branch to consolidate the project.

### Workflow & Commands Used:

1. **Switch to Main Branch:**
    - Switched back to the primary branch to prepare for integration:
      ```bash
      git checkout main
      ```

2. **Merge the Feature Branch:**
    - Merged the `feature-update` branch into `main`:
      ```bash
      git merge feature-update
      ```

3. **Push to Remote:**
    - Updated the remote `main` branch with the newly merged changes:
      ```bash
      git push origin main
      ```

---
**Developed by:** David Alonso Aguilar
**Institution:** MEDAC Sevilla Este
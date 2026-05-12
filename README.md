# Development and Git Mastery

## Objective
This project demonstrates AI-assisted software development alongside advanced mastery of Git version control via the Command Line Interface (CLI).

## Phase 1: Initialization & Repository Setup
To start the project, a local repository was initialized in the IDE's integrated terminal, linked to a remote GitHub repository, and the base project structure was pushed.

** Workflow & Commands Used: **
1. Created an empty public repository on GitHub.
2. Created a new project in IntelliJ IDEA (`DevelopmentAndGitMastery`).
3. Linked the local IntelliJ project to the remote GitHub repository.
    ```git remote add origin [https://github.com/daa0010/DevelopmentAndGitMastery.git](https://github.com/daa0010/DevelopmentAndGitMastery.git)```
4. Performed the `Initial commit` containing foundational files (`.gitignore`, `pom.xml`, `README.md`).
    Stage the foundational files: ```git add .```
    Commit the initial project structure: ```git commit -m "Initial commit"```
5. Pushed the initial commit to the remote repository.
    ```git push -u origin main```
6. Created the new branch for the application feature
    ```git branch feature-update```
7. Switched to the new branch to begin development
    ```git checkout feature-update```
   

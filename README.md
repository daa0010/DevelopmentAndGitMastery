# Development and Git Mastery

## Objective
This project demonstrates AI-assisted software development alongside advanced mastery of Git version control via the Command Line Interface (CLI).

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
      
## Phase 4: Merging & Integration
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


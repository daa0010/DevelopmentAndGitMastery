import java.util.Scanner;

/**
 * GitDictionary
 * A simple AI-assisted CLI educational tool to learn Git commands.
 */
public class GitDictionary {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = "";

        System.out.println("========================================");
        System.out.println("📚 Welcome to the Educational Git Dictionary 📚");
        System.out.println("========================================");
        System.out.println("Type a basic command (e.g., init, commit, branch) to see its definition.");
        System.out.println("Type 'exit' to close the program.");

        while (!input.equalsIgnoreCase("exit")) {
            System.out.print("\nSearch command: git ");
            input = scanner.nextLine().toLowerCase().trim();

            switch (input) {
                case "init":
                    System.out.println("📖 git init: Initializes a new, empty local repository or reinitializes an existing one.");
                    break;
                case "add":
                    System.out.println("📖 git add: Adds file changes to the staging area.");
                    break;
                case "commit":
                    System.out.println("📖 git commit: Records a permanent snapshot of the staged files in the version history.");
                    break;
                case "branch":
                    System.out.println("📖 git branch: Lists, creates, or deletes branches in your repository.");
                    break;
                case "checkout":
                case "switch":
                    System.out.println("📖 git " + input + ": Allows you to switch between different branches in your project.");
                    break;
                case "merge":
                    System.out.println("📖 git merge: Merges the history and changes of an independent branch into your current branch.");
                    break;
                case "push":
                    System.out.println("📖 git push: Uploads your local commits to a remote repository (e.g., GitHub).");
                    break;
                case "pull":
                    System.out.println("📖 git pull: Downloads changes from the remote repository and immediately merges them into your local branch.");
                    break;
                case "exit":
                    System.out.println("Exiting! May your repositories always be clean.");
                    break;
                default:
                    System.out.println("❌ Command not found. Try: init, add, commit, branch, checkout, merge, push, or pull.");
            }
        }
        scanner.close();
    }
}
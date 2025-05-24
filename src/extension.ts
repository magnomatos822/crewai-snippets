// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "crewai-vscode-extension" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let helloWorldCommand = vscode.commands.registerCommand('crewai-vscode-extension.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from CrewAI VSCode Extension!');
    });
    context.subscriptions.push(helloWorldCommand);

    let newCrewProjectCommand = vscode.commands.registerCommand('crewai.newCrewProject', async () => {
        const crewName = await vscode.window.showInputBox({
            prompt: "Enter the name for the new CrewAI crew project",
            placeHolder: "my_crew_project"
        });

        if (crewName) {
            const terminal = vscode.window.createTerminal("Create CrewAI Project");
            terminal.sendText(`crewai create crew ${crewName}`);
            terminal.show();
            vscode.window.showInformationMessage(`Attempting to create CrewAI crew project: ${crewName}. Check the terminal for output.`);
        } else {
            vscode.window.showWarningMessage("No project name provided. Crew project creation cancelled.");
        }
    });
    context.subscriptions.push(newCrewProjectCommand);

    let newFlowProjectCommand = vscode.commands.registerCommand('crewai.newFlowProject', async () => {
        const flowName = await vscode.window.showInputBox({
            prompt: "Enter the name for the new CrewAI flow project",
            placeHolder: "my_flow_project"
        });

        if (flowName) {
            const terminal = vscode.window.createTerminal("Create CrewAI Project"); // Can use the same terminal name or a different one
            terminal.sendText(`crewai create flow ${flowName}`);
            terminal.show();
            vscode.window.showInformationMessage(`Attempting to create CrewAI flow project: ${flowName}. Check the terminal for output.`);
        } else {
            vscode.window.showWarningMessage("No project name provided. Flow project creation cancelled.");
        }
    });
    context.subscriptions.push(newFlowProjectCommand);

    let runCrewOrFlowCommand = vscode.commands.registerCommand('crewai.runCrewOrFlow', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage("No active editor found. Please open a CrewAI Python file.");
            return;
        }

        const document = editor.document;
        if (document.languageId !== 'python') {
            vscode.window.showErrorMessage("The active file is not a Python file. Please open a CrewAI Python file.");
            return;
        }

        const filePath = document.uri.fsPath;
        const projectDir = vscode.Uri.file(filePath.substring(0, filePath.lastIndexOf('/'))).fsPath;
        
        // Ensure projectDir is correctly formatted for the shell, especially on Windows
        // For simplicity, this example assumes POSIX-like paths. Adjust if needed for Windows.
        // A more robust way would be to use path.dirname(filePath) from the 'path' module.
        // However, for terminal CWD, providing the directory path directly usually works.

        const terminal = vscode.window.createTerminal({
            name: "Run CrewAI",
            cwd: projectDir 
        });
        
        terminal.sendText("crewai run");
        terminal.show();
        vscode.window.showInformationMessage(`Attempting to run CrewAI project in: ${projectDir}. Check the terminal for output.`);
    });
    context.subscriptions.push(runCrewOrFlowCommand);

    let startChatSessionCommand = vscode.commands.registerCommand('crewai.startChatSession', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage("No active editor found. Please open a CrewAI Python file.");
            return;
        }

        const document = editor.document;
        if (document.languageId !== 'python') {
            vscode.window.showErrorMessage("The active file is not a Python file. Please open a CrewAI Python file.");
            return;
        }

        const filePath = document.uri.fsPath;
        // A more robust way to get the directory:
        // import * as path from 'path';
        // const projectDir = path.dirname(filePath);
        const projectDir = vscode.Uri.file(filePath.substring(0, filePath.lastIndexOf('/'))).fsPath;


        const terminal = vscode.window.createTerminal({
            name: "CrewAI Chat",
            cwd: projectDir
        });

        terminal.sendText("crewai chat");
        terminal.show();
        vscode.window.showInformationMessage(`Attempting to start CrewAI chat session in: ${projectDir}. Check the terminal.`);
    });
    context.subscriptions.push(startChatSessionCommand);

    let viewTaskOutputsCommand = vscode.commands.registerCommand('crewai.viewTaskOutputs', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage("No active editor found. Please open a CrewAI Python file.");
            return;
        }

        const document = editor.document;
        if (document.languageId !== 'python') {
            vscode.window.showErrorMessage("The active file is not a Python file. Please open a CrewAI Python file.");
            return;
        }

        const filePath = document.uri.fsPath;
        // A more robust way to get the directory:
        // import * as path from 'path';
        // const projectDir = path.dirname(filePath);
        const projectDir = vscode.Uri.file(filePath.substring(0, filePath.lastIndexOf('/'))).fsPath;

        const terminal = vscode.window.createTerminal({
            name: "CrewAI Task Outputs",
            cwd: projectDir
        });

        terminal.sendText("crewai log-tasks-outputs");
        terminal.show();
        vscode.window.showInformationMessage(`Attempting to fetch CrewAI task outputs in: ${projectDir}. Check the terminal.`);
    });
    context.subscriptions.push(viewTaskOutputsCommand);

    let runTestsCommand = vscode.commands.registerCommand('crewai.runTests', async () => {
        let projectDir: string | undefined = undefined;

        const editor = vscode.window.activeTextEditor;
        if (editor && editor.document.languageId === 'python') {
            const filePath = editor.document.uri.fsPath;
            // A more robust way to get the directory:
            // import * as path from 'path';
            // projectDir = path.dirname(filePath);
            projectDir = vscode.Uri.file(filePath.substring(0, filePath.lastIndexOf('/'))).fsPath;
        } else if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
            projectDir = vscode.workspace.workspaceFolders[0].uri.fsPath;
            vscode.window.showInformationMessage(`No active Python file. Using workspace root for tests: ${projectDir}`);
        }

        if (!projectDir) {
            vscode.window.showErrorMessage("Could not determine project directory. Please open a Python file or a workspace.");
            return;
        }

        const terminal = vscode.window.createTerminal({
            name: "CrewAI Tests",
            cwd: projectDir
        });

        terminal.sendText("crewai test");
        terminal.show();
        vscode.window.showInformationMessage(`Attempting to run CrewAI tests in: ${projectDir}. Check the terminal.`);
    });
    context.subscriptions.push(runTestsCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}

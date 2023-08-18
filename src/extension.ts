import { ExtensionContext } from 'vscode';
import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
} from 'vscode-languageclient/node'

let client: LanguageClient;

export function activate(context: ExtensionContext) {
    const serverOptions: ServerOptions = {
        command: "neut",
        args: ["lsp"]
    };

    const clientOptions: LanguageClientOptions = {
        documentSelector: [{
            scheme: "file",
            language: "neut",
        }]
    };

    client = new LanguageClient(
        'Neut',
        serverOptions,
        clientOptions,
    );

    client.start()
        .catch((e) => { throw e });
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
import PromptSync from "prompt-sync";

const prompt = PromptSync();

function calcularIMC(a: number, b: number): number {
    return a / (b * b);
}

const historico: string[] = [];

function iniciarSistema(): void {
    let opcao: string = "";

    while (opcao !== "0") {
        console.clear();

        console.log("\n--- CALCULADORA DE IMC ---");
        console.log("1. Novo Cálculo");
        console.log("2. Histórico de Consultas");
        console.log("0. Sair");

        opcao = prompt("Escolha uma opção: ");
        console.clear();

        switch (opcao) {
            case "1": {
                const p: number = Number(prompt("Digite o peso (kg): "));
                const h: number = Number(prompt("Digite a altura (m): "));

                const resultado: number = calcularIMC(p, h);
                const registro: string = `Peso: ${p}kg, Altura: ${h}m | IMC: ${resultado.toFixed(2)}`;

                historico.push(registro);
                console.log(`\n${registro}`);
                prompt("\nPressione Enter para voltar ao menu...");
                break;
            }

            case "2": {
                console.log("\n--- HISTÓRICO DE CONSULTAS ---");

                if (historico.length === 0) {
                    console.log("Nenhuma consulta realizada até ao momento.");
                } else {
                    for (let i = 0; i < historico.length; i++) {
                        console.log((i + 1) + ". " + historico[i]);
                    }
                }
                prompt("\nPressione Enter para voltar ao menu...");
                break;
            }

            case "0":
                console.log("Saindo...");
                break;

            default:
                prompt("Opção inválida!\nPressione Enter para voltar ao menu...");
        }
    }
}

iniciarSistema();

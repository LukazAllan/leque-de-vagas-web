"use server";
import { z } from "zod";

export type EstadoCriacaoVaga = {
    ok: boolean;
    erros: string[];
    mensagem: string;
};

const FormVaga = z.object({
    titulo: z.string().min(5, "O titulo espera mais que cinco caracteres"),
    empresa: z.string().min(5, "O nome da empresa espera mais que cinco caracteres"),
    empresaSlug: z.string().min(1, "Qual empresa?"),
    area: z.string().min(1, "A área espera mais que cinco caracteres"),
    senioridade: z.string().min(4, "A senioridade espera mais que quatro caracteres"),
    local: z.string().min(1, "Qual local?"),
    aceitaIniciante: z.boolean(),
    descricao: z.string().min(5, "A descrição espera mais que cinco caracteres")
});

export async function criarVaga(
    _estadoAnterior: EstadoCriacaoVaga,
    dados: FormData
): Promise<EstadoCriacaoVaga> {
    const analise = FormVaga.safeParse({
        ...Object.fromEntries(dados),
        aceitaIniciante: dados.get("aceitaIniciante") === "on",
    })
    if (!analise.success){
        return {
            ok: false,
            erros: analise.error.issues.map((erro) => erro.message),
            mensagem: "",
        };
    }
    const data = analise.data
    console.log(`form diz: ${JSON.stringify(data)}`);
    return { ok: true, erros: [], mensagem: "Informações recebidas." };
}
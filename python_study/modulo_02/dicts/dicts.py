# dicionário simples
aluno = {
    "nome": "Maria",
    "idade": 20,
    "curso": "Engenharia"
}

print(aluno)
# saída: {'nome': 'Maria', 'idade': 20, 'curso': 'Engenharia'}

print(aluno["nome"])   # Maria
print(aluno["idade"])  # 20

# usando .get (mais seguro, evita erro se a chave não existir)
print(aluno.get("curso"))      # Engenharia
print(aluno.get("nota", "N/A"))  # retorna 'N/A' se a chave não existir

aluno["idade"] = 21
aluno["curso"] = "Ciência da Computação"
print(aluno)

aluno["nota"] = 9.5
print(aluno)

del aluno["nota"]       # remove a chave 'nota'
aluno.pop("curso")      # remove e retorna o valor
print(aluno)


for chave in aluno:
    print(chave, aluno[chave])

for chave, valor in aluno.items():
    print(f"{chave} => {valor}")


alunos = [
    {"nome": "Maria", "idade": 20},
    {"nome": "João", "idade": 22},
    {"nome": "Ana", "idade": 19}
]

# exemplo: pegar só os nomes
nomes = [a["nome"] for a in alunos]
print(nomes)  # ['Maria', 'João', 'Ana']


jogador = {
    "nome": "Carlos",
    "classe": "Mago",
    "atributos": {
        "força": 10,
        "inteligência": 90,
        "vida": 100
    }
}

print(jogador["atributos"]["inteligência"])  # 90

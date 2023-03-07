"""""
* Criar variáveis para nome (str), idade (int),
* Altura (float) e peso (float) de uma pessoa
* Criar variável com o ano atual (int)
* Obter o ano de nascimento da pessoa (baseado na idade e no ano atual)
* Obter o IMC da Pessoa com 2 casas decimais (peso e na altura da pessoa)
* Exibir um texto com todos os valores na tela usando F-Strings (com as chaves)
"""""

nome = 'Nando'
idade = 30
altura = 1.79
peso = 79.5
ano_atual = 2023
nascimento = ano_atual - idade
imc = peso / altura ** 2
#imc:.2f

print(f'{nome} tem {idade} anos, {altura} de altura e pesa {peso}kg.')
print(f'O IMC de {nome} é {imc:.2f}.')
print(f'{nome} nasceu em {nascimento}.')

#CONCLUÍDO SOZINHO !!!
"""""
Condições IF, ELIF E ELSE 

IF (SE)
ELSE (SE NAO)
ELIF (SE NAO SE)
"""""

if False:
    print('Verdadeiro.')
    print('teste teste2')
elif True:
    print('Agora é verdadeira.')
    nome = input('Qual seu nome? ')

    print(f'Seu nome é {nome}.')
elif False:
    print('Mais uma Verdadeira.')
    print(22 + 22)
else:
    print('Não é verdadeiro.')
    print('Olá.')

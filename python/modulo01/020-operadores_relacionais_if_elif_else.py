""""
Operadores Relacionais
Todos retornam valor bool (True, False)
= -> afirmando valor 'variaveis'
== -> perguntando se é igual
> -> maior que
>= -> maior ou igual
< -> menor que
<= -> menor ou igual
!= -> diferente
"""""

nome = input('Qual seu nome? ')
idade = input('Qual sua idade? ')

idade = int(idade)

# Limite para pegar empréstimo
idade_menor = 18
idade_maior = 30

if idade >= idade_menor and idade <= idade_maior:
    print(f'{nome} pode contratar empréstimo.')
else:
    print(f'{nome} não pode contratar empréstimo.')

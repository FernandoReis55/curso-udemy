"""""
usuario = input('Digite seu Usuário: ')
qtd_caracteres = len(usuario)

if qtd_caracteres < 6:
    print('Mínimo de caracteres são 6.')
else:
    print('Voçê foi cadastrado.')
"""""

string1 = input('Digite. ')
string2 = input('Outra Coisa ')

print(f'A quantidade total de caracteres digitados foi {len(string1) + len(string2)}')


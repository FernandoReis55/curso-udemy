name = 'Fernando'
age = 29
height = 1.80
e_larger = age > 18
weight = 80
imc = weight / height ** 2
imc = round(imc-0,2)

#print(name, 'tem', age, 'anos de idade e seu imc é', imc)
#print(f'{name} tem {age} anos de idade e seu imc é {imc:.2f}')
print('{n} tem {a} anos de idade e seu imc é {im}'.format(n=name, a=age, im=imc))
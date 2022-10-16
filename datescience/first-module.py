PI = 3.14  # PI é uma "constante" em nosso módulo


def square(side):
    '''Calculate area of square.'''
    return side * side


def rectangle(length, width):
    '''Calculate area of rectangle.'''
    return length * width


def circle(radius):
    '''Calculate area of circle.'''
    return PI * radius * radius


primary = int(input("Escreva o lado principal: "))
secundary = int(input("Escreva o lado secundário: "))


print('A área do quadrado é: ', square(primary))
print('A área do retângulo é: ', rectangle(primary, secundary))
print('A área do círculo é: ', circle(primary))

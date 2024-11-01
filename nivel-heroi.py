from colorama import init, Fore, Back, Style
init(autoreset=True)

print(Fore.GREEN + "Desafio Classificador de Nível de Herói")
print(Fore.YELLOW + "*" * 39)

nome_heroi = input("Diga o Nome de eu Herói: ")
xp = int(input("Diga a Experiência de seu Herói: "))
print(Fore.YELLOW + "*" * 39)
nivel_heroi = ""

if xp <= 1000:
    nivel_heroi = "Ferro"
elif 1001 <= xp <= 2000:
    nivel_heroi = "Bronze"
elif 2001 <= xp <= 5000:
    nivel_heroi = "Prata"
elif 5001 <= xp <= 7000:
    nivel_heroi = "Ouro"
elif 7001 <= xp <= 8000:
    nivel_heroi = "Platina"
elif 8001 <= xp <= 9000:
    nivel_heroi = "Ascendente"
elif 9001 <= xp <= 1000:
    nivel_heroi == "Imortal"
else:
    nivel_heroi = "Radiante"

print(f"===> O Herói de nome {nome_heroi} está no nível de {nivel_heroi}.")

import re

with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

count_before = content.count('*${')
print("Asteriscos *${ antes:", count_before)

content = content.replace('*${', '${')
content = content.replace('}*', '}')

count_after = content.count('*${')
print("Asteriscos *${ depois:", count_after)

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Asteriscos removidos com sucesso!")

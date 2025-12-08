# Sorteador de Números Aleatórios

Aplicação simples de front-end que sorteia um número inteiro aleatório entre dois valores informados pelo usuário, usando `Math.random()` para criar resultados instantâneos e imprevisíveis.

![Prévia da interface](./sort.png)

## Como funciona
- Informe um valor mínimo e máximo nos campos numéricos.
- Clique em **Sortear** para gerar um número inteiro dentro do intervalo escolhido.
- O cálculo usa `Math.floor(Math.random() * (max - min + 1)) + min` para garantir que tanto o mínimo quanto o máximo possam sair no resultado.

## Tecnologias
- HTML semântico para a estrutura.
- CSS para estilização e responsividade básica.
- JavaScript puro para a lógica do sorteio com `Math.random()`.

## Executando o projeto
1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` diretamente no navegador ou com uma extensão como Live Server.
3. Preencha os campos, clique em **Sortear** e veja o número gerado.

## Estrutura de pastas
```
.
├── index.html      # Marcações da página e inputs do sorteio
├── style.css       # Estilos e layout
├── scripts.js      # Lógica do sorteio com Math.random
└── sort.png        # Imagem de prévia/logo
```

## Próximas melhorias sugeridas
- Exibir o número sorteado na tela (em destaque) em vez de usar apenas alertas/console.
- Validar intervalos inválidos (máximo menor que mínimo) com mensagens amigáveis.
- Adicionar botão para copiar o resultado e um histórico dos últimos sorteios.

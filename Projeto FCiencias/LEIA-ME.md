# Site — Plástico e Petróleo: a pirólise como solução sustentável

Protótipo de site do projeto de pesquisa (FCiências / SENAC).

## Como abrir
Dê **duplo clique em `index.html`** — abre em qualquer navegador, sem instalar nada.

## Como adicionar a IMAGEM do reator
1. Salve a imagem do reator (a que você enviou no chat) com o nome:
   **`pirolise-diagrama.png`**
2. Coloque dentro da pasta **`assets/`**.
   Caminho final: `assets/pirolise-diagrama.png`
   > Enquanto o arquivo não existir, aparece um aviso no lugar da imagem.

## Como adicionar o VÍDEO de animação
Abra o `index.html` e procure por **"ESPAÇO PARA O VÍDEO"** (seção 02).
Escolha **uma** das opções:

**Opção A — arquivo de vídeo local (recomendado):**
1. Coloque o vídeo em `assets/animacao.mp4`
2. Descomente o bloco `<!-- OPÇÃO A: vídeo local ... -->`
3. Apague o bloco do "Placeholder"

**Opção B — vídeo do YouTube:**
1. Descomente o bloco `<!-- OPÇÃO B: YouTube ... -->`
2. Troque `SEU_ID_AQUI` pelo ID do vídeo
   (ex.: em `youtube.com/watch?v=**abc123**`, o ID é `abc123`)
3. Apague o bloco do "Placeholder"

## Arquivos
- `index.html` — conteúdo e estrutura
- `styles.css` — visual (cores, layout)
- `script.js` — animações (contadores, reveal, menu)
- `assets/` — imagem e vídeo

## Publicar na internet (opcional, grátis)
Arraste a pasta inteira para **netlify.com/drop** ou use **GitHub Pages**.

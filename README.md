# Landing page — Denise Fernandes Dias

Página estática em HTML, CSS e JavaScript, preparada para GitHub Pages. Não usa banco de dados, formulários ou serviços de hospedagem adicionais.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie **o conteúdo desta pasta** para a raiz do repositório: `index.html`, `styles.css`, `main.js`, `.nojekyll` e a pasta `assets`.
3. No repositório, abra **Settings → Pages**. Em **Build and deployment**, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)`; salve.
4. O GitHub mostrará o endereço da página em **Settings → Pages**. As referências aos arquivos são relativas, portanto funcionam tanto em `usuario.github.io/repositorio/` quanto em um domínio próprio.

## Domínio .com.br futuramente

Após registrar o domínio, configure-o em **Settings → Pages → Custom domain** e depois ajuste os registros DNS no provedor do domínio conforme a documentação oficial do GitHub. Não inclua um arquivo `CNAME` antes de saber qual domínio será usado.

Documentação: https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site

## Conteúdo e manutenção

- Os contatos ficam em `index.html`. Número do WhatsApp: `5521970262181` no link `wa.me`.
- Os links do WhatsApp abrem uma mensagem preenchida conforme a área ou o assunto escolhido. A pessoa revisa e toca em **Enviar** no WhatsApp; o site não envia mensagens sozinho.
- A foto original está em `assets/denise-fernandes-dias.jpg`. O enquadramento próximo é feito somente pelo CSS; o arquivo original e suas cores foram preservados.
- As cores principais estão no começo de `styles.css`, em `:root`, para permitir uma troca rápida quando Denise escolher a paleta definitiva.
- Uma foto feita em ambiente profissional pode substituir o arquivo atual com o mesmo nome, sem alterar a estrutura da página.
- O perfil do Facebook não recebeu link porque foi fornecido apenas o nome “Denise Fernandes”, sem URL de perfil. Ele pode ser acrescentado assim que houver o endereço exato.
- Antes de tornar a página pública, Denise deve conferir nome, OAB, formação, áreas de atuação, exemplos de questões em cada área, experiência com ações odontológicas, endereço e autorização para uso da foto.
- Não foram incluídos depoimentos, resultados de casos, preços ou promessas de resultado.

Para abrir localmente, dê duplo clique em `index.html`. Para conferir com um servidor local, use qualquer servidor estático simples apontando para esta pasta.

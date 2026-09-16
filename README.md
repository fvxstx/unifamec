# Unifamec — Landing Page

Landing page em **Next.js (App Router) + TypeScript + Tailwind CSS** para a Unifamec, construída a partir do design de referência em PDF.

## Como rodar

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Estrutura

```
app/
  layout.tsx        # fontes (Inter + Archivo), metadata
  page.tsx           # monta as seções na ordem do brief
  globals.css
components/
  Header.tsx          # menu fixo/transparente + hambúrguer mobile
  Hero.tsx             # headline + formulário "Entre em contato!"
  CourseTypes.tsx      # Graduações / Graduação Tecnológica / Pós-Graduação
  Highlight.tsx        # duas faixas escuras alternando imagem/texto
  CampusExperience.tsx # grid bento "Vai Além da sala de aula"
  Gallery.tsx          # mosaico "Memórias que criamos juntos!"
  SocialFeed.tsx       # carrossel "Acompanhe a Unifamec"
  Footer.tsx
lib/
  data.ts              # dados mockados (cursos, galeria, posts, selects)
public/images/
  *.jpg                # placeholders gerados — substitua pelas fotos reais
  bg-gradiente.jpg      # background usado no Hero e na seção "Acompanhe"
```

## Placeholders de imagem

Todas as imagens em `public/images/` são placeholders gerados automaticamente
(cor sólida + nome do arquivo), só para você visualizar o layout funcionando.
Basta substituir os arquivos mantendo o **mesmo nome** que os componentes já
apontam para a imagem certa:

- `hero-student.jpg` — foto do estudante no Hero
- `bg-gradiente.jpg` — fundo gradiente (Hero e "Acompanhe a Unifamec")
- `campus-corridor.jpg` — corredor da faculdade
- `highlight-1.jpg`, `highlight-2.jpg` — faixas de destaque
- `beyond-1.jpg` a `beyond-5.jpg` — grid "Vai Além da sala de aula"
- `gallery-1.jpg` a `gallery-9.jpg` — mosaico de memórias
- `social-1.jpg` a `social-4.jpg` — cards do carrossel de Instagram

## Paleta

| Uso            | Cor       |
|----------------|-----------|
| Azul-marinho   | `#0F1B3D` / `#16224A` |
| Vermelho/CTA   | `#E63946` |
| Cinza claro    | `#F5F6FA` |

## Notas

- O formulário do Hero é apenas visual (sem submit real) — plugue sua API/rota de contato em `components/Hero.tsx`.
- O carrossel de Instagram usa scroll nativo com snap; os botões de seta chamam `scrollBy`.
- Cores, tipografia e classe `bg-gradiente` estão centralizadas em `tailwind.config.ts`.

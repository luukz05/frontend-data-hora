# Frontend Data Hora

Aplicacao React com Vite que consome a API de data e hora.

## Executar localmente

Crie um arquivo `.env` com a URL da API:

```text
VITE_API_URL=http://localhost:3000
```

Depois execute:

```bash
npm install
npm run dev
```

## Deploy na Vercel

Configure o projeto na Vercel com:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variable: `VITE_API_URL=https://sua-api-no-render.onrender.com`

Troque a URL acima pela URL real publicada no Render.

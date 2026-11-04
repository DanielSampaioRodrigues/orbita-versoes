// Service worker da versão de navegador (iPad). Gerado no build: VERSAO e
// ARQUIVOS são preenchidos pelo vite.config.ts.
//
// Princípio 1 (nada muda sem aviso): cada versão fica guardada no seu próprio
// cache, e o app continua abrindo a versão "ativa" até a pessoa aceitar a nova
// (o app pede pelo aviso de atualização). Assim funciona sem internet e nunca
// troca de versão sozinho.

const VERSAO = "0.51.0";
const ARQUIVOS = ["assets/OpenDyslexic-Bold---3zZrhu.woff2","assets/OpenDyslexic-Regular-lDhYFwX0.woff2","assets/andika-latin-400-normal-BTFTIZb-.woff2","assets/andika-latin-700-normal-Dk95f5lc.woff2","assets/andika-latin-ext-400-normal-D580Nkki.woff2","assets/andika-latin-ext-700-normal-Ch3SGZaH.woff2","assets/arimo-latin-400-italic-xqrvcx6M.woff2","assets/arimo-latin-400-normal-Bqnq6eT5.woff2","assets/arimo-latin-700-italic-B1UitvUd.woff2","assets/arimo-latin-700-normal-DhEW593l.woff2","assets/atkinson-hyperlegible-next-latin-ext-wght-normal-C6vrW8VD.woff2","assets/atkinson-hyperlegible-next-latin-wght-normal-BcXVPD7q.woff2","assets/caladea-latin-400-italic-LV4kG-PE.woff2","assets/caladea-latin-400-normal-CEHWF4nY.woff2","assets/caladea-latin-700-italic-DswTWW_F.woff2","assets/caladea-latin-700-normal-Emkxzyyt.woff2","assets/carlito-latin-400-italic-BiMes9J5.woff2","assets/carlito-latin-400-normal-R-CeALMm.woff2","assets/carlito-latin-700-italic-Ckstd88m.woff2","assets/carlito-latin-700-normal-DQ6DOkPk.woff2","assets/caveat-latin-wght-normal-C1hSzPvX.woff2","assets/comic-neue-latin-400-normal-BdhG8RSD.woff2","assets/comic-neue-latin-700-normal-NE4Vcoll.woff2","assets/core-BDLQIKQw.js","assets/courier-prime-latin-400-italic-CaR7PCvg.woff2","assets/courier-prime-latin-400-normal-BbyBr73r.woff2","assets/courier-prime-latin-700-italic-CZikIXQl.woff2","assets/courier-prime-latin-700-normal-D1YCjmaD.woff2","assets/cousine-latin-400-italic-CtEGp3M_.woff2","assets/cousine-latin-400-normal-BhCTjpdJ.woff2","assets/cousine-latin-700-italic-Ylj-NGcM.woff2","assets/cousine-latin-700-normal-CwJ0o97b.woff2","assets/decompress-IGp3xSMr.js","assets/dist-C-tQ5Kv7.js","assets/dist-js-CsHmFPPj.js","assets/dist-js-DhiNqmcE.js","assets/dist-uWg-E--H.js","assets/docx-DMZmAgUQ.js","assets/eb-garamond-latin-wght-italic-AvGrCMCN.woff2","assets/eb-garamond-latin-wght-normal-CRpggXlh.woff2","assets/es-DU6iLgOF.js","assets/fontes-DlBqGgdc.js","assets/fontesPdf-BXPEm1iI.js","assets/fontkit.es-BKBKAxzz.js","assets/fundos-CHYGz4b3.js","assets/gelasio-latin-400-italic-CbLsUXfq.woff2","assets/gelasio-latin-400-normal-Czfo_zVD.woff2","assets/gelasio-latin-700-italic-MXBbtGbs.woff2","assets/gelasio-latin-700-normal-DuRqSYpn.woff2","assets/imagem-OdXpupW8.js","assets/index-CD_T3gpD.js","assets/index-DBTuE27f.css","assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2","assets/inter-latin-wght-normal-Dx4kXJAl.woff2","assets/jetbrains-mono-latin-ext-wght-normal-DBQx-q_a.woff2","assets/jetbrains-mono-latin-wght-normal-B9CIFXIH.woff2","assets/lato-latin-400-italic-Dc0B1559.woff2","assets/lato-latin-400-normal-BEhtfm5r.woff2","assets/lato-latin-700-italic-Jzc1y7Yy.woff2","assets/lato-latin-700-normal-BUGMgin4.woff2","assets/lexend-latin-ext-wght-normal-B6JQhE1e.woff2","assets/lexend-latin-wght-normal-ci0D1wrL.woff2","assets/lexend-vietnamese-wght-normal-RvljkFvg.woff2","assets/lib-DipmEAlQ.js","assets/lib-mjs-BJ19xfdN.js","assets/lib-mjs-BtKwjtZE.js","assets/lib-mjs-u5midAJV.js","assets/literata-latin-ext-wght-normal-BnEbWgdZ.woff2","assets/literata-latin-wght-normal-DLxlUchJ.woff2","assets/lora-latin-wght-italic-DBI-iqMr.woff2","assets/lora-latin-wght-normal-BiLcIKcI.woff2","assets/merriweather-latin-400-italic-CuD3zK4B.woff2","assets/merriweather-latin-400-normal-G4kZaoXi.woff2","assets/merriweather-latin-700-italic-D8D7WEYy.woff2","assets/merriweather-latin-700-normal-DoUP8Ce-.woff2","assets/montserrat-latin-wght-italic-jzfX-GOl.woff2","assets/montserrat-latin-wght-normal-l_AIctKy.woff2","assets/nunito-latin-ext-wght-normal-CXYtwYOx.woff2","assets/nunito-latin-wght-normal-BzFMHfZw.woff2","assets/open-sans-latin-wght-italic-Bf1Hxpwk.woff2","assets/open-sans-latin-wght-normal-CWNzRldh.woff2","assets/orbita_motor_web-Di-8qDmy.js","assets/orbita_motor_web_bg-3RA9Xahx.wasm","assets/pako-CYNZd58i.js","assets/patrick-hand-latin-400-normal-B7HHA2Vw.woff2","assets/pdf-Cks3_gQv.js","assets/pdf.worker.min-yatZIOMy.mjs","assets/playfair-display-latin-wght-italic-DmbndNpe.woff2","assets/playfair-display-latin-wght-normal-BOwq7MWX.woff2","assets/roboto-latin-wght-italic-BZYj8CJm.woff2","assets/roboto-latin-wght-normal-ccAYIvAh.woff2","assets/rolldown-runtime-BCiCTKAo.js","assets/source-sans-3-latin-wght-italic-DLiStKT6.woff2","assets/source-sans-3-latin-wght-normal-Bo_j9asI.woff2","assets/source-serif-4-latin-wght-italic-B-rCj6ir.woff2","assets/source-serif-4-latin-wght-normal-DMe4EKeb.woff2","assets/src-8Pedc2Mo.js","assets/tinos-latin-400-italic-BYAl0kbZ.woff2","assets/tinos-latin-400-normal-rilFpyjL.woff2","assets/tinos-latin-700-italic-vJg8Axdx.woff2","assets/tinos-latin-700-normal-qGf2y18O.woff2","icone-180.png","icone-192.png","icone-512.png","icone-maskable-512.png","index.html","manifest.webmanifest"];

const CACHE = `orbita-${VERSAO}`;
const GALERIA = "orbita-galeria";
const PONTEIRO = "orbita-ativa";
const BASE = new URL("./", self.location).href;
const CHAVE_ATIVA = `${BASE}__versao-ativa`;

async function lerAtiva() {
  const r = await (await caches.open(PONTEIRO)).match(CHAVE_ATIVA);
  return r ? r.text() : null;
}
async function definirAtiva(v) {
  await (await caches.open(PONTEIRO)).put(CHAVE_ATIVA, new Response(v));
}
async function limpar(ativa) {
  const manter = new Set([CACHE, GALERIA, PONTEIRO, `orbita-${ativa}`]);
  for (const nome of await caches.keys()) if (nome.startsWith("orbita-") && !manter.has(nome)) await caches.delete(nome);
}

self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      const c = await caches.open(CACHE);
      await c.addAll(ARQUIVOS.map((a) => new Request(BASE + a, { cache: "reload" })));
      if (!(await lerAtiva())) await definirAtiva(VERSAO);
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    (async () => {
      await limpar((await lerAtiva()) ?? VERSAO);
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("message", (e) => {
  if (e.data?.tipo !== "usar-ultima") return;
  e.waitUntil(
    (async () => {
      await definirAtiva(VERSAO);
      await limpar(VERSAO);
      e.source?.postMessage({ tipo: "versao-trocada", versao: VERSAO });
    })(),
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || !req.url.startsWith(BASE)) return;
  const caminho = req.url.slice(BASE.length).split(/[?#]/)[0];

  // A versão publicada mais nova: sempre da internet, nunca guardada.
  if (caminho === "versao.json") return;

  // Abrir o app: a página da versão ativa (funciona sem internet).
  if (req.mode === "navigate") {
    e.respondWith(
      (async () => {
        const ativa = (await lerAtiva()) ?? VERSAO;
        const r = (await (await caches.open(`orbita-${ativa}`)).match(`${BASE}index.html`)) ?? (await (await caches.open(CACHE)).match(`${BASE}index.html`));
        return r ?? fetch(req);
      })(),
    );
    return;
  }

  // Capas e figurinhas da galeria: guardadas na primeira vez que aparecem.
  if (caminho.startsWith("galeria/")) {
    e.respondWith(
      (async () => {
        const c = await caches.open(GALERIA);
        const achado = await c.match(req);
        if (achado) return achado;
        const r = await fetch(req);
        if (r.ok) await c.put(req, r.clone());
        return r;
      })(),
    );
    return;
  }

  // O resto (scripts, estilos, fontes, ícones): de qualquer versão guardada.
  e.respondWith((async () => (await caches.match(req)) ?? fetch(req))());
});

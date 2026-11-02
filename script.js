/* Você normalmente não precisa editar este arquivo. Tudo se muda no config.js */
const S = SITE, $ = (s) => document.querySelector(s);
const wa = (t) => `https://wa.me/${S.whatsapp}?text=${encodeURIComponent(t || S.mensagemWhats)}`;

// cores e fontes
const root = document.documentElement.style;
Object.entries(S.cores).forEach(([k, v]) => root.setProperty("--" + k, v));
root.setProperty("--titulo", S.fontes.titulo);
root.setProperty("--corpo", S.fontes.texto);
document.title = `${S.nome} | ${S.subtitulo}`;

// imagem com espaço reservado quando vazia ou quebrada
const fb = (i) => { const d = document.createElement("div"); d.className = "ph"; d.textContent = i.alt || "Sua imagem aqui"; i.replaceWith(d); };
const im = (src, alt = "") => src ? `<img src="${src}" alt="${alt}" loading="lazy" onerror="fb(this)">` : `<div class="ph">${alt || "Sua imagem aqui"}</div>`;
const fig = (src, alt, cls = "") => `<div class="fig ${cls}">${im(src, alt)}</div>`;

const R = {
  hero: (h) => `<section class="hero" id="hero">${fig(h.imagem, "Imagem de capa")}<div class="wrap">
    <h1>${h.titulo}</h1><p>${h.texto}</p><a class="btn" href="${wa()}">${h.botao}</a></div></section>`,

  intro: (a) => `<section class="intro" id="intro"><div class="wrap cols">${a.map((x) => `<div><h3>${x.titulo}</h3><p>${x.texto}</p></div>`).join("")}</div></section>`,

  tratamentos: (t) => `<section id="tratamentos"><div class="wrap"><h2>${t.titulo}</h2><p class="lead">${t.texto}</p>
    <div class="cards">${t.itens.map((x) => `<article>${fig(x.imagem, x.titulo)}<h3>${x.titulo}</h3><p>${x.texto}</p></article>`).join("")}</div></div></section>`,

  destaque: (d) => `<section class="faixa" id="destaque"><div class="wrap"><div><h2>${d.titulo}</h2><p>${d.texto}</p>
    <a class="btn vazado" href="${d.link || wa()}">${d.botao}</a></div>${fig(d.imagem, "Imagem de destaque")}</div></section>`,

  portfolio: (p) => {
    const cats = [...new Set(p.fotos.map((f) => f.categoria))];
    return `<section id="portfolio"><div class="wrap"><h2>${p.titulo}</h2><p class="lead">${p.texto}</p>
    <div class="filtros"><button class="on" data-c="">Todos</button>${cats.map((c) => `<button data-c="${c}">${c}</button>`).join("")}</div>
    <div class="galeria">${p.fotos.map((f) => `<figure data-c="${f.categoria}">${fig(f.imagem, f.legenda)}<figcaption>${f.legenda}</figcaption></figure>`).join("")}</div></div></section>`;
  },

  sobre: (s) => `<section class="sobre" id="sobre"><div class="wrap">${fig(s.imagem, "Sua foto")}<div><h2>${s.titulo}</h2>${s.texto.map((p) => `<p>${p}</p>`).join("")}</div></div></section>`,

  depoimentos: (d) => `<section class="dep" id="depoimentos"><div class="wrap"><h2>${d.titulo}</h2>
    <div class="cols">${d.itens.map((x) => `<blockquote>${x.texto}<cite>${x.nome}</cite></blockquote>`).join("")}</div></div></section>`,

  posts: (p) => `<section id="posts"><div class="wrap"><h2>${p.titulo}</h2><p class="lead">${p.texto}</p>
    <div class="cards">${p.itens.map((x) => {
      const corpo = `${fig(x.imagem, x.titulo)}<small>${x.data}</small><h3>${x.titulo}</h3><p>${x.texto}</p>`;
      return x.link ? `<a href="${x.link}">${corpo}</a>` : `<article>${corpo}</article>`;
    }).join("")}</div></div></section>`,

  instagram: (i) => `<section id="instagram"><div class="wrap"><h2>${i.titulo}</h2>
    <div class="insta">${i.imagens.map((x) => `<a href="${S.instagram}" aria-label="Abrir Instagram">${fig(x, "Instagram")}</a>`).join("")}</div></div></section>`,

  contato: (c) => `<section class="contato" id="contato"><div class="wrap"><div><h2>${c.titulo}</h2><p>${c.texto}</p>
    <ul><li>${S.endereco}</li><li>${S.horario}</li><li><a href="mailto:${S.email}">${S.email}</a></li><li><a href="${S.instagram}">Instagram</a></li></ul></div>
    <form id="form"><input name="n" placeholder="Seu nome" required><textarea name="m" rows="4" placeholder="Como posso ajudar?" required></textarea>
    <button class="btn" type="submit">Enviar pelo WhatsApp</button></form></div></section>`
};

$("#topo").innerHTML = `<div class="wrap"><a class="marca" href="#">${S.logo ? `<img src="${S.logo}" alt="${S.nome}">` : S.nome}</a>
  <button id="burger" aria-label="Abrir menu">☰</button>
  <nav id="nav">${S.menu.map((m) => `<a href="#${m.id}">${m.texto}</a>`).join("")}</nav></div>`;

$("#app").innerHTML = S.ordem.filter((k) => R[k] && S[k]).map((k) => R[k](S[k])).join("");

$("#rodape").innerHTML = `<div class="wrap"><div><strong>${S.nome}</strong> · ${S.subtitulo}${S.cro ? `<p>${S.cro}</p>` : ""}</div>
  <p>${S.rodapeNota}<br>© ${new Date().getFullYear()} ${S.nome}</p></div>`;

// comportamentos
const topo = $("#topo"), nav = $("#nav");
const rolar = () => topo.classList.toggle("solido", scrollY > 60 || !$(".hero"));
addEventListener("scroll", rolar); rolar();
$("#burger").onclick = () => nav.classList.toggle("aberto");
nav.onclick = () => nav.classList.remove("aberto");

document.querySelectorAll(".filtros button").forEach((b) => b.onclick = () => {
  document.querySelectorAll(".filtros button").forEach((x) => x.classList.toggle("on", x === b));
  document.querySelectorAll(".galeria figure").forEach((f) => f.hidden = b.dataset.c && f.dataset.c !== b.dataset.c);
});

const lb = $("#lb");
document.querySelectorAll(".galeria figure").forEach((f) => f.onclick = () => {
  const i = f.querySelector("img"); if (!i) return;
  lb.querySelector("img").src = i.src; lb.hidden = false;
});
lb.onclick = () => lb.hidden = true;
addEventListener("keydown", (e) => e.key === "Escape" && (lb.hidden = true));

const form = $("#form");
if (form) form.onsubmit = (e) => { e.preventDefault(); open(wa(`Olá! Sou ${form.n.value}. ${form.m.value}`), "_blank"); };

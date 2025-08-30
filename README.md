<div align="center" style="position: relative; padding: 50px 20px; background: #070707; border-radius: 20px; overflow: hidden;">

  <!-- Fundo animado de grid -->
  <div style="position:absolute; inset:0; background:
      repeating-linear-gradient(0deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 30px),
      repeating-linear-gradient(90deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 30px);
      background-size: 30px 30px; animation: gridMove 32s linear infinite; z-index:0;">
  </div>
  <style>
    @keyframes gridMove {
      from {background-position:0 0,0 0;}
      to {background-position:100px 0,0 100px;}
    }
  </style>

  <!-- Partículas flutuantes -->
  <span style="position:absolute; width:6px; height:6px; border-radius:50%; background:radial-gradient(circle at 30% 30%, #fff, rgba(255,255,255,.2) 60%, transparent 70%); top:10%; left:20%; animation: float1 16s linear infinite;"></span>
  <span style="position:absolute; width:6px; height:6px; border-radius:50%; background:radial-gradient(circle at 30% 30%, #fff, rgba(255,255,255,.2) 60%, transparent 70%); top:70%; left:60%; animation: float2 18s linear infinite;"></span>
  <style>
    @keyframes float1 {0%{transform:translateY(0)}50%{transform:translateY(-100px)}100%{transform:translateY(0)}}
    @keyframes float2 {0%{transform:translateY(0)}50%{transform:translateY(-120px)}100%{transform:translateY(0)}}
  </style>

  <!-- Foto de perfil -->
  <img src="perfil.png" width="120" height="120" style="border-radius:50%; border:2px solid #dadada; box-shadow:0 6px 20px rgba(0,0,0,0.35); position:relative; z-index:1;" alt="Foto de perfil" />

  <h1 style="color:#ffffff; margin:15px 0 8px; position:relative; z-index:1;">Yuri Fernando</h1>
  <p style="color:#a9a9a9; max-width:520px; line-height:1.5; position:relative; z-index:1;">
    Programador iniciante, curioso por tecnologia e apaixonado por criar experiências web com <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>.
  </p>

  <!-- Redes sociais -->
  <p style="position:relative; z-index:1;">
    <a href="https://instagram.com/" target="_blank" style="color:#ededed; text-decoration:none; margin:0 8px;">Instagram</a> •
    <a href="https://discord.com/" target="_blank" style="color:#ededed; text-decoration:none; margin:0 8px;">Discord</a> •
    <a href="https://wa.me/5599999999999" target="_blank" style="color:#ededed; text-decoration:none; margin:0 8px;">WhatsApp</a>
  </p>

  <!-- Tags de tecnologia -->
  <div style="margin:15px 0; position:relative; z-index:1;">
    <span style="background: rgba(255,255,255,.06); border:1px solid #2b2b2b; padding:4px 12px; border-radius:999px; margin:3px;">HTML</span>
    <span style="background: rgba(255,255,255,.06); border:1px solid #2b2b2b; padding:4px 12px; border-radius:999px; margin:3px;">CSS</span>
    <span style="background: rgba(255,255,255,.06); border:1px solid #2b2b2b; padding:4px 12px; border-radius:999px; margin:3px;">JavaScript</span>
  </div>

  <!-- Projetos -->
  <h2 style="color:#ffffff; margin:30px 0 15px; position:relative; z-index:1;">🚀 Projetos em Destaque</h2>
  <div style="display:flex; gap:20px; flex-wrap:wrap; justify-content:center; position:relative; z-index:1;">

    <!-- Card 1 -->
    <div style="background:#101010; border:1px solid #2b2b2b; border-radius:16px; width:280px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,.45); transition: transform 0.3s, box-shadow 0.3s; cursor:pointer;" onmouseover="this.style.transform='rotateX(8deg) rotateY(8deg)'; this.style.boxShadow='0 20px 40px rgba(124,92,255,.35)'" onmouseleave="this.style.transform='rotateX(0) rotateY(0)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,.45)'">
      <img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800&auto=format&fit=crop" alt="Mini Jogo: Clique Rápido" style="width:100%; height:160px; object-fit:cover;">
      <div style="padding:16px;">
        <h3 style="color:#ffffff; margin-bottom:6px;">Mini Jogo: Clique Rápido</h3>
        <p style="color:#a9a9a9; font-size:14px; line-height:1.5;">Teste sua velocidade de reação em um jogo simples e viciante.</p>
        <div style="margin:10px 0;">
          <span style="background: rgba(255,255,255,.05); border:1px solid #2b2b2b; padding:4px 10px; border-radius:999px; margin:2px;">Game</span>
          <span style="background: rgba(255,255,255,.05); border:1px solid #2b2b2b; padding:4px 10px; border-radius:999px; margin:2px;">JS</span>
          <span style="background: rgba(255,255,255,.05); border:1px solid #2b2b2b; padding:4px 10px; border-radius:999px; margin:2px;">Fun</span>
        </div>
        <a href="aviso/aviso.html" style="display:inline-block; padding:8px 14px; border-radius:10px; border:1px solid #2b2b2b; background:#121212; color:#ededed; text-decoration:none;">▶️ Começar Jogo</a>
      </div>
    </div>

    <!-- Card 2 -->
    <div style="background:#101010; border:1px solid #2b2b2b; border-radius:16px; width:280px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,.45); transition: transform 0.3s, box-shadow 0.3s; cursor:pointer;" onmouseover="this.style.transform='rotateX(8deg) rotateY(8deg)'; this.style.boxShadow='0 20px 40px rgba(124,92,255,.35)'" onmouseleave="this.style.transform='rotateX(0) rotateY(0)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,.45)'">
      <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop" alt="Projetos GitHub" style="width:100%; height:160px; object-fit:cover;">
      <div style="padding:16px;">
        <h3 style="color:#ffffff; margin-bottom:6px;">Projetos no GitHub</h3>
        <p style="color:#a9a9a9; font-size:14px; line-height:1.5;">Explore códigos abertos e experimentos que venho construindo.</p>
        <div style="margin:10px 0;">
          <span style="background: rgba(255,255,255,.05); border:1px solid #2b2b2b; padding:4px 10px; border-radius:999px; margin:2px;">GitHub</span>
          <span style="background: rgba(255,255,255,.05); border:1px solid #2b2b2b; padding:4px 10px; border-radius:999px; margin:2px;">Open Source</span>
          <span style="background: rgba(255,255,255,.05); border:1px solid #2b2b2b; padding:4px 10px; border-radius:999px; margin:2px;">Portfolio</span>
        </div>
        <a href="https://github.com/" target="_blank" style="display:inline-block; padding:8px 14px; border-radius:10px; border:1px solid #2b2b2b; background:#121212; color:#ededed; text-decoration:none;">🔗 Ver GitHub</a>
      </div>
    </div>

  </div>

</div>

<p align="center" style="color:#a9a9a9; margin-top:24px;">© 2025 Yuri Fernando</p>

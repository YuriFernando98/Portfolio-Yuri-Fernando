<div align="center" style="position: relative; padding: 40px 0; background: linear-gradient(135deg, #070707, #101010); overflow: hidden; border-radius: 20px;">

  <!-- Partículas simuladas -->
  <span style="position:absolute; width:6px; height:6px; border-radius:50%; background: radial-gradient(circle at 30% 30%, #fff, rgba(255,255,255,.2) 60%, transparent 70%); top:10%; left:15%; animation: float1 16s linear infinite;"></span>
  <span style="position:absolute; width:6px; height:6px; border-radius:50%; background: radial-gradient(circle at 30% 30%, #fff, rgba(255,255,255,.2) 60%, transparent 70%); top:80%; left:70%; animation: float2 20s linear infinite;"></span>
  <style>
    @keyframes float1 { 0% {transform: translateY(0)} 50% {transform: translateY(-100px)} 100% {transform: translateY(0)} }
    @keyframes float2 { 0% {transform: translateY(0)} 50% {transform: translateY(-120px)} 100% {transform: translateY(0)} }
  </style>

  <!-- Perfil -->
  <img src="perfil.png" width="120" height="120" style="border-radius:50%; border:2px solid #dadada; box-shadow:0 6px 20px rgba(0,0,0,.35);" alt="Foto de perfil" />

  <h1 style="color:#ffffff; margin:12px 0 6px;">Yuri Fernando</h1>
  <p style="color:#a9a9a9; max-width:500px; line-height:1.5;">
    Programador iniciante, curioso por tecnologia e apaixonado por criar experiências web com <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>.
  </p>

  <!-- Tags de tecnologia -->
  <div style="margin:12px 0;">
    <span style="background: rgba(255,255,255,.06); border:1px solid #2b2b2b; padding:4px 10px; border-radius:999px; margin:2px;">HTML</span>
    <span style="background: rgba(255,255,255,.06); border:1px solid #2b2b2b; padding:4px 10px; border-radius:999px; margin:2px;">CSS</span>
    <span style="background: rgba(255,255,255,.06); border:1px solid #2b2b2b; padding:4px 10px; border-radius:999px; margin:2px;">JavaScript</span>
  </div>

  <!-- Botões sociais -->
  <div style="margin:14px 0;">
    <a href="https://instagram.com/" target="_blank" style="text-decoration:none; color:#ededed; border:1px solid #2b2b2b; padding:8px 14px; border-radius:10px; margin:2px;">Instagram</a>
    <a href="https://discord.com/" target="_blank" style="text-decoration:none; color:#ededed; border:1px solid #2b2b2b; padding:8px 14px; border-radius:10px; margin:2px;">Discord</a>
    <a href="https://wa.me/5599999999999" target="_blank" style="text-decoration:none; color:#ededed; border:1px solid #2b2b2b; padding:8px 14px; border-radius:10px; margin:2px;">WhatsApp</a>
  </div>

  <!-- Projetos -->
  <h2 style="color:#ffffff; margin:20px 0 12px;">Projetos em Destaque</h2>
  <div style="display:flex; gap:16px; flex-wrap:wrap; justify-content:center;">

    <!-- Card 1 -->
    <div style="background:#101010; border:1px solid #2b2b2b; border-radius:16px; width:260px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,.45); transition: transform 0.3s; cursor:pointer;" onmouseover="this.style.transform='rotateX(3deg) rotateY(3deg) translateZ(0)'" onmouseleave="this.style.transform='rotateX(0) rotateY(0) translateZ(0)'">
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
    <div style="background:#101010; border:1px solid #2b2b2b; border-radius:16px; width:260px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,.45); transition: transform 0.3s; cursor:pointer;" onmouseover="this.style.transform='rotateX(3deg) rotateY(3deg) translateZ(0)'" onmouseleave="this.style.transform='rotateX(0) rotateY(0) translateZ(0)'">
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

const products = [
  {
    img: images.kanafa_big,
    name: "كنافة بالمكسرات",
    cat: "حلويات شرقية",
    desc: "كنافة مقرمشة بالفستق والكاجو والشوكولاتة"
  },
  {
    img: images.baqlawa,
    name: "مشوك",
    cat: "حلويات شرقية",
    desc: "مشوك محشي بالفستق الطازج"
  },
  {
    img: images.kanafa_big,
    name: "كنافة بالشوكولاتة",
    cat: "حلويات شرقية",
    desc: "كنافة متنوعة بصوص الشوكولاتة والمتشا"
  },
  {
    img: images.desert_cup1,
    name: "ديسيرت الفراولة",
    cat: "ديسيرت",
    desc: "كريمة ناعمة مع فراولة طازجة ومتشا"
  },
  {
    img: images.cheesecake,
    name: "تشيز كيك متنوع",
    cat: "كيك وتشيز كيك",
    desc: "بنكهات الأوريو والمتشا والفراولة"
  },
  {
    img: images.cheesecake2,
    name: "تشيز كيك مشكل",
    cat: "كيك وتشيز كيك",
    desc: "تشيز كيك كريمي بتوبينج مشكل"
  },
  {
    img: images.tiramisu,
    name: "تيراميسو",
    cat: "كيك وتشيز كيك",
    desc: "تيراميسو إيطالي كلاسيكي"
  },
  {
    img: images.mochi1,
    name: "موتشي فاكهة",
    cat: "موتشي",
    desc: "موتشي ياباني بالمانغو والشوكولاتة"
  },
  {
    img: images.mochi2,
    name: "موتشي مانغو",
    cat: "موتشي",
    desc: "موتشي طازج بالمانغو"
  },
  {
    img: images.crepe,
    name: "كريب شوكولاتة",
    cat: "كريب",
    desc: "كريب بالشوكولاتة والنوتيلا"
  },
  {
    img: images.crepe2,
    name: "كريب متشا",
    cat: "كريب",
    desc: "كريب بصوص المتشا"
  },
  {
    img: images.gratin,
    name: "غراتان البطاطا",
    cat: "مملحات",
    desc: "غراتان بطاطا بالجبن الذهبي"
  },
  {
    img: images.food1,
    name: "طبق الشخشوخة",
    cat: "مملحات",
    desc: "طبق تقليدي جزائري أصيل"
  },
  {
    img: images.soup,
    name: "لاسوب",
    cat: "مملحات",
    desc: "شوربة دافئة بالجبن"
  },
  {
    img: images.rice_fries,
    name: "أرز بالدجاج وفريت",
    cat: "مملحات",
    desc: "أرز بالدجاج وصوص كريمي"
  },
  {
    img: images.hotchoc,
    name: "شوكولاتة ساخنة",
    cat: "مشروبات",
    desc: "شوكولاتة كريمية ساخنة"
  },
  {
    img: images.mojito,
    name: "موهيتو",
    cat: "مشروبات",
    desc: "موهيتو بالنعناع والليمون"
  },
  {
    img: images.strawberry_drink,
    name: "شراب فراولة فريش",
    cat: "مشروبات",
    desc: "فراولة طازجة مثلجة"
  },
  {
    img: images.fruit_cake,
    name: "كعكة الفواكه",
    cat: "كيك وتشيز كيك",
    desc: "تشيز كيك بالفواكه"
  },
  {
    img: images.cherry_tart,
    name: "تارت الكرز",
    cat: "كيك وتشيز كيك",
    desc: "تارت بكريمة وكرز"
  },
  {
    img: images.maskoutcha,
    name: "مسكوتشا",
    cat: "ديسيرت",
    desc: "كعكة جوز الهند"
  }
];
// Particles
const hP=document.getElementById('hParticles');
const cols=['#f5c800','#ffe566','#ff6eb4','#a0336a'];
for(let i=0;i<40;i++){
  const p=document.createElement('div');p.className='hero-particle';
  const sz=Math.random()*5+2;
  p.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;background:${cols[Math.floor(Math.random()*cols.length)]};animation-duration:${Math.random()*14+8}s;animation-delay:${Math.random()*8}s;border-radius:${Math.random()>.5?'50%':'2px'};`;
  hP.appendChild(p);
}

// Petals
function makePetal(){
  const el=document.createElement('div');
  const sz=Math.random()*13+7;
  el.style.cssText=`position:absolute;width:${sz}px;height:${sz}px;background:rgba(212,160,176,${Math.random()*.4+.3});border-radius:50% 0 50% 0;left:${Math.random()*100}%;top:-20px;pointer-events:none;transform:rotate(${Math.random()*360}deg);`;
  document.getElementById('petalCanvas').appendChild(el);
  const endX=parseFloat(el.style.left)+(Math.random()-.5)*200;
  el.animate([
    {top:'-20px',left:el.style.left,transform:'rotate(0deg)',opacity:.8},
    {top:'110%',left:`${endX}%`,transform:`rotate(${Math.random()*720+360}deg)`,opacity:0}
  ],{duration:(Math.random()*6+5)*1000,easing:'linear'}).onfinish=()=>el.remove();
}
setTimeout(()=>{setInterval(makePetal,900);makePetal();},2000);

// Cup sparkle
document.getElementById('cupEl').addEventListener('mouseenter',()=>{
  for(let i=0;i<8;i++){
    const sp=document.createElement('div');
    sp.style.cssText='position:absolute;width:4px;height:4px;background:#c4903a;border-radius:50%;pointer-events:none;z-index:10;top:50%;left:50%;';
    document.getElementById('cupEl').appendChild(sp);
    const a=(i/8)*Math.PI*2;
    sp.animate([
      {transform:'translate(0,0) scale(1)',opacity:1},
      {transform:`translate(${Math.cos(a)*40}px,${Math.sin(a)*40}px) scale(0)`,opacity:0}
    ],{duration:600,easing:'ease-out'}).onfinish=()=>sp.remove();
  }
});

// Category tabs
const cats=['الكل',...new Set(products.map(p=>p.cat))];
const tabsEl=document.getElementById('catTabs');
cats.forEach((c,i)=>{
  const btn=document.createElement('button');
  btn.className='cat-btn'+(i===0?' active':'');
  btn.textContent=c; btn.dataset.cat=c;
  btn.onclick=()=>filterCat(c,btn);
  tabsEl.appendChild(btn);
});

// Products grid
const grid=document.getElementById('productsGrid');
products.forEach((p,i)=>{
  const card=document.createElement('div');
  card.className='product-card';
  card.dataset.cat=p.cat;
  card.innerHTML=`
    <div class="card-img-wrap">
      <img class="card-img" src="${imgs[p.img]}" alt="${p.name}" loading="lazy" onclick="openLB('${p.img}')">
    </div>
    <div class="card-body">
      <div class="card-cat">${p.cat}</div>
      <div class="card-name">${p.name}</div>
      <div class="card-desc">${p.desc}</div>
    </div>`;
  setTimeout(()=>card.classList.add('visible'),100+i*80);
  grid.appendChild(card);
});

function filterCat(cat,btn){
  document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.product-card').forEach(c=>{
    c.classList.toggle('hidden',cat!=='الكل'&&c.dataset.cat!==cat);
  });
  // Show/hide مملحات banner
  const banner=document.getElementById('malhatBanner');
  if(cat==='مملحات'){
    banner.style.display='flex';
    setTimeout(()=>banner.classList.add('visible'),50);
  } else if(cat!=='الكل'){
    banner.style.display='none';
  } else {
    banner.style.display='flex';
    setTimeout(()=>banner.classList.add('visible'),50);
  }
}

// Gallery
const gKeys=Object.keys(imgs).slice(0,8);
const gGrid=document.getElementById('galleryGrid');
gKeys.forEach(k=>{
  const div=document.createElement('div');div.className='g-item';
  div.innerHTML=`<img src="${imgs[k]}" alt="" loading="lazy" onclick="openLB('${k}')">`;
  gGrid.appendChild(div);
});

// Lightbox
function openLB(key){document.getElementById('lbImg').src=imgs[key];document.getElementById('lightbox').classList.add('open');}
function closeLB(){document.getElementById('lightbox').classList.remove('open');}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLB();});

// Intersection observer
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
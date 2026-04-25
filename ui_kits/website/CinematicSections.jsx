// CinematicSections.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Three reusable cinematic section patterns for Chateau Health & Wellness.
// All overlays use the approved near-black / steel-blue cinematic family.
// Orange is NOT used here — kept to accent bar / eyebrow labels only.
// ─────────────────────────────────────────────────────────────────────────────

/* ── 1. CINEMATIC SPLIT ───────────────────────────────────────────────────────
   Left: dark panel (50-55%) with white text, bullets, CTAs
   Right: full photo bleeds through, no overlay — dramatic contrast
   Based on: "Why choose Chateau" reference image
   ─────────────────────────────────────────────────────────────────────────── */
function CinematicSplit({ img, eyebrow, title, bullets, cta, onCta, flip = false }) {
  const textSide = (
    <div style={{
      position: 'relative', zIndex: 2,
      flex: '0 0 52%', padding: '72px 56px',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      background: 'linear-gradient(to right, rgba(18,20,26,0.97) 0%, rgba(18,20,26,0.97) 75%, rgba(18,20,26,0.80) 90%, rgba(18,20,26,0.0) 100%)',
    }}>
      {eyebrow && (
        <span style={{ display:'block', fontFamily:'Arial,sans-serif', fontSize:12, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'#50717A', marginBottom:18 }}>
          {eyebrow}
        </span>
      )}
      <h2 style={{ fontFamily:"'EB Garamond', Georgia, serif", fontSize:'clamp(26px,2.8vw,40px)', fontWeight:400, color:'#fff', lineHeight:1.2, marginBottom:28, letterSpacing:'-0.25px' }}>
        {title}
      </h2>
      {bullets && (
        <ul style={{ listStyle:'none', padding:0, margin:'0 0 32px', display:'flex', flexDirection:'column', gap:14 }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
              <span style={{ marginTop:6, width:6, height:6, borderRadius:'50%', background:'#50717A', flexShrink:0 }}></span>
              <span style={{ fontFamily:'Arial,sans-serif', fontSize:15, color:'rgba(255,255,255,0.80)', lineHeight:1.6 }}>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {cta && (
        <button onClick={onCta} style={{
          alignSelf:'flex-start', background:'transparent', color:'#fff',
          border:'1.5px solid rgba(255,255,255,0.45)', borderRadius:9999,
          padding:'12px 28px', fontFamily:'Arial,sans-serif', fontWeight:700,
          fontSize:13, letterSpacing:'0.06em', textTransform:'uppercase', cursor:'pointer',
          transition:'all 0.2s',
        }}
          onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.85)';e.currentTarget.style.background='rgba(255,255,255,0.08)';}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(255,255,255,0.45)';e.currentTarget.style.background='transparent';}}>
          {cta}
        </button>
      )}
    </div>
  );

  const photoSide = (
    <div style={{ flex: '0 0 48%', position: 'relative', overflow: 'hidden', minHeight: 520 }}>
      <div style={{ position:'absolute', inset:0, background:`url('../../assets/${img}') center/cover no-repeat`, transition:'transform 8s ease-out' }}
        onMouseEnter={e=>e.currentTarget.style.transform='scale(1.04)'}
        onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}></div>
    </div>
  );

  return (
    <section style={{ position:'relative', display:'flex', flexDirection: flip ? 'row-reverse' : 'row', minHeight:520, overflow:'hidden', background:'#12141A' }}>
      {/* 4px accent bar — approved sparing use */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:4, background:'linear-gradient(90deg,#D17400,#E17100)', zIndex:3 }}></div>
      {textSide}
      {photoSide}
    </section>
  );
}

/* ── 2. CINEMATIC FULL-BLEED ──────────────────────────────────────────────────
   Full-width photo with a steel-blue tinted dark overlay across the whole frame.
   Text content sits in the left 55%. CTA is a small ghost pill link.
   Based on: "Committing to Change", "Holistic Approach", "Evidence Based" refs
   ─────────────────────────────────────────────────────────────────────────── */
function CinematicFullBleed({ img, eyebrow, number, title, subtitle, sections, onLearnMore, flip = false }) {
  return (
    <section style={{ position:'relative', minHeight:560, overflow:'hidden', display:'flex', alignItems:'center' }}>
      {/* Background photo */}
      <div style={{ position:'absolute', inset:0, background:`url('../../assets/${img}') center/cover no-repeat` }}></div>
      {/* Near-black cinematic overlay — steel-blue tinted */}
      <div style={{ position:'absolute', inset:0, background: flip
        ? 'linear-gradient(255deg, rgba(18,22,32,0.94) 0%, rgba(27,38,58,0.88) 40%, rgba(27,38,58,0.60) 65%, rgba(27,38,58,0.15) 100%)'
        : 'linear-gradient(105deg, rgba(18,22,32,0.94) 0%, rgba(27,38,58,0.88) 40%, rgba(27,38,58,0.60) 65%, rgba(27,38,58,0.15) 100%)'
      }}></div>

      {/* Content */}
      <div style={{ position:'relative', zIndex:1, maxWidth:1200, margin:'0 auto', padding:'80px 48px', width:'100%', display:'flex', justifyContent: flip ? 'flex-end' : 'flex-start' }}>
        <div style={{ maxWidth:560 }}>
          {(number || eyebrow) && (
            <div style={{ display:'flex', alignItems:'baseline', gap:10, marginBottom:12 }}>
              {number && <span style={{ fontFamily:"'EB Garamond', Georgia, serif", fontSize:18, color:'#50717A', fontWeight:400 }}>{number}.</span>}
              {eyebrow && <span style={{ fontFamily:'Arial,sans-serif', fontSize:12, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'#50717A' }}>{eyebrow}</span>}
            </div>
          )}
          <h2 style={{ fontFamily:"'EB Garamond', Georgia, serif", fontSize:'clamp(28px,3vw,44px)', fontWeight:400, color:'#fff', lineHeight:1.15, marginBottom:8 }}>{title}</h2>
          {subtitle && <div style={{ fontFamily:"'EB Garamond', Georgia, serif", fontSize:'clamp(18px,1.8vw,24px)', fontWeight:400, color:'rgba(255,255,255,0.65)', lineHeight:1.3, marginBottom:36, fontStyle:'italic' }}>{subtitle}</div>}

          {sections && sections.map((s, i) => (
            <div key={i} style={{ marginBottom:32 }}>
              <div style={{ fontFamily:'Arial,sans-serif', fontSize:15, fontWeight:700, color:'#fff', marginBottom:8 }}>{s.heading}</div>
              {s.body && <p style={{ fontFamily:'Arial,sans-serif', fontSize:14, color:'rgba(255,255,255,0.75)', lineHeight:1.7, margin:'0 0 10px' }}>{s.body}</p>}
              {s.bullets && (
                <ul style={{ listStyle:'none', padding:0, margin:'0 0 10px', display:'flex', flexDirection:'column', gap:6 }}>
                  {s.bullets.map((b,j) => (
                    <li key={j} style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
                      <span style={{ marginTop:6, width:5, height:5, borderRadius:'50%', background:'rgba(255,255,255,0.45)', flexShrink:0 }}></span>
                      <span style={{ fontFamily:'Arial,sans-serif', fontSize:13, color:'rgba(255,255,255,0.72)', lineHeight:1.6 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.link && (
                <button onClick={onLearnMore} style={{ background:'rgba(18,22,32,0.70)', border:'1px solid rgba(255,255,255,0.20)', borderRadius:9999, padding:'7px 18px', fontFamily:"'EB Garamond', Georgia, serif", fontSize:13, fontStyle:'italic', color:'rgba(255,255,255,0.75)', cursor:'pointer', transition:'all 0.2s', marginTop:4 }}
                  onMouseEnter={e=>{e.currentTarget.style.background='rgba(18,22,32,0.90)';e.currentTarget.style.color='#fff';}}
                  onMouseLeave={e=>{e.currentTarget.style.background='rgba(18,22,32,0.70)';e.currentTarget.style.color='rgba(255,255,255,0.75)';}}>
                  {s.link} ››
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 3. CINEMATIC CENTER ──────────────────────────────────────────────────────
   Full-bleed photo, uniform dark center overlay, centered title + body + ghost CTAs.
   Based on: "Insurance & Admissions" and interior hero reference images.
   ─────────────────────────────────────────────────────────────────────────── */
function CinematicCenter({ img, eyebrow, title, body, ctas = [], minHeight = 480 }) {
  return (
    <section style={{ position:'relative', minHeight, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ position:'absolute', inset:0, background:`url('../../assets/${img}') center/cover no-repeat` }}></div>
      {/* Center-weighted cinematic overlay */}
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(18,22,32,0.72) 0%, rgba(18,22,32,0.82) 50%, rgba(18,22,32,0.72) 100%)' }}></div>

      <div style={{ position:'relative', zIndex:1, textAlign:'center', padding:'72px 48px', maxWidth:860, margin:'0 auto' }}>
        {eyebrow && (
          <span style={{ display:'block', fontFamily:'Arial,sans-serif', fontSize:12, fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(255,255,255,0.55)', marginBottom:20 }}>
            {eyebrow}
          </span>
        )}
        <h2 style={{ fontFamily:"'EB Garamond', Georgia, serif", fontSize:'clamp(28px,3.5vw,52px)', fontWeight:400, color:'#fff', lineHeight:1.15, marginBottom: body ? 24 : 36, letterSpacing:'-0.25px' }}>
          {title}
        </h2>
        {body && (
          <p style={{ fontFamily:'Arial,sans-serif', fontSize:'clamp(15px,1.5vw,18px)', color:'rgba(255,255,255,0.78)', lineHeight:1.7, maxWidth:680, margin:'0 auto 36px' }}>
            {body}
          </p>
        )}
        {ctas.length > 0 && (
          <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
            {ctas.map((c, i) => (
              <button key={i} onClick={c.action} style={{
                background:'transparent', color:'#fff',
                border:'1.5px solid rgba(255,255,255,0.50)', borderRadius:9999,
                padding:'13px 32px', fontFamily:"'EB Garamond', Georgia, serif",
                fontSize:16, fontStyle:'italic', letterSpacing:'0.02em',
                cursor:'pointer', transition:'all 0.2s',
              }}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,0.10)';e.currentTarget.style.borderColor='rgba(255,255,255,0.85)';}}
                onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.borderColor='rgba(255,255,255,0.50)';}}>
                {c.label} ››
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

Object.assign(window, { CinematicSplit, CinematicFullBleed, CinematicCenter });

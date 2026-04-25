// InsuranceBar.jsx — Cinematic Center: full-bleed photo, centered text, ghost outline CTAs

function SiteInsuranceBar({ navigate }) {
  const carriers = ['Aetna','BlueCross BlueShield','Cigna','ComPsych','GEHA','Humana','Magellan','Select Health','Tricare','UnitedHealthcare','Workers Comp'];

  return (
    <section data-screen-label="08 Insurance">
      {/* Cinematic Center hero panel */}
      <div style={{ position:'relative', minHeight:440, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
        <div style={{ position:'absolute', inset:0, background:"url('../../assets/facility-lobby-logo.webp') center/cover no-repeat" }}></div>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(18,22,32,0.78) 0%, rgba(18,22,32,0.88) 50%, rgba(18,22,32,0.78) 100%)' }}></div>

        <div style={{ position:'relative', zIndex:1, textAlign:'center', padding:'72px 48px', maxWidth:860, margin:'0 auto' }}>
          <span style={{ display:'block', fontFamily:'Arial,sans-serif', fontSize:12, fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(255,255,255,0.50)', marginBottom:20 }}>
            ADMISSIONS
          </span>
          <h2 style={{ fontFamily:"'EB Garamond', Georgia, serif", fontSize:'clamp(28px,3.5vw,48px)', fontWeight:400, color:'#fff', lineHeight:1.15, marginBottom:20, letterSpacing:'-0.25px' }}>
            Don't let insurance be a barrier
          </h2>
          <p style={{ fontFamily:'Arial,sans-serif', fontSize:'clamp(15px,1.5vw,17px)', color:'rgba(255,255,255,0.72)', lineHeight:1.7, maxWidth:600, margin:'0 auto 36px' }}>
            We work with most major insurance providers, including Workers' Comp — even without a substance use diagnosis. Verify your coverage in under 2 minutes.
          </p>
          <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap', marginBottom:16 }}>
            <button onClick={() => navigate('admissions')} style={{ background:'transparent', color:'#fff', border:'1.5px solid rgba(255,255,255,0.50)', borderRadius:9999, padding:'13px 32px', fontFamily:"'EB Garamond', Georgia, serif", fontSize:17, fontStyle:'italic', letterSpacing:'0.02em', cursor:'pointer', transition:'all 0.2s' }}
              onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,0.10)';e.currentTarget.style.borderColor='rgba(255,255,255,0.85)';}}
              onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.borderColor='rgba(255,255,255,0.50)';}}>
              Verify Your Insurance ››
            </button>
            <a href="tel:4352225225" style={{ display:'flex', alignItems:'center', background:'transparent', color:'#fff', border:'1.5px solid rgba(255,255,255,0.30)', borderRadius:9999, padding:'13px 32px', fontFamily:"'EB Garamond', Georgia, serif", fontSize:17, fontStyle:'italic', letterSpacing:'0.02em', cursor:'pointer', textDecoration:'none', transition:'all 0.2s' }}
              onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,0.08)';e.currentTarget.style.borderColor='rgba(255,255,255,0.65)';}}
              onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.borderColor='rgba(255,255,255,0.30)';}}>
              Call Admissions (435) 222-5225 ››
            </a>
          </div>
          <div style={{ color:'rgba(255,255,255,0.35)', fontSize:12, fontFamily:'Arial,sans-serif' }}>
            100% Confidential · HIPAA Compliant
          </div>
        </div>
      </div>

      {/* Carrier strip — white bar below */}
      <div style={{ background:'#ffffff', padding:'28px 40px', borderBottom:'1px solid var(--neutral-300)' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ fontFamily:'Arial,sans-serif', fontSize:11, fontWeight:700, letterSpacing:'0.10em', textTransform:'uppercase', color:'var(--neutral-500)', marginBottom:14, textAlign:'center' }}>
            Accepted Insurance &amp; Coverage
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8, justifyContent:'center' }}>
            {carriers.map(c => (
              <div key={c} style={{ background:'var(--bg-warm)', border:'1px solid var(--neutral-300)', borderRadius:6, padding:'7px 14px', fontSize:13, color:'var(--neutral-700)', fontWeight:600 }}>{c}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SiteInsuranceBar });

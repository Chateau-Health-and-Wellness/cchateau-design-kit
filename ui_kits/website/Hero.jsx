// Hero.jsx — Homepage hero (Option D: Near-Black Cinematic)

function SiteHero({ navigate }) {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 600, overflow: 'hidden', marginTop: 0 }} data-screen-label="01 Hero">
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, background: "url('../../assets/facility-commons.webp') center/cover no-repeat" }}></div>

      {/* 4px burnt orange accent bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg, #D17400, #E17100)', zIndex: 3 }}></div>

      {/* Near-black cinematic overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(24,26,33,0.92) 0%, rgba(24,26,33,0.78) 35%, rgba(24,26,33,0.30) 65%, rgba(24,26,33,0.05) 100%)', zIndex: 1 }}></div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '0 80px', paddingTop: 80, maxWidth: 860 }}>
        <span style={{ display: 'block', fontFamily: 'Arial,sans-serif', fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#E17100', marginBottom: 16 }}>
          Chateau Health &amp; Wellness · Oakley, Utah
        </span>
        <h1 style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: 58, fontWeight: 400, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.5px', marginBottom: 20, maxWidth: 720 }}>
          Where first responders and professionals reclaim their lives
        </h1>
        <p style={{ fontFamily: 'Arial,sans-serif', fontSize: 18, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, maxWidth: 560, marginBottom: 36 }}>
          Joint Commission-accredited residential treatment in Utah's Wasatch Mountains. Serving adults 26+ since 2012.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          {/* Primary CTA — Editorial steel-teal (#3B5A66), serif italic + » glyph */}
          <button onClick={() => navigate('admissions')}
            style={{ background: '#3B5A66', color: '#fff', border: '2px solid #3B5A66', borderRadius: 9999, padding: '13px 30px', fontFamily: "'EB Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 400, fontSize: 17, letterSpacing: '0.01em', cursor: 'pointer', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background='#2C4851'; e.currentTarget.style.borderColor='#2C4851'; e.currentTarget.style.transform='scale(1.02)'; }}
            onMouseLeave={e => { e.currentTarget.style.background='#3B5A66'; e.currentTarget.style.borderColor='#3B5A66'; e.currentTarget.style.transform=''; }}>
            Request a Confidential Consultation &raquo;
          </button>
          {/* Ghost — editorial outline, serif italic */}
          <button onClick={() => navigate('admissions')}
            style={{ background: 'transparent', color: 'rgba(255,255,255,0.88)', border: '2px solid rgba(255,255,255,0.55)', borderRadius: 9999, padding: '13px 30px', fontFamily: "'EB Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 400, fontSize: 17, letterSpacing: '0.01em', cursor: 'pointer', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.85)'; e.currentTarget.style.background='rgba(255,255,255,0.12)'; e.currentTarget.style.color='#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.55)'; e.currentTarget.style.background='transparent'; e.currentTarget.style.color='rgba(255,255,255,0.88)'; }}>
            Call Admissions &raquo;
          </button>
        </div>

        {/* Quick trust signals */}
        <div style={{ display: 'flex', gap: 24, marginTop: 48, flexWrap: 'wrap' }}>
          {['Joint Commission Accredited', 'FOP Approved Provider', 'Ages 26+ Only', 'Since 2012'].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              {/* Small dot — approved sparing orange use */}
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#D17400', flexShrink: 0 }}></div>
              <span style={{ fontFamily: 'Arial,sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.4))' }}></div>
        <span style={{ fontFamily: 'Arial,sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll</span>
      </div>
    </section>
  );
}

Object.assign(window, { SiteHero });

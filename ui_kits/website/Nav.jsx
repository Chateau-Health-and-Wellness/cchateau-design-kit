// Nav.jsx — Sticky navigation header — WHITE background per brand direction
const { useState, useEffect } = React;

function SiteNav({ navigate, page }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navItems = [
    { label: 'About', sub: ['Our Story', 'Our Team', 'Our Facility', 'Accreditations'] },
    { label: 'Admissions', sub: ['How to Get Started', 'Verify Insurance', 'What to Expect', 'FAQs'], action: 'admissions' },
    { label: 'Treatment', sub: ['Our Approach', 'Clinical Modalities', 'Experiential Therapies'], action: 'programs' },
    { label: 'Programs', sub: ['Residential Treatment', 'Trauma & PTSD', 'Mental Health', 'Substance Use', 'Dual Diagnosis'], action: 'programs' },
    { label: 'First Responders', sub: ['Overview', 'Police & Law Enforcement', 'Firefighters', 'Military & Veterans', 'EMS & Paramedics', 'Dispatchers & 911', 'Corrections Officers', 'Nurses'], action: 'fr' },
    { label: 'Resources', sub: ['Blog', 'Guides & FAQs', 'Contact Us'] },
  ];

  const navBg = scrolled ? 'rgba(255,255,255,0.98)' : '#ffffff';
  const navShadow = scrolled ? '0 2px 20px rgba(44,74,103,0.12)' : '0 1px 0 rgba(0,0,0,0.07)';

  return (
    <nav style={{ position:'fixed', top:0, left:0, right:0, zIndex:200, background:navBg, backdropFilter:scrolled?'blur(8px)':'none', boxShadow:navShadow, transition:'all 0.3s ease' }}
      onMouseLeave={() => setMenuOpen(null)}>
      {/* Crisis bar */}
      <div style={{ background:'var(--alert-red)', textAlign:'center', padding:'4px 16px', fontSize:12, color:'#fff', fontWeight:600 }}>
        Crisis? Call or text <strong>988</strong> · Chateau direct: <strong>(435) 222-5225</strong>
      </div>
      {/* 4px brand accent bar — approved sparing use */}
      <div style={{ height:3, background:'linear-gradient(90deg,#D17400,#E17100)' }}></div>

      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 32px', height: scrolled ? 56 : 72, maxWidth:1300, margin:'0 auto' }}>
        {/* Logo */}
        <div onClick={() => navigate('home')} style={{ cursor:'pointer', display:'flex', alignItems:'center', gap:10 }}>
          <img src="../../assets/logo-dark.png" alt="Chateau Health & Wellness"
            style={{ height: scrolled ? 32 : 42, transition:'height 0.3s' }} />
        </div>

        {/* Nav links */}
        <div style={{ display:'flex', alignItems:'center', gap:2 }}>
          {navItems.map(item => (
            <div key={item.label} style={{ position:'relative' }} onMouseEnter={() => setMenuOpen(item.label)}>
              <button onClick={() => item.action && navigate(item.action)}
                style={{ background:'none', border:'none', color: menuOpen===item.label ? 'var(--brand-primary)' : 'var(--neutral-700)', fontFamily:'Arial,sans-serif', fontSize:14, fontWeight:600, padding:'0 13px', height:48, cursor:'pointer', display:'flex', alignItems:'center', gap:4, transition:'color 0.15s' }}>
                {item.label}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
              {menuOpen === item.label && (
                <div style={{ position:'absolute', top:'100%', left:0, background:'#fff', borderRadius:'0 0 8px 8px', boxShadow:'0 8px 32px rgba(0,0,0,0.12)', minWidth:220, overflow:'hidden', zIndex:300, borderTop:'2px solid var(--brand-primary)' }}>
                  {item.sub.map(s => (
                    <button key={s} onClick={() => { navigate(item.action || 'home'); setMenuOpen(null); }}
                      style={{ display:'block', width:'100%', textAlign:'left', padding:'11px 20px', fontFamily:'Arial,sans-serif', fontSize:14, color:'var(--neutral-700)', background:'none', border:'none', cursor:'pointer', borderLeft:'3px solid transparent', transition:'all 0.15s' }}
                      onMouseEnter={e => { e.currentTarget.style.background='var(--bg-warm)'; e.currentTarget.style.borderLeftColor='var(--brand-secondary)'; e.currentTarget.style.color='var(--neutral-900)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background=''; e.currentTarget.style.borderLeftColor='transparent'; e.currentTarget.style.color='var(--neutral-700)'; }}>
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display:'flex', alignItems:'center', gap:16 }}>
          <a href="tel:4352225225" style={{ color:'var(--neutral-700)', fontSize:13, textDecoration:'none', fontWeight:600 }}>(435) 222-5225</a>
          <button onClick={() => navigate('admissions')}
            style={{ background:'#3B5A66', color:'#fff', border:'none', borderRadius:9999, padding:'11px 24px', fontFamily:"'EB Garamond', Georgia, serif", fontStyle:'italic', fontWeight:400, fontSize:15, letterSpacing:'0.01em', cursor:'pointer', transition:'background 0.2s, transform 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.background='#2C4851'; e.currentTarget.style.transform='scale(1.02)'; }}
            onMouseLeave={e => { e.currentTarget.style.background='#3B5A66'; e.currentTarget.style.transform=''; }}>
            Request Consultation &raquo;
          </button>
        </div>
      </div>
    </nav>
  );
}

Object.assign(window, { SiteNav });

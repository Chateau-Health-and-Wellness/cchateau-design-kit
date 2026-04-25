// Footer.jsx — Site footer

function SiteFooter({ navigate }) {
  const cols = [
    { title: 'Quick Links', links: ['About Us','Our Team','Our Facility','Accreditations','Careers','Reviews'] },
    { title: 'Programs', links: ['Residential Treatment','Trauma & PTSD','Mental Health','Substance Use','Dual Diagnosis'] },
    { title: 'First Responders', links: ['Overview','Police & Law Enforcement','Firefighters','Military & Veterans','EMS & Paramedics','Dispatchers & 911','Nurses'] },
  ];

  return (
    <footer style={{ background: 'var(--neutral-950)', padding: '64px 40px 0' }} data-screen-label="09 Footer">
      {/* Final CTA band */}
      <div style={{ position:'relative', overflow:'hidden', borderRadius:12, marginBottom:60 }}>
        <div style={{ position:'absolute', inset:0, background:"url('../../assets/facility-commons.webp') center/cover" }}></div>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(105deg, rgba(24,26,33,0.92) 0%, rgba(24,26,33,0.78) 35%, rgba(24,26,33,0.30) 65%, rgba(24,26,33,0.05) 100%)' }}></div>
        <div style={{ position:'relative', zIndex:1, padding:'48px 48px', textAlign:'center' }}>
          <h2 style={{ fontFamily:"'EB Garamond', serif", fontSize:36, fontWeight:400, color:'#fff', marginBottom:10 }}>Take the first step today</h2>
          <p style={{ fontFamily:'Arial,sans-serif', color:'rgba(255,255,255,0.75)', fontSize:16, marginBottom:28 }}>Your recovery is one conversation away.</p>
          <div style={{ display:'flex', gap:14, justifyContent:'center' }}>
            <button onClick={() => navigate('admissions')}
              style={{ background:'#3B5A66', color:'#fff', border:'2px solid #3B5A66', borderRadius:9999, padding:'13px 30px', fontFamily:"'EB Garamond', Georgia, serif", fontStyle:'italic', fontWeight:400, fontSize:17, letterSpacing:'0.01em', cursor:'pointer' }}>
              Request a Confidential Consultation &raquo;
            </button>
            <button onClick={() => navigate('admissions')}
              style={{ background:'transparent', color:'rgba(255,255,255,0.88)', border:'2px solid rgba(255,255,255,0.55)', borderRadius:9999, padding:'13px 30px', fontFamily:"'EB Garamond', Georgia, serif", fontStyle:'italic', fontWeight:400, fontSize:17, letterSpacing:'0.01em', cursor:'pointer' }}>
              Call Admissions &raquo;
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, paddingBottom: 48 }}>
        {/* Brand col */}
        <div>
          <img src="../../assets/logo-dark.png" alt="Chateau" style={{ height: 44, filter: 'brightness(0) invert(1)', marginBottom: 16, opacity: 0.9 }} />
          <p style={{ fontFamily:'Arial,sans-serif', fontSize:13, color:'rgba(255,255,255,0.5)', lineHeight:1.7, maxWidth:280 }}>
            Trauma-informed residential treatment in Utah's Wasatch Mountains. Serving first responders, veterans, and professionals since 2012.
          </p>
          <div style={{ marginTop:20, fontFamily:'Arial,sans-serif', fontSize:13, color:'rgba(255,255,255,0.5)' }}>
            <div style={{ marginBottom:4 }}>
              <svg style={{ verticalAlign:'middle', marginRight:6 }} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.34 12a19.79 19.79 0 01-3-8.59A2 2 0 013.32 1.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 9.91a16 16 0 006.29 6.29l1.78-1.78a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              (435) 222-5225
            </div>
            <div>
              <svg style={{ verticalAlign:'middle', marginRight:6 }} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Oakley, Utah 84055
            </div>
          </div>
        </div>

        {/* Link cols */}
        {cols.map(col => (
          <div key={col.title}>
            <div style={{ fontFamily:'Arial,sans-serif', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(255,255,255,0.35)', marginBottom:14 }}>{col.title}</div>
            {col.links.map(l => (
              <button key={l} onClick={() => navigate('home')}
                style={{ display:'block', background:'none', border:'none', textAlign:'left', fontFamily:'Arial,sans-serif', fontSize:13, color:'rgba(255,255,255,0.55)', padding:'5px 0', cursor:'pointer', transition:'color 0.15s', width:'100%' }}
                onMouseEnter={e=>e.currentTarget.style.color='#fff'}
                onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.55)'}>
                {l}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop:'1px solid rgba(255,255,255,0.08)', padding:'20px 0', maxWidth:1100, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
        <div style={{ fontFamily:'Arial,sans-serif', fontSize:12, color:'rgba(255,255,255,0.3)' }}>
          © {new Date().getFullYear()} Chateau Health &amp; Wellness · All rights reserved
        </div>
        <div style={{ display:'flex', gap:20 }}>
          {['Privacy Policy','Terms of Use','HIPAA Notice','Sitemap'].map(l => (
            <button key={l} style={{ background:'none', border:'none', fontFamily:'Arial,sans-serif', fontSize:12, color:'rgba(255,255,255,0.3)', cursor:'pointer', padding:0 }}
              onMouseEnter={e=>e.currentTarget.style.color='rgba(255,255,255,0.6)'}
              onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.3)'}>{l}</button>
          ))}
        </div>
        <div style={{ background:'var(--alert-red)', borderRadius:4, padding:'5px 12px', fontFamily:'Arial,sans-serif', fontSize:11, fontWeight:700, color:'#fff' }}>
          Crisis? Call or text 988
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteFooter });

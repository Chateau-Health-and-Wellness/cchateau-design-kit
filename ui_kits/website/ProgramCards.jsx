// ProgramCards.jsx — Programs overview grid

function SitePrograms({ navigate }) {
  const programs = [
    { name: 'Residential Treatment', desc: 'Full-time therapeutic immersion. 30–90 day stays in a 14-bed boutique setting.', img: 'facility-commons' },
    { name: 'Trauma & PTSD', desc: 'EMDR, CPT, somatic therapy, and equine therapy for trauma survivors.', img: 'facility-therapy-office' },
    { name: 'Mental Health', desc: 'Comprehensive care for depression, anxiety, and co-occurring mood disorders.', img: 'facility-bedroom' },
    { name: 'Substance Use', desc: 'Medically supervised detox + residential treatment for alcohol and opioids.', img: 'facility-hallway' },
    { name: 'Dual Diagnosis', desc: 'Integrated treatment for co-occurring mental health and substance use.', img: 'facility-entrance' },
  ];

  return (
    <section style={{ background: 'var(--bg-page)', padding: '80px 40px' }} data-screen-label="04 Programs">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <span style={{ display:'block', fontFamily:'Arial,sans-serif', fontSize:13, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--accent)', marginBottom:8 }}>OUR PROGRAMS</span>
        <h2 style={{ fontFamily:"'EB Garamond', serif", fontSize:36, fontWeight:400, color:'var(--neutral-900)', lineHeight:1.25 }}>Comprehensive treatment programs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 40 }}>
          {programs.map(p => (
            <div key={p.name} onClick={() => navigate('programs')}
              style={{ background: 'var(--bg-card)', borderRadius: 10, overflow: 'hidden', boxShadow: '0 2px 8px rgba(44,74,103,0.08)', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 8px 28px rgba(44,74,103,0.14)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 2px 8px rgba(44,74,103,0.08)'; }}>
              <div style={{ height: 140, background: `url('../../assets/${p.img}.webp') center/cover`, position: 'relative' }}>
                {/* Near-black cinematic bottom fade */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(24,26,33,0.70) 0%, rgba(24,26,33,0.20) 50%, transparent 100%)' }}></div>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 20, color: 'var(--neutral-900)', marginBottom: 6 }}>{p.name}</div>
                <p style={{ fontSize: 13, color: 'var(--neutral-700)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                <div style={{ marginTop: 10, fontSize: 12, fontWeight: 700, color: '#50717A', letterSpacing: '0.04em' }}>Learn more →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SitePrograms });

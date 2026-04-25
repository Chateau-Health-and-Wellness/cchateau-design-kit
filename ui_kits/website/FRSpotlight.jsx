// FRSpotlight.jsx — First Responder spotlight section

function SiteFRSpotlight({ navigate }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: 420 }} data-screen-label="05 FR Spotlight">
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, background: "url('../../assets/team-outdoor.webp') center/cover" }}></div>
      {/* Near-black cinematic overlay — right-to-left sweep */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(255deg, rgba(24,26,33,0.94) 0%, rgba(24,26,33,0.80) 35%, rgba(44,74,103,0.55) 70%, rgba(44,74,103,0.25) 100%)' }}></div>

      <div style={{ position: 'relative', zIndex: 1, padding: '80px 80px', maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
        <div>
          <span style={{ display: 'block', fontFamily: 'Arial,sans-serif', fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>FIRST RESPONDERS</span>
          <h2 style={{ fontFamily: "'EB Garamond', serif", fontSize: 40, fontWeight: 400, color: '#fff', lineHeight: 1.2, marginBottom: 16 }}>
            Dedicated programs for those who serve
          </h2>
          <p style={{ fontFamily: 'Arial,sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: 28 }}>
            We understand the culture of service — the hypervigilance, the stigma around seeking help, the career concerns. Our first responder programs are built around your world, not a clinical checklist.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={() => navigate('fr')}
              style={{ background: '#3B5A66', color: '#fff', border: '2px solid #3B5A66', borderRadius: 9999, padding: '13px 28px', fontFamily: "'EB Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 400, fontSize: 17, letterSpacing: '0.01em', cursor: 'pointer' }}>
              Explore FR Programs &raquo;
            </button>
            <button onClick={() => navigate('admissions')}
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.88)', border: '2px solid rgba(255,255,255,0.55)', borderRadius: 9999, padding: '13px 28px', fontFamily: "'EB Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 400, fontSize: 17, letterSpacing: '0.01em', cursor: 'pointer' }}>
              Call Admissions &raquo;
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { num: '7', label: 'Profession-specific programs', sub: 'Police · Fire · EMS · Military · Dispatchers · Corrections · Nurses' },
            { num: 'FOP', label: 'Approved Wellness Provider', sub: 'Fraternal Order of Police — verified credential' },
            { num: '26+', label: 'Adults only', sub: 'Peer cohort without age disparity' },
            { num: '100%', label: 'Confidential', sub: 'Career-protection assured for all clients' },
          ].map(s => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(4px)', borderRadius: 8, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 28, fontWeight: 400, color: '#fff', minWidth: 52, textAlign: 'center', lineHeight: 1 }}>{s.num}</div>
              <div>
                <div style={{ fontFamily: 'Arial,sans-serif', fontWeight: 700, fontSize: 13, color: '#fff' }}>{s.label}</div>
                <div style={{ fontFamily: 'Arial,sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 2 }}>{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SiteFRSpotlight });

// TrustBar.jsx — Accreditation trust strip with real badge images

function SiteTrustBar() {
  return (
    <div style={{ background:'#ffffff', borderBottom:'1px solid var(--neutral-300)', padding:'18px 40px' }} data-screen-label="02 Trust Bar">
      <div style={{ maxWidth:1100, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'center', gap:40, flexWrap:'wrap' }}>

        {/* Joint Commission badge — PROMINENT */}
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <img src="../../assets/badge-joint-commission.png" alt="Joint Commission Gold Seal"
            style={{ height:56, width:56, objectFit:'contain', flexShrink:0 }} />
          <div>
            <div style={{ fontFamily:'Arial,sans-serif', fontWeight:700, fontSize:13, color:'var(--neutral-900)', lineHeight:1.2 }}>Joint Commission</div>
            <div style={{ fontFamily:'Arial,sans-serif', fontSize:11, color:'var(--neutral-500)', marginTop:2 }}>Gold Seal Accredited</div>
          </div>
        </div>

        <div style={{ width:1, height:44, background:'var(--neutral-300)' }}></div>

        {/* FOP badge — PROMINENT */}
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <img src="../../assets/badge-fop.png" alt="FOP Approved Wellness Provider"
            style={{ height:60, width:'auto', objectFit:'contain', flexShrink:0 }} />
          <div>
            <div style={{ fontFamily:'Arial,sans-serif', fontWeight:700, fontSize:13, color:'var(--neutral-900)', lineHeight:1.2 }}>FOP Approved</div>
            <div style={{ fontFamily:'Arial,sans-serif', fontSize:11, color:'var(--neutral-500)', marginTop:2 }}>Wellness Provider</div>
          </div>
        </div>

        <div style={{ width:1, height:44, background:'var(--neutral-300)' }}></div>

        {/* Google rating */}
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div>
            <div style={{ display:'flex', gap:2, marginBottom:3 }}>
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F5A623" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
            </div>
            <div style={{ fontFamily:'Arial,sans-serif', fontSize:12, color:'var(--neutral-700)' }}>
              <strong style={{ color:'var(--neutral-900)' }}>4.8 / 5</strong> · 154 Google Reviews
            </div>
          </div>
        </div>

        <div style={{ width:1, height:44, background:'var(--neutral-300)' }}></div>

        {/* Since 2012 */}
        <div style={{ textAlign:'center' }}>
          <div style={{ fontFamily:"'EB Garamond', serif", fontSize:30, fontWeight:400, color:'var(--brand-primary)', lineHeight:1 }}>2012</div>
          <div style={{ fontFamily:'Arial,sans-serif', fontSize:11, color:'var(--neutral-500)', marginTop:2 }}>Serving Utah since</div>
        </div>

        <div style={{ width:1, height:44, background:'var(--neutral-300)' }}></div>

        {/* Master's level */}
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ width:44, height:44, borderRadius:6, background:'var(--neutral-900)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <div>
            <div style={{ fontFamily:'Arial,sans-serif', fontWeight:700, fontSize:13, color:'var(--neutral-900)', lineHeight:1.2 }}>Master's Level</div>
            <div style={{ fontFamily:'Arial,sans-serif', fontSize:11, color:'var(--neutral-500)', marginTop:2 }}>Licensed Clinicians</div>
          </div>
        </div>

      </div>
    </div>
  );
}

Object.assign(window, { SiteTrustBar });

// StatsSection.jsx — Outcome counters + testimonial

const { useState, useEffect, useRef } = React;

function SiteStats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const stats = [
    { value: 14, suffix: '', label: 'Bed boutique facility', sub: 'Intimate, not institutional' },
    { value: 12, suffix: '+', label: 'Years of excellence', sub: 'Founded 2012 in Oakley, UT' },
    { value: 4.8, suffix: '/5', label: 'Google rating', sub: '154 verified reviews' },
    { value: 26, suffix: '+', label: 'Adults only', sub: 'Peer-matched cohort' },
  ];

  return (
    <section ref={ref} style={{ background: 'var(--bg-page)', padding: '80px 40px' }} data-screen-label="06 Stats">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <span style={{ display:'block', fontFamily:'Arial,sans-serif', fontSize:13, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--brand-secondary)', marginBottom:8 }}>RESULTS</span>
        <h2 style={{ fontFamily:"'EB Garamond', serif", fontSize:36, fontWeight:400, color:'var(--neutral-900)', lineHeight:1.25, marginBottom:48 }}>Measurable outcomes</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, marginBottom: 60 }}>
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: 'center', padding: '28px 20px', background: '#ffffff', borderRadius: 10, boxShadow: '0 2px 8px rgba(44,74,103,0.08)', borderBottom: '3px solid var(--brand-primary)' }}>
              <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 48, fontWeight: 400, color: 'var(--neutral-900)', lineHeight: 1, marginBottom: 6 }}>
                <CountUp target={s.value} suffix={s.suffix} active={visible} />
              </div>
              <div style={{ fontFamily:'Arial,sans-serif', fontWeight:700, fontSize:13, color:'var(--neutral-900)', marginBottom:4 }}>{s.label}</div>
              <div style={{ fontFamily:'Arial,sans-serif', fontSize:12, color:'var(--neutral-500)' }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div style={{ background: '#ffffff', borderRadius: 10, padding: '36px 40px', borderLeft: '4px solid var(--brand-secondary)', boxShadow:'0 2px 8px rgba(44,74,103,0.08)', maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontFamily: "'EB Garamond', serif", fontSize: 24, fontStyle: 'italic', color: 'var(--brand-primary)', lineHeight: 1.5, marginBottom: 18 }}>
            "Chateau gave me something no other program could — a place where I didn't have to explain who I was or what I'd seen. They already understood."
          </div>
          <div style={{ fontFamily: 'Arial,sans-serif', fontSize: 13, fontWeight: 700, color: 'var(--neutral-700)' }}>
            — Sgt. M.R. · Law Enforcement · 22 years of service
          </div>
        </div>
      </div>
    </section>
  );
}

function CountUp({ target, suffix, active }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const isDecimal = target % 1 !== 0;
    const duration = 1200;
    const steps = 60;
    const inc = target / steps;
    let current = 0;
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      current = Math.min(target, current + inc);
      setVal(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (frame >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);
  return <span>{val}{suffix}</span>;
}

Object.assign(window, { SiteStats });

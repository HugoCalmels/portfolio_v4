'use client'

type CalEmbedProps = {
  /** Exemple : "https://cal.com/hugo-calmels-t2fw2o/hugo-calmels" */
  url: string
}

export default function CalEmbed({ url }: CalEmbedProps) {
  const src =
    `${url}?embed=inline` +
    `&lang=fr` + // ✅ force le français
    `&theme=light` +
    `&layout=month_view` +
    `&hideEventTypeDetails=true` +
    `&hideLandingPageDetails=true` +
    `&primaryColor=38bdf8`

  return (
    <iframe
      src={src}
      title="Prendre rendez-vous"
      loading="lazy"
      className="cal-iframe"
      style={{
        width: '100%',
        minHeight: '640px',
        border: 'none',
        borderRadius: '16px',
        background: '#020617',
      }}
    />
  )
}

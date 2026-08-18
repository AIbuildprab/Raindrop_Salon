import type { LongformDoc } from '@/data/content/types'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '@/lib/contact'
import PageBreadcrumbs from './PageBreadcrumbs'
import RelatedLinks from './RelatedLinks'
import { RichText } from './RichText'
import StudioMap from './StudioMap'

type LongformPageProps = {
  doc: LongformDoc
  crumbs: { name: string; href?: string }[]
  showMap?: boolean
}

export default function LongformPage({ doc, crumbs, showMap = false }: LongformPageProps) {
  return (
    <article className="seo-page">
      <header className="seo-hero section-light">
        <div className="section-inner">
          <PageBreadcrumbs items={crumbs} />
          <span className="eyebrow" data-reveal>{doc.eyebrow}</span>
          <h1 className="section-title" data-reveal>
            {doc.h1}{doc.h1Italic ? <> <em>{doc.h1Italic}</em></> : null}
          </h1>
          <div className="gold-divider" />
          <p className="seo-lede" data-reveal>
            <RichText parts={doc.lede} />
          </p>
        </div>
      </header>

      <div className="section-light seo-body-band">
        <div className="section-inner seo-body">
          {doc.blocks.map((block, index) => {
            if (block.type === 'h2') {
              return <h2 key={index}>{block.text}</h2>
            }
            if (block.type === 'h3') {
              return <h3 key={index}>{block.text}</h3>
            }
            if (block.type === 'p') {
              return (
                <p key={index}>
                  <RichText parts={block.parts} />
                </p>
              )
            }
            if (block.type === 'ul') {
              return (
                <ul key={index}>
                  {block.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )
            }
            return (
              <div key={index} className="seo-table-wrap">
                {block.caption ? <p className="seo-table-caption">{block.caption}</p> : null}
                <table>
                  <thead>
                    <tr>
                      {block.headers.map(header => (
                        <th key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          })}

          {showMap ? (
            <div className="seo-map-block">
              <h2>Find the studio</h2>
              <StudioMap />
              <p>
                <a href="/#contact" className="seo-inline-link">Get directions and book</a>
                {' '}from the contact page.
              </p>
            </div>
          ) : null}

          <RelatedLinks
            heading={
              doc.kind === 'service'
                ? (doc.areasHeading ?? 'We also serve these areas')
                : (doc.servicesHeading ?? 'Services we offer here')
            }
            areaSlugs={doc.kind === 'service' ? doc.relatedAreaSlugs : []}
            serviceSlugs={doc.kind === 'area' ? doc.relatedServiceSlugs : []}
          />

          {doc.kind === 'service' && doc.relatedServiceSlugs.length > 0 ? (
            <RelatedLinks
              heading="Related services"
              serviceSlugs={doc.relatedServiceSlugs}
            />
          ) : null}

          <section className="seo-faq" aria-labelledby="seo-faq-heading">
            <h2 id="seo-faq-heading">Common questions</h2>
            <div className="seo-faq-list">
              {doc.faqs.map(faq => (
                <details key={faq.q} className="seo-faq-item">
                  <summary>{faq.q}</summary>
                  <p>
                    <RichText parts={faq.a} />
                  </p>
                </details>
              ))}
            </div>
          </section>

          <div className="seo-cta-row">
            <a href={PHONE_TEL} className="btn-gold" aria-label={`Call ${PHONE_DISPLAY}`}>
              <span className="btn-label-full">Call {PHONE_DISPLAY}</span>
              <span className="btn-label-short">Call to Book</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
            >
              <WhatsAppIcon size={18} />
              WhatsApp Jass
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

import type { InlinePart } from '@/data/content/types'

export function RichText({ parts }: { parts: InlinePart[] }) {
  return (
    <>
      {parts.map((part, index) =>
        typeof part === 'string' ? (
          <span key={index}>{part}</span>
        ) : (
          <a key={index} href={part.href} className="seo-inline-link">
            {part.label}
          </a>
        ),
      )}
    </>
  )
}

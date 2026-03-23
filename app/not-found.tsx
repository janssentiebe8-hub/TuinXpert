import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pagina niet gevonden — 404',
  description: 'Deze pagina bestaat niet of werd verplaatst.',
}

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F0F7F0 0%, #FFFFFF 100%)' }}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(76,175,80,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(76,175,80,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #4CAF50 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/logo/TuinXpert-Logo-Full.svg"
            alt="TuinXpert"
            width={240}
            height={84}
            className="object-contain"
          />
        </div>

        {/* 404 */}
        <div className="font-heading font-bold text-groen-neon leading-none mb-4"
          style={{ fontSize: 'clamp(100px, 20vw, 200px)' }}
        >
          404
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-wit mb-4">
          Oeps! Deze pagina bestaat niet
        </h1>

        <p className="font-body text-grijs text-lg leading-relaxed mb-10">
          De pagina die u zoekt kon niet worden gevonden. Mogelijk werd ze verplaatst,
          hernoemd of verwijderd. Geen nood — onze tuin is nog altijd even mooi.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Terug naar de homepage
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contacteer ons
          </Link>
        </div>

        {/* Quick links */}
        <div className="mt-12 pt-8 border-t border-groen border-opacity-10">
          <p className="text-grijs font-body text-sm mb-4">Of ga direct naar:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { label: 'Realisaties', href: '/realisaties' },
              { label: 'Diensten', href: '/diensten' },
              { label: 'Over Ons', href: '/over-ons' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-groen-neon font-body text-sm font-semibold hover:underline hover:text-groen-helder transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

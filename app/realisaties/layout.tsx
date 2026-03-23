import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Realisaties',
  description:
    "Bekijk de fotogalerij van TuinXpert: tuinaanleg, terrassen, vijvers en tuinonderhoud in de regio Mol. Filter op categorie en bekijk projectdetails.",
  openGraph: {
    title: "Realisaties | TuinXpert",
    description:
      "Ontdek onze uitgevoerde tuinprojecten in Mol en omgeving — aanleg, bestrating, vijvers en meer.",
  },
}

export default function RealisatiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

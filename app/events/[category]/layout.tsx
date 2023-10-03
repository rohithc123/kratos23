export async function generateStaticParams() {
  return [{ category: 'technical' }, { category: 'nontechnical' }]
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

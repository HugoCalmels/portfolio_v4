import { notFound } from 'next/navigation';

export default function CatchAllPage() {
  // 🚨 Cette route n'existe pas statiquement => 404
  return notFound();
}

export default function LocaleNotFound({ locale }: { locale: string }) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center h-screen bg-white text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Oups !</h1>
          <p className="text-lg">La langue <strong>{locale}</strong> n’est pas supportée.</p>
          <p className="mt-2">Merci de vérifier l’URL ou de revenir à la page d’accueil.</p>
        </div>
      </body>
    </html>
  );
}
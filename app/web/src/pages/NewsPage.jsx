import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Calendar, User, ArrowRight } from 'lucide-react';

function NewsPage() {
  const articles = [
    {
      title: "Lancement de la nouvelle session de formation au CFP-ASA",
      date: "12 Octobre 2026",
      author: "Admin ELTAD",
      category: "Formation",
      excerpt: "Les inscriptions sont désormais ouvertes pour les 5 filières d'excellence du Centre de Formation Professionnelle..."
    },
    {
      title: "Succès du dernier événement Rank'Art à Bangui",
      date: "05 Octobre 2026",
      author: "Coordination",
      category: "Événement",
      excerpt: "Plus de 500 jeunes ont participé aux ateliers et performances artistiques organisés le weekend dernier..."
    },
    {
      title: "Linga FM s'équipe d'un nouveau studio numérique",
      date: "28 Septembre 2026",
      author: "Radio Linga",
      category: "Radio",
      excerpt: "Grâce au soutien de nos partenaires, nous améliorons la qualité de nos diffusions pour mieux vous servir..."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Actualités & Événements - ESPACE LINGA TERE</title>
      </Helmet>
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Actualités & Événements</h1>
            <div className="flex justify-center space-x-4 mb-12">
              {['Tout', 'Formation', 'Événement', 'Radio', 'Appels'].map(cat => (
                <button key={cat} className="px-4 py-2 rounded-full border bg-card hover:bg-primary hover:text-primary-foreground transition-colors">
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, idx) => (
                <article key={idx} className="bg-card border rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground italic">Image Article</p>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-bold uppercase text-primary mb-2">{article.category}</span>
                    <h2 className="text-xl font-bold mb-3 line-clamp-2">{article.title}</h2>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">{article.excerpt}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" /> {article.date}
                      </div>
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" /> {article.author}
                      </div>
                    </div>
                    <button className="mt-4 flex items-center text-primary font-medium hover:translate-x-1 transition-transform">
                      Lire la suite <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default NewsPage;
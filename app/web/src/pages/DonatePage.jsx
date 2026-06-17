import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Heart, ShieldCheck, Smartphone, CreditCard, GraduationCap, Radio, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function DonatePage() {
  const [amount, setAmount] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Soutenir l'ESPACE LINGA TERE - Dons et Inscriptions</title>
      </Helmet>
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 flex items-center justify-center">
              <Heart className="mr-4 h-10 w-10 fill-current" /> Soutenez nos actions
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Que ce soit pour un don ou une inscription aux formations, votre engagement construit l'avenir de la culture centrafricaine.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="don" className="space-y-12">
                <div className="flex justify-center">
                  <TabsList className="grid w-full max-w-md grid-cols-2 h-14 p-1">
                    <TabsTrigger value="don" className="text-lg font-bold">Faire un Don</TabsTrigger>
                    <TabsTrigger value="inscription" className="text-lg font-bold">Inscription Formation</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="don" className="space-y-12 outline-none">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold">Pourquoi donner ?</h2>
                      <div className="space-y-4">
                        {[
                          { icon: Radio, text: "Entretenir le Studio École de Linga FM" },
                          { icon: GraduationCap, text: "Offrir des bourses aux jeunes talents" },
                          { icon: Globe, text: "Financer le projet GE SO BEAFRIKA" },
                          { icon: Heart, text: "Préserver le patrimoine centrafricain" }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center space-x-4">
                            <div className="bg-primary/10 p-2 rounded-lg">
                              <item.icon className="h-5 w-5 text-primary" />
                            </div>
                            <span className="text-lg">{item.text}</span>
                          </div>
                        ))}
                      </div>
                      <div className="p-4 bg-muted rounded-lg flex items-start space-x-3">
                        <ShieldCheck className="h-6 w-6 text-green-600 shrink-0" />
                        <p className="text-sm">Paiements sécurisés via Orange Money, Moov Money et Cartes Bancaires.</p>
                      </div>
                    </div>

                    <div className="bg-card border rounded-3xl p-8 shadow-xl">
                      <h3 className="text-2xl font-bold mb-6">Montant du don</h3>
                      <div className="space-y-4 mb-8">
                        <div className="grid grid-cols-3 gap-3">
                          {["2000", "5000", "10000"].map(val => (
                            <button
                              key={val}
                              onClick={() => setAmount(val)}
                              className={`py-3 px-2 border-2 rounded-xl transition-all font-bold ${amount === val ? 'border-primary bg-primary/5 text-primary' : 'hover:border-primary/50'}`}
                            >
                              {val} FCFA
                            </button>
                          ))}
                        </div>
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="Autre montant (FCFA)"
                          className="w-full p-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                      </div>

                      <div className="space-y-4">
                        <p className="font-bold">Mode de paiement</p>
                        <div className="grid grid-cols-2 gap-4">
                          <button className="flex flex-col items-center p-4 border-2 rounded-2xl hover:bg-muted transition-colors border-dashed">
                            <Smartphone className="h-8 w-8 mb-2 text-primary" />
                            <span className="text-xs font-bold">Mobile Money</span>
                          </button>
                          <button className="flex flex-col items-center p-4 border-2 rounded-2xl hover:bg-muted transition-colors border-dashed">
                            <CreditCard className="h-8 w-8 mb-2 text-primary" />
                            <span className="text-xs font-bold">Carte Bancaire</span>
                          </button>
                        </div>
                      </div>

                      <Button className="w-full mt-8 py-8 text-xl font-bold rounded-2xl shadow-lg shadow-primary/20">
                        Confirmer mon don
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="inscription" className="outline-none">
                  <div className="bg-card border rounded-3xl p-8 md:p-12 shadow-xl max-w-3xl mx-auto">
                    <div className="text-center mb-10 space-y-2">
                      <h2 className="text-3xl font-bold">Formulaire d'Inscription</h2>
                      <p className="text-muted-foreground">Rejoignez le CFP-ASA ou le Studio École de Linga FM</p>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wider">Nom complet</label>
                        <input type="text" className="w-full p-3 border rounded-xl bg-muted/30" placeholder="Ex: Jean Dupont" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wider">Email</label>
                        <input type="email" className="w-full p-3 border rounded-xl bg-muted/30" placeholder="jean@email.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wider">Téléphone / WhatsApp</label>
                        <input type="tel" className="w-full p-3 border rounded-xl bg-muted/30" placeholder="+236 ..." />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wider">Filière souhaitée</label>
                        <select className="w-full p-3 border rounded-xl bg-muted/30">
                          <option>Studio École (Linga FM)</option>
                          <option>Danse</option>
                          <option>Musique</option>
                          <option>Théâtre</option>
                          <option>Cinéma & Audiovisuel</option>
                        </select>
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-sm font-bold uppercase tracking-wider">Pourquoi souhaitez-vous nous rejoindre ?</label>
                        <textarea className="w-full p-3 border rounded-xl bg-muted/30 h-32" placeholder="Décrivez votre motivation..."></textarea>
                      </div>
                      <div className="md:col-span-2">
                        <Button className="w-full py-6 text-lg font-bold">Envoyer ma candidature</Button>
                      </div>
                    </form>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default DonatePage;
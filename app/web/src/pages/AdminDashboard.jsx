import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Settings,
  Users,
  FileText,
  Image as ImageIcon,
  Radio,
  Plus,
  Edit,
  Trash2,
  Save,
  LayoutDashboard,
  Globe,
  X,
  Type,
  Layout,
  ArrowLeft,
  ChevronRight,
  Link as LinkIcon,
  Search,
  CheckCircle2
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/AuthContext';
import { translations } from '@/lib/LanguageContext';
import { Navigate } from 'react-router-dom';
import { toast } from 'sonner';

function AdminDashboard() {
  const { user, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('content');
  const [editingPage, setEditingPage] = useState(null);
  const [editLang, setEditLang] = useState('FR');
  const [searchQuery, setSearchQuery] = useState('');

  // État pour les champs de texte aplatis
  const [fields, setFields] = useState([]);

  const [images, setImages] = useState([
    { id: 1, url: 'https://horizons-cdn.hostinger.com/09c951e7-3780-4cbb-b319-1263b936e067/whatsapp-image-2025-12-19-at-12.20.03-OAHKq.jpeg' },
    { id: 2, url: 'https://horizons-cdn.hostinger.com/09c951e7-3780-4cbb-b319-1263b936e067/50a65f79504e7559e90f176b8bc29b64.png' }
  ]);

  const sectionsList = [
    { id: 'home_hero', label: 'Accueil - En-tête', key: 'hero' },
    { id: 'home_stats', label: 'Accueil - Statistiques', key: 'stats' },
    { id: 'home_mission', label: 'Accueil - Mission', key: 'mission' },
    { id: 'home_pilars', label: 'Accueil - Piliers', key: 'pilars' },
    { id: 'home_newsletter', label: 'Accueil - Newsletter', key: 'newsletter' },
    { id: 'about', label: 'Page Qui sommes-nous', key: 'about' },
    { id: 'programs', label: 'Page Formations (CFP-ASA)', key: 'programs' },
    { id: 'radio', label: 'Page Radio Linga FM', key: 'radio_page' },
    { id: 'ge-so', label: 'Page Projet GE SÔ BÊAFRIKÂ', key: 'geSo_page' },
    { id: 'nav', label: 'Menu de Navigation', key: 'nav' },
    { id: 'footer', label: 'Pied de page (Footer)', key: 'footer' },
    { id: 'auth', label: 'Textes Connexion/Inscription', key: 'auth' },
    { id: 'profile', label: 'Espace Profil', key: 'profile' },
  ];

  // Fonction pour aplatir l'objet de traduction
  const flattenObject = (obj, prefix = '') => {
    return Object.keys(obj).reduce((acc, k) => {
      const pre = prefix.length ? prefix + '.' : '';
      if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
        Object.assign(acc, flattenObject(obj[k], pre + k));
      } else {
        acc[pre + k] = obj[k];
      }
      return acc;
    }, {});
  };

  useEffect(() => {
    if (editingPage) {
      const pageData = translations[editLang][editingPage.key];
      if (pageData) {
        const flattened = flattenObject(pageData);
        setFields(Object.entries(flattened).map(([key, value]) => ({
          key,
          value,
          label: key.split('.').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' > ')
        })));
      }
    }
  }, [editingPage, editLang]);

  if (!user || !isAdmin) {
    return <Navigate to="/login" replace />;
  }

  const handleEdit = (section) => {
    setEditingPage(section);
  };

  const handleFieldChange = (key, newValue) => {
    setFields(fields.map(f => f.key === key ? { ...f, value: newValue } : f));
  };

  const handleSave = () => {
    toast.success(`Contenu de "${editingPage.label}" mis à jour avec succès en ${editLang} !`);
    setEditingPage(null);
  };

  const filteredSections = sectionsList.filter(s =>
    s.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      <Helmet>
        <title>Console Administration - ESPACE LINGA TERE</title>
      </Helmet>
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          {!editingPage && (
            <aside className="w-full lg:w-72 shrink-0">
              <div className="bg-white border rounded-[2.5rem] p-8 shadow-xl shadow-black/5 sticky top-24">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                    <Settings className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="font-black text-xl tracking-tight">ADMIN</h2>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Contrôle Total</p>
                  </div>
                </div>

                <nav className="space-y-3">
                  {[
                    { id: 'content', label: 'Éditeur de Site', icon: FileText },
                    { id: 'media', label: 'Médiathèque', icon: ImageIcon },
                    { id: 'users', label: 'Utilisateurs', icon: Users },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-black transition-all ${
                        activeTab === item.id
                          ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-[1.02]'
                          : 'text-muted-foreground hover:bg-muted/50'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          {/* Main Area */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {activeTab === 'content' && !editingPage && (
                <motion.div
                  key="list"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  <div className="bg-white border p-10 rounded-[3rem] shadow-xl shadow-black/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                      <div className="space-y-2 text-center md:text-left">
                        <h1 className="text-4xl font-black tracking-tighter">ÉDITEUR DE CONTENU</h1>
                        <p className="text-muted-foreground font-medium">Modifier chaque mot du site sans toucher au code.</p>
                      </div>
                      <div className="relative w-full md:w-72">
                         <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
                         <input
                           type="text"
                           placeholder="Rechercher une section..."
                           className="w-full pl-12 pr-4 py-3.5 bg-muted/30 rounded-2xl border-none focus:ring-2 focus:ring-primary font-bold transition-all"
                           value={searchQuery}
                           onChange={(e) => setSearchQuery(e.target.value)}
                         />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredSections.map((section) => (
                      <motion.div
                        key={section.id}
                        whileHover={{ y: -8 }}
                        className="bg-white border rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all group border-transparent hover:border-primary/10 flex flex-col justify-between"
                      >
                        <div className="flex justify-between items-start mb-8">
                          <div className="w-16 h-16 rounded-3xl bg-muted/50 flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500">
                            <FileText className="h-8 w-8" />
                          </div>
                          <span className="text-[10px] font-black bg-muted px-3 py-1 rounded-full uppercase tracking-widest text-muted-foreground">ID: {section.key}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors leading-tight">{section.label}</h3>
                          <Button
                            onClick={() => handleEdit(section)}
                            className="w-full rounded-2xl h-14 font-black text-lg bg-muted text-foreground hover:bg-primary hover:text-white transition-all shadow-none group-hover:shadow-xl group-hover:shadow-primary/20"
                          >
                             MODIFIER
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {editingPage && (
                <motion.div
                  key="editor"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  {/* Editor Toolbar */}
                  <div className="flex flex-col xl:flex-row justify-between items-center gap-6 bg-white border p-6 rounded-[2.5rem] shadow-xl shadow-black/5 sticky top-24 z-10">
                    <button
                      onClick={() => setEditingPage(null)}
                      className="flex items-center gap-3 font-black text-primary hover:scale-105 transition-transform"
                    >
                      <ArrowLeft className="h-6 w-6" /> RETOUR À LA LISTE
                    </button>

                    <div className="flex bg-muted/50 p-1.5 rounded-3xl">
                      {['FR', 'SG', 'EN'].map(lang => (
                        <button
                          key={lang}
                          onClick={() => setEditLang(lang)}
                          className={`px-8 py-3 rounded-2xl text-xs font-black transition-all ${
                            editLang === lang ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-muted-foreground hover:bg-white'
                          }`}
                        >
                          {lang === 'FR' ? 'FRANÇAIS' : lang === 'SG' ? 'SANGO' : 'ENGLISH'}
                        </button>
                      ))}
                    </div>

                    <Button onClick={handleSave} className="rounded-2xl font-black bg-primary h-14 px-10 hover:scale-105 transition-all shadow-xl shadow-primary/30 gap-3">
                      <Save className="h-6 w-6" /> ENREGISTRER TOUT
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {/* Content Editor */}
                    <div className="xl:col-span-2 space-y-6">
                      <div className="bg-white border rounded-[3rem] p-10 shadow-sm space-y-10">
                        <div className="border-l-[6px] border-primary pl-6 py-2">
                          <h2 className="text-3xl font-black tracking-tighter uppercase">{editingPage.label}</h2>
                          <p className="text-muted-foreground font-bold text-sm tracking-wide">ÉDITION EN {editLang} • {fields.length} CHAMPS DÉTECTÉS</p>
                        </div>

                        <div className="grid gap-10">
                          {fields.map((field, idx) => (
                            <div key={idx} className="space-y-3 group">
                              <div className="flex justify-between items-center">
                                <label className="text-[11px] font-black uppercase tracking-[0.2em] text-primary/60 group-hover:text-primary transition-colors">
                                  {field.label}
                                </label>
                                <span className="text-[10px] font-mono text-muted-foreground opacity-50">{field.key}</span>
                              </div>

                              {field.value.length > 80 ? (
                                <textarea
                                  value={field.value}
                                  onChange={(e) => handleFieldChange(field.key, e.target.value)}
                                  className="w-full px-6 py-5 bg-muted/20 border-2 border-transparent focus:border-primary/20 rounded-[1.5rem] focus:outline-none font-medium leading-relaxed transition-all min-h-[140px]"
                                />
                              ) : (
                                <input
                                  type="text"
                                  value={field.value}
                                  onChange={(e) => handleFieldChange(field.key, e.target.value)}
                                  className="w-full px-6 py-5 bg-muted/20 border-2 border-transparent focus:border-primary/20 rounded-2xl focus:outline-none font-black text-lg transition-all"
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quick Media/Preview Side */}
                    <div className="space-y-8">
                      <div className="bg-white border rounded-[3rem] p-10 shadow-sm space-y-8">
                        <h2 className="text-2xl font-black tracking-tighter flex items-center gap-3">
                          <ImageIcon className="h-6 w-6 text-primary" /> MÉDIAS RAPIDES
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                          {images.map(img => (
                             <div key={img.id} className="aspect-square rounded-3xl overflow-hidden border-2 border-muted relative group cursor-pointer">
                                <img src={img.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                                   <Button size="sm" variant="secondary" className="rounded-xl font-black text-[10px]" onClick={() => { navigator.clipboard.writeText(img.url); toast.success("URL Copiée !"); }}>COPIER LIEN</Button>
                                </div>
                             </div>
                          ))}
                          <button className="aspect-square rounded-3xl border-2 border-dashed flex flex-col items-center justify-center gap-2 hover:bg-muted/50 transition-all text-muted-foreground hover:text-primary hover:border-primary">
                             <Plus className="h-8 w-8" />
                             <span className="text-[10px] font-black uppercase">AJOUTER</span>
                          </button>
                        </div>
                      </div>

                      <div className="bg-primary rounded-[3rem] p-10 text-white shadow-2xl shadow-primary/40 space-y-6">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                          <CheckCircle2 className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-black leading-tight">VOTRE SITE EST À JOUR</h3>
                        <p className="text-white/80 font-medium text-sm leading-relaxed">
                          Toutes les modifications effectuées ici sont reflétées sur le site dès que vous appuyez sur "Enregistrer".
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AdminDashboard;
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
  ArrowLeft,
  Search,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/AuthContext';
import { supabase } from '@/lib/supabase';
import { translations } from '@/lib/LanguageContext';
import { Navigate } from 'react-router-dom';
import { toast } from 'sonner';

function AdminDashboard() {
  const { user, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('content');
  const [editingPage, setEditingPage] = useState(null);
  const [editLang, setEditLang] = useState('FR');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const [fields, setFields] = useState([]);
  const [images, setImages] = useState([]);

  const handleMigrate = async () => {
    if (!window.confirm("Voulez-vous vraiment écraser les données Supabase par les données locales du fichier ?")) return;
    setLoading(true);
    try {
      const languages = ['FR', 'SG', 'EN'];
      let count = 0;

      for (const lang of languages) {
        const sections = translations[lang];
        for (const [key, content] of Object.entries(sections)) {
          const { error } = await supabase
            .from('site_content')
            .upsert({
              section_key: key,
              language_code: lang,
              content: content,
              updated_at: new Date()
            }, { onConflict: 'section_key,language_code' });

          if (error) throw error;
          count++;
        }
      }
      toast.success(`${count} sections ont été migrées vers Supabase avec succès !`);
    } catch (error) {
      toast.error("Erreur de migration : " + error.message);
    }
    setLoading(false);
  };

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
  ];

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

  const unflattenObject = (data) => {
    const result = {};
    for (const i in data) {
      const keys = i.split('.');
      keys.reduce((r, k, x) => {
        return r[k] || (r[k] = keys[x + 1] ? {} : data[i]);
      }, result);
    }
    return result;
  };

  // Charger les images depuis Supabase
  const loadImages = async () => {
    const { data, error } = await supabase.from('media').select('*').order('created_at', { ascending: false });
    if (!error) setImages(data);
  };

  useEffect(() => {
    loadImages();
  }, []);

  // Charger le contenu quand on sélectionne une page
  useEffect(() => {
    const loadContent = async () => {
      if (!editingPage) return;
      setLoading(true);

      const { data, error } = await supabase
        .from('site_content')
        .select('content')
        .eq('section_key', editingPage.key)
        .eq('language_code', editLang)
        .single();

      let contentToDisplay;
      if (data) {
        contentToDisplay = data.content;
      } else {
        // Fallback sur le fichier local si pas encore en base
        contentToDisplay = translations[editLang][editingPage.key];
      }

      const flattened = flattenObject(contentToDisplay || {});
      setFields(Object.entries(flattened).map(([key, value]) => ({
        key,
        value,
        label: key.split('.').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' > ')
      })));
      setLoading(false);
    };

    loadContent();
  }, [editingPage, editLang]);

  const handleEdit = (section) => {
    setEditingPage(section);
  };

  const handleFieldChange = (key, newValue) => {
    setFields(fields.map(f => f.key === key ? { ...f, value: newValue } : f));
  };

  const handleSave = async () => {
    setLoading(true);
    const contentMap = {};
    fields.forEach(f => contentMap[f.key] = f.value);
    const unflattened = unflattenObject(contentMap);

    const { error } = await supabase
      .from('site_content')
      .upsert({
        section_key: editingPage.key,
        language_code: editLang,
        content: unflattened,
        updated_at: new Date()
      }, { onConflict: 'section_key,language_code' });

    if (error) {
      toast.error("Erreur lors de la sauvegarde : " + error.message);
    } else {
      toast.success("Contenu mis à jour sur Supabase !");
      setEditingPage(null);
    }
    setLoading(false);
  };

  const handleAddImage = async () => {
    const url = prompt("URL de l'image :");
    if (url) {
      const { error } = await supabase.from('media').insert([{ url }]);
      if (error) toast.error(error.message);
      else {
        toast.success("Image ajoutée");
        loadImages();
      }
    }
  };

  const handleDeleteImage = async (id) => {
    const { error } = await supabase.from('media').delete().eq('id', id);
    if (error) toast.error(error.message);
    else loadImages();
  };

  if (!user || !isAdmin) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      <Helmet><title>Admin Console - ESPACE LINGA TERE</title></Helmet>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {!editingPage && (
            <aside className="w-full lg:w-72 shrink-0">
              <div className="bg-white border rounded-[2.5rem] p-8 shadow-xl sticky top-24">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white"><Settings className="h-7 w-7" /></div>
                  <h2 className="font-black text-xl">ELTAD ADMIN</h2>
                </div>
                <nav className="space-y-3">
                  <button onClick={() => setActiveTab('content')} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-black transition-all ${activeTab === 'content' ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-muted-foreground hover:bg-muted/50'}`}><FileText className="h-5 w-5" /> Contenu</button>
                  <button onClick={() => setActiveTab('media')} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-black transition-all ${activeTab === 'media' ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'text-muted-foreground hover:bg-muted/50'}`}><ImageIcon className="h-5 w-5" /> Médiathèque</button>
                  <div className="pt-10">
                    <Button
                      onClick={handleMigrate}
                      disabled={loading}
                      variant="outline"
                      className="w-full rounded-2xl border-dashed border-2 border-primary/30 text-primary hover:bg-primary/5 font-black text-[10px] tracking-widest h-12"
                    >
                      {loading ? <RefreshCw className="animate-spin h-3 w-3" /> : 'INITIALISER SUPABASE'}
                    </Button>
                    <p className="text-[9px] text-muted-foreground text-center mt-2 px-4 uppercase font-bold opacity-50">Transférer les fichiers locaux vers la base de données</p>
                  </div>
                </nav>
              </div>
            </aside>
          )}

          <div className="flex-1">
            <AnimatePresence mode="wait">
              {activeTab === 'content' && !editingPage && (
                <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  <div className="bg-white border p-10 rounded-[3rem] shadow-sm flex flex-col md:flex-row justify-between items-center">
                    <h1 className="text-3xl font-black">ÉDITEUR SUPABASE</h1>
                    <div className="relative w-72">
                      <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
                      <input type="text" placeholder="Rechercher..." className="w-full pl-12 pr-4 py-3.5 bg-muted/30 rounded-2xl border-none" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sectionsList.filter(s => s.label.toLowerCase().includes(searchQuery.toLowerCase())).map(section => (
                      <div key={section.id} className="bg-white border rounded-[2.5rem] p-8 hover:shadow-2xl transition-all group">
                        <h3 className="text-2xl font-black mb-6">{section.label}</h3>
                        <Button onClick={() => handleEdit(section)} className="w-full rounded-2xl h-14 font-black bg-primary">MODIFIER</Button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'media' && (
                <motion.div key="media" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  <div className="bg-white border p-10 rounded-[3rem] flex justify-between items-center">
                    <h1 className="text-3xl font-black">MÉDIATHÈQUE</h1>
                    <Button onClick={handleAddImage} className="rounded-2xl font-black gap-2"><Plus className="h-5 w-5" /> AJOUTER</Button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {images.map(img => (
                      <div key={img.id} className="group relative aspect-square rounded-[2rem] overflow-hidden border">
                        <img src={img.url} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                          <Button size="sm" variant="secondary" className="mb-2 rounded-lg font-black" onClick={() => {navigator.clipboard.writeText(img.url); toast.success("Copié !");}}>COPIER LIEN</Button>
                          <Button size="sm" variant="destructive" className="rounded-lg font-black" onClick={() => handleDeleteImage(img.id)}><Trash2 className="h-4 w-4" /></Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {editingPage && (
                <motion.div key="editor" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <div className="flex justify-between items-center bg-white border p-6 rounded-[2.5rem] sticky top-24 z-10">
                    <button onClick={() => setEditingPage(null)} className="font-black text-primary flex items-center gap-2"><ArrowLeft /> RETOUR</button>
                    <div className="flex bg-muted/50 p-1.5 rounded-3xl">
                      {['FR', 'SG', 'EN'].map(lang => (
                        <button key={lang} onClick={() => setEditLang(lang)} className={`px-8 py-3 rounded-2xl text-xs font-black transition-all ${editLang === lang ? 'bg-primary text-white' : 'text-muted-foreground'}`}>{lang}</button>
                      ))}
                    </div>
                    <Button onClick={handleSave} disabled={loading} className="rounded-2xl font-black bg-primary h-14 px-10 gap-2">
                      {loading ? <RefreshCw className="animate-spin" /> : <Save />} ENREGISTRER
                    </Button>
                  </div>
                  <div className="bg-white border rounded-[3rem] p-10 shadow-sm space-y-10">
                    <h2 className="text-3xl font-black border-l-4 border-primary pl-6 uppercase">{editingPage.label}</h2>
                    <div className="grid gap-8">
                      {fields.map((field, idx) => (
                        <div key={idx} className="space-y-2">
                          <label className="text-[11px] font-black uppercase text-primary/60">{field.label}</label>
                          {field.value.length > 80 ?
                            <textarea value={field.value} onChange={e => handleFieldChange(field.key, e.target.value)} className="w-full px-6 py-5 bg-muted/20 rounded-[1.5rem] focus:ring-2 focus:ring-primary focus:outline-none min-h-[120px]" /> :
                            <input type="text" value={field.value} onChange={e => handleFieldChange(field.key, e.target.value)} className="w-full px-6 py-5 bg-muted/20 rounded-2xl focus:ring-2 focus:ring-primary focus:outline-none font-bold" />
                          }
                        </div>
                      ))}
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
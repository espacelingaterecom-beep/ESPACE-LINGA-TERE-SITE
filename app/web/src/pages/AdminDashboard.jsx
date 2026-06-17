import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Settings, Users, FileText, Image as ImageIcon, Radio, Plus, Edit, Trash2, Save,
  LayoutDashboard, Globe, ArrowLeft, Search, CheckCircle2, RefreshCw, Newspaper,
  GraduationCap, MessageSquare, Map, LogOut, User, Upload, Play, Headphones,
  ChevronRight, MoreVertical, Shield, Clock, TrendingUp, BarChart3, X, Camera, Link as LinkIcon
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/AuthContext';
import { supabase } from '@/lib/supabase';
import { translations } from '@/lib/LanguageContext';
import { Navigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

function AdminDashboard() {
  const { user, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [editingPage, setEditingPage] = useState(null);
  const [editLang, setEditLang] = useState('FR');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Data States
  const [fields, setFields] = useState([]);
  const [images, setImages] = useState([]);
  const [news, setNews] = useState([]);
  const [messages, setMessages] = useState([]);
  const [members, setMembers] = useState([]);
  const [radioStats, setRadioStats] = useState({ streamUrl: '', listeners: 0 });

  // Modal States
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);

  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    setLoading(true);
    try {
      // Parallel loading
      const [mediaRes, newsRes, msgRes, profileRes] = await Promise.all([
        supabase.from('media').select('*').order('created_at', { ascending: false }),
        supabase.from('news').select('*').order('published_at', { ascending: false }),
        supabase.from('contact_messages').select('*').order('created_at', { ascending: false }),
        supabase.from('profiles').select('*').order('updated_at', { ascending: false })
      ]);

      if (mediaRes.data) setImages(mediaRes.data);
      if (newsRes.data) setNews(newsRes.data);
      if (msgRes.data) setMessages(msgRes.data);
      if (profileRes.data) setMembers(profileRes.data);

      // Mock Radio Stats
      setRadioStats({ streamUrl: 'https://stream.lingafm.org/live', listeners: 142 });
    } catch (e) {
      toast.error("Erreur de chargement des données");
    }
    setLoading(false);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      await supabase.from('media').insert([{ url: publicUrl }]);
      loadAllData();
      toast.success("Image téléchargée avec succès !");
    } catch (e) {
      toast.error("Erreur lors du téléchargement : " + e.message);
    }
    setLoading(false);
  };

  // Charts Config
  const lineData = {
    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    datasets: [{
      label: 'Visiteurs',
      data: [120, 190, 300, 250, 420, 510, 380],
      borderColor: '#E65100',
      backgroundColor: 'rgba(230, 81, 0, 0.1)',
      tension: 0.4,
      fill: true
    }]
  };

  if (!user || !isAdmin) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFB] text-[#1A1A1A]">
      <Helmet><title>ELTAD - Administration Avancée</title></Helmet>
      <Header />

      <main className="flex-grow flex flex-col lg:flex-row gap-0">

        {/* Sidebar Moderne */}
        <aside className="w-full lg:w-72 bg-white border-r min-h-[calc(100vh-80px)] p-6 space-y-8 sticky top-20">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-black text-sm tracking-tighter uppercase">Linga Admin</h2>
              <p className="text-[10px] text-muted-foreground font-bold">SYSTÈME V3.0</p>
            </div>
          </div>

          <nav className="space-y-1">
            {[
              { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'content', label: 'Pages & Contenu', icon: FileText },
              { id: 'news', label: 'Actualités', icon: Newspaper },
              { id: 'radio', label: 'Gestion Radio', icon: Radio },
              { id: 'media', label: 'Médiathèque', icon: ImageIcon },
              { id: 'members', label: 'Membres', icon: Users },
              { id: 'messages', label: 'Messages', icon: MessageSquare },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-[13px] font-black transition-all ${
                  activeTab === item.id
                    ? 'bg-primary/10 text-primary shadow-sm'
                    : 'text-muted-foreground hover:bg-muted/50'
                }`}
              >
                <item.icon className="h-4.5 w-4.5" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-8 border-t space-y-4">
             <div className="p-4 bg-muted/30 rounded-2xl">
                <p className="text-[10px] font-bold text-muted-foreground uppercase mb-2 tracking-widest">Base de données</p>
                <div className="flex items-center gap-2 text-green-600">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-black">Supabase Connecté</span>
                </div>
             </div>
          </div>
        </aside>

        {/* Zone de contenu dynamique */}
        <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
          <AnimatePresence mode="wait">

            {/* 1. DASHBOARD / VUE D'ENSEMBLE */}
            {activeTab === 'overview' && (
              <motion.div key="overview" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <h1 className="text-4xl font-black tracking-tighter uppercase">Statistiques</h1>
                    <p className="text-muted-foreground font-medium">Vue d'ensemble de la plateforme en temps réel.</p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="rounded-xl font-bold h-12">Rapport PDF</Button>
                    <Button className="rounded-xl font-bold h-12 shadow-lg shadow-primary/20">Exporter .CSV</Button>
                  </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { label: 'Visiteurs Uniques', value: '45.2k', trend: '+12.5%', icon: TrendingUp, color: 'text-blue-600' },
                    { label: 'Temps Moyen', value: '4m 32s', trend: '+2.1%', icon: Clock, color: 'text-orange-600' },
                    { label: 'Articles Publiés', value: news.length, trend: 'stable', icon: Newspaper, color: 'text-purple-600' },
                    { label: 'Radio (Auditeurs)', value: radioStats.listeners, trend: '+18%', icon: Headphones, color: 'text-green-600' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white border rounded-3xl p-6 shadow-sm flex items-center gap-5">
                      <div className={`w-12 h-12 rounded-2xl bg-muted/50 flex items-center justify-center ${stat.color}`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">{stat.label}</p>
                        <div className="flex items-center gap-2">
                           <span className="text-2xl font-black">{stat.value}</span>
                           <span className="text-[10px] font-bold text-green-500">{stat.trend}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Charts Area */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                   <div className="xl:col-span-2 bg-white border rounded-[2.5rem] p-8 shadow-sm">
                      <div className="flex items-center justify-between mb-8">
                         <h3 className="text-xl font-black uppercase flex items-center gap-2">
                           <BarChart3 className="h-5 w-5 text-primary" /> Trafic Hebdomadaire
                         </h3>
                         <select className="bg-muted/50 border-none rounded-lg text-xs font-bold px-4 py-2">
                            <option>7 derniers jours</option>
                            <option>30 derniers jours</option>
                         </select>
                      </div>
                      <div className="h-80">
                         <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
                      </div>
                   </div>
                   <div className="bg-white border rounded-[2.5rem] p-8 shadow-sm">
                      <h3 className="text-xl font-black uppercase mb-8">Langues Utilisées</h3>
                      <div className="h-64">
                         <Doughnut data={{
                           labels: ['Français', 'Sango', 'Anglais'],
                           datasets: [{
                             data: [65, 25, 10],
                             backgroundColor: ['#E65100', '#FFB74D', '#FFF3E0'],
                             borderWidth: 0
                           }]
                         }} options={{ responsive: true, maintainAspectRatio: false, cutout: '70%' }} />
                      </div>
                      <div className="mt-8 space-y-4">
                         <div className="flex justify-between items-center text-xs font-bold">
                            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary" /> Français</span>
                            <span>65%</span>
                         </div>
                         <div className="flex justify-between items-center text-xs font-bold">
                            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-orange-400" /> Sango</span>
                            <span>25%</span>
                         </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            )}

            {/* 3. ACTUALITÉS - GESTION COMPLÈTE */}
            {activeTab === 'news' && (
              <motion.div key="news" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white border p-8 rounded-[2rem] shadow-sm">
                   <div>
                    <h1 className="text-3xl font-black uppercase">Actualités</h1>
                    <p className="text-muted-foreground font-medium">Gérez vos articles, publications et annonces.</p>
                  </div>
                  <Button onClick={() => setIsNewsModalOpen(true)} className="rounded-2xl font-black h-12 px-10 bg-primary shadow-lg shadow-primary/20 gap-2">
                    <Plus className="h-5 w-5" /> Publier un article
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {news.map((item) => (
                     <div key={item.id} className="bg-white border rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                        <div className="h-48 overflow-hidden relative">
                           <img src={item.image_url || 'https://via.placeholder.com/400x300'} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                           <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase text-primary">Actualité</div>
                        </div>
                        <div className="p-6 space-y-4">
                           <p className="text-[10px] font-bold text-muted-foreground">{new Date(item.published_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                           <h3 className="text-lg font-black leading-tight h-14 overflow-hidden">{item.title_fr}</h3>
                           <div className="flex gap-2 pt-4 border-t">
                              <Button variant="ghost" className="flex-1 rounded-xl font-bold h-11"><Edit className="h-4 w-4 mr-2" /> Éditer</Button>
                              <Button variant="ghost" className="rounded-xl font-bold h-11 text-destructive hover:bg-destructive/5"><Trash2 className="h-4 w-4" /></Button>
                           </div>
                        </div>
                     </div>
                   ))}
                </div>
              </motion.div>
            )}

            {/* 5. MÉDIATHÈQUE - TÉLÉCHARGEMENT DIRECT */}
            {activeTab === 'media' && (
              <motion.div key="media" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                 <div className="bg-white border p-10 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm">
                    <div>
                      <h1 className="text-3xl font-black uppercase tracking-tighter">Médiathèque</h1>
                      <p className="text-muted-foreground font-medium">Glissez-déposez ou parcourez pour ajouter des fichiers.</p>
                    </div>
                    <label className="flex items-center gap-2 bg-primary text-white px-8 h-14 rounded-2xl font-black cursor-pointer hover:scale-105 transition-transform shadow-lg shadow-primary/30">
                       <Upload className="h-5 w-5" /> SÉLECTIONNER DES FICHIERS
                       <input type="file" className="hidden" onChange={handleFileUpload} accept="image/*" />
                    </label>
                 </div>

                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {images.map(img => (
                      <div key={img.id} className="group relative aspect-square rounded-[2rem] overflow-hidden border bg-white shadow-sm ring-primary/20 hover:ring-4 transition-all">
                        <img src={img.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 gap-3">
                           <Button size="sm" variant="secondary" className="w-full rounded-xl font-black text-[10px]" onClick={() => {navigator.clipboard.writeText(img.url); toast.success("URL Copiée !");}}>COPIER LIEN</Button>
                           <Button size="sm" variant="destructive" className="w-full rounded-xl font-black text-[10px]" onClick={async () => { if(window.confirm("Supprimer l'image ?")) { await supabase.from('media').delete().eq('id', img.id); loadAllData(); }}}>SUPPRIMER</Button>
                        </div>
                      </div>
                    ))}
                    <label className="aspect-square rounded-[2rem] border-4 border-dashed border-muted flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-muted/30 hover:border-primary/30 transition-all text-muted-foreground">
                       <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center"><Plus className="h-6 w-6" /></div>
                       <span className="text-xs font-black uppercase tracking-widest">Nouveau</span>
                       <input type="file" className="hidden" onChange={handleFileUpload} />
                    </label>
                 </div>
              </motion.div>
            )}

            {/* 6. GESTION RADIO */}
            {activeTab === 'radio' && (
              <motion.div key="radio" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                 <div className="bg-white border p-10 rounded-[3rem] shadow-sm">
                    <h1 className="text-3xl font-black uppercase">Gestion Radio 96.5 FM</h1>
                    <p className="text-muted-foreground font-medium">Contrôle du streaming et statistiques d'audience.</p>
                 </div>

                 <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <div className="bg-white border rounded-[2.5rem] p-10 shadow-sm space-y-8">
                       <h3 className="text-xl font-black uppercase flex items-center gap-3">
                         <Play className="h-5 w-5 text-primary" /> Streaming Live
                       </h3>
                       <div className="space-y-4">
                          <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">URL du flux audio</label>
                          <div className="flex gap-2">
                             <input
                               type="text"
                               value={radioStats.streamUrl}
                               className="flex-1 px-6 py-4 bg-muted/30 rounded-2xl border-none font-mono text-sm"
                               readOnly
                             />
                             <Button className="rounded-2xl px-6 font-black">TESTER</Button>
                          </div>
                       </div>
                       <div className="p-8 bg-primary rounded-3xl text-white flex justify-between items-center">
                          <div className="space-y-1">
                             <p className="text-[10px] font-black uppercase opacity-60">Status de Diffusion</p>
                             <p className="text-3xl font-black">EN DIRECT</p>
                          </div>
                          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                             <Radio className="h-8 w-8" />
                          </div>
                       </div>
                    </div>

                    <div className="bg-white border rounded-[2.5rem] p-10 shadow-sm space-y-8 text-center">
                       <h3 className="text-xl font-black uppercase">Audience Actuelle</h3>
                       <div className="py-10">
                          <div className="inline-flex items-center justify-center w-40 h-40 rounded-full border-[10px] border-primary/10 border-t-primary relative">
                             <span className="text-5xl font-black text-primary">{radioStats.listeners}</span>
                             <div className="absolute -bottom-4 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-bold">AUDITEURS</div>
                          </div>
                       </div>
                       <p className="text-muted-foreground text-sm max-w-xs mx-auto">Le nombre d'auditeurs a augmenté de <strong>12%</strong> par rapport à la même heure hier.</p>
                    </div>
                 </div>
              </motion.div>
            )}

            {/* 7. GESTION MEMBRES */}
            {activeTab === 'members' && (
              <motion.div key="members" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                 <div className="bg-white border p-10 rounded-[3rem] shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                      <h1 className="text-3xl font-black uppercase">Membres</h1>
                      <p className="text-muted-foreground font-medium">Gestion des utilisateurs et des rôles d'accès.</p>
                    </div>
                    <div className="flex bg-muted/30 p-1.5 rounded-2xl">
                       <button className="px-6 py-2 rounded-xl text-xs font-bold bg-white shadow-sm">Tous</button>
                       <button className="px-6 py-2 rounded-xl text-xs font-bold text-muted-foreground">Admin</button>
                    </div>
                 </div>

                 <div className="bg-white border rounded-[3.5rem] overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                       <thead className="bg-muted/50 border-b">
                          <tr>
                             <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Utilisateur</th>
                             <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Rôle</th>
                             <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Dernière Connexion</th>
                             <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground text-right">Action</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y">
                          {members.map((member) => (
                             <tr key={member.id} className="hover:bg-muted/10 transition-colors">
                                <td className="px-10 py-6">
                                   <div className="flex items-center gap-4">
                                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">{member.full_name?.charAt(0) || '?'}</div>
                                      <div>
                                         <p className="font-black text-sm">{member.full_name || 'Sans Nom'}</p>
                                         <p className="text-xs text-muted-foreground">{member.username || member.id.slice(0, 8)}</p>
                                      </div>
                                   </div>
                                </td>
                                <td className="px-10 py-6">
                                   <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase ${member.role === 'admin' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
                                      {member.role || 'user'}
                                   </span>
                                </td>
                                <td className="px-10 py-6 text-sm text-muted-foreground font-medium">
                                   {new Date(member.updated_at).toLocaleDateString()}
                                </td>
                                <td className="px-10 py-6 text-right">
                                   <Button variant="ghost" size="icon" className="rounded-xl"><MoreVertical className="h-4 w-4" /></Button>
                                </td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </motion.div>
            )}

            {/* PLACEHOLDERS RESTANTS */}
            {['content', 'messages'].includes(activeTab) && (
              <div className="bg-white border rounded-[3rem] p-20 text-center space-y-6">
                 <RefreshCw className="h-12 w-12 text-primary animate-spin mx-auto" />
                 <h2 className="text-2xl font-black uppercase">Redirection vers l'outil spécifique...</h2>
              </div>
            )}

          </AnimatePresence>
        </div>
      </main>

      {/* MODAL AJOUT ACTUALITÉ (SIMPLIFIÉ) */}
      <AnimatePresence>
        {isNewsModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsNewsModalOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
             <motion.div
               initial={{ opacity: 0, scale: 0.9, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.9, y: 20 }}
               className="relative w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl overflow-hidden"
             >
                <div className="p-10 border-b flex justify-between items-center bg-muted/10">
                   <h2 className="text-3xl font-black tracking-tighter uppercase">Publier un nouvel article</h2>
                   <button onClick={() => setIsNewsModalOpen(false)} className="w-12 h-12 rounded-full hover:bg-muted flex items-center justify-center transition-colors"><X className="h-6 w-6" /></button>
                </div>
                <div className="p-10 max-h-[70vh] overflow-y-auto space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                         <label className="text-[10px] font-black uppercase text-primary tracking-widest">Titre de l'article (FR)</label>
                         <input type="text" className="w-full px-6 py-4 bg-muted/30 rounded-2xl border-none font-bold" placeholder="Titre en français..." />
                      </div>
                      <div className="space-y-3">
                         <label className="text-[10px] font-black uppercase text-primary tracking-widest">Image de couverture (URL)</label>
                         <div className="flex gap-2">
                            <input type="text" className="flex-1 px-6 py-4 bg-muted/30 rounded-2xl border-none font-mono text-xs" placeholder="https://..." />
                            <Button variant="outline" className="rounded-2xl h-14 w-14 p-0"><Camera className="h-5 w-5" /></Button>
                         </div>
                      </div>
                   </div>
                   <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-primary tracking-widest">Contenu de l'article (FR)</label>
                      <textarea rows="10" className="w-full px-6 py-4 bg-muted/30 rounded-3xl border-none font-medium leading-relaxed" placeholder="Écrivez votre article ici..." />
                   </div>
                </div>
                <div className="p-10 bg-muted/10 border-t flex justify-end gap-4">
                   <Button variant="ghost" onClick={() => setIsNewsModalOpen(false)} className="rounded-2xl font-black h-14 px-8">Annuler</Button>
                   <Button className="rounded-2xl font-black h-14 px-12 bg-primary shadow-xl shadow-primary/20">Publier maintenant</Button>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default AdminDashboard;
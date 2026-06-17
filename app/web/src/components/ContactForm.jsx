import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { MapPin, Phone, Clock } from 'lucide-react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    partnershipType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, partnershipType: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Veuillez entrer une adresse e-mail valide');
      return;
    }

    setIsSubmitting(true);

    try {
      const existingContacts = JSON.parse(localStorage.getItem('espace_linga_tere_contacts') || '[]');
      const newContact = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now()
      };
      existingContacts.push(newContact);
      localStorage.setItem('espace_linga_tere_contacts', JSON.stringify(existingContacts));

      toast.success('Message envoye avec succes');
      setFormData({
        name: '',
        email: '',
        organization: '',
        partnershipType: '',
        message: ''
      });
    } catch (error) {
      toast.error('Echec de l\'envoi du message. Veuillez reessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Direct Contact Reference */}
      <div className="p-5 rounded-xl bg-muted/50 border border-border/50 text-sm text-muted-foreground space-y-3">
        <p className="font-medium text-foreground">Preferez-vous nous contacter directement ?</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start space-x-2">
            <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
            <span>Avenu Mbaîkoua rue école Galabadja 2, Bangui RCA</span>
          </div>
          <div className="flex items-start space-x-2">
            <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
            <div className="flex flex-col">
              <a href="tel:+23675000579" className="hover:text-primary transition-colors">+236 75 00 05 79</a>
              <a href="tel:+23670508193" className="hover:text-primary transition-colors">+236 70 50 81 93</a>
            </div>
          </div>
          <div className="flex items-start space-x-2 sm:col-span-2">
            <Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
            <span>Lundi - Samedi, 08:00 - 16:00</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nom *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="text-foreground"
            placeholder="Votre nom complet"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-mail *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="text-foreground"
            placeholder="votre.email@exemple.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="organization">Organisation</Label>
          <Input
            id="organization"
            name="organization"
            type="text"
            value={formData.organization}
            onChange={handleChange}
            className="text-foreground"
            placeholder="Votre organisation (facultatif)"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="partnershipType">Centre d'interet de partenariat</Label>
          <Select value={formData.partnershipType} onValueChange={handleSelectChange}>
            <SelectTrigger id="partnershipType" className="text-foreground">
              <SelectValue placeholder="Selectionnez le type de partenariat" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cultural-exchange">Echange culturel</SelectItem>
              <SelectItem value="sponsorship">Parrainage</SelectItem>
              <SelectItem value="collaboration">Collaboration</SelectItem>
              <SelectItem value="volunteer">Benevolat</SelectItem>
              <SelectItem value="general">Demande generale</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="text-foreground resize-none"
            placeholder="Parlez-nous de votre demande..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full transition-all duration-200 active:scale-[0.98]"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
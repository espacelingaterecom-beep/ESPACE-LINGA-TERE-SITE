import React, { useState } from 'react';
import { Play, Pause, Radio, Volume2, X, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

function RadioPlayerWidget() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-72 bg-card border shadow-2xl rounded-2xl overflow-hidden"
          >
            <div className="bg-primary p-4 text-primary-foreground flex justify-between items-center">
              <div className="flex items-center">
                <Radio className="h-5 w-5 mr-2 animate-pulse" />
                <span className="font-bold text-sm">Linga FM 96.5 EN DIRECT</span>
              </div>
              <button onClick={() => setIsExpanded(false)} className="hover:bg-white/20 rounded p-1">
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            <div className="p-6 flex flex-col items-center space-y-4">
              <div className="text-center">
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">En cours</p>
                <p className="font-medium text-sm">Culture et Développement</p>
              </div>

              <Button
                size="lg"
                variant="default"
                className="h-16 w-16 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
              </Button>

              <div className="flex items-center w-full space-x-3">
                <Volume2 className="h-4 w-4 text-muted-foreground" />
                <div className="h-1.5 flex-grow bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center space-x-2">
        {!isExpanded && (
           <Button
            onClick={() => setIsExpanded(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl rounded-full px-6 py-6 h-auto"
          >
            <Radio className="h-5 w-5 mr-2" />
            <span className="font-bold">Écouter la Radio</span>
          </Button>
        )}

        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur border-border shadow-lg"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default RadioPlayerWidget;
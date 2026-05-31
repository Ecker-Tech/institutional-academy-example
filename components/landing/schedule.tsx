'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock } from 'lucide-react';

const scheduleData = {
  weekdays: [
    { time: '06:00', class: 'Crossfit' },
    { time: '07:15', class: 'Funcional' },
    { time: '18:00', class: 'Musculação' },
    { time: '19:30', class: 'FitDance' },
  ],
  saturdays: [
    { time: '08:30', class: 'Circuito Queima' },
    { time: '10:00', class: 'Arena Cross' },
  ],
};

export function Schedule() {
  return (
    <section id="schedule" className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Horários de Aulas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha os horários que se encaixam melhor na sua rotina
          </p>
        </div>

        {/* Schedule Tabs */}
        <div className="max-w-2xl mx-auto">
          <Tabs defaultValue="weekdays" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-card border border-primary/30">
              <TabsTrigger value="weekdays" className="text-base font-semibold">
                Segunda a Sexta
              </TabsTrigger>
              <TabsTrigger value="saturdays" className="text-base font-semibold">
                Sábados
              </TabsTrigger>
            </TabsList>

            {/* Weekdays Schedule */}
            <TabsContent value="weekdays" className="space-y-3">
              {scheduleData.weekdays.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 bg-card/50 hover:border-primary/60 hover:bg-card transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Horário</p>
                    <p className="text-lg font-semibold text-white">{item.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Aula</p>
                    <p className="text-lg font-semibold text-primary">{item.class}</p>
                  </div>
                </div>
              ))}
            </TabsContent>

            {/* Saturdays Schedule */}
            <TabsContent value="saturdays" className="space-y-3">
              {scheduleData.saturdays.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg border border-primary/20 bg-card/50 hover:border-primary/60 hover:bg-card transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Horário</p>
                    <p className="text-lg font-semibold text-white">{item.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Aula</p>
                    <p className="text-lg font-semibold text-primary">{item.class}</p>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

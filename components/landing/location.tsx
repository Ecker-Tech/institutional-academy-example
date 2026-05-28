"use client";

import { MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const schedule = [
  { day: "Segunda a Sexta", hours: "05:30 às 22:00" },
  { day: "Sábado", hours: "09:00 às 12:00 e 14:00 às 16:00" },
  { day: "Domingo", hours: "10:00 às 12:00" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Location() {
  return (
    <section id="contato" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-balance">
            Visite PULSAR e <span className="text-primary">Transforme-se</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Estamos localizados no coração de Francisco Beltrão, prontos para receber você
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Map */}
          <motion.div variants={itemVariants}>
            <a
              href="https://maps.app.goo.gl/Shrtmbkd1igdBuWA6"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="bg-card border border-foreground/10 hover:border-primary/50 overflow-hidden transition-colors h-full">
                <div className="aspect-video relative group-hover:shadow-lg transition-shadow">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.926745407493!2d-53.075094325252216!3d-26.06865035846584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f0729481698b1f%3A0xf72965d970f0074b!2sAv.%20Presidente%20Get%C3%BAlio%20Vargas%2C%20791%20-%20S%C3%A3o%20Miguel%2C%20Francisco%20Beltr%C3%A3o%20-%20PR%2C%2085602-120!5e0!3m2!1spt-BR!2sbr!4v1775931028871!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0, pointerEvents: "none" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </Card>
            </a>
          </motion.div>

          {/* Info Cards */}
          <motion.div className="space-y-6" variants={itemVariants}>
            {/* Address Card */}
            <Card className="bg-card border border-foreground/10 hover:border-primary/50 transition-colors group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 10 }}
                  >
                    <MapPin className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2">
                      Endereço
                    </h3>
                    <p className="text-foreground/70">R. Getulio Vargas, 791</p>
                    <p className="text-foreground/70">
                      São Miguel, Francisco Beltrão - PR
                    </p>
                    <p className="text-foreground/70">CEP: 85602-120</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Card */}
            <Card className="bg-card border border-foreground/10 hover:border-primary/50 transition-colors group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 10 }}
                  >
                    <Clock className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-lg mb-3">
                      Horários de Funcionamento
                    </h3>
                    <div className="space-y-2">
                      {schedule.map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex justify-between text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1,
                          }}
                        >
                          <span className="text-foreground/70">{item.day}</span>
                          <span className="text-primary font-medium">
                            {item.hours}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="https://wa.me/5545991023526?text=Olá!%20Gostaria%20de%20visitar%20a%20academia%20PULSAR."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors text-center"
              >
                Agende uma Visita
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

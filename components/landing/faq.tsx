"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como faço para me registrar na academia?",
    answer:
      "É bem simples! Entre em contato conosco via WhatsApp para agendar sua aula experimental gratuita. Após experimentar, basta escolher o plano que melhor se adequa aos seus objetivos e necessidades.",
  },
  {
    question: "Qual é o horário de funcionamento?",
    answer:
      "Funcionamos de segunda a sexta das 6h às 22h, sábados das 8h às 14h. Temos horários variados para atender a todos os estilos de vida.",
  },
  {
    question: "Preciso ter experiência anterior?",
    answer:
      "Não! Temos treinos adaptados para todos os níveis, desde iniciantes até atletas avançados. Nossos treinadores personalizarão seu programa de acordo com sua experiência e objetivos.",
  },
  {
    question: "Há estacionamento disponível?",
    answer:
      "Sim! Contamos com estacionamento amplo e seguro para nossos membros. Vagas específicas são reservadas para clientes regulares.",
  },
  {
    question: "Posso cancelar minha matrícula quando quiser?",
    answer:
      "Oferecemos flexibilidade com períodos mínimos de compromisso. Consulte nossa equipe para entender melhor as opções de cancelamento e datas de vencimento.",
  },
  {
    question: "Vocês oferecem aulas em grupo?",
    answer:
      "Sim! Oferecemos diversas modalidades em grupo como Spinning, Pilates, Fit Dance, Treino Funcional e Cross Training. Confira nosso calendário de aulas.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="border border-foreground/10 rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-card/80 transition-colors text-left group"
      >
        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 bg-background/50 border-t border-foreground/10">
              <p className="text-foreground/70 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            Dúvidas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre nossa academia
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground/60 mb-6">Não encontrou sua dúvida?</p>
          <a
            href="https://wa.me/5545991023526?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20a%20academia%20PULSAR."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors"
          >
            Entre em Contato
          </a>
        </motion.div>
      </div>
    </section>
  );
}

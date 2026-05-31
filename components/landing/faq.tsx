"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const faqs = [
  {
    question: "Aceitam Gympass ou TotalPass?",
    answer:
      "Sim! Aceitamos planos a partir da categoria Standard. Valide seu token direto na recepção.",
  },
  {
    question: "Tem estacionamento?",
    answer:
      "Sim! Possuímos estacionamento gratuito e conveniado para alunos por até 2 horas.",
  },
  {
    question: "Como funciona a avaliação física?",
    answer:
      "Nossos planos semestrais e anuais já incluem avaliação completa a cada 60 dias.",
  },
  {
    question: "Vocês oferecem personal trainer?",
    answer:
      "Sim! Contamos com profissionais certificados que oferecem treinamento personalizado. Consulte os planos que incluem essa modalidade.",
  },
  {
    question: "Posso cancelar minha matrícula?",
    answer:
      "Oferecemos flexibilidade total. Você pode cancelar sem multas ou taxas adicionais. Consulte nossa equipe para detalhes.",
  },
  {
    question: "Qual é o melhor plano para iniciantes?",
    answer:
      "Todos os nossos planos são adaptados para iniciantes! Recomendamos começar com uma aula experimental para conhecer os professores e o ambiente.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="stagger-child border border-primary/20 rounded-lg overflow-hidden hover:border-primary/60 transition-colors bg-card/50 hover:bg-card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between text-left group"
      >
        <span className="font-semibold text-sm sm:text-base text-white group-hover:text-primary transition-colors pr-4">
          {question}
        </span>
        <div className={`transform transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
        </div>
      </button>

      {isOpen && (
        <div className="px-4 py-3 sm:px-6 sm:py-4 bg-background/50 border-t border-primary/20">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const { ref, isInView } = useScrollReveal<HTMLElement>();

  return (
    <section id="faq" ref={ref} className="relative py-12 sm:py-16 md:py-24 bg-background">
      <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal ${isInView ? 'in-view' : ''}`}>
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-lime-400 mb-3 sm:mb-4 text-balance uppercase font-display">
            Dúvidas Frequentes
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Encontre respostas para as perguntas mais comuns sobre Elite Academia
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-300 mb-4 sm:mb-6">Não encontrou sua dúvida?</p>
          <a
            href="https://wa.me/5511999999999?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20a%20Elite%20Academia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-8 sm:py-3 bg-primary text-primary-foreground font-semibold text-sm sm:text-base rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Award, Shield, FileCheck, BadgeCheck } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const certifications = [
  {
    icon: <Award className="w-12 h-12" />,
    title: "ISO 9001",
    description: "Sistema de Gestion de Calidad certificado",
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "bureau Veritas",
    description:
      "certificación, inspección y auditoría que verifica que productos, servicios y procesos cumplan con normas de calidad, seguridad",
  },
  {
    icon: <FileCheck className="w-12 h-12" />,
    title: "Habilitacion Municipal",
    description: "Empresa habilitada en Rosario",
  },
  {
    icon: <BadgeCheck className="w-12 h-12" />,
    title: "Bomberos",
    description: "Avalado por Bomberos Voluntarios",
  },
];

export default function Certifications() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container-custom">
        <SectionTitle
          title="Certificaciones y Avales"
          subtitle="Trabajamos bajo los mas altos estandares de calidad"
          light
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white hover:bg-white/20 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 text-primary-light rounded-full mb-4">
                {cert.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-gray-300 text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

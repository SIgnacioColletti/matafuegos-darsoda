"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  RefreshCw,
  FileCheck,
  Users,
  X,
  CheckCircle,
} from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    icon: <ShoppingCart className="w-10 h-10" />,
    title: "Venta de Matafuegos",
    shortDesc: "Amplia variedad de extintores para todo tipo de necesidades.",
    fullDesc:
      "Ofrecemos una amplia gama de matafuegos de las mejores marcas del mercado. Contamos con equipos de polvo quimico ABC, CO2, agua y espuma, en diferentes capacidades para adaptarnos a las necesidades de cada cliente.",
    features: [
      "Matafuegos ABC de 1kg a 100kg",
      "Extintores de CO2",
      "Matafuegos para vehiculos",
      "Equipos industriales",
      "Garantia de fabrica",
      "Asesoramiento personalizado",
    ],
  },
  {
    id: 2,
    icon: <RefreshCw className="w-10 h-10" />,
    title: "Recarga y Mantenimiento",
    shortDesc: "Servicio profesional de recarga con certificacion.",
    fullDesc:
      "Realizamos la recarga y mantenimiento de matafuegos siguiendo las normas IRAM. Nuestro servicio incluye prueba hidrostatica, cambio de componentes y certificacion correspondiente.",
    features: [
      "Recarga certificada ",
      "Prueba hidrostatica",
      "Cambio de valvulas y mangueras",
      "Retiro y entrega sin cargo",
      "Certificado de recarga",
      "Mantenimiento preventivo",
    ],
  },
  {
    id: 3,
    icon: <FileCheck className="w-10 h-10" />,
    title: "Senaletica de Seguridad",
    shortDesc: "Carteles y senales segun normativa vigente.",
    fullDesc:
      "Proveemos toda la senaletica de seguridad requerida por las normativas vigentes. Carteles fotoluminiscentes, de evacuacion, prohibicion y obligacion.",
    features: [
      "Carteles fotoluminiscentes",
      "Senales de evacuacion",
      "Carteles de prohibicion",
      "Senales de obligacion",
      "Planos de evacuacion",
      "Instalacion incluida",
    ],
  },
  {
    id: 4,
    icon: <Users className="w-10 h-10" />,
    title: "Asesoramiento Tecnico",
    shortDesc: "Consultoria especializada para empresas y comercios.",
    fullDesc:
      "Brindamos asesoramiento integral en seguridad contra incendios. Evaluamos las necesidades de tu empresa y te recomendamos las mejores soluciones para cumplir con la normativa.",
    features: [
      "Evaluacion de riesgos",
      "Plan de evacuacion",
      "Capacitacion de personal",
      "Auditoria de seguridad",
      "Tramites habilitaciones",
      "Seguimiento continuo",
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Nuestros Servicios"
          subtitle="Soluciones integrales en seguridad contra incendios"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col text-center group cursor-pointer">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-full mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 ">{service.shortDesc}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedService(service)}
                >
                  Ver mas
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                        {selectedService.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-secondary">
                        {selectedService.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {selectedService.fullDesc}
                  </p>

                  <h4 className="font-semibold text-secondary mb-3">
                    Incluye:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 " />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <a href="#contacto" className="flex-1">
                      <Button
                        variant="primary"
                        fullWidth
                        onClick={() => setSelectedService(null)}
                      >
                        Solicitar Presupuesto
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

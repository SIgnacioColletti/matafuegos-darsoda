"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Award, Users, Clock, ThumbsUp } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Image from "next/image";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function StatItem({ icon, value, suffix, label, delay }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 50);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
        {icon}
      </div>
      <p className="text-4xl font-bold text-secondary mb-1">
        {count}
        {suffix}
      </p>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
}

export default function About() {
  const stats = [
    {
      icon: <Clock className="w-8 h-8" />,
      value: 25,
      suffix: "+",
      label: "Anos de Experiencia",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: 5000,
      suffix: "+",
      label: "Clientes Satisfechos",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: 15000,
      suffix: "+",
      label: "Equipos Vendidos",
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      value: 100,
      suffix: "%",
      label: "Garantia",
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="Sobre Nosotros"
          subtitle="Conoce nuestra historia y compromiso con la seguridad"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Mas de 25 anos protegiendo lo que mas importa
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              En Matafuegos Dar Soda SRL nos dedicamos a la venta, recarga y
              mantenimiento de equipos contra incendios. Desde 1998, brindamos
              soluciones integrales de seguridad a empresas, comercios y hogares
              de Rosario y la region.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Contamos con personal altamente capacitado y certificaciones que
              avalan la calidad de nuestros servicios. Nuestro compromiso es
              garantizar la seguridad de nuestros clientes con productos de
              primera calidad y un servicio de excelencia.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="border-l-4 border-l-primary">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-primary " />
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">
                      Mision
                    </h4>
                    <p className="text-sm text-gray-600">
                      Proteger vidas y patrimonios con productos y servicios de
                      maxima calidad.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <div className="flex items-start gap-3">
                  <Eye className="w-6 h-6 text-accent " />
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">
                      Vision
                    </h4>
                    <p className="text-sm text-gray-600">
                      Ser la empresa lider en seguridad contra incendios en la
                      region.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Image */}
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/local-darsoda.jpg"
                alt="Local Matafuegos Dar Soda SRL en Rosario"
                width={600}
                height={500}
                className="object-cover w-full h-full"
              />
              {/* Overlay con info */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
                <h4 className="text-2xl font-bold text-white mb-1">
                  Matafuegos Dar Soda SRL
                </h4>
                <p className="text-gray-300">Rosario, Santa Fe</p>
                <div className="flex gap-4 mt-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                    <p className="text-xl font-bold text-white">1998</p>
                    <p className="text-xs text-gray-300">Fundacion</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                    <p className="text-xl font-bold text-white">
                      bureau Veritas
                    </p>
                    <p className="text-xs text-gray-300">Certificados</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-xl -z-10"></div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

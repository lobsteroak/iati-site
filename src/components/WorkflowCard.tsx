"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function WorkflowCard() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { icon: "📧", label: "E-mail recebido", status: "completed" },
    { icon: "🔍", label: "Dados extraídos", status: "completed" },
    { icon: "📊", label: "Sistema atualizado", status: "completed" },
    { icon: "✉️", label: "Cliente notificado", status: "active" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative w-full h-full"
    >
      {/* Outer container */}
      <div className="rounded-3xl bg-gradient-to-b from-gray-200 to-gray-300 p-[1px] shadow-2xl shadow-gray-400/30 h-full">
        {/* Main card */}
        <div className="rounded-3xl bg-gradient-to-b from-white to-gray-50 p-6 lg:p-8 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-900">Workflow Ativo</span>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Automático
            </span>
          </div>

          {/* Workflow visualization */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Progress steps */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 ${
                    index <= activeStep
                      ? "bg-gray-100"
                      : "bg-transparent"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all duration-300 ${
                      index < activeStep
                        ? "bg-gray-900 text-white"
                        : index === activeStep
                        ? "bg-gray-900 text-white scale-110"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {index < activeStep ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.icon
                    )}
                  </div>

                  {/* Label */}
                  <div className="flex-1">
                    <p
                      className={`text-sm font-medium transition-colors duration-300 ${
                        index <= activeStep ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {step.label}
                    </p>
                    {index === activeStep && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs text-gray-500"
                      >
                        A processar...
                      </motion.p>
                    )}
                  </div>

                  {/* Status indicator */}
                  {index < activeStep && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  )}
                  {index === activeStep && (
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300 border-t-gray-900 animate-spin" />
                  )}
                </motion.div>
              ))}
            </div>

          </div>

          {/* Footer stats */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">847</p>
                <p className="text-xs text-gray-500">Tarefas automatizadas hoje</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">12h</p>
                <p className="text-xs text-gray-500">Tempo poupado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

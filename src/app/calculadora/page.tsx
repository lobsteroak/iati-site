"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

export default function CalculadoraPage() {
  const [formData, setFormData] = useState({
    hoursPerWeek: "",
    employeesInvolved: "",
    avgHourlyCost: "",
    tasksCount: "",
  });

  const [results, setResults] = useState<{
    monthlySavings: number;
    yearlySavings: number;
    hoursRecovered: number;
  } | null>(null);

  const [showContactForm, setShowContactForm] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateROI = (e: React.FormEvent) => {
    e.preventDefault();

    const hoursPerWeek = parseFloat(formData.hoursPerWeek) || 0;
    const employeesInvolved = parseFloat(formData.employeesInvolved) || 1;
    const avgHourlyCost = parseFloat(formData.avgHourlyCost) || 10;

    // Assume 80% efficiency gain from automation
    const efficiencyGain = 0.8;

    const totalHoursPerWeek = hoursPerWeek * employeesInvolved;
    const hoursRecoveredPerWeek = totalHoursPerWeek * efficiencyGain;
    const weeklySavings = hoursRecoveredPerWeek * avgHourlyCost;

    setResults({
      monthlySavings: Math.round(weeklySavings * 4.33),
      yearlySavings: Math.round(weeklySavings * 52),
      hoursRecovered: Math.round(hoursRecoveredPerWeek * 52),
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the data to your backend/CRM
    console.log("Contact data:", contactData, "Calculator data:", formData);
    alert("Obrigado! Entraremos em contacto brevemente.");
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
              Calculadora ROI
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              Descubra quanto pode poupar com automatização
            </h1>
            <p className="text-lg lg:text-xl text-muted leading-relaxed">
              Preencha os campos abaixo para calcular o potencial de poupança do
              seu negócio ao automatizar tarefas repetitivas.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <div>
              <form onSubmit={calculateROI} className="space-y-6">
                <div>
                  <label
                    htmlFor="hoursPerWeek"
                    className="block text-sm font-medium mb-2"
                  >
                    Horas gastas em tarefas repetitivas (por semana, por pessoa)
                  </label>
                  <input
                    type="number"
                    id="hoursPerWeek"
                    name="hoursPerWeek"
                    value={formData.hoursPerWeek}
                    onChange={handleInputChange}
                    placeholder="Ex: 10"
                    min="0"
                    max="40"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-light focus:outline-none focus:border-foreground transition-colors"
                  />
                  <p className="text-xs text-muted mt-1">
                    Inclua tempo gasto a copiar dados, enviar e-mails manuais,
                    atualizar folhas de cálculo, etc.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="employeesInvolved"
                    className="block text-sm font-medium mb-2"
                  >
                    Número de pessoas envolvidas nestas tarefas
                  </label>
                  <input
                    type="number"
                    id="employeesInvolved"
                    name="employeesInvolved"
                    value={formData.employeesInvolved}
                    onChange={handleInputChange}
                    placeholder="Ex: 3"
                    min="1"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-light focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="avgHourlyCost"
                    className="block text-sm font-medium mb-2"
                  >
                    Custo médio por hora de trabalho (€)
                  </label>
                  <input
                    type="number"
                    id="avgHourlyCost"
                    name="avgHourlyCost"
                    value={formData.avgHourlyCost}
                    onChange={handleInputChange}
                    placeholder="Ex: 15"
                    min="0"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-light focus:outline-none focus:border-foreground transition-colors"
                  />
                  <p className="text-xs text-muted mt-1">
                    Considere o salário bruto mais encargos. O salário médio em
                    Portugal é aproximadamente €12-15/hora.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="tasksCount"
                    className="block text-sm font-medium mb-2"
                  >
                    Quantas tarefas repetitivas diferentes identifica? (opcional)
                  </label>
                  <input
                    type="number"
                    id="tasksCount"
                    name="tasksCount"
                    value={formData.tasksCount}
                    onChange={handleInputChange}
                    placeholder="Ex: 5"
                    min="0"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-light focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Calcular Poupança
                </Button>
              </form>
            </div>

            {/* Results */}
            <div>
              {results ? (
                <div className="bg-neutral-50 rounded-3xl p-8 lg:p-12">
                  <h2 className="text-2xl font-bold mb-8">
                    Potencial de Poupança
                  </h2>

                  <div className="space-y-6 mb-10">
                    <div className="p-6 bg-white rounded-2xl border border-border">
                      <p className="text-sm text-muted mb-1">Poupança Mensal</p>
                      <p className="text-4xl font-bold">
                        €{results.monthlySavings.toLocaleString("pt-PT")}
                      </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl border border-border">
                      <p className="text-sm text-muted mb-1">Poupança Anual</p>
                      <p className="text-4xl font-bold text-foreground">
                        €{results.yearlySavings.toLocaleString("pt-PT")}
                      </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl border border-border">
                      <p className="text-sm text-muted mb-1">
                        Horas Recuperadas por Ano
                      </p>
                      <p className="text-4xl font-bold">
                        {results.hoursRecovered.toLocaleString("pt-PT")}h
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted mb-6">
                    * Estimativa baseada numa eficiência de automatização de
                    80%. Os valores reais podem variar dependendo dos processos
                    específicos.
                  </p>

                  {!showContactForm ? (
                    <Button
                      onClick={() => setShowContactForm(true)}
                      size="lg"
                      className="w-full"
                    >
                      Quero saber mais
                    </Button>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <p className="font-medium mb-4">
                        Deixe os seus dados para recebermos uma análise
                        personalizada:
                      </p>
                      <input
                        type="text"
                        name="name"
                        value={contactData.name}
                        onChange={handleContactChange}
                        placeholder="Nome"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-light focus:outline-none focus:border-foreground transition-colors"
                      />
                      <input
                        type="email"
                        name="email"
                        value={contactData.email}
                        onChange={handleContactChange}
                        placeholder="Email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-light focus:outline-none focus:border-foreground transition-colors"
                      />
                      <input
                        type="text"
                        name="company"
                        value={contactData.company}
                        onChange={handleContactChange}
                        placeholder="Empresa"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-light focus:outline-none focus:border-foreground transition-colors"
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={contactData.phone}
                        onChange={handleContactChange}
                        placeholder="Telefone (opcional)"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-light focus:outline-none focus:border-foreground transition-colors"
                      />
                      <Button type="submit" size="lg" className="w-full">
                        Enviar
                      </Button>
                    </form>
                  )}
                </div>
              ) : (
                <div className="bg-neutral-50 rounded-3xl p-8 lg:p-12 h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-neutral-200 rounded-2xl flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-muted"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Os seus resultados aparecerão aqui
                  </h3>
                  <p className="text-muted text-sm">
                    Preencha o formulário ao lado para calcular o potencial de
                    poupança do seu negócio.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
              Perguntas Frequentes
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "Como é calculada a poupança?",
                  answer:
                    "A poupança é calculada multiplicando as horas gastas em tarefas repetitivas pelo custo por hora e aplicando uma taxa de eficiência de 80%. Isto significa que assumimos que a automatização pode eliminar 80% do tempo gasto nestas tarefas.",
                },
                {
                  question: "A poupança é garantida?",
                  answer:
                    "Os valores são estimativas baseadas na informação fornecida. A poupança real pode variar dependendo da complexidade dos processos, das integrações necessárias e de outros fatores específicos do seu negócio. Uma análise detalhada permite-nos dar valores mais precisos.",
                },
                {
                  question: "Quanto custa implementar automatização?",
                  answer:
                    "O custo varia conforme a complexidade dos workflows e as integrações necessárias. Trabalhamos com um modelo de pagamento por workflow implementado, mais uma subscrição mensal de manutenção. Agende uma reunião para recebermos uma proposta personalizada.",
                },
                {
                  question:
                    "Quanto tempo demora a ver retorno do investimento?",
                  answer:
                    "Na maioria dos casos, os nossos clientes veem retorno do investimento em 2-4 meses. Isto depende do volume de tarefas automatizadas e da poupança gerada.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-2xl border border-border"
                >
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

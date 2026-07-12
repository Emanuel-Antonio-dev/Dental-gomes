import { motion } from "framer-motion";
import { SectionTitle } from "../primitives";

export function PrivacyPolicy() {
  return (
    <section id="politica-privacidade" className="py-24 md:py-36 bg-background">
      <div className="container-lux max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Legal"
            title="Política de Privacidade"
            subtitle="A Dental Gomes respeita a sua privacidade e está comprometida com a proteção dos seus dados pessoais."
          />

          <div className="mt-12 space-y-8 text-foreground/80 leading-relaxed">
            <div>
              <h3 className="font-serif text-xl text-foreground">1. Introdução</h3>
              <p className="mt-2">
                Esta Política de Privacidade descreve como a Dental Gomes coleta, usa, armazena e protege as informações pessoais dos nossos pacientes e visitantes do site.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground">2. Dados Coletados</h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-muted-foreground">
                <li>Nome completo, data de nascimento e género</li>
                <li>Contacto telefónico e e-mail</li>
                <li>Histórico clínico odontológico</li>
                <li>Dados de faturação e pagamento</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground">3. Uso dos Dados</h3>
              <p className="mt-2">
                Utilizamos os seus dados para agendamento, prestação de cuidados, lembretes, processamento de pagamentos e melhoria dos serviços.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground">4. Partilha de Dados</h3>
              <p className="mt-2">
                Não vendemos nem alugamos os seus dados. Podemos partilhá-los com laboratórios, seguradoras ou quando exigido por lei.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground">5. Segurança</h3>
              <p className="mt-2">
                Implementamos medidas técnicas e organizacionais para proteger os seus dados contra acesso não autorizado.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground">6. Direitos do Titular</h3>
              <p className="mt-2">
                Você pode aceder, retificar, eliminar ou limitar o tratamento dos seus dados pessoais.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground">7. Cookies</h3>
              <p className="mt-2">
                Utilizamos cookies para melhorar a experiência no site. Você pode gerir as preferências no seu navegador.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground">8. Alterações</h3>
              <p className="mt-2">
                Esta política pode ser atualizada periodicamente. A versão mais recente está sempre disponível no site.
              </p>
            </div>
            <div className="pt-4 border-t border-border/60 text-sm text-muted-foreground">
              <p>Última atualização: 1 de julho de 2026</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
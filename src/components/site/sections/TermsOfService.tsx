import { motion } from "framer-motion";
import { SectionTitle } from "../primitives";

export function TermsOfService() {
  return (
    <section id="termos-uso" className="py-24 md:py-36 bg-background/50">
      <div className="container-lux max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Legal"
            title="Termos de Uso"
            subtitle="Ao aceder e utilizar o site da Dental Gomes, você concorda com os seguintes termos e condições."
          />

          <div className="mt-12 space-y-8 text-foreground/80 leading-relaxed">
            <div>
              <h3 className="font-serif text-xl text-foreground">1. Aceitação dos Termos</h3>
              <p className="mt-2">
                Ao aceder a este site, você declara ter lido, compreendido e aceitado integralmente estes termos.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground">2. Serviços Oferecidos</h3>
              <p className="mt-2">
                A Dental Gomes disponibiliza informações sobre tratamentos, agendamento, conteúdos educativos e contacto.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground">3. Responsabilidades do Utilizador</h3>
              <ul className="mt-2 list-disc list-inside space-y-1 text-muted-foreground">
                <li>Fornecer informações verdadeiras</li>
                <li>Não utilizar o site para fins ilegais</li>
                <li>Respeitar os direitos de propriedade intelectual</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground">4. Propriedade Intelectual</h3>
              <p className="mt-2">
                Todo o conteúdo é propriedade da Dental Gomes e está protegido por direitos de autor.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground">5. Isenção de Responsabilidade</h3>
              <p className="mt-2">
                As informações são meramente informativas e não substituem consulta presencial.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground">6. Links Externos</h3>
              <p className="mt-2">
                Não nos responsabilizamos pelo conteúdo de sites externos linkados.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground">7. Alterações</h3>
              <p className="mt-2">
                Podemos modificar estes termos a qualquer momento. As alterações entram em vigor após publicação.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-foreground">8. Legislação Aplicável</h3>
              <p className="mt-2">
                Estes termos são regidos pelas leis da República de Angola.
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
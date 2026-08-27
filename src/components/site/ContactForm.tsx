import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nome demasiado curto")
    .max(80, "Nome demasiado longo"),

  phone: z
    .string()
    .trim()
    .min(6, "Telefone inválido")
    .max(30, "Telefone demasiado longo"),

  email: z
    .string()
    .trim()
    .email("Email inválido")
    .max(120, "Email demasiado longo"),

  service: z
    .string()
    .min(1, "Selecione um serviço"),

  message: z
    .string()
    .trim()
    .max(600, "Mensagem demasiado longa")
    .optional()
    .or(z.literal("")),

  consent: z.literal(true, {
    errorMap: () => ({
      message: "É necessário aceitar a Política de Privacidade",
    }),
  }),

  // Honeypot anti-spam
  website: z
    .string()
    .max(0)
    .optional()
    .or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

const services = [
  "Consulta",
  "Próteses Dentárias (fixas e removíveis)",
  "Aparelho dentário",
  "Limpeza dos dentes (destartarização)",
  "Reconstrução de dentes",
  "Tratamento de canal (endodontia)",
  "Extração",
  "Cirurgia",
  "Gengivectomia",
  "Gengivoplastia",
  "Odontopediatria",
  "Aplicação de piercing dentário",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    // Honeypot: se estiver preenchido, não processamos o formulário.
    if (data.website) return;

    const message = [
      `Olá, Dental Gomes!`,
      ``,
      `Gostaria de solicitar um atendimento.`,
      ``,
      `Serviço de interesse: ${data.service}`,
      ``,
      `Nome: ${data.name} `,
      `Telefone: ${data.phone}`,
      `Email: ${data.email}`,
      data.message ? `` : null,
      data.message ? `Mensagem: ${data.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/244927917779?text=${encodeURIComponent(
      message
    )}`;

    // Pequeno feedback visual enquanto prepara o pedido.
    await new Promise((resolve) => setTimeout(resolve, 600));

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    setSent(true);
    reset();

    setTimeout(() => {
      setSent(false);
    }, 6000);
  };

  const fieldCls =
    "w-full rounded-lg bg-secondary/60 border border-border/60 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20 placeholder:text-muted-foreground";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-4"
    >
      {/* -------------------------------------------------
          Honeypot
          Campo invisível utilizado para reduzir spam
      -------------------------------------------------- */}
      <div
        className="hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">
          Website

          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </label>
      </div>

      {/* -------------------------------------------------
          Nome + Telefone
      -------------------------------------------------- */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Nome */}
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs font-medium text-muted-foreground"
          >
            Nome completo
          </label>

          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="O seu nome"
            className={fieldCls}
            aria-invalid={!!errors.name}
            {...register("name")}
          />

          {errors.name && (
            <p className="mt-1 text-xs text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Telefone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-xs font-medium text-muted-foreground"
          >
            Telefone
          </label>

          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+244 900 000 000"
            className={fieldCls}
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />

          {errors.phone && (
            <p className="mt-1 text-xs text-destructive">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* -------------------------------------------------
          Email
      -------------------------------------------------- */}
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-xs font-medium text-muted-foreground"
        >
          Email
        </label>

        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="seu@email.com"
          className={fieldCls}
          aria-invalid={!!errors.email}
          {...register("email")}
        />

        {errors.email && (
          <p className="mt-1 text-xs text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* -------------------------------------------------
          Serviço
      -------------------------------------------------- */}
      <div>
        <label
          htmlFor="service"
          className="mb-1.5 block text-xs font-medium text-muted-foreground"
        >
          Serviço de interesse
        </label>

        <select
          id="service"
          className={fieldCls}
          aria-invalid={!!errors.service}
          {...register("service")}
        >
          <option value="">
            Selecione um serviço
          </option>

          {services.map((service) => (
            <option
              key={service}
              value={service}
            >
              {service}
            </option>
          ))}
        </select>

        {errors.service && (
          <p className="mt-1 text-xs text-destructive">
            {errors.service.message}
          </p>
        )}
      </div>

      {/* -------------------------------------------------
          Mensagem
      -------------------------------------------------- */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-medium text-muted-foreground"
        >
          Mensagem{" "}
          <span className="text-muted-foreground/60">
            (opcional)
          </span>
        </label>

        <textarea
          id="message"
          rows={4}
          placeholder="Conte-nos como podemos ajudar..."
          className={`${fieldCls} resize-none`}
          aria-invalid={!!errors.message}
          {...register("message")}
        />

        {errors.message && (
          <p className="mt-1 text-xs text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* -------------------------------------------------
          Consentimento
      -------------------------------------------------- */}
      <div>
        <label className="flex cursor-pointer items-start gap-3 text-xs text-muted-foreground">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-[color:var(--gold)]"
            {...register("consent")}
          />

          <span className="leading-relaxed">
            Aceito a{" "}
            <a
              href="#privacidade"
              className="text-gold underline underline-offset-4 transition hover:opacity-80"
            >
              Política de Privacidade
            </a>{" "}
            e autorizo o contacto pela clínica.
          </span>
        </label>

        {errors.consent && (
          <p className="mt-1 text-xs text-destructive">
            {errors.consent.message}
          </p>
        )}
      </div>

      {/* -------------------------------------------------
          Submit
      -------------------------------------------------- */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <Loader2
            size={17}
            className="animate-spin"
          />
        ) : sent ? (
          <CheckCircle2 size={17} />
        ) : null}

        {isSubmitting
          ? "A preparar pedido..."
          : sent
          ? "Pedido enviado — abrindo WhatsApp"
          : "Solicitar Atendimento"}
      </button>

      {/* -------------------------------------------------
          Informação auxiliar
      -------------------------------------------------- */}
      <p className="text-center text-[11px] leading-relaxed text-muted-foreground/70">
        Ao enviar, será aberta uma conversa no WhatsApp
        da Clínica Dental Gomes para dar continuidade ao
        seu pedido.
      </p>
    </form>
  );
}
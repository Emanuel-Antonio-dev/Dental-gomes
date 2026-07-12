import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Nome demasiado curto").max(80),
  phone: z.string().trim().min(6, "Telefone inválido").max(30),
  email: z.string().trim().email("Email inválido").max(120),
  service: z.string().min(1, "Selecione um serviço"),
  message: z.string().trim().max(600).optional().or(z.literal("")),
  consent: z.literal(true, { errorMap: () => ({ message: "É necessário aceitar" }) }),
  // Honeypot
  website: z.string().max(0).optional().or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

const services = [
  "Ortodontia",
  "Odontopediatria",
  "Próteses Dentárias",
  "Estética Dentária",
  "Periodontia",
  "Endodontia",
  "Branqueamento",
  "Outro",
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
    defaultValues: { service: "", website: "" },
  });

  const onSubmit = async (data: FormData) => {
    if (data.website) return; // honeypot
    // Open WhatsApp with a pre-filled message
    const msg = encodeURIComponent(
      `Olá Dental Gomes, sou ${data.name}. Gostaria de agendar uma consulta de ${data.service}.\nTelefone: ${data.phone}\nEmail: ${data.email}\n${data.message ? `\n${data.message}` : ""}`
    );
    await new Promise((r) => setTimeout(r, 600));
    window.open(`https://wa.me/244927917779?text=${msg}`, "_blank", "noopener,noreferrer");
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 6000);
  };

  const fieldCls =
    "w-full rounded-lg bg-secondary/60 border border-border/60 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20 placeholder:text-muted-foreground";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>Website<input type="text" tabIndex={-1} autoComplete="off" {...register("website")} /></label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-1.5">Nome completo</label>
          <input id="name" autoComplete="name" className={fieldCls} placeholder="O seu nome" {...register("name")} aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-muted-foreground mb-1.5">Telefone</label>
          <input id="phone" autoComplete="tel" className={fieldCls} placeholder="+244 900 000 000" {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-1.5">Email</label>
        <input id="email" type="email" autoComplete="email" className={fieldCls} placeholder="seu@email.com" {...register("email")} aria-invalid={!!errors.email} />
        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="service" className="block text-xs font-medium text-muted-foreground mb-1.5">Serviço desejado</label>
        <select id="service" className={fieldCls} {...register("service")} aria-invalid={!!errors.service}>
          <option value="">Selecione um serviço</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-1.5">Mensagem <span className="text-muted-foreground/60">(opcional)</span></label>
        <textarea id="message" rows={4} className={fieldCls} placeholder="Conte-nos como podemos ajudar..." {...register("message")} />
      </div>

      <label className="flex items-start gap-3 text-xs text-muted-foreground">
        <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-border accent-[color:var(--gold)]" {...register("consent")} />
        <span>Aceito a <a href="#privacidade" className="text-gold underline underline-offset-4">Política de Privacidade</a> e autorizo o contacto pela clínica.</span>
      </label>
      {errors.consent && <p className="text-xs text-destructive">{errors.consent.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-gold)] hover:brightness-110 transition disabled:opacity-70"
      >
        {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : sent ? <CheckCircle2 size={16} /> : null}
        {sent ? "Pedido enviado — abrindo WhatsApp" : "Agendar Consulta"}
      </button>
    </form>
  );
}

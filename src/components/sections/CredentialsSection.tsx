import { portfolio } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CredentialsSection() {
  return (
    <section className="border-t border-white/10 px-6 py-20" id="credentials">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          description="A place for certifications, certificates, courses, and verified achievements."
          eyebrow="Credentials"
          title="Credentials and learning progress."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {portfolio.credentials.map((credential) => (
            <article className="rounded-lg border border-white/10 bg-white/[0.03] p-6" key={credential.name}>
              <h3 className="text-lg font-semibold text-foreground">{credential.name}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                {credential.issuer}
              </p>
              <p className="mt-4 text-sm font-medium text-[var(--accent)]">
                {credential.status}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

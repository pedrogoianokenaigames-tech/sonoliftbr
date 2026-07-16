import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout, P, H2 } from "@/components/PolicyLayout";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — SonoLift™" },
      { name: "description", content: "Como a SonoLift Beauty coleta, usa e protege seus dados pessoais." },
      { property: "og:title", content: "Política de Privacidade — SonoLift™" },
      { property: "og:description", content: "Como a SonoLift Beauty coleta, usa e protege seus dados pessoais." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PolicyLayout title="Política de Privacidade" updatedAt="Julho de 2026">
      <P>
        A SonoLift Beauty LTDA (CNPJ 76.047.876/0001-90) valoriza a privacidade dos seus clientes e usuários.
        Esta política descreve como coletamos, utilizamos, armazenamos e protegemos as informações pessoais fornecidas em nosso site.
      </P>

      <H2>1. Informações que coletamos</H2>
      <P>
        Podemos coletar dados como nome completo, e-mail, CPF, endereço de entrega, telefone e informações de pagamento
        no momento da compra ou cadastro. Também coletamos dados de navegação (cookies, endereço IP, dispositivo) para
        melhorar sua experiência.
      </P>

      <H2>2. Como utilizamos seus dados</H2>
      <P>Utilizamos suas informações para:</P>
      <ul className="ml-6 list-disc space-y-2">
        <li>Processar seus pedidos, pagamentos e entregas.</li>
        <li>Enviar comunicações transacionais e, com seu consentimento, promocionais.</li>
        <li>Prevenir fraudes e cumprir obrigações legais.</li>
        <li>Melhorar produtos, serviços e a navegação no site.</li>
      </ul>

      <H2>3. Compartilhamento de dados</H2>
      <P>
        Não vendemos seus dados. Compartilhamos informações apenas com parceiros essenciais à operação
        (processadores de pagamento, transportadoras e provedores de tecnologia), sempre com contratos de confidencialidade
        e conformes à LGPD (Lei nº 13.709/2018).
      </P>

      <H2>4. Seus direitos</H2>
      <P>
        Você pode a qualquer momento solicitar acesso, correção, portabilidade, anonimização ou exclusão de seus dados.
        Para exercer seus direitos, envie um e-mail para{" "}
        <a className="text-gold underline" href="mailto:sonolift@gmail.com">sonolift@gmail.com</a>.
      </P>

      <H2>5. Segurança</H2>
      <P>
        Utilizamos criptografia SSL e boas práticas de mercado para proteger suas informações. Ainda assim, nenhum sistema
        é 100% imune, e recomendamos que você mantenha suas credenciais de acesso em sigilo.
      </P>

      <H2>6. Cookies</H2>
      <P>
        Utilizamos cookies para lembrar preferências, medir audiência e personalizar campanhas. Você pode desativá-los
        nas configurações do seu navegador — algumas funcionalidades podem ser afetadas.
      </P>

      <H2>7. Contato</H2>
      <P>
        Dúvidas sobre esta política podem ser encaminhadas para{" "}
        <a className="text-gold underline" href="mailto:sonolift@gmail.com">sonolift@gmail.com</a>.
      </P>
    </PolicyLayout>
  );
}
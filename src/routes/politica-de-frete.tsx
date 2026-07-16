import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout, P, H2 } from "@/components/PolicyLayout";

export const Route = createFileRoute("/politica-de-frete")({
  head: () => ({
    meta: [
      { title: "Política de Frete e Entrega — SonoLift™" },
      { name: "description", content: "Prazos, valores e regras de envio dos pedidos SonoLift." },
      { property: "og:title", content: "Política de Frete e Entrega — SonoLift™" },
      { property: "og:description", content: "Prazos, valores e regras de envio dos pedidos SonoLift." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ShippingPage,
});

function ShippingPage() {
  return (
    <PolicyLayout title="Frete e Entrega" updatedAt="Julho de 2026">
      <P>
        Enviamos para todo o Brasil com rastreio completo e frete grátis nas ofertas vigentes.
        Abaixo, os detalhes operacionais dos nossos envios.
      </P>

      <H2>1. Prazo de postagem</H2>
      <P>
        Pedidos aprovados até 14h úteis são postados em até 24h úteis. Pedidos após esse horário são processados
        no próximo dia útil.
      </P>

      <H2>2. Prazo de entrega estimado</H2>
      <ul className="ml-6 list-disc space-y-2">
        <li>Sul e Sudeste: 3 a 7 dias úteis após a postagem.</li>
        <li>Centro-Oeste e Nordeste: 5 a 10 dias úteis após a postagem.</li>
        <li>Norte: 7 a 14 dias úteis após a postagem.</li>
      </ul>
      <P>Prazos são estimativas dos Correios/transportadoras e podem variar em regiões remotas.</P>

      <H2>3. Frete grátis</H2>
      <P>
        Aplicável automaticamente durante campanhas promocionais para todo o território nacional,
        conforme indicado na página do produto.
      </P>

      <H2>4. Código de rastreamento</H2>
      <P>
        Após a postagem, você recebe por e-mail o código de rastreio e o link direto para acompanhamento.
      </P>

      <H2>5. Endereço incorreto ou ausência no recebimento</H2>
      <P>
        Caso o pedido retorne por endereço incorreto ou por ausência de recebedor após tentativas do entregador,
        o cliente é responsável pelo custo de reenvio.
      </P>

      <H2>6. Dúvidas sobre entrega</H2>
      <P>
        Entre em contato pelo e-mail{" "}
        <a className="text-gold underline" href="mailto:sonolift@gmail.com">sonolift@gmail.com</a>{" "}
        com o número do pedido em mãos.
      </P>
    </PolicyLayout>
  );
}
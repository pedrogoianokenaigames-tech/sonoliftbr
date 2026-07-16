import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout, P, H2 } from "@/components/PolicyLayout";

export const Route = createFileRoute("/politica-de-reembolso")({
  head: () => ({
    meta: [
      { title: "Política de Reembolso, Trocas e Devoluções — SonoLift™" },
      { name: "description", content: "Como funcionam trocas, devoluções e reembolsos SonoLift." },
      { property: "og:title", content: "Política de Reembolso — SonoLift™" },
      { property: "og:description", content: "Como funcionam trocas, devoluções e reembolsos SonoLift." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <PolicyLayout title="Reembolso, Trocas e Devoluções" updatedAt="Julho de 2026">
      <P>
        Sua satisfação é nossa prioridade. Esta política define as regras de trocas, devoluções e reembolsos
        para produtos adquiridos no site da SonoLift Beauty LTDA (CNPJ 76.047.876/0001-90).
      </P>

      <H2>1. Garantia de 30 noites</H2>
      <P>
        Oferecemos garantia de satisfação de 30 noites. Caso o produto não atenda suas expectativas, você pode solicitar
        a devolução integral do valor pago, incluindo o frete inicial.
      </P>

      <H2>2. Direito de arrependimento</H2>
      <P>
        Conforme o Art. 49 do Código de Defesa do Consumidor, você tem até 7 dias corridos, a contar do recebimento,
        para desistir da compra sem justificativa.
      </P>

      <H2>3. Como solicitar</H2>
      <P>Envie um e-mail para{" "}
        <a className="text-gold underline" href="mailto:sonolift@gmail.com">sonolift@gmail.com</a>{" "}
        informando:
      </P>
      <ul className="ml-6 list-disc space-y-2">
        <li>Número do pedido e nome completo do comprador.</li>
        <li>Motivo da devolução ou troca.</li>
        <li>Fotos do produto e da embalagem (quando aplicável).</li>
      </ul>

      <H2>4. Condições para devolução</H2>
      <P>
        O produto deve ser devolvido em sua embalagem original, sem sinais de mau uso.
        Após o recebimento e conferência, o reembolso é processado em até 7 dias úteis.
      </P>

      <H2>5. Forma de reembolso</H2>
      <P>
        Compras no cartão de crédito são estornadas pela operadora nas faturas seguintes.
        Pagamentos via Pix são devolvidos por transferência para a conta indicada pelo cliente.
      </P>

      <H2>6. Produtos danificados no transporte</H2>
      <P>
        Ao receber, confira o produto na presença do entregador. Se houver avaria, recuse o pacote e nos avise
        imediatamente em{" "}
        <a className="text-gold underline" href="mailto:sonolift@gmail.com">sonolift@gmail.com</a>.
      </P>
    </PolicyLayout>
  );
}
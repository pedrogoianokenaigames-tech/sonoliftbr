import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout, P, H2 } from "@/components/PolicyLayout";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — SonoLift™" },
      { name: "description", content: "Termos e condições para uso do site e produtos SonoLift." },
      { property: "og:title", content: "Termos de Uso — SonoLift™" },
      { property: "og:description", content: "Termos e condições para uso do site e produtos SonoLift." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PolicyLayout title="Termos de Uso" updatedAt="Julho de 2026">
      <P>
        Estes Termos regulam o acesso e uso do site e serviços da SonoLift Beauty LTDA (CNPJ 76.047.876/0001-90).
        Ao navegar ou comprar em nosso site, você concorda com as condições abaixo.
      </P>

      <H2>1. Aceitação</H2>
      <P>
        O uso do site implica aceitação integral destes Termos. Caso não concorde, recomendamos interromper a navegação.
      </P>

      <H2>2. Cadastro e conta</H2>
      <P>
        Você é responsável pela veracidade das informações fornecidas e pela guarda de suas credenciais de acesso.
        Reservamo-nos o direito de recusar pedidos com dados inconsistentes ou suspeitos.
      </P>

      <H2>3. Produtos e preços</H2>
      <P>
        Fotos, descrições e preços são meramente ilustrativos e podem sofrer variações. Reservamo-nos o direito de
        corrigir eventuais erros de digitação e atualizar valores sem aviso prévio, respeitando pedidos já confirmados.
      </P>

      <H2>4. Uso adequado do produto</H2>
      <P>
        Os patches SonoLift™ são de uso tópico externo. Consulte um dermatologista em caso de dúvidas ou reações.
        Não aplique sobre a pele lesionada ou irritada.
      </P>

      <H2>5. Propriedade intelectual</H2>
      <P>
        Todo conteúdo do site (marcas, textos, imagens, layouts) é propriedade da SonoLift Beauty LTDA e não pode ser
        reproduzido sem autorização prévia por escrito.
      </P>

      <H2>6. Limitação de responsabilidade</H2>
      <P>
        A SonoLift não se responsabiliza por eventuais indisponibilidades técnicas do site ou por uso indevido dos produtos
        em desacordo com as instruções.
      </P>

      <H2>7. Foro</H2>
      <P>
        Fica eleito o foro do domicílio do consumidor para dirimir quaisquer controvérsias oriundas destes Termos.
      </P>

      <H2>8. Contato</H2>
      <P>
        Fale conosco em{" "}
        <a className="text-gold underline" href="mailto:sonolift@gmail.com">sonolift@gmail.com</a>.
      </P>
    </PolicyLayout>
  );
}
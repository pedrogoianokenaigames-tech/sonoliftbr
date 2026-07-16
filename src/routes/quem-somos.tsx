import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout, H2, P } from "@/components/PolicyLayout";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — SonoLift™" },
      {
        name: "description",
        content:
          "Prevenção inteligente enquanto você dorme: a SonoLift™ pausa o envelhecimento mecânico causado pela fricção do travesseiro em mulheres a partir dos 35 anos.",
      },
      { property: "og:title", content: "Quem Somos — SonoLift™" },
      {
        property: "og:description",
        content:
          "Muito mais que skincare. Prevenção inteligente enquanto você dorme.",
      },
    ],
  }),
  component: QuemSomosPage,
});

function QuemSomosPage() {
  return (
    <PolicyLayout title="Muito mais que skincare. Prevenção inteligente enquanto você dorme.">
      <P>
        Você já percebeu que as marcas do travesseiro demoram cada vez mais para
        desaparecer do seu rosto e colo? Antes, elas sumiam no banho. Hoje, elas
        acompanham você durante o dia e, lentamente, estão se transformando em
        linhas fixas.
      </P>
      <P>
        Nós fundamos a SonoLift™ porque percebemos um erro no mercado de beleza:
        mulheres a partir dos 30 anos estão gastando fortunas em dezenas de
        passos de skincare e considerando procedimentos invasivos cada vez mais
        cedo. Mas ignoram que passam de 6 a 8 horas por noite “esmagando” o
        rosto, quebrando as fibras de colágeno através da fricção mecânica do
        travesseiro.
      </P>

      <H2>Nossa Missão</H2>
      <P>
        Pausar o envelhecimento mecânico. Queremos que você acorde com a pele
        lisa, fresca e protegida, prevenindo que as linhas de expressão se
        tornem rugas profundas no futuro. Nós trouxemos a tecnologia do silicone
        médico para ser o seu escudo noturno.
      </P>

      <H2>Nossos Valores</H2>
      <P>
        <strong className="font-semibold text-midnight-deep">
          Prevenção Física Real:
        </strong>{" "}
        mais do que cosméticos, nossos patches criam uma barreira mecânica e um
        microclima de hidratação. A física trabalhando a favor da sua juventude.
      </P>
      <P>
        <strong className="font-semibold text-midnight-deep">
          Resultados sem agulhas:
        </strong>{" "}
        uma alternativa não invasiva para quem quer adiar procedimentos
        estéticos agressivos, preservando a naturalidade da pele.
      </P>
      <P>
        <strong className="font-semibold text-midnight-deep">
          Otimização do seu tempo:
        </strong>{" "}
        cuide da pele sem gastar 40 minutos na frente do espelho. Enquanto você
        dorme, a SonoLift™ trabalha por você.
      </P>
      <P>
        <strong className="font-semibold text-midnight-deep">
          Transparência Absoluta:
        </strong>{" "}
        o que prometemos, nós entregamos. Se você não notar a diferença ao
        acordar, nós devolvemos seu dinheiro.
      </P>

      <P>
        Na SonoLift™, acreditamos que a melhor rotina anti-idade é aquela que
        protege a sua pele no momento em que ela está mais vulnerável: enquanto
        você dorme.
      </P>

      <P className-="">
        Dúvidas ou suporte:{" "}
        <a href="mailto:sonolift@gmail.com" className="text-gold underline">
          sonolift@gmail.com
        </a>
        .
      </P>
    </PolicyLayout>
  );
}
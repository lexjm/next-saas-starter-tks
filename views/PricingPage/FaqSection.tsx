import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="Guía de compra de software de contabilidad para pequeñas empresas">
        El enfoque en el mundo de hoy ya no es la gestión de transacciones. Gracias al software de contabilidad para pequeñas empresas 
        fácilmente disponible, gran parte del trabajo repetitivo de enviar y recibir facturas, asociarlas con las cuentas adecuadas y remitir 
        y cobrar pagos se ha automatizado. La recopilación de datos de clientes, inventario y ventas ya no es un problema. Y, sin embargo, quedan 
        muchos desafíos relacionados con la contabilidad para los propietarios de pequeñas empresas y sus equipos. Las empresas de todo tipo luchan por 
        dar sentido a el volumen de datos transaccionales que han logrado acumular. 
        Aquellos en industrias especializadas que requieren gestión de inventario o costos de proyectos enfrentan circunstancias únicas.
        Muchos dedican un tiempo considerable a remediar las ineficiencias operativas en la gestión de inventario y en la 
        presupuestación, costeo y facturación de proyectos. Otros luchan por comprender verdaderamente su situación financiera e iluminar las
        iniciativas de cambio de rumbo para enderezar su nave.
        En lugar de un mar de datos, las pequeñas empresas necesitan información rápida, procesable y fácil de entender.
      </Accordion>
      <Accordion title="Minim eiusmod aliquip in ea mollit fugiat ullamco veniam enim sint exercitation.">
        Lorem laboris ullamco labore consectetur duis amet excepteur esse labore sunt pariatur do aliqua amet. Enim exercitation labore
        nostrud consectetur veniam eiusmod pariatur do commodo dolore pariatur amet veniam. Irure do et ut dolor quis reprehenderit anim
        aute sint deserunt tempor sunt nostrud. Deserunt et aute non dolor.
      </Accordion>
      <Accordion title="Commodo officia dolore anim occaecat.">
        Enim ea cillum pariatur incididunt incididunt sunt ea exercitation nisi aliquip. Cillum deserunt ut esse Lorem non qui labore labore
        eiusmod magna incididunt ut quis. Nulla excepteur adipisicing ipsum do non occaecat.
      </Accordion>
      <Accordion title="Irure Lorem proident esse enim.">
        Ipsum laboris sit minim occaecat nisi qui. Tempor eiusmod fugiat occaecat labore. Exercitation do cillum cillum laborum velit
        laborum ea magna duis laborum in anim. Enim laboris dolore laboris consectetur enim duis deserunt consequat excepteur ipsum
        excepteur. Non dolor magna et est cillum sint eiusmod sit eiusmod veniam id. Aliqua non non labore amet laborum fugiat ad nostrud ex
        officia exercitation.
      </Accordion>
      <Accordion title="Ea quis consequat sunt sint aute pariatur aliquip minim voluptate.">
        Sint eiusmod aute nulla ut esse sunt fugiat nulla exercitation duis pariatur. Magna anim incididunt magna id quis irure laborum sint
        voluptate tempor esse elit dolore. Elit exercitation pariatur adipisicing aute. Nisi deserunt enim consequat anim adipisicing
        laborum sint occaecat elit. Consequat officia cupidatat magna incididunt nisi in sunt duis reprehenderit ullamco in amet cillum.
        Dolor nisi proident ipsum aute velit aliquip magna fugiat reprehenderit. Enim ex aliqua et velit exercitation reprehenderit veniam
        do eu exercitation ad duis.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;

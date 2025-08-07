import "./TermsOfService.scss";
import React from "react";

const TermsOfService = () => {
  return (
    <div className="terms-of-service max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-6">
        Términos de Servicio
      </h1>
      <p className="mb-4">
        Bienvenido a nuestra aplicación de generación de leads. Estos Términos
        de Servicio ("Términos") rigen el uso de nuestra aplicación y los
        servicios asociados. Al utilizar la aplicación, usted acepta estos
        Términos en su totalidad. Si no está de acuerdo con alguna parte de los
        términos, no utilice nuestra aplicación.
      </p>

      <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">
        1. Propósito de la Aplicación
      </h2>
      <p className="mb-4">
        Esta aplicación está diseñada para la generación de leads. Su principal
        función es recopilar información de contacto básica (como nombre, correo
        electrónico y número de teléfono) con el fin de que nuestro equipo pueda
        ponerse en contacto con usted sobre nuestros productos o servicios.
      </p>

      <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">
        2. Uso de la Información
      </h2>
      <p className="mb-4">
        La información que proporcione a través de la aplicación se utilizará
        exclusivamente para el seguimiento de ventas y marketing. Su información
        será enviada a nuestro Sistema de Gestión de Clientes (CRM) para su
        procesamiento interno. No vendemos, alquilamos ni compartimos su
        información personal con terceros para fines de marketing directo.
      </p>

      <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">
        3. Limitación de Responsabilidad
      </h2>
      <p className="mb-4">
        La aplicación se proporciona "tal cual" y sin garantías de ningún tipo.
        No garantizamos que la aplicación esté libre de errores, sea
        ininterrumpida o cumpla con sus expectativas. En la máxima medida
        permitida por la ley, no seremos responsables de ningún daño directo,
        indirecto, incidental, especial, consecuente o punitivo que surja del
        uso o la incapacidad de usar la aplicación.
      </p>

      <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">
        4. Cambios en los Términos
      </h2>
      <p className="mb-4">
        Nos reservamos el derecho de modificar estos Términos en cualquier
        momento. Le notificaremos sobre cualquier cambio publicando los nuevos
        Términos en esta página.
      </p>

      <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">
        5. Contacto
      </h2>
      <p>
        Si tiene alguna pregunta sobre estos Términos, por favor contáctenos a
        través de erixbadoo@gmail.com.
      </p>
    </div>
  );
};

export default TermsOfService;

import "./PrivacyPolicy.scss";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-6">
        Política de Privacidad
      </h1>
      <p className="mb-4">
        Su privacidad es importante para nosotros. Esta Política de Privacidad
        describe cómo recopilamos, utilizamos y protegemos la información que
        usted nos proporciona a través de nuestra aplicación de generación de
        leads.
      </p>

      <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">
        1. Información que Recopilamos
      </h2>
      <p className="mb-4">
        Recopilamos la siguiente información personal que usted nos proporciona
        voluntariamente:
        <ul className="list-disc list-inside mt-2 ml-4">
          <li>Nombre</li>
          <li>Dirección de correo electrónico</li>
          <li>Número de teléfono (opcional)</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">
        2. Cómo Usamos su Información
      </h2>
      <p className="mb-4">
        Utilizamos la información que usted nos proporciona para los siguientes
        fines:
        <ul className="list-disc list-inside mt-2 ml-4">
          <li>Generar un lead para nuestro equipo de ventas.</li>
          <li>Contactarle para hablar sobre nuestros productos o servicios.</li>
          <li>
            Enviar su información a nuestro Sistema de Gestión de Clientes (CRM)
            para su procesamiento interno.
          </li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">
        3. Compartir y Divulgación de la Información
      </h2>
      <p className="mb-4">
        No vendemos, alquilamos ni compartimos su información personal con
        terceros para sus fines de marketing directo. Su información solo es
        accesible por nuestro equipo interno para los fines descritos
        anteriormente.
      </p>

      <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">
        4. Seguridad de la Información
      </h2>
      <p className="mb-4">
        Hemos implementado medidas de seguridad razonables para proteger su
        información personal de accesos no autorizados, divulgación, alteración
        o destrucción. Sin embargo, tenga en cuenta que ningún método de
        transmisión por Internet o almacenamiento electrónico es 100% seguro.
      </p>

      <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">
        5. Cambios en la Política de Privacidad
      </h2>
      <p className="mb-4">
        Podemos actualizar nuestra Política de Privacidad ocasionalmente. Le
        notificaremos sobre cualquier cambio publicando la nueva Política de
        Privacidad en esta página.
      </p>

      <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">
        6. Contacto
      </h2>
      <p>
        Si tiene alguna pregunta sobre esta Política de Privacidad, por favor
        contáctenos a través de erixbadoo@gmail.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;

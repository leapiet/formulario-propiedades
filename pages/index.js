import { useState } from "react";

export default function FormularioCargaPropiedades() {
  const [formData, setFormData] = useState({});

  const campos = [
    "Título de publicación",
    "Hashtags",
    "Dirección ficticia",
    "Barrio",
    "Cantidad de ambientes",
    "Disposición",
    "¿Tiene balcón?",
    "Orientación",
    "Vista",
    "Ventilación",
    "¿Todos los ambientes tienen ventanas?",
    "Línea dirigida al público",
    "Características destacadas",
    "Distancias a avenidas (podemos completarlo nosotros)",
    "Conectividad",
    "Oferta comercial",
    "Lugares de interés",
    "Tipología de edificio",
    "Año de construcción",
    "Materialidad de fachada",
    "Accesibilidad",
    "Tipo de puerta de acceso",
    "Materialidad del hall y palieres",
    "Cantidad de pisos",
    "Departamentos por piso",
    "Ascensores",
    "Nivel de expensas",
    "Ambientes y medidas (ej: Living 3x4, Cocina 2x3)",
    "Materialidad general (paredes, pisos, cocina, baño, placares)",
    "Amenities",
    "Servicios adicionales"
  ];

  const handleChange = (campo, value) => {
    setFormData({ ...formData, [campo]: value });
  };

  const handleSubmit = () => {
    alert("Formulario guardado. Mira la consola para copiar los datos.");
    console.log("Formulario enviado:", formData);
  };

  const copiarAlPortapapeles = () => {
    const texto = Object.entries(formData)
      .map(([campo, valor]) => `${campo}:\n${valor}`)
      .join("\n\n");
    navigator.clipboard.writeText(texto)
      .then(() => alert("Texto copiado al portapapeles"))
      .catch(() => alert("No se pudo copiar el texto"));
  };

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <h1>Formulario de Carga de Propiedades</h1>
      {campos.map((campo) => (
        <div key={campo} style={{ marginBottom: 12 }}>
          <label style={{ fontWeight: "bold" }}>{campo}</label>
          <br />
          <textarea
            rows={3}
            style={{ width: "100%", padding: 8 }}
            placeholder={`Ingresar ${campo.toLowerCase()}`}
            value={formData[campo] || ""}
            onChange={(e) => handleChange(campo, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleSubmit} style={{ marginRight: 10, padding: "10px 15px" }}>
        Guardar formulario
      </button>
      <button onClick={copiarAlPortapapeles} style={{ padding: "10px 15px" }}>
        Copiar al portapapeles
      </button>
    </div>
  );
}

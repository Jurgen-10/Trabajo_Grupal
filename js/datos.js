/**
 * Datos de ejemplo (prototipo Semana 08). En semanas posteriores vendrán de MySQL.
 * IMPORTANTE: validar cada guía con la fuente oficial antes de publicarla.
 */
const DATOS = {
  categorias: [
    { id: "violencia", nombre: "Violencia y protección", procesos: [
      { id: "violencia-familiar", titulo: "Violencia familiar", entidad: "PNP, Fiscalía o Centro de Emergencia Mujer (CEM)",
        resumen: "Qué hacer si tú o alguien cercano sufre violencia dentro del hogar.",
        pasos: ["Si estás en peligro, llama a la PNP (105). Para orientación y apoyo, llama a la Línea 100.",
                "Acude a una comisaría, a un Centro de Emergencia Mujer o a la Fiscalía.",
                "Cuenta lo ocurrido con el mayor detalle posible y entrega las pruebas que tengas.",
                "Pide medidas de protección.",
                "Guarda una copia de tu denuncia y haz seguimiento a tu caso."],
        requisitos: ["Tu DNI, si lo tienes a la mano", "Datos de la persona denunciada", "Pruebas: mensajes, fotos, certificados médicos"],
        fuente: "Ley n.º 30364 (verificar en el portal oficial)", revisado: "[fecha de revisión]" },
      { id: "hostigamiento-sexual", titulo: "Hostigamiento sexual", entidad: "Por validar", pendiente: true },
      { id: "ciberacoso", titulo: "Ciberacoso", entidad: "Por validar", pendiente: true }
    ]},
    { id: "patrimonio", nombre: "Delitos contra el patrimonio", procesos: [
      { id: "robo-hurto", titulo: "Robo o hurto", entidad: "PNP y Ministerio Público",
        resumen: "Cómo denunciar la pérdida de tus bienes por robo o hurto.",
        pasos: ["Ponte a salvo. Si el hecho está ocurriendo, llama a la PNP (105).",
                "Si perdiste tarjetas o celular, comunícate con tu banco u operador para bloquearlos.",
                "Acude a la comisaría más cercana.",
                "Describe el hecho y los bienes sustraídos (marca, modelo, serie, si la tienes).",
                "Guarda una copia de la denuncia."],
        requisitos: ["Tu DNI", "Comprobantes o fotos de los bienes, si los tienes", "Lugar, fecha y hora del hecho"],
        fuente: "Por validar con portales oficiales", revisado: "[fecha de revisión]" },
      { id: "estafa", titulo: "Estafa", entidad: "PNP y Ministerio Público",
        resumen: "Qué hacer si te engañaron para que entregues dinero o bienes.",
        pasos: ["Reúne capturas, comprobantes, números de cuenta y conversaciones.",
                "Si hiciste una transferencia, avisa de inmediato a tu banco.",
                "Acude a una comisaría o a la Fiscalía.",
                "Presenta tus pruebas y cuenta el hecho en orden cronológico.",
                "Guarda una copia de la denuncia y haz seguimiento."],
        requisitos: ["Tu DNI", "Comprobantes de pago o transferencia", "Datos de la persona o cuenta denunciada"],
        fuente: "Por validar con portales oficiales", revisado: "[fecha de revisión]" },
      { id: "extorsion", titulo: "Extorsión", entidad: "Por validar", pendiente: true }
    ]},
    { id: "consumo", nombre: "Consumo, trabajo y servicios", procesos: [
      { id: "reclamo-consumo", titulo: "Reclamo de consumo", entidad: "Por validar", pendiente: true },
      { id: "derechos-laborales", titulo: "Derechos laborales", entidad: "Por validar", pendiente: true },
      { id: "corrupcion", titulo: "Corrupción", entidad: "Por validar", pendiente: true }
    ]}
  ]
};

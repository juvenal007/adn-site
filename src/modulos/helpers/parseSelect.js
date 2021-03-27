const ParseSelect = (datos, tipo) => {
  let opciones = [];
  switch (tipo) {
    case "PERRO":     
      datos.map((item, index) => {
        opciones.push({
          value: item.id,
          label: item.perro_nombre,
          perro: item,
        });
      });
      return opciones;  
    case "RAZA":    
      datos.map((item, index) => {
        opciones.push({
          value: item.id,
          label: item.raza_nombre,
          raza: item,
        });
      });
      return opciones;
    default:
      return { value: 0, label: "Error de Tipo" };
  }
};

export default ParseSelect;

const Menu = [
  {
    heading: "Menu Principal",
    translate: "sidebar.heading.MENUPRINCIPAL",
  },
  {
    name: "ADN-Digital",
    icon: "fa fa-plus-square",
    translate: "sidebar.nav.AGENDA",
    submenu: [
      {
        name: "Home",
        path: "/home-principal",
      },
      {
        name: "Perros",
        path: "/mantenedores/perro",
      },
      {
        name: "Razas",
        path: "/mantenedores/raza",
      },
    ],
  },
];

export default Menu;

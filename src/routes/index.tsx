import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Café Urbano — Carta Digital | Mallplaza Calama" },
      { name: "description", content: "Carta digital de Café Urbano en Mallplaza Calama. Sandwiches, hamburguesas caseras, cafetería y más. Sabor casero, ambiente urbano." },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" },
      { property: "og:title", content: "Café Urbano — Carta Digital" },
      { property: "og:description", content: "Sabor casero, ambiente urbano — Mallplaza Calama" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&display=swap" },
    ],
  }),
});

type Item = { name: string; price: string; desc: string; img: string };
type Section = { id: string; title: string; note?: string; items: Item[] };

const img = (q: string) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=600&q=70`;

const SECTIONS: Section[] = [
  {
    id: "cafeteria",
    title: "Cafetería",
    note: "Elige tu leche: entera, descremada o sin lactosa",
    items: [
      { name: "Ristretto", price: "$2.900", desc: "Espresso corto, intenso y aromático.", img: img("photo-1510707577719-ae7c14805e3a") },
      { name: "Americano", price: "$3.400", desc: "Espresso suavizado con agua caliente.", img: img("photo-1495474472287-4d71bcdd2085") },
      { name: "Espresso Simple", price: "$2.900", desc: "Café puro extraído al instante.", img: img("photo-1510591509098-f4fdc6d0ff04") },
      { name: "Espresso Doble", price: "$3.400", desc: "Doble shot de espresso para los más cafeteros.", img: img("photo-1521017432531-fbd92d768814") },
      { name: "Cortado Simple", price: "$3.600", desc: "Espresso con un toque de leche cremosa.", img: img("photo-1517701604599-bb29b565090c") },
      { name: "Cortado Doble", price: "$4.100", desc: "Doble espresso con leche caliente.", img: img("photo-1497636577773-f1231844b336") },
      { name: "Capuccino", price: "$4.100", desc: "Espresso con leche vaporizada y espuma.", img: img("photo-1572442388796-11668a67e53d") },
      { name: "Ángel", price: "$4.600", desc: "Capuccino con licor amaretto y crema.", img: img("photo-1534687941688-651ccaafbff8") },
      { name: "Delicia", price: "$4.600", desc: "Café con crema, chocolate y canela.", img: img("photo-1461023058943-07fcbe16d735") },
      { name: "Capuccino Viena", price: "$4.600", desc: "Capuccino coronado con crema chantilly.", img: img("photo-1542990253-0d0f5be5f0ed") },
      { name: "Amareto", price: "$4.900", desc: "Espresso con licor amaretto italiano.", img: img("photo-1514432324607-a09d9b4aefdd") },
      { name: "Fresh", price: "$4.900", desc: "Café helado batido con hielo y leche.", img: img("photo-1461023058943-07fcbe16d735") },
      { name: "Jamaicano", price: "$4.900", desc: "Café con ron y crema, especialidad caribeña.", img: img("photo-1485808191679-5f86510681a2") },
      { name: "Terciopelo", price: "$5.200", desc: "Mezcla aterciopelada de café, chocolate y crema.", img: img("photo-1517701604599-bb29b565090c") },
      { name: "Irlandés", price: "$4.900", desc: "Café con whisky irlandés y crema.", img: img("photo-1514432324607-a09d9b4aefdd") },
      { name: "Irlandés Doble", price: "$5.200", desc: "Doble shot con whisky y crema espesa.", img: img("photo-1485808191679-5f86510681a2") },
      { name: "Té Lipton", price: "$2.300", desc: "Té negro tradicional en bolsita.", img: img("photo-1597481499750-3e6b22637e12") },
      { name: "Té de hierbas", price: "$2.100", desc: "Infusión natural de hierbas seleccionadas.", img: img("photo-1576092768241-dec231879fc3") },
      { name: "Nescafé", price: "$2.600", desc: "Café instantáneo clásico.", img: img("photo-1494314671902-399b18174975") },
      { name: "Té Dilmah", price: "$2.700", desc: "Té premium de Sri Lanka.", img: img("photo-1597481499750-3e6b22637e12") },
      { name: "Té con leche Urbano", price: "$3.100", desc: "Té negro fuerte con leche caliente.", img: img("photo-1576092768241-dec231879fc3") },
      { name: "Té chai-latte", price: "$5.100", desc: "Té chai con especias y leche vaporizada.", img: img("photo-1571934811356-5cc061b6821f") },
      { name: "Chocolate caliente", price: "$4.700", desc: "Cremoso chocolate caliente artesanal.", img: img("photo-1517578239113-b03992dcdd25") },
      { name: "Nescafé con leche Urbano", price: "$3.600", desc: "Nescafé doble con leche caliente.", img: img("photo-1494314671902-399b18174975") },
      { name: "Chocolate caliente Urbano", price: "$5.100", desc: "Chocolate doble con crema y marshmallows.", img: img("photo-1542990253-0d0f5be5f0ed") },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    note: "Disponible en churrasco o ave — pan molde o amasado",
    items: [
      { name: "Diputado", price: "$7.100", desc: "Carne con tomate y mayonesa casera.", img: img("photo-1528735602780-2552fd46c7af") },
      { name: "Palta", price: "$7.100", desc: "Carne con palta cremosa y sal de mar.", img: img("photo-1539252554453-80ab65ce3586") },
      { name: "Luco", price: "$7.100", desc: "Carne con queso fundido derretido.", img: img("photo-1565299624946-b28f40a0ae38") },
      { name: "Barros Jarpa", price: "$7.300", desc: "Jamón y queso caliente al estilo clásico.", img: img("photo-1528735602780-2552fd46c7af") },
      { name: "Florentino", price: "$7.300", desc: "Carne con espinacas frescas salteadas.", img: img("photo-1550507992-eb63ffee0847") },
      { name: "Turco", price: "$7.300", desc: "Carne con tomate, cebolla y ají verde.", img: img("photo-1606755962773-d324e0a13086") },
      { name: "Español", price: "$7.600", desc: "Carne con pimentón asado y queso.", img: img("photo-1539252554453-80ab65ce3586") },
      { name: "Italiano", price: "$7.600", desc: "Tomate, palta y mayonesa, los colores de Italia.", img: img("photo-1565299624946-b28f40a0ae38") },
      { name: "Brasileño", price: "$7.600", desc: "Carne con piña a la plancha y queso.", img: img("photo-1550507992-eb63ffee0847") },
      { name: "York", price: "$7.600", desc: "Jamón inglés con queso amarillo.", img: img("photo-1528735602780-2552fd46c7af") },
      { name: "Francés", price: "$7.800", desc: "Carne con queso brie y rúcula fresca.", img: img("photo-1606755962773-d324e0a13086") },
      { name: "Florentino Especial", price: "$7.600", desc: "Florentino con extra de queso fundido.", img: img("photo-1539252554453-80ab65ce3586") },
      { name: "Romano", price: "$7.800", desc: "Carne con champiñones salteados y queso.", img: img("photo-1565299624946-b28f40a0ae38") },
      { name: "Cubano", price: "$7.700", desc: "Cerdo, jamón, pickles y mostaza.", img: img("photo-1550507992-eb63ffee0847") },
      { name: "Suizo", price: "$7.900", desc: "Carne con queso suizo y champiñones.", img: img("photo-1528735602780-2552fd46c7af") },
      { name: "Griego", price: "$7.900", desc: "Carne con queso feta, tomate y aceitunas.", img: img("photo-1606755962773-d324e0a13086") },
      { name: "Pizza", price: "$7.900", desc: "Carne con salsa pizza, queso y orégano.", img: img("photo-1565299624946-b28f40a0ae38") },
      { name: "Chacarero", price: "$8.100", desc: "Carne, tomate, porotos verdes y ají.", img: img("photo-1539252554453-80ab65ce3586") },
      { name: "Americano", price: "$8.200", desc: "Carne, queso cheddar, pickles y mostaza.", img: img("photo-1550507992-eb63ffee0847") },
      { name: "Pobre", price: "$8.600", desc: "Carne, huevo frito, cebolla y papas hilo.", img: img("photo-1528735602780-2552fd46c7af") },
      { name: "Completo", price: "$8.600", desc: "Carne con palta, tomate y mayonesa.", img: img("photo-1606755962773-d324e0a13086") },
      { name: "Alemán", price: "$8.600", desc: "Carne con chucrut y mostaza dulce.", img: img("photo-1565299624946-b28f40a0ae38") },
      { name: "Urbano", price: "$8.900", desc: "La especialidad: carne, tocino, queso, palta y huevo.", img: img("photo-1550507992-eb63ffee0847") },
      { name: "Agregados simple", price: "$1.700", desc: "Tomate, queso, palta o huevo extra.", img: img("photo-1539252554453-80ab65ce3586") },
      { name: "Agregados especial", price: "$1.900", desc: "Tocino, champiñones o queso premium.", img: img("photo-1606755962773-d324e0a13086") },
    ],
  },
  {
    id: "hamburguesas",
    title: "Hamburguesas",
    note: "Hamburguesas caseras 200gr",
    items: [
      { name: "La Clásica", price: "$9.900", desc: "Carne 200gr, queso, lechuga, tomate y mayo casera.", img: img("photo-1568901346375-23c9450c58cd") },
      { name: "Granjera", price: "$12.600", desc: "Carne 200gr, huevo frito, tocino y queso cheddar.", img: img("photo-1572802419224-296b0aeee0d9") },
      { name: "Texana", price: "$12.600", desc: "Carne 200gr, salsa BBQ, aros de cebolla y cheddar.", img: img("photo-1586190848861-99aa4a171e90") },
      { name: "Alemán", price: "$12.600", desc: "Carne 200gr, chucrut, mostaza dulce y queso.", img: img("photo-1565299507177-b0ac66763828") },
      { name: "Urbano", price: "$12.700", desc: "Carne 200gr, tocino, palta, huevo y queso fundido.", img: img("photo-1551782450-a2132b4ba21d") },
    ],
  },
  {
    id: "tostadas",
    title: "Tostadas",
    items: [
      { name: "Tostada Palta", price: "$4.900", desc: "Pan amasado con palta machacada y sal de mar.", img: img("photo-1525351484163-7529414344d8") },
      { name: "Tostada Queso", price: "$4.500", desc: "Pan tostado con queso fundido.", img: img("photo-1484723091739-30a097e8f929") },
      { name: "Tostada Mixta", price: "$5.500", desc: "Jamón y queso fundido en pan amasado.", img: img("photo-1528736235302-52922df5c122") },
    ],
  },
  {
    id: "prensados",
    title: "Prensados",
    items: [
      { name: "Prensado Italiano", price: "$6.900", desc: "Tomate, mozzarella y albahaca prensados.", img: img("photo-1481070555726-e2fe8357725c") },
      { name: "Prensado Mediterráneo", price: "$7.300", desc: "Pollo, pesto y queso de cabra.", img: img("photo-1539252554453-80ab65ce3586") },
      { name: "Prensado Urbano", price: "$7.500", desc: "Carne mechada, queso y cebolla caramelizada.", img: img("photo-1528736235302-52922df5c122") },
    ],
  },
  {
    id: "omelette",
    title: "Omelette",
    items: [
      { name: "Omelette Simple", price: "$5.200", desc: "Tres huevos batidos con un toque de mantequilla.", img: img("photo-1525351484163-7529414344d8") },
      { name: "Omelette Jamón Queso", price: "$6.400", desc: "Omelette relleno de jamón y queso fundido.", img: img("photo-1510693206972-df098062cb71") },
      { name: "Omelette Verduras", price: "$6.600", desc: "Pimentón, cebolla, tomate y champiñones.", img: img("photo-1482049016688-2d3e1b311543") },
    ],
  },
  {
    id: "sin-carne",
    title: "Sin Carne",
    items: [
      { name: "Sandwich Veggie", price: "$6.800", desc: "Palta, tomate, lechuga y queso en pan amasado.", img: img("photo-1540713434306-58505cf1b6fc") },
      { name: "Hamburguesa de Lentejas", price: "$8.900", desc: "Medallón casero con quínoa y verduras.", img: img("photo-1525059696034-4967a8e1dca2") },
      { name: "Wrap Mediterráneo", price: "$7.900", desc: "Hummus, vegetales asados y queso feta.", img: img("photo-1565299585323-38d6b0865b47") },
    ],
  },
  {
    id: "completos",
    title: "Completos",
    items: [
      { name: "Completo Italiano", price: "$4.500", desc: "Vienesa con palta, tomate y mayo.", img: img("photo-1612392062798-2dfb1f218e9d") },
      { name: "Completo Dinámico", price: "$4.200", desc: "Vienesa con tomate, mayo y chucrut.", img: img("photo-1619740455993-9d77a82c8559") },
      { name: "Completo Urbano XL", price: "$5.500", desc: "Vienesa XL con todos los ingredientes.", img: img("photo-1612392062422-ef19b42f74df") },
    ],
  },
  {
    id: "ensaladas",
    title: "Ensaladas",
    items: [
      { name: "Ensalada César", price: "$7.900", desc: "Pollo grillado, lechuga, crutones y parmesano.", img: img("photo-1546793665-c74683f339c1") },
      { name: "Ensalada Urbana", price: "$8.500", desc: "Quínoa, palta, tomate cherry y semillas.", img: img("photo-1512621776951-a57141f2eefd") },
      { name: "Ensalada Mediterránea", price: "$8.200", desc: "Tomate, pepino, queso feta y aceitunas.", img: img("photo-1540420773420-3366772f4999") },
    ],
  },
  {
    id: "wraps",
    title: "Wraps",
    items: [
      { name: "Wrap de Pollo", price: "$7.500", desc: "Pollo grillado, lechuga, tomate y mayo de hierbas.", img: img("photo-1565299585323-38d6b0865b47") },
      { name: "Wrap César", price: "$7.700", desc: "Pollo, lechuga romana y aderezo césar.", img: img("photo-1626700051175-6818013e1d4f") },
      { name: "Wrap Mexicano", price: "$7.900", desc: "Pollo, frijoles, queso y salsa picante.", img: img("photo-1542838132-92c53300491e") },
    ],
  },
  {
    id: "picoteo",
    title: "Picoteo",
    items: [
      { name: "Papas Fritas", price: "$4.500", desc: "Porción generosa con sal de mar.", img: img("photo-1573080496219-bb080dd4f877") },
      { name: "Papas Urbanas", price: "$6.900", desc: "Papas con cheddar, tocino y cebollín.", img: img("photo-1639024471283-03518883512d") },
      { name: "Aros de Cebolla", price: "$5.200", desc: "Crujientes aros de cebolla apanados.", img: img("photo-1639024471283-03518883512d") },
      { name: "Tabla Urbana", price: "$12.900", desc: "Quesos, jamón serrano, aceitunas y pan.", img: img("photo-1541529086526-db283c563270") },
    ],
  },
  {
    id: "platos-extras",
    title: "Platos Extras",
    items: [
      { name: "Lomo a lo Pobre", price: "$13.900", desc: "Lomo, huevo, cebolla y papas fritas.", img: img("photo-1544025162-d76694265947") },
      { name: "Pollo a la Plancha", price: "$10.500", desc: "Pechuga grillada con guarnición a elección.", img: img("photo-1532550907401-a500c9a57435") },
      { name: "Carne al Vino", price: "$13.500", desc: "Mechada al vino tinto con puré rústico.", img: img("photo-1544025162-d76694265947") },
    ],
  },
  {
    id: "helados",
    title: "Helados",
    items: [
      { name: "Copa Simple", price: "$3.900", desc: "Dos bochas de helado a elección.", img: img("photo-1501443762994-82bd5dace89a") },
      { name: "Copa Urbana", price: "$5.900", desc: "Tres bochas, salsa, crema y galleta.", img: img("photo-1497034825429-c343d7c6a68f") },
      { name: "Banana Split", price: "$6.500", desc: "Plátano, tres helados, crema y nueces.", img: img("photo-1488900128323-21503983a07e") },
    ],
  },
  {
    id: "dulceria",
    title: "Dulcería",
    items: [
      { name: "Cheesecake Frutos Rojos", price: "$4.500", desc: "Tarta de queso con coulis de frutos rojos.", img: img("photo-1565958011703-44f9829ba187") },
      { name: "Torta de Chocolate", price: "$4.300", desc: "Bizcocho húmedo con ganache de chocolate.", img: img("photo-1606313564200-e75d5e30476c") },
      { name: "Celestino", price: "$2.900", desc: "Mil hojas con manjar y crema.", img: img("photo-1488477181946-6428a0291777") },
      { name: "Brownie con Helado", price: "$4.900", desc: "Brownie tibio con helado de vainilla.", img: img("photo-1564355808539-22fda35bed7e") },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      { name: "Bebida Lata", price: "$2.200", desc: "Coca-Cola, Sprite, Fanta o Light.", img: img("photo-1554866585-cd94860890b7") },
      { name: "Jugo Natural", price: "$3.500", desc: "Naranja, frambuesa o piña recién exprimido.", img: img("photo-1600271886742-f049cd451bba") },
      { name: "Limonada Menta-Jengibre", price: "$3.900", desc: "Refrescante limonada con menta y jengibre.", img: img("photo-1556679343-c7306c1976bc") },
      { name: "Agua Mineral", price: "$1.800", desc: "Con o sin gas.", img: img("photo-1548839140-29a749e1cf4d") },
    ],
  },
  {
    id: "cervezas",
    title: "Cervezas",
    items: [
      { name: "Cristal", price: "$3.500", desc: "Cerveza nacional bien helada.", img: img("photo-1608270586620-248524c67de9") },
      { name: "Heineken", price: "$4.200", desc: "Premium importada de Holanda.", img: img("photo-1618183479302-1e0aa382c36b") },
      { name: "Corona", price: "$4.500", desc: "Cerveza mexicana con limón.", img: img("photo-1566633806327-68e152aaf26d") },
      { name: "Kunstmann Torobayo", price: "$4.900", desc: "Cerveza artesanal del sur de Chile.", img: img("photo-1535958636474-b021ee887b13") },
    ],
  },
];

const REVIEWS = [
  { text: "Comida con sabor casero, excelentes porciones. Totalmente recomendado.", author: "Cliente verificado" },
  { text: "La carne al vino es lo más exquisito que he probado acá. Las meseras son muy amables.", author: "Jose Rojas" },
  { text: "Me encanta el cappuccino y sus ricas tortas. Un lugar ideal para compartir en ambiente tranquilo y relajado.", author: "Mariana B." },
  { text: "Excelente atención y ricos celestinos.", author: "Angélica T." },
];

function Index() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [activeCat, setActiveCat] = useState<string>(SECTIONS[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const toggle = (id: string) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  const scrollTo = (id: string) => {
    setOpen((o) => ({ ...o, [id]: true }));
    setTimeout(() => {
      const el = sectionRefs.current[id];
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 130;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 60);
  };

  useEffect(() => {
    const onScroll = () => {
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = sectionRefs.current[s.id];
        if (el && el.getBoundingClientRect().top - 150 <= 0) current = s.id;
      }
      setActiveCat(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-primary">
      {/* HEADER */}
      <header className="bg-primary text-primary-foreground px-5 pt-7 pb-6 text-center shadow-lg">
        <div className="inline-flex items-center justify-center mb-1">
          <span className="font-display text-5xl tracking-wider leading-none">CAFÉ</span>
          <span className="font-display text-5xl tracking-wider leading-none ml-2 px-2 bg-accent text-accent-foreground rounded">URBANO</span>
        </div>
        <p className="mt-3 text-sm text-white/95 font-medium">Sabor casero, ambiente urbano</p>
        <p className="text-xs text-white/80 mt-0.5">Mallplaza Calama</p>
      </header>

      {/* STICKY CATEGORY BAR */}
      <nav className="sticky top-0 z-40 bg-primary border-b-2 border-accent shadow-md">
        <div className="flex gap-2 overflow-x-auto no-scrollbar px-3 py-3">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                activeCat === s.id
                  ? "bg-accent text-accent-foreground shadow"
                  : "bg-white/15 text-white hover:bg-white/25"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </nav>

      {/* SECTIONS */}
      <main className="bg-primary pb-10">
        <div className="space-y-3 px-3 pt-4">
          {SECTIONS.map((section) => {
            const isOpen = !!open[section.id];
            return (
              <section
                key={section.id}
                id={section.id}
                ref={(el) => { sectionRefs.current[section.id] = el; }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl scroll-mt-32"
              >
                <button
                  onClick={() => toggle(section.id)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-white"
                >
                  <h2 className="font-display text-3xl text-primary tracking-wide">{section.title}</h2>
                  <span
                    className={`text-primary text-2xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    ▾
                  </span>
                </button>

                {isOpen && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="px-4 pb-5">
                      {section.note && (
                        <div className="mb-4 bg-accent/20 border-l-4 border-accent px-3 py-2 rounded-r-lg">
                          <p className="text-sm font-semibold text-foreground">{section.note}</p>
                        </div>
                      )}
                      <ul className="space-y-3">
                        {section.items.map((it, i) => (
                          <li key={i} className="flex gap-3 bg-muted/40 rounded-xl p-2.5 border border-border">
                            <img
                              src={it.img}
                              alt={it.name}
                              loading="lazy"
                              className="w-20 h-20 rounded-lg object-cover shrink-0 bg-muted"
                            />
                            <div className="flex-1 min-w-0 flex flex-col justify-between">
                              <div>
                                <h3 className="font-bold text-base leading-tight text-foreground">{it.name}</h3>
                                <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{it.desc}</p>
                              </div>
                              <div className="mt-1.5">
                                <span className="font-bold text-lg text-accent" style={{ textShadow: "0 1px 0 rgba(0,0,0,0.04)" }}>
                                  {it.price}
                                </span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* REVIEWS */}
        <section className="px-3 mt-8">
          <h2 className="font-display text-3xl text-white text-center tracking-wide mb-1">
            Lo que dicen nuestros clientes <span className="text-accent">❤</span>
          </h2>
          <p className="text-center text-white/80 text-sm mb-4">Reseñas reales de Café Urbano</p>
          <div className="space-y-3">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="text-accent text-lg leading-none mb-2">★★★★★</div>
                <p className="text-sm text-foreground italic leading-relaxed">"{r.text}"</p>
                <p className="text-xs font-bold text-primary mt-2">— {r.author}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-foreground text-white px-5 py-7 text-center">
        <div className="font-display text-2xl tracking-wider mb-2">
          CAFÉ <span className="text-accent">URBANO</span>
        </div>
        <p className="text-sm text-white/90">Mallplaza Calama</p>
        <p className="text-xs text-white/70">Av. Balmaceda 3242, Calama</p>
        <div className="my-4 h-px bg-white/20" />
        <p className="text-xs text-white/80">
          <span className="font-semibold text-accent">Horario:</span> Lun a Dom · 10:00 — 21:30
        </p>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          aria-label="Instagram"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <span className="text-xs font-semibold">@cafeurbano</span>
        </a>
        <p className="text-[10px] text-white/40 mt-5">© {new Date().getFullYear()} Café Urbano</p>
      </footer>
    </div>
  );
}

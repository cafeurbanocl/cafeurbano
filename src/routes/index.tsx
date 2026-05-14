import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logoUrbano from "@/assets/cafe-urbano-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Café Urbano — Carta Digital | Mallplaza Calama" },
      { name: "description", content: "Carta digital de Café Urbano en Mallplaza Calama. Cafetería, sandwiches, hamburguesas caseras, ensaladas y más. Sabor casero, ambiente urbano." },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" },
      { property: "og:title", content: "Café Urbano — Carta Digital" },
      { property: "og:description", content: "Sabor casero, ambiente urbano — Mallplaza Calama" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" },
    ],
  }),
});

type Item = { name: string; price: string; desc?: string; img: string };
type Section = { id: string; title: string; emoji: string; note?: string; items: Item[] };

// loremflickr devuelve una imagen distinta de Flickr para cada combinación de tags
const img = (q: string) => `https://loremflickr.com/400/250/${q}?lock=${Math.abs(
  q.split("").reduce((a, c) => ((a << 5) - a + c.charCodeAt(0)) | 0, 0)
)}`;

const SECTIONS: Section[] = [
  {
    id: "cafeteria",
    title: "Cafetería",
    emoji: "☕",
    note: "Elige tu leche: entera, descremada o sin lactosa",
    items: [
      { name: "Terciopelo", price: "$5.200", desc: "Café espresso, toque de Baileys, crema chantilly, caramelo y chocolate granulado.", img: img("velvet-coffee") },
      { name: "Irlandés Doble", price: "$5.200", desc: "Café espresso, toque de Whisky, crema chantilly, caramelo y chocolate granulado.", img: img("irish-coffee") },
      { name: "Té Chai-Latte", price: "$5.100", desc: "Té negro con leche, jengibre, vainilla, zarzamora, cardamomo, clavo y pimienta negra.", img: img("chai-latte") },
      { name: "Chocolate Caliente Urbano", price: "$5.100", desc: "Chocolate con leche caliente 350cc y marshmallow.", img: img("hot-chocolate-marshmallow") },
      { name: "Amaretto", price: "$4.900", desc: "Café espresso, toque de amaretto, crema chantilly, caramelo y chocolate granulado.", img: img("amaretto-coffee") },
      { name: "Fresh", price: "$4.900", desc: "Café espresso, toque de menta, crema chantilly, caramelo y chocolate granulado.", img: img("mint-coffee") },
      { name: "Jamaicano", price: "$4.900", desc: "Café espresso, toque de Kahlúa, crema chantilly, caramelo y chocolate granulado.", img: img("kahlua-coffee") },
      { name: "Irlandés", price: "$4.900", desc: "Café espresso, toque de Whisky, crema chantilly, caramelo y chocolate granulado.", img: img("whisky-coffee") },
      { name: "Chocolate Caliente", price: "$4.700", desc: "Chocolate caliente.", img: img("hot-chocolate") },
      { name: "Ángel", price: "$4.600", desc: "Café espresso con leche condensada y canela en polvo.", img: img("cinnamon-coffee") },
      { name: "Delicia", price: "$4.600", desc: "Café espresso, caramelo, leche, vainilla y espuma de leche.", img: img("caramel-coffee") },
      { name: "Cappuccino Viena", price: "$4.600", desc: "Café espresso, crema chantilly, caramelo y chocolate granulado.", img: img("vienna-cappuccino") },
      { name: "Cappuccino", price: "$4.100", desc: "Café espresso, espuma de leche, chocolate y canela en polvo.", img: img("cappuccino") },
      { name: "Cortado Doble", price: "$4.100", desc: "Café espresso, leche a elección, espuma de leche.", img: img("double-cortado") },
      { name: "Cortado Simple", price: "$3.600", desc: "Café espresso, leche a elección y espuma de leche.", img: img("cortado") },
      { name: "Nescafé con Leche Urbano", price: "$3.600", desc: "Nescafé tradición con leche 350cc.", img: img("milk-coffee") },
      { name: "Americano", price: "$3.400", desc: "1/2 taza de café espresso.", img: img("americano-coffee") },
      { name: "Espresso Doble", price: "$3.400", desc: "Doble shot de espresso.", img: img("double-espresso") },
      { name: "Té con Leche Urbano", price: "$3.100", desc: "Té a elección con leche 350cc.", img: img("milk-tea") },
      { name: "Ristretto", price: "$2.900", desc: "1/4 taza de café espresso 20ml.", img: img("ristretto") },
      { name: "Espresso Simple", price: "$2.900", desc: "Espresso simple.", img: img("espresso") },
      { name: "Té Dilmah", price: "$2.700", desc: "Té a elección.", img: img("dilmah-tea") },
      { name: "Nescafé", price: "$2.600", desc: "Nescafé.", img: img("nescafe") },
      { name: "Té Lipton", price: "$2.300", desc: "Té Lipton.", img: img("lipton-tea") },
      { name: "Té de Hierbas", price: "$2.100", desc: "Té de hierbas.", img: img("herbal-tea") },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    emoji: "🥪",
    note: "Disponible en churrasco o ave — pan molde o amasado",
    items: [
      { name: "Urbano", price: "$8.900", desc: "Churrasco o ave, tomate, cebolla caramelizada, pepinillo, queso fundido y huevo frito.", img: img("urbano-sandwich") },
      { name: "Pobre", price: "$8.600", desc: "Churrasco o ave, tomate, cebolla caramelizada, papas fritas y huevo frito.", img: img("chilean-sandwich") },
      { name: "Completo", price: "$8.600", desc: "Churrasco o ave, tomate, palta, cebolla caramelizada, ají verde y lechuga.", img: img("avocado-sandwich") },
      { name: "Alemán", price: "$8.600", desc: "Churrasco o ave, tomate, queso fundido, tocino y huevo frito.", img: img("german-sandwich") },
      { name: "Americano", price: "$8.200", desc: "Churrasco o ave, jamón, queso fundido y huevo frito.", img: img("american-sandwich") },
      { name: "Chacarero", price: "$8.100", desc: "Churrasco o ave, tomate, porotos verdes y ají verde.", img: img("chacarero") },
      { name: "Suizo", price: "$7.900", desc: "Churrasco o ave, tomate, jamón, queso fundido y tocino.", img: img("swiss-sandwich") },
      { name: "Pizza", price: "$7.900", desc: "Jamón, tomate, orégano y queso fundido.", img: img("pizza-sandwich") },
      { name: "Griego", price: "$7.900", desc: "Churrasco o ave, lechuga, tomate y huevo frito.", img: img("greek-sandwich") },
      { name: "Francés", price: "$7.800", desc: "Churrasco o ave, palta, tomate y lechuga.", img: img("french-sandwich") },
      { name: "Romano", price: "$7.800", desc: "Churrasco o ave, jamón, queso fundido y aceitunas.", img: img("roman-sandwich") },
      { name: "Cubano", price: "$7.700", desc: "Churrasco o ave, tomate, palta y porotos verdes.", img: img("cuban-sandwich") },
      { name: "Español", price: "$7.600", desc: "Churrasco o ave, palta y queso fundido.", img: img("spanish-sandwich") },
      { name: "Italiano", price: "$7.600", desc: "Churrasco o ave, palta y tomate.", img: img("italian-sandwich") },
      { name: "Brasileño", price: "$7.600", desc: "Churrasco o ave, palta y palmitos.", img: img("brazilian-sandwich") },
      { name: "York", price: "$7.600", desc: "Churrasco o ave, queso fundido y tocino frito.", img: img("york-sandwich") },
      { name: "Florentino Especial", price: "$7.600", desc: "Churrasco o ave, queso fundido, tomate y lechuga.", img: img("florentino-sandwich") },
      { name: "Turco", price: "$7.300", desc: "Churrasco o ave, queso fundido y huevo frito.", img: img("turkish-sandwich") },
      { name: "Florentino", price: "$7.300", desc: "Churrasco o ave, tomate y lechuga.", img: img("lettuce-sandwich") },
      { name: "Barros Jarpa", price: "$7.300", desc: "Churrasco o ave, jamón y queso fundido.", img: img("ham-cheese-sandwich") },
      { name: "Diputado Palta", price: "$7.100", desc: "Churrasco o ave y huevo frito.", img: img("egg-sandwich") },
      { name: "Luco", price: "$7.100", desc: "Churrasco o ave y queso fundido.", img: img("cheese-sandwich") },
    ],
  },
  {
    id: "hamburguesas",
    title: "Hamburguesas",
    emoji: "🍔",
    note: "Hamburguesas caseras 200gr",
    items: [
      { name: "Urbano", price: "$12.700", desc: "Hamburguesa 200gr, lechuga, tomate, cebolla caramelizada, pepinillos, doble queso y papas.", img: img("urban-burger") },
      { name: "Granjera", price: "$12.600", desc: "Hamburguesa 200gr, lechuga, tomate, cebolla, porotos verdes, aceituna, queso, mayonesa y papas.", img: img("farmer-burger") },
      { name: "Texana", price: "$12.600", desc: "Hamburguesa 200gr, guacamole, tocino, doble queso, salsa BBQ y papas.", img: img("texan-bbq-burger") },
      { name: "Alemán", price: "$12.600", desc: "Hamburguesa 200gr, tomate, chorizo, doble queso, huevo frito, mayonesa y papas.", img: img("german-burger") },
      { name: "La Clásica", price: "$9.900", desc: "Hamburguesa 200gr, lechuga, tomate, queso fundido y papas.", img: img("classic-cheeseburger") },
    ],
  },
  {
    id: "tostadas",
    title: "Tostadas",
    emoji: "🍞",
    items: [
      { name: "Huevo Pochado", price: "$5.900", desc: "Tostadas con palta, sésamo y huevos pochados.", img: img("poached-egg-toast") },
      { name: "Huevos, Jamón y Queso", price: "$4.300", desc: "Tostadas con huevos, jamón y queso.", img: img("ham-cheese-egg-toast") },
      { name: "Huevos y Tocino", price: "$4.100", desc: "Tostadas con huevos y tocino.", img: img("bacon-egg-toast") },
      { name: "Huevos y Jamón", price: "$4.000", desc: "Tostadas con huevos y jamón.", img: img("ham-egg-toast") },
      { name: "Huevos y Queso", price: "$4.000", desc: "Tostadas con huevos y queso.", img: img("cheese-egg-toast") },
      { name: "Huevos Fritos/Revueltos", price: "$3.900", desc: "Tostadas con huevos fritos o revueltos.", img: img("scrambled-eggs-toast") },
      { name: "Palta y Jamón", price: "$4.100", desc: "Tostadas con palta y jamón.", img: img("avocado-ham-toast") },
      { name: "Palta", price: "$3.600", desc: "Tostadas con palta.", img: img("avocado-toast") },
      { name: "Mantequilla y Mermelada", price: "$2.800", desc: "Tostadas con mantequilla y mermelada.", img: img("jam-toast") },
      { name: "Mantequilla", price: "$2.400", desc: "Tostadas con mantequilla.", img: img("butter-toast") },
    ],
  },
  {
    id: "prensados",
    title: "Prensados",
    emoji: "🫓",
    items: [
      { name: "Queso, Jamón y Tomate", price: "$3.400", desc: "Prensado caliente con queso, jamón y tomate.", img: img("pressed-sandwich-tomato") },
      { name: "Queso y Jamón", price: "$3.100", desc: "Prensado caliente con queso y jamón.", img: img("pressed-ham-cheese") },
      { name: "Solo Queso", price: "$2.700", desc: "Prensado caliente con queso fundido.", img: img("pressed-cheese") },
    ],
  },
  {
    id: "omelette",
    title: "Omelette",
    emoji: "🍳",
    items: [
      { name: "Omelette Urbano", price: "$5.100", desc: "Tortilla de huevo con queso, jamón y tomate.", img: img("urban-omelette") },
      { name: "Omelette Clásico", price: "$4.900", desc: "Tortilla de huevo con queso.", img: img("cheese-omelette") },
      { name: "Omelette York", price: "$4.900", desc: "Tortilla de huevo con tocino.", img: img("bacon-omelette") },
    ],
  },
  {
    id: "sin-carne",
    title: "Sin Carne",
    emoji: "🥗",
    items: [
      { name: "Atún a la Americana", price: "$6.100", desc: "Atún, tomate, cebolla, ají verde, cilantro, lechuga y mayonesa.", img: img("tuna-salad-sandwich") },
      { name: "Naturista", price: "$5.900", desc: "Tomate, palta, palmitos, porotos verdes y lechuga.", img: img("vegetarian-sandwich") },
      { name: "Atún a la Mayonesa", price: "$4.900", desc: "Lomitos de atún con mayonesa.", img: img("tuna-mayo") },
      { name: "Vegetariano", price: "$4.900", desc: "Palta, tomate y aceituna.", img: img("veggie-sandwich") },
    ],
  },
  {
    id: "completos",
    title: "Completos",
    emoji: "🌭",
    items: [
      { name: "Completo Mexicano", price: "$3.600", desc: "Vienesa, guacamole, ají verde, cebolla y cilantro.", img: img("mexican-hotdog") },
      { name: "Completo Español", price: "$3.600", desc: "Vienesa, tomate, palta y queso fundido.", img: img("spanish-hotdog") },
      { name: "Completo York", price: "$3.400", desc: "Vienesa, queso fundido y tocino.", img: img("bacon-hotdog") },
      { name: "Completo Italiano", price: "$3.300", desc: "Vienesa, tomate y palta.", img: img("italian-hotdog") },
      { name: "Hot Dogs", price: "$1.900", desc: "Solo vienesa.", img: img("hotdog") },
    ],
  },
  {
    id: "ensaladas",
    title: "Ensaladas",
    emoji: "🥗",
    items: [
      { name: "Ensalada César", price: "$6.900", desc: "Lechuga, pollo, tomate, crutones, parmesano y salsa César.", img: img("caesar-salad") },
      { name: "Ensalada de Palmitos", price: "$6.700", desc: "Lechuga, tomate, ají verde, pimentón, cebolla, palta y palmitos.", img: img("hearts-of-palm-salad") },
      { name: "Ensalada Griega", price: "$6.700", desc: "Tomate, cebolla, pimentón, pepino, aceituna, queso blanco y yoghurt.", img: img("greek-salad") },
    ],
  },
  {
    id: "wraps",
    title: "Wraps",
    emoji: "🌯",
    items: [
      { name: "Wraps", price: "$5.300", desc: "Tortilla con carne o pollo, lechuga, jamón, porotos verdes y queso.", img: img("chicken-wrap") },
      { name: "Wraps Light", price: "$4.900", desc: "Tortilla con porotos verdes, palmitos, palta, tomate y queso crema.", img: img("light-wrap") },
      { name: "Wraps Mixto", price: "Consultar", desc: "Tortilla con carne y pollo.", img: img("mixed-wrap") },
    ],
  },
  {
    id: "picoteo",
    title: "Picoteo",
    emoji: "🍟",
    items: [
      { name: "Pichanga Urbano", price: "$18.700", desc: "Papas fritas con trocitos de lomo liso, ave y queso fundido.", img: img("loaded-fries-meat") },
      { name: "Pichanga Especial", price: "$16.200", desc: "Papas fritas con trocitos de carne, ave, vienesa, chorizos y queso fundido.", img: img("pichanga") },
      { name: "Chorrillana", price: "$16.100", desc: "Papas fritas, chorizo, vienesas, carne, cebolla caramelizada y huevos fritos.", img: img("chorrillana") },
      { name: "Canastita", price: "$6.100", desc: "Papas fritas, vienesa y nuggets de pollo.", img: img("nuggets-fries") },
      { name: "Porción de Papas Fritas", price: "$4.600", desc: "Generosa porción de papas fritas crocantes.", img: img("french-fries") },
    ],
  },
  {
    id: "platos-extras",
    title: "Platos Extras",
    emoji: "🍽️",
    note: "Agregados: Tomate/Palta/Palmitos $4.400 · Porción Papas $4.600 · Papas $3.700 · Tomate y Palta $3.500 · Arroz $2.600 · Especial $1.900 · Simple $1.700",
    items: [
      { name: "Lomo Salteado", price: "$16.000", desc: "250gr lomo en trozos salteado con cebolla morada, tomate, arroz y papas fritas.", img: img("beef-stir-fry") },
      { name: "Lomo Vetado a lo Pobre", price: "$15.100", desc: "250gr lomo a la plancha con arroz, papas fritas, cebolla caramelizada y huevo frito.", img: img("steak-fries-egg") },
      { name: "Salteado de Pollo", price: "$14.900", desc: "250gr pechuga salteada en trozos, tomate, cebolla morada, arroz y papas fritas.", img: img("chicken-stir-fry") },
      { name: "Lomo Vetado a la Plancha", price: "$14.400", desc: "250gr lomo vetado a la plancha con dos agregados a elección.", img: img("ribeye-steak") },
      { name: "Chicharrón de Pollo", price: "$11.300", desc: "Crujientes trocitos de pollo con dos agregados a elección.", img: img("fried-chicken-pieces") },
      { name: "Bife a lo Pobre", price: "$11.300", desc: "350gr bife a la plancha con arroz, papas fritas, cebolla caramelizada y huevo frito.", img: img("steak-poor-mans") },
      { name: "Bife a la Plancha", price: "$10.900", desc: "350gr bife a la plancha con dos agregados a elección.", img: img("grilled-steak") },
      { name: "Pechuga a lo Pobre", price: "$10.600", desc: "250gr pechuga a la plancha con arroz, papas fritas, cebolla caramelizada y huevo frito.", img: img("chicken-breast-fries") },
      { name: "Pechuga de Pollo a la Plancha", price: "$9.900", desc: "250gr pechuga a la plancha con dos agregados a elección.", img: img("grilled-chicken-breast") },
    ],
  },
  {
    id: "copa-helados",
    title: "Copa Helados",
    emoji: "🍨",
    items: [
      { name: "Copa Profiterol", price: "$5.100", desc: "Tres sabores de helado, profiteroles, crema chantilly y salsa de chocolate.", img: img("profiterole-sundae") },
      { name: "Copa Banana", price: "$5.100", desc: "Tres sabores de helado, trozos de plátano, crema chantilly y salsa de chocolate.", img: img("banana-split") },
      { name: "Café Helado Urbano", price: "$5.100", desc: "Café con leche, helado vainilla, toque de Baileys, crema chantilly y salsa de chocolate.", img: img("iced-coffee-baileys") },
      { name: "Milkshake Oreo", price: "$4.600", desc: "Batido de leche con galleta oreo y helado a elección.", img: img("oreo-milkshake") },
      { name: "Chocolate Helado", price: "$4.500", desc: "Chocolate con leche, helado de vainilla, crema chantilly y salsa de chocolate.", img: img("chocolate-icecream") },
      { name: "Café Helado", price: "$4.500", desc: "Café espresso con leche, helado de vainilla, crema chantilly y salsa de chocolate.", img: img("iced-coffee") },
      { name: "Milkshake", price: "$4.300", desc: "Batido de leche con helado a elección.", img: img("milkshake") },
      { name: "Copa Carlota", price: "$4.300", desc: "Dos helados, salsa chocolate y chantilly.", img: img("ice-cream-sundae") },
      { name: "Copa Diana", price: "$4.300", desc: "Dos helados, fruta en almíbar, chantilly y frambuesa.", img: img("fruit-sundae") },
      { name: "Copa Kids", price: "$3.900", desc: "Un sabor de helado, crema chantilly y decoración infantil.", img: img("kids-icecream") },
      { name: "Copa Simple", price: "$2.800", desc: "Un sabor de helado, crema chantilly y salsa de chocolate.", img: img("simple-icecream") },
    ],
  },
  {
    id: "dulceria",
    title: "Dulcería",
    emoji: "🍰",
    items: [
      { name: "Panqueque Alaska", price: "$5.200", desc: "2 panqueques rellenos con helado, azúcar flor, crema chantilly y salsa chocolate.", img: img("alaska-pancake") },
      { name: "Panqueques Celestino", price: "$4.200", desc: "2 panqueques rellenos con manjar, azúcar flor, crema chantilly y salsa chocolate.", img: img("dulce-de-leche-pancake") },
      { name: "Porción de Torta", price: "$3.900", desc: "Porción de torta del día.", img: img("cake-slice") },
      { name: "Porción Pie de Limón", price: "$3.500", desc: "Pie de limón con merengue.", img: img("lemon-pie") },
      { name: "Porción Kuchen de Manzana", price: "$3.500", desc: "Kuchen casero de manzana.", img: img("apple-kuchen") },
    ],
  },
  {
    id: "para-beber",
    title: "Para Beber",
    emoji: "🥤",
    items: [
      { name: "Jugo Vitamínico", price: "$4.900", desc: "Mezcla vitamínica natural.", img: img("vitamin-juice") },
      { name: "Jugo de Fruta con Helado", price: "$4.600", desc: "Jugo natural con bola de helado.", img: img("juice-icecream") },
      { name: "Jugo de Fruta con Leche", price: "$4.600", desc: "Jugo de fruta con leche.", img: img("fruit-milk") },
      { name: "Jugo de Dos Sabores", price: "$4.300", desc: "Mezcla de dos frutas naturales.", img: img("mixed-juice") },
      { name: "Jugo Fruta Natural", price: "$4.300", desc: "Jugo de fruta natural recién exprimido.", img: img("fresh-juice") },
      { name: "Limonada Menta Jengibre", price: "$4.300", desc: "Limonada con menta y jengibre.", img: img("mint-ginger-lemonade") },
      { name: "Limonada Clásica", price: "$4.100", desc: "Limonada clásica fresca.", img: img("lemonade") },
      { name: "Monster", price: "$2.500", desc: "Energética Monster.", img: img("monster-energy") },
      { name: "Redbull 473cc", price: "$2.500", desc: "Red Bull 473cc.", img: img("redbull") },
      { name: "Agua Vital Mineral", price: "$2.300", desc: "Agua mineral Vital.", img: img("mineral-water") },
      { name: "Redbull 355cc", price: "$2.200", desc: "Red Bull 355cc.", img: img("energy-drink") },
      { name: "Bebida en Lata", price: "$2.100", desc: "Bebida en lata a elección.", img: img("soda-can") },
      { name: "Redbull 250cc", price: "$1.800", desc: "Red Bull 250cc.", img: img("redbull-small") },
      { name: "Agua Manantial 500cc", price: "$1.800", desc: "Agua Manantial 500cc.", img: img("spring-water") },
    ],
  },
  {
    id: "cervezas",
    title: "Cervezas",
    emoji: "🍺",
    items: [
      { name: "Gran Torobayo", price: "$7.900", desc: "Cerveza artesanal premium del sur.", img: img("craft-beer-bottle") },
      { name: "Patagonia Austral", price: "$7.100", desc: "Cerveza Patagonia Austral.", img: img("patagonia-beer") },
      { name: "Guayacán Papaya", price: "$5.900", desc: "Cerveza artesanal Guayacán Papaya.", img: img("fruit-beer") },
      { name: "Dolbek Maqui", price: "$5.900", desc: "Cerveza artesanal Dolbek Maqui.", img: img("maqui-beer") },
      { name: "Torobayo", price: "$4.900", desc: "Cerveza Kunstmann Torobayo.", img: img("kunstmann-beer") },
      { name: "Shop Heineken", price: "$4.500", desc: "Schop Heineken bien helado.", img: img("draft-beer") },
      { name: "Austral Calafate", price: "$4.400", desc: "Cerveza Austral Calafate.", img: img("austral-beer") },
      { name: "Heineken", price: "$4.200", desc: "Cerveza Heineken.", img: img("heineken") },
      { name: "Heineken Zero", price: "$4.200", desc: "Heineken sin alcohol.", img: img("heineken-zero") },
      { name: "Royal Lager", price: "$4.200", desc: "Cerveza Royal Lager.", img: img("lager-beer") },
      { name: "Royal Amber", price: "$4.200", desc: "Cerveza Royal Amber.", img: img("amber-beer") },
      { name: "Valdivia Lager", price: "$4.200", desc: "Cerveza Valdivia Lager.", img: img("valdivia-beer") },
    ],
  },
];

function Index() {
  const [open, setOpen] = useState<Record<string, boolean>>({ [SECTIONS[0].id]: true });
  const [activeCat, setActiveCat] = useState<string>(SECTIONS[0].id);
  const [scrollY, setScrollY] = useState(0);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const toggle = (id: string) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  const scrollTo = (id: string) => {
    setOpen((o) => ({ ...o, [id]: true }));
    setTimeout(() => {
      const el = sectionRefs.current[id];
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 140;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 80);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = sectionRefs.current[s.id];
        if (el && el.getBoundingClientRect().top - 160 <= 0) current = s.id;
      }
      setActiveCat(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseSize = 160;
  const progress = Math.min(1, scrollY / 200);
  const logoSize = baseSize - progress * (baseSize - 44);
  const headerLogoOpacity = 1 - progress;
  const navLogoOpacity = progress;

  return (
    <div className="min-h-screen" style={{ background: "#1a1a1a", fontFamily: "Poppins, system-ui, sans-serif" }}>
      {/* HEADER */}
      <header className="px-5 pt-6 pb-5 text-center shadow-xl" style={{ background: "#8B0000" }}>
        <div
          className="mx-auto flex items-center justify-center transition-all duration-300 ease-out"
          style={{ height: `${baseSize * (1 - progress) + 8}px`, opacity: headerLogoOpacity }}
          aria-hidden={progress > 0.95}
        >
          <img
            src={logoUrbano}
            alt="Café Urbano logo"
            style={{ width: `${logoSize}px`, height: `${logoSize}px` }}
            className="object-contain drop-shadow-2xl transition-all duration-200 ease-out"
          />
        </div>
        <h1 className="text-white font-extrabold text-3xl tracking-tight mt-2" style={{ letterSpacing: "0.02em" }}>
          Café Urbano
        </h1>
        <p className="mt-1 text-xs font-medium" style={{ color: "#FFD700" }}>
          Sabor casero, ambiente urbano — Mallplaza Calama
        </p>
      </header>

      {/* MENÚ DEL DÍA BANNER */}
      <div className="px-4 py-4 border-y-2" style={{ background: "#CC0000", borderColor: "#FFD700" }}>
        <div className="text-center">
          <div className="font-extrabold text-xl mb-1" style={{ color: "#FFD700" }}>
            ⭐ MENÚ DEL DÍA ⭐
          </div>
          <p className="text-xs leading-relaxed text-white/95">
            <span style={{ color: "#FFD700" }} className="font-bold">2 entradas</span> (caliente o fría) ·{" "}
            <span style={{ color: "#FFD700" }} className="font-bold">3–4 fondos</span> a elección (incluye hipocalórico) ·{" "}
            <span style={{ color: "#FFD700" }} className="font-bold">postre</span> a elección
          </p>
          <p className="text-[11px] mt-1.5 text-white/90">
            Bebida <span style={{ color: "#FFD700" }} className="font-bold">incluida lunes a viernes</span> · separada sábado y domingo
          </p>
        </div>
      </div>

      {/* STICKY CATEGORY BAR */}
      <nav className="sticky top-0 z-40 shadow-lg" style={{ background: "#1a1a1a", borderBottom: "2px solid #CC0000" }}>
        <div className="flex items-center gap-2 px-3 py-2.5">
          <img
            src={logoUrbano}
            alt="Café Urbano"
            style={{ width: `${44 * progress}px`, opacity: navLogoOpacity }}
            className="h-11 object-contain shrink-0 transition-all duration-200"
          />
          <div className="flex gap-2 overflow-x-auto no-scrollbar flex-1">
            {SECTIONS.map((s) => {
              const isActive = activeCat === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="shrink-0 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all"
                  style={{
                    background: isActive ? "#CC0000" : "#333",
                    color: isActive ? "#fff" : "#ddd",
                    boxShadow: isActive ? "0 4px 10px rgba(204,0,0,0.4)" : "none",
                  }}
                >
                  {s.title}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* SECTIONS */}
      <main className="pb-10">
        <div className="space-y-3 px-3 pt-4">
          {SECTIONS.map((section) => {
            const isOpen = !!open[section.id];
            return (
              <section
                key={section.id}
                id={section.id}
                ref={(el) => { sectionRefs.current[section.id] = el; }}
                className="rounded-xl overflow-hidden shadow-xl scroll-mt-32"
                style={{ background: "#2a2a2a", border: "1px solid #333" }}
              >
                <button
                  onClick={() => toggle(section.id)}
                  className="w-full flex items-center justify-between px-4 py-4"
                  style={{ background: "#222" }}
                >
                  <h2
                    className="font-extrabold text-lg tracking-wide uppercase text-left"
                    style={{ color: "#CC0000" }}
                  >
                    <span className="mr-2">{section.emoji}</span>
                    {section.title}
                  </h2>
                  <span
                    className={`text-xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    style={{ color: "#FFD700" }}
                    aria-hidden
                  >
                    ▾
                  </span>
                </button>

                {isOpen && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="px-3 pt-3 pb-4">
                      {section.note && (
                        <div
                          className="mb-3 px-3 py-2 rounded-lg text-[11px] italic"
                          style={{ background: "rgba(255,215,0,0.08)", color: "#FFD700", border: "1px solid rgba(255,215,0,0.25)" }}
                        >
                          {section.note}
                        </div>
                      )}
                      <ul className="space-y-2.5">
                        {section.items.map((it, i) => (
                          <li
                            key={i}
                            className="flex gap-3 rounded-xl p-2.5"
                            style={{ background: "#2a2a2a", border: "1px solid #333" }}
                          >
                            <img
                              src={it.img}
                              alt={it.name}
                              loading="lazy"
                              onError={(e) => {
                                const t = e.currentTarget;
                                if (!t.dataset.fallback) {
                                  t.dataset.fallback = "1";
                                  t.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=70";
                                }
                              }}
                              className="w-20 h-20 rounded-xl object-cover shrink-0"
                              style={{ background: "#1a1a1a" }}
                            />
                            <div className="flex-1 min-w-0 flex flex-col justify-between">
                              <div>
                                <h3 className="font-bold text-sm leading-tight text-white">{it.name}</h3>
                                {it.desc && (
                                  <p className="text-[11px] italic mt-1 leading-snug" style={{ color: "#aaa" }}>
                                    {it.desc}
                                  </p>
                                )}
                              </div>
                              <div className="mt-1.5">
                                <span className="font-bold text-lg" style={{ color: "#FFD700" }}>
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
      </main>

      {/* FOOTER */}
      <footer className="px-5 py-7 text-center" style={{ background: "#0d0d0d", color: "#fff" }}>
        <div className="font-extrabold text-2xl tracking-wide mb-2">
          CAFÉ <span style={{ color: "#FFD700" }}>URBANO</span>
        </div>
        <p className="text-sm text-white/90">Mallplaza Calama</p>
        <p className="text-xs text-white/70">Av. Balmaceda 3242, Calama</p>
        <div className="my-4 h-px bg-white/15" />
        <p className="text-xs text-white/80">
          <span className="font-semibold" style={{ color: "#FFD700" }}>Horario:</span> Lun a Dom · 10:00 — 21:30
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

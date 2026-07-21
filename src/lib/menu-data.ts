// Single source of truth for the menu. The /menu page and the homepage
// featured grid both render from this data, so names, prices, and
// descriptions can never drift apart.

export type MenuItem = {
  name: string;
  price: string;
  description: string;
  image?: string;
};

export type MenuCategory = {
  title: string;
  description: string;
  items: MenuItem[];
};

// TODO: these menu photos don't exist in public/images yet — add the files,
// then restore the image fields: shrimp-ceviche.png, clamato.png, sidral.png,
// coke.png, diet-coke.png, coke-zero.png, sprite.png, water.png.
export const menuCategories: MenuCategory[] = [
  {
    title: "Ceviches",
    description: "Classic Baja-style ceviches made fresh to order.",
    items: [
      {
        name: "Seafoodfest Ceviche",
        price: "$15.99",
        description: "Shrimp and octopus mixed with red onion, avocado, and a tangy sauce.",
        image: "/images/seafoodfest.png",
      },
      {
        name: "Tuna Ceviche",
        price: "$12.49",
        description: "Fresh tuna marinated in a zesty citrus blend, served with creamy avocado slices for a refreshing and flavorful dish.",
        image: "/images/tuna-ceviche.png",
      },
      {
        name: "Shrimp Ceviche",
        price: "$10.49",
        description: "Fresh shrimp marinated and combined with creamy avocado, served chilled for a refreshing seafood delight.",
      },
      {
        name: "Fish Ceviche",
        price: "$9.49",
        description: "Freshly diced fish marinated in citrus, topped with avocado slices, and garnished with chopped onions and cilantro.",
        image: "/images/fish-ceviche.png",
      },
    ],
  },
  {
    title: "Cocktails",
    description: "Refreshing seafood cocktails.",
    items: [
      {
        name: "Roger's Special Cocktail",
        price: "$24.99",
        description: "A delightful mix of tender octopus, succulent shrimp, sweet scallops, and an oyster, combined in a refreshing broth.",
        image: "/images/rogers-cocktail.png",
      },
    ],
  },
  {
    title: "Aguachile",
    description: "Fresh seafood cured in our house-made citrus and chili marinades.",
    items: [
      {
        name: "Aguachile Shrimp and Octopus",
        price: "$20.99",
        description: "Chilled shrimp and seafood mix, citrus marinade, red onions, serrano peppers and avocado.",
        image: "/images/aguachile-octopus.png",
      },
      {
        name: "Aguachile Classic Shrimp",
        price: "$18.49",
        description: "Choice of Green or Red Sauce. Spice 1-5 level.",
        image: "/images/classic-shrimp.png",
      },
    ],
  },
  {
    title: "Tiradito",
    description: "Thinly sliced fresh seafood.",
    items: [
      {
        name: "Tuna Tiradito",
        price: "$20.99",
        description: "Fresh tuna drizzle, house-made ponzu or mango sauce and avocado.",
        image: "/images/tuna-tiradito.png",
      },
    ],
  },
  {
    title: "Beverage",
    description: "Cold drinks to pair with your seafood.",
    items: [
      { name: "Clamato Special", price: "$10.99", description: "A blend of tomato and clam juice with shrimp, beef, cucumber, lime, and a unique mix of spices and sauces." },
      { name: "Sidral Mundet", price: "$4.49", description: "Apple flavored soda from Mexico, typically served in a glass bottle." },
      { name: "Coke", price: "$3.49", description: "Classic coke, a beloved carbonated soft drink." },
      { name: "Diet Coke", price: "$3.49", description: "A cola-flavored carbonated beverage with a distinct, crisp taste and no sugar or calories." },
      { name: "Coke Zero", price: "$3.49", description: "A zero-sugar cola with a classic taste." },
      { name: "Sprite", price: "$3.49", description: "Crisp lemon-lime soda typically crafted with cane sugar." },
      { name: "Water", price: "$3.49", description: "Plain and simple water, typically bottled for convenient hydration." },
    ],
  },
];

/** Look up a real menu item by name (throws at build time if renamed away). */
function item(name: string): MenuItem {
  for (const category of menuCategories) {
    const found = category.items.find((i) => i.name === name);
    if (found) return found;
  }
  throw new Error(`Menu item not found: ${name}`);
}

// Homepage "Dive Into the Menu" grid — real items, verbatim from the menu.
export const featuredItems: MenuItem[] = [
  { ...item("Aguachile Classic Shrimp"), image: "/images/aguachile-octopus.png" },
  { ...item("Tuna Tiradito"), image: "/images/tuna-tiradito.png" },
  { ...item("Roger's Special Cocktail"), image: "/images/rogers-cocktail.png" },
  { ...item("Fish Ceviche"), image: "/images/ceviche.jpg" },
];

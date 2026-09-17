import { MenuItem, GalleryItem } from '../types';

export const RESTAURANT_INFO = {
  name: "Pizza 1",
  businessType: "Pizza & Fast Food Restaurant",
  address: "1, Peshawar Road, Rawalpindi, Pakistan",
  shortLocation: "Peshawar Road, Rawalpindi",
  primaryPhone: "0336 7111124",
  primaryPhoneLink: "tel:+923367111124",
  secondaryPhone: "0314 5169922",
  secondaryPhoneLink: "tel:+923145169922",
  instagramUrl: "https://www.instagram.com/pizza1pakistan",
  instagramHandle: "@pizza1pakistan",
  // Provided Facebook link is hungrys.pk - clearly attributed and not claimed as verified official page
  facebookUrl: "https://www.facebook.com/hungrys.pk/",
  facebookLabel: "Facebook (hungrys.pk)",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=1+Peshawar+Road+Rawalpindi+Pakistan",
  mapSearchUrl: "https://www.google.com/maps/search/?api=1&query=1+Peshawar+Road+Rawalpindi+Pakistan",
  embedMapUrl: "https://maps.google.com/maps?q=1+Peshawar+Road+Rawalpindi+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed",
};

/**
 * EXACTLY 7 FEATURED MENU ITEMS (within 7-8 max constraint).
 * Note: Prices are intentionally not invented per instructions:
 * "DO NOT INVENT PRICES. DO NOT invent Pizza 1's actual menu items and present them as verified information.
 * If the actual menu is not available, create a clearly editable featured-menu structure instead of inventing an official menu."
 */
export const FEATURED_MENU: MenuItem[] = [
  {
    id: "item-1",
    name: "Chicken Tikka Pizza",
    category: "Signature Pizza",
    description: "Tender spiced chicken tikka pieces, crisp red onions, bell peppers, and melted mozzarella on baked crust.",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=260&h=260&auto=format&fit=crop&q=80",
    priceNote: "Inquire by Phone",
  },
  {
    id: "item-2",
    name: "Chicken Fajita Pizza",
    category: "Specialty Pizza",
    description: "Marinated fajita chicken strips, sliced green capsicum, sweet onions, and seasoned herbs with golden cheese.",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=260&h=260&auto=format&fit=crop&q=80",
    priceNote: "Inquire by Phone",
  },
  {
    id: "item-3",
    name: "Classic Pepperoni Pizza",
    category: "Traditional Pizza",
    description: "Savory pepperoni slices layered over seasoned tomato herb reduction and melted mozzarella.",
    imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=260&h=260&auto=format&fit=crop&q=80",
    priceNote: "Inquire by Phone",
  },
  {
    id: "item-4",
    name: "Four Cheese Melt Pizza",
    category: "Cheese Lovers",
    description: "A rich, bubbly blend of selected mozzarella and mild cheddar cheeses over an artisanal crust.",
    imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=260&h=260&auto=format&fit=crop&q=80",
    priceNote: "Inquire by Phone",
  },
  {
    id: "item-5",
    name: "Spicy Beef & Pepper Feast",
    category: "Meat Feast",
    description: "Seasoned ground beef, sliced jalapeños, black olives, and diced tomatoes on rich marinara base.",
    imageUrl: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=260&h=260&auto=format&fit=crop&q=80",
    priceNote: "Inquire by Phone",
  },
  {
    id: "item-6",
    name: "Garden Fresh Veggie Pizza",
    category: "Vegetarian",
    description: "Mushrooms, bell peppers, fresh tomatoes, sweet golden corn, and black olives over melted cheese.",
    imageUrl: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=260&h=260&auto=format&fit=crop&q=80",
    priceNote: "Inquire by Phone",
  },
  {
    id: "item-7",
    name: "Crispy Fast Food Sides",
    category: "Fast Food Sides",
    description: "Crisp golden potato fries and fried chicken bites served with savory dipping sauce.",
    imageUrl: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=260&h=260&auto=format&fit=crop&q=80",
    priceNote: "Inquire by Phone",
  },
];

/**
 * EXACTLY 5 DISTINCT FOOD GALLERY IMAGES (between 4-6 constraint).
 * None of these repeat the hero image.
 */
export const FOOD_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Oven-Baked Crust",
    alt: "Artisanal freshly baked pizza with golden bubbly crust",
    imageUrl: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&auto=format&fit=crop&q=80",
    caption: "Freshly prepared dough baked to an appetizing golden finish",
  },
  {
    id: "gal-2",
    title: "Piping Hot Slices",
    alt: "Warm pizza slice with stretchy mozzarella cheese",
    imageUrl: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=800&auto=format&fit=crop&q=80",
    caption: "Generous cheese pull straight from the oven",
  },
  {
    id: "gal-3",
    title: "Hand-Crafted Toppings",
    alt: "Thin crust pizza topped with fresh herbs and meats on wooden board",
    imageUrl: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&auto=format&fit=crop&q=80",
    caption: "Balanced toppings and zesty sauce combinations",
  },
  {
    id: "gal-4",
    title: "Fast Food Favorites",
    alt: "Crisp french fries and fast food sides with dipping sauce",
    imageUrl: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=800&auto=format&fit=crop&q=80",
    caption: "Golden crispy sides prepared fresh to order",
  },
  {
    id: "gal-5",
    title: "Stone-Baked Flavors",
    alt: "Classic Mediterranean style pizza with vibrant herbs and olives",
    imageUrl: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&auto=format&fit=crop&q=80",
    caption: "Carefully selected ingredients for everyday fast food cravings",
  },
];

export const WHY_VISIT_POINTS = [
  {
    id: "point-1",
    title: "Pizza & Fast Food",
    description: "Offering freshly baked pizzas and fast food selections prepared upon order.",
    iconName: "Pizza",
  },
  {
    id: "point-2",
    title: "Peshawar Road Location",
    description: "Conveniently situated at 1, Peshawar Road in Rawalpindi with quick accessibility.",
    iconName: "MapPin",
  },
  {
    id: "point-3",
    title: "Easy Phone Contact",
    description: "Direct lines (0336 7111124 & 0314 5169922) for prompt orders, inquiries, and info.",
    iconName: "PhoneCall",
  },
  {
    id: "point-4",
    title: "Convenient Online Information",
    description: "Accurate address details, directions, and direct social channel access.",
    iconName: "Navigation",
  },
];

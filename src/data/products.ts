export interface Product {
  id: string;
  slug: string;
  categorySlug: string;
  name: string;
  subtitle: string;
  price: string;
  priceNum: number;
  gsm?: string;
  colors: string[];
  colorNames: string[];
  sizes: string[];
  imageSrc: string;
  imageAlt: string;
  images: string[];
  tag?: string;
  inStock: boolean;
  soldOut?: boolean;
  onSale?: boolean;
  rating: number;
  popularity: number;
  createdAt: string;
  description?: string;
  features?: string[];
  specifications?: Record<string, string>;
}

export const PRODUCTS: Product[] = [
  {
    "id": "hd-01",
    "slug": "big-apple-vibes-hoodie",
    "categorySlug": "hoodies",
    "name": "Big Apple Vibes Hoodie",
    "subtitle": "Heavyweight Fleece \u2022 NYC Graphic",
    "price": "$34.95",
    "priceNum": 34.95,
    "gsm": "400 GSM",
    "colors": [ "#71717A" ],
    "colorNames": [ "Gray" ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "imageSrc": "/images/newImages/WhatsApp Image 2026-09-17 at 18.23.38.jpeg",
    "imageAlt": "Fabby Stitch Big Apple Vibes Hoodie",
    "images": [
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.23.38.jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.23.38 (3).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.23.38 (2).jpeg"
    ],
    "tag": "Bestseller",
    "inStock": true,
    "rating": 4.9,
    "popularity": 98,
    "createdAt": "2026-01-10",
    "description": "Embrace the energy of New York City with our Big Apple Vibes Hoodie. Crafted from premium 400 GSM ultra-soft fleece with a custom NYC Yellow Taxi emblem.",
    "features": [
      "Heavyweight 400 GSM 80% Organic Cotton / 20% Polyester Fleece",
      "High-density NYC Taxi emblem artwork",
      "Double-lined hood with custom metal-tipped drawstrings"
    ]
  },
  {
    "id": "hd-02",
    "slug": "bk-old-school-hoodie",
    "categorySlug": "hoodies",
    "name": "BK Old School Hoodie",
    "subtitle": "Born & Raised Old School Graphic Fleece",
    "price": "$34.95",
    "priceNum": 34.95,
    "gsm": "400 GSM",
    "colors": [ "#991B1B" ],
    "colorNames": [ "Crimson Red" ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "imageSrc": "/images/newImages/WhatsApp Image 2026-09-17 at 18.21.12 (3).jpeg",
    "imageAlt": "Fabby Stitch BK Old School Hoodie",
    "images": [
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.21.12 (3).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.21.12 (2).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.21.12 (1).jpeg"
    ],
    "tag": "Popular",
    "inStock": true,
    "rating": 4.8,
    "popularity": 95,
    "createdAt": "2026-01-15",
    "description": "Vintage Brooklyn heritage meets modern street comfort. Features the iconic Brooklyn Born & Raised frame graphic on crimson red fleece.",
    "features": [
      "Heavyweight 400 GSM brushed fleece",
      "Vintage framed typography chest artwork",
      "Kangaroo pouch pocket and rib-knit cuffs"
    ]
  },
  {
    "id": "sw-01",
    "slug": "fabby-stitch-crewneck-sweatshirt",
    "categorySlug": "sweatshirts",
    "name": "Fabby Stitch Crewneck Sweatshirt",
    "subtitle": "Heavyweight Fleece \u2022 Ribbed Trim",
    "price": "$31.95",
    "priceNum": 31.95,
    "gsm": "380 GSM",
    "colors": [ "#4C1D95" ],
    "colorNames": [ "Deep Plum" ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "imageSrc": "/images/newImages/WhatsApp Image 2026-09-17 at 18.25.04 (3).jpeg",
    "imageAlt": "Fabby Stitch Crewneck Sweatshirt",
    "images": [
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.25.04 (3).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.25.04 (1).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.25.04 (2).jpeg"
    ],
    "tag": "Essential",
    "inStock": true,
    "rating": 4.8,
    "popularity": 90,
    "createdAt": "2026-01-16",
    "description": "Ultra-comfortable 380 GSM crewneck sweatshirt designed with subtle street sophistication in rich deep plum fleece.",
    "features": [
      "380 GSM Premium Brushed Fleece",
      "Thick 2x2 rib collar, cuffs, and hem",
      "Drop-shoulder silhouette for effortless layering"
    ]
  },
  {
    "id": "pl-01",
    "slug": "fabby-stitch-pique-polo",
    "categorySlug": "polos",
    "name": "Fabby Stitch Pique Polo",
    "subtitle": "Pique Knit \u2022 Embroidered Logo Crest",
    "price": "$29.95",
    "priceNum": 29.95,
    "gsm": "260 GSM",
    "colors": [ "#93C5FD" ],
    "colorNames": [ "Sky Blue" ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "imageSrc": "/images/newImages/WhatsApp Image 2026-09-17 at 18.21.12.jpeg",
    "imageAlt": "Fabby Stitch Pique Polo",
    "images": [
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.21.12.jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.21.11.jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.21.11 (1).jpeg"
    ],
    "tag": "Corporate",
    "inStock": true,
    "rating": 4.8,
    "popularity": 87,
    "createdAt": "2026-01-14",
    "description": "The essential corporate and elevated casual polo. Tailored from 260 GSM combed cotton pique knit with high-density embroidered crest.",
    "features": [
      "260 GSM Heavyweight Cotton Pique Knit",
      "Precision 3D direct-embroidery chest crest",
      "Tipped collar and sleeve cuffs"
    ]
  },
  {
    "id": "ts-01",
    "slug": "big-apple-vibes-t-shirt",
    "categorySlug": "t-shirts",
    "name": "Big Apple Vibes T-Shirt",
    "subtitle": "100% Combed Cotton \u2022 Statue of Liberty Graphic",
    "price": "$23.95",
    "priceNum": 23.95,
    "gsm": "220 GSM",
    "colors": [ "#D4D4D8" ],
    "colorNames": [ "Light Heather Gray" ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "imageSrc": "/images/newImages/WhatsApp Image 2026-09-17 at 18.23.39 (1).jpeg",
    "imageAlt": "Fabby Stitch Big Apple Vibes T-Shirt",
    "images": [
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.23.39 (1).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.23.39.jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.23.38 (1).jpeg"
    ],
    "tag": "Bestseller",
    "inStock": true,
    "rating": 4.9,
    "popularity": 99,
    "createdAt": "2026-01-12",
    "description": "The classic NYC aesthetic captured in premium 220 GSM combed cotton. Featuring the Statue of Liberty graphic print.",
    "features": [
      "220 GSM Heavyweight 100% Ring-Spun Combed Cotton",
      "Statue of Liberty artwork chest print",
      "Ribbed collar with shoulder-to-shoulder taping"
    ]
  },
  {
    "id": "ts-02",
    "slug": "bk99-t-shirt",
    "categorySlug": "t-shirts",
    "name": "BK99 T-Shirt",
    "subtitle": "Brooklyn Borough Legacy Graphic Tee",
    "price": "$23.95",
    "priceNum": 23.95,
    "gsm": "220 GSM",
    "colors": [ "#121212" ],
    "colorNames": [ "Black" ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "imageSrc": "/images/newImages/WhatsApp Image 2026-09-17 at 18.25.04.jpeg",
    "imageAlt": "Fabby Stitch BK99 T-Shirt",
    "images": [
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.25.04.jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.25.03.jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.25.03 (1).jpeg"
    ],
    "tag": "Popular",
    "inStock": true,
    "rating": 4.8,
    "popularity": 93,
    "createdAt": "2026-01-18",
    "description": "The BK99 Tee brings industrial borough heritage into high-fashion streetwear with NYC Metro W89 graphics.",
    "features": [
      "220 GSM heavy jersey cotton",
      "NYC Metro W89 graphic front artwork",
      "Double needle hem and sleeve stitching"
    ]
  },
  {
    "id": "ts-03",
    "slug": "brklyn-hustle-t-shirt",
    "categorySlug": "t-shirts",
    "name": "BRKLYN Hustle T-Shirt",
    "subtitle": "High-Density Screen Print \u2022 Relaxed Fit",
    "price": "$23.95",
    "priceNum": 23.95,
    "gsm": "240 GSM",
    "colors": [ "#121212" ],
    "colorNames": [ "Black" ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "imageSrc": "/images/newImages/WhatsApp Image 2026-09-17 at 18.30.06.jpeg",
    "imageAlt": "Fabby Stitch BRKLYN Hustle T-Shirt",
    "images": [
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.30.06.jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.30.06 (1).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.30.48.jpeg"
    ],
    "inStock": true,
    "rating": 4.7,
    "popularity": 90,
    "createdAt": "2026-01-25",
    "description": "Bold red and white NEW YORK CITY back typography and heavy cotton weight designed for the daily grind.",
    "features": [
      "240 GSM Heavy Cotton",
      "NEW YORK CITY bold back print",
      "Relaxed drop-shoulder silhouette"
    ]
  },
  {
    "id": "ts-04",
    "slug": "brklyn-legacy-t-shirt",
    "categorySlug": "t-shirts",
    "name": "BRKLYN Legacy T-Shirt",
    "subtitle": "BROOKLYN 99 Charcoal Graphic Tee",
    "price": "$23.95",
    "priceNum": 23.95,
    "gsm": "220 GSM",
    "colors": [ "#18181B" ],
    "colorNames": [ "Charcoal" ],
    "sizes": [
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "imageSrc": "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.20 (1).jpeg",
    "imageAlt": "Fabby Stitch BRKLYN Legacy T-Shirt",
    "images": [
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.20 (1).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.17 (6).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.20.jpeg"
    ],
    "inStock": true,
    "rating": 4.5,
    "popularity": 80,
    "createdAt": "2026-01-08",
    "description": "Classic Brooklyn heritage featuring high-density BROOKLYN 99 varsity graphics on charcoal jersey cotton.",
    "features": [
      "220 GSM ring-spun cotton jersey",
      "BROOKLYN 99 varsity chest print",
      "Ribbed collar"
    ]
  },
  {
    "id": "ts-05",
    "slug": "brklyn-old-school-t-shirt",
    "categorySlug": "t-shirts",
    "name": "BRKLYN Old School T-Shirt",
    "subtitle": "NEW YORK 07 Camo Emblem Tee",
    "price": "$23.95",
    "priceNum": 23.95,
    "gsm": "240 GSM",
    "colors": [ "#121212" ],
    "colorNames": [ "Black" ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "imageSrc": "/images/newImages/WhatsApp Image 2026-09-17 at 18.25.25.jpeg",
    "imageAlt": "Fabby Stitch BRKLYN Old School T-Shirt",
    "images": [
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.25.25.jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.25.25 (2).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.25.25 (1).jpeg"
    ],
    "tag": "Signature",
    "inStock": true,
    "rating": 4.9,
    "popularity": 96,
    "createdAt": "2026-01-02",
    "description": "Old school Brooklyn meets new age craftsmanship. Camo NEW YORK 07 graphics on premium black cotton.",
    "features": [
      "NEW YORK 07 camo numeric chest emblem",
      "240 GSM premium combed cotton",
      "Soft handle finish with zero shrink technology"
    ]
  },
  {
    "id": "ts-06",
    "slug": "brklyn-roots-t-shirt",
    "categorySlug": "t-shirts",
    "name": "BRKLYN Roots T-Shirt",
    "subtitle": "MANHATTAN City Photo Graphic Tee",
    "price": "$23.95",
    "priceNum": 23.95,
    "gsm": "220 GSM",
    "colors": [ "#18181B" ],
    "colorNames": [ "Dark Charcoal" ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "imageSrc": "/images/newImages/WhatsApp Image 2026-09-17 at 18.30.07 (4).jpeg",
    "imageAlt": "Fabby Stitch BRKLYN Roots T-Shirt",
    "images": [
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.30.07 (4).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.30.07 (2).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.30.07 (3).jpeg"
    ],
    "inStock": true,
    "rating": 4.6,
    "popularity": 85,
    "createdAt": "2026-02-02",
    "description": "Atmospheric MANHATTAN cityscape photography boxed print on dark charcoal heavy jersey.",
    "features": [
      "High-resolution MANHATTAN photograph print",
      "220 GSM ring-spun cotton jersey",
      "Durable taped neck and shoulders"
    ]
  },
  {
    "id": "ts-07",
    "slug": "brklyn-wave-t-shirt",
    "categorySlug": "t-shirts",
    "name": "BRKLYN Wave T-Shirt",
    "subtitle": "Brooklyn Country Fluid Graphic Tee",
    "price": "$23.95",
    "priceNum": 23.95,
    "gsm": "220 GSM",
    "colors": [ "#1E3A8A" ],
    "colorNames": [ "Navy Blue" ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "imageSrc": "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.17 (2).jpeg",
    "imageAlt": "Fabby Stitch BRKLYN Wave T-Shirt",
    "images": [
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.17 (2).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.17 (1).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.17.jpeg"
    ],
    "tag": "Trending",
    "inStock": true,
    "rating": 4.8,
    "popularity": 92,
    "createdAt": "2026-02-12",
    "description": "Features sleek fluid typography across the chest with high-end fabric weight and drape.",
    "features": [
      "220 GSM ring-spun cotton jersey",
      "Multi-angle wave graphic print",
      "Seamless collar"
    ]
  },
  {
    "id": "ts-08",
    "slug": "brooklyn-bridge-flow-t-shirt",
    "categorySlug": "t-shirts",
    "name": "Brooklyn Bridge Flow T-Shirt",
    "subtitle": "Iconic Bridge Heartbeat Line Graphic Tee",
    "price": "$23.95",
    "priceNum": 23.95,
    "gsm": "220 GSM",
    "colors": [ "#121212" ],
    "colorNames": [ "Black" ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "imageSrc": "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.17 (5).jpeg",
    "imageAlt": "Fabby Stitch Brooklyn Bridge Flow T-Shirt",
    "images": [
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.17 (5).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.17 (3).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.17 (4).jpeg"
    ],
    "inStock": true,
    "rating": 4.7,
    "popularity": 89,
    "createdAt": "2026-01-22",
    "description": "Minimalist pulse heartbeat Brooklyn Bridge silhouette artwork screen-printed on premium black cotton.",
    "features": [
      "220 GSM combed cotton",
      "Pulse heartbeat line graphic",
      "Twin-needle hemmed sleeves"
    ]
  },
  {
    "id": "ts-09",
    "slug": "red-white-and-bold-t-shirt",
    "categorySlug": "t-shirts",
    "name": "Red White & Bold T-Shirt",
    "subtitle": "Athletic Dept State College 1978 Tee",
    "price": "$23.95",
    "priceNum": 23.95,
    "gsm": "220 GSM",
    "colors": [ "#FFFFFF" ],
    "colorNames": [ "White" ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "imageSrc": "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.37.jpeg",
    "imageAlt": "Fabby Stitch Red White & Bold T-Shirt",
    "images": [
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.37.jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.20 (3).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.20 (2).jpeg"
    ],
    "onSale": true,
    "inStock": true,
    "rating": 4.4,
    "popularity": 79,
    "createdAt": "2026-01-30",
    "description": "Vintage collegiate State College 1978 Athletic Dept graphic print on clean white ring-spun cotton.",
    "features": [
      "220 GSM ring-spun cotton",
      "Vintage Athletic Dept college crest print",
      "Reinforced collar taping"
    ]
  },
  {
    "id": "ts-10",
    "slug": "gridiron-state-t-shirt",
    "categorySlug": "t-shirts",
    "name": "Gridiron State T-Shirt",
    "subtitle": "Legendary Champs 1982 Heritage Print Tee",
    "price": "$23.95",
    "priceNum": 23.95,
    "gsm": "220 GSM",
    "colors": [ "#18181B" ],
    "colorNames": [ "Charcoal" ],
    "sizes": [
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "imageSrc": "/images/newImages/WhatsApp Image 2026-09-17 at 18.30.07.jpeg",
    "imageAlt": "Fabby Stitch Gridiron State T-Shirt",
    "images": [
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.30.07.jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.30.07 (1).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.30.06 (2).jpeg"
    ],
    "inStock": true,
    "rating": 4.6,
    "popularity": 83,
    "createdAt": "2026-02-06",
    "description": "Gridiron athletic heritage design featuring Legendary Champs 1982 typography print.",
    "features": [
      "220 GSM heavyweight charcoal cotton",
      "Legendary Champs 1982 athletic print",
      "Comfortable classic fit"
    ]
  },
  {
    "id": "ts-11",
    "slug": "ny-flagship-t-shirt",
    "categorySlug": "t-shirts",
    "name": "NY Flagship T-Shirt",
    "subtitle": "US Paint Splatter Flag Graphic Tee",
    "price": "$23.95",
    "priceNum": 23.95,
    "gsm": "220 GSM",
    "colors": [ "#FFFFFF" ],
    "colorNames": [ "White" ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "imageSrc": "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.20 (6).jpeg",
    "imageAlt": "Fabby Stitch NY Flagship T-Shirt",
    "images": [
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.20 (6).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.20 (4).jpeg",
      "/images/newImages/WhatsApp Image 2026-09-17 at 18.36.20 (5).jpeg"
    ],
    "tag": "New Arrival",
    "inStock": true,
    "rating": 4.9,
    "popularity": 97,
    "createdAt": "2026-02-15",
    "description": "Features a bold artistic paint-splatter US flag design on premium heavyweight white cotton.",
    "features": [
      "220 GSM ring-spun cotton jersey",
      "Artistic paint splatter flag chest print",
      "Ribbed collar and double-needle hem"
    ]
  },
  {
    "id": "hd-03",
    "slug": "brklyn-hustle-hoodie",
    "categorySlug": "hoodies",
    "name": "BRKLYN Hustle Hoodie",
    "subtitle": "Heavyweight Fleece • Vertical BROOKLYN Print",
    "price": "$34.95",
    "priceNum": 34.95,
    "gsm": "400 GSM",
    "colors": [ "#FFFFFF" ],
    "colorNames": [ "White" ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "imageSrc": "/images/newImages/6f443d92-b6de-489b-86a6-a1362b5e87af.png",
    "imageAlt": "Fabby Stitch BRKLYN Hustle Hoodie",
    "images": [
      "/images/newImages/6f443d92-b6de-489b-86a6-a1362b5e87af.png",
      "/images/newImages/733eb881-2a1d-4356-887b-475b86804e0f.png",
      "/images/newImages/13df05fa-4943-4a8a-a51e-68cb1b032acc.png"
    ],
    "tag": "New Arrival",
    "inStock": true,
    "rating": 4.9,
    "popularity": 96,
    "createdAt": "2026-02-20",
    "description": "Clean white heavyweight fleece featuring high-density vertical BROOKLYN NEW YORK screenprint.",
    "features": [
      "Heavyweight 400 GSM Organic Cotton Fleece",
      "Vertical BROOKLYN NEW YORK graphic chest print",
      "Rib-knit cuffs and spacious pouch pocket"
    ]
  },
  {
    "id": "hd-04",
    "slug": "brklyn-old-school-camo-hoodie",
    "categorySlug": "hoodies",
    "name": "BRKLYN Old School Camo Hoodie",
    "subtitle": "NEW YORK 07 Camo Graphic Fleece",
    "price": "$34.95",
    "priceNum": 34.95,
    "gsm": "400 GSM",
    "colors": [ "#FFFFFF" ],
    "colorNames": [ "White" ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "imageSrc": "/images/newImages/0577ad33-ef62-4aef-88e4-0db59f777e1a.png",
    "imageAlt": "Fabby Stitch BRKLYN Old School Camo Hoodie",
    "images": [
      "/images/newImages/0577ad33-ef62-4aef-88e4-0db59f777e1a.png",
      "/images/newImages/fd743a6a-adef-4798-92f2-b6fce6e0dcab.png",
      "/images/newImages/7cfa1e51-83ac-4211-a5b0-778bcab9254d.png"
    ],
    "tag": "Trending",
    "inStock": true,
    "rating": 4.8,
    "popularity": 94,
    "createdAt": "2026-02-21",
    "description": "Old school urban heritage hoodie featuring NEW YORK 07 camo numeric chest print on premium white fleece.",
    "features": [
      "400 GSM heavy fleece construction",
      "Camo pattern NEW YORK 07 emblem artwork",
      "Double-lined drawstring hood"
    ]
  },
  {
    "id": "hd-05",
    "slug": "red-white-and-bold-hoodie",
    "categorySlug": "hoodies",
    "name": "Red White & Bold Hoodie",
    "subtitle": "State College Athletic Dept 1978 Fleece",
    "price": "$34.95",
    "priceNum": 34.95,
    "gsm": "400 GSM",
    "colors": [ "#FFFFFF" ],
    "colorNames": [ "White" ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "imageSrc": "/images/newImages/7578cab0-e08e-4813-bd28-047b8e54ee5f.png",
    "imageAlt": "Fabby Stitch Red White & Bold Hoodie",
    "images": [
      "/images/newImages/7578cab0-e08e-4813-bd28-047b8e54ee5f.png",
      "/images/newImages/721c86dc-7afb-48c6-b891-ff3f277fbaa5.png",
      "/images/newImages/c5b92ed7-f207-42f6-97b8-cdba1fc54ab7.png"
    ],
    "inStock": true,
    "rating": 4.7,
    "popularity": 91,
    "createdAt": "2026-02-22",
    "description": "Collegiate vintage aesthetic featuring Athletic Dept State College 1978 graphic print.",
    "features": [
      "400 GSM premium cotton fleece",
      "Vintage collegiate crest artwork",
      "Heavy duty metal eyelets and thick drawstrings"
    ]
  },
  {
    "id": "hd-06",
    "slug": "bk99-metro-hoodie",
    "categorySlug": "hoodies",
    "name": "BK99 Metro Heavyweight Hoodie",
    "subtitle": "NYC Metro W89 Graphic Fleece",
    "price": "$34.95",
    "priceNum": 34.95,
    "gsm": "400 GSM",
    "colors": [ "#121212" ],
    "colorNames": [ "Black" ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "imageSrc": "/images/newImages/57bd3abd-6fa5-442c-baf5-090c34f56a06.png",
    "imageAlt": "Fabby Stitch BK99 Metro Heavyweight Hoodie",
    "images": [
      "/images/newImages/57bd3abd-6fa5-442c-baf5-090c34f56a06.png",
      "/images/newImages/5efc08cf-700f-43c4-a7a4-db992068b448.png",
      "/images/newImages/9716085d-62e5-46db-9628-868a19bccd8b.png"
    ],
    "tag": "Bestseller",
    "inStock": true,
    "rating": 4.9,
    "popularity": 97,
    "createdAt": "2026-02-23",
    "description": "Industrial street style with high-density NYC W89 Metro graphic graphics on deep black fleece.",
    "features": [
      "Heavyweight 400 GSM brushed fleece",
      "NYC Metro W89 emblem screenprint",
      "Reinforced kangaroo pocket"
    ]
  },
  {
    "id": "hd-07",
    "slug": "ny-flagship-splatter-hoodie",
    "categorySlug": "hoodies",
    "name": "NY Flagship Splatter Hoodie",
    "subtitle": "US Paint Splatter Flag Graphic Fleece",
    "price": "$34.95",
    "priceNum": 34.95,
    "gsm": "400 GSM",
    "colors": [ "#121212" ],
    "colorNames": [ "Black" ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "imageSrc": "/images/newImages/67273a19-125b-477f-87e5-cfbc3c7bcd6b.png",
    "imageAlt": "Fabby Stitch NY Flagship Splatter Hoodie",
    "images": [
      "/images/newImages/67273a19-125b-477f-87e5-cfbc3c7bcd6b.png",
      "/images/newImages/241b8ca4-97ee-48cb-b825-ab6c05d1cf40.png",
      "/images/newImages/950190c3-4691-442d-961b-42ce5c0da2ac.png"
    ],
    "tag": "Signature",
    "inStock": true,
    "rating": 4.9,
    "popularity": 98,
    "createdAt": "2026-02-24",
    "description": "Artistic paint splatter American flag chest graphics on ultra-soft heavyweight black fleece.",
    "features": [
      "400 GSM Organic Cotton Fleece",
      "Paint splatter US flag chest print",
      "Drop shoulder relaxed street fit"
    ]
  },
  {
    "id": "hd-08",
    "slug": "gridiron-state-champs-hoodie",
    "categorySlug": "hoodies",
    "name": "Gridiron State Champs Hoodie",
    "subtitle": "Legendary Champions Graphic Fleece",
    "price": "$34.95",
    "priceNum": 34.95,
    "gsm": "400 GSM",
    "colors": [ "#121212" ],
    "colorNames": [ "Black" ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "imageSrc": "/images/newImages/4047c485-1a4e-410e-9c8d-5ce9cfa54645.png",
    "imageAlt": "Fabby Stitch Gridiron State Champs Hoodie",
    "images": [
      "/images/newImages/4047c485-1a4e-410e-9c8d-5ce9cfa54645.png",
      "/images/newImages/f34db5ea-0e02-4344-9ff4-9fceca4e7b9a.png",
      "/images/newImages/9fec6233-541a-456e-85c1-b058a085b1a8.png"
    ],
    "inStock": true,
    "rating": 4.8,
    "popularity": 92,
    "createdAt": "2026-02-25",
    "description": "Gridiron athletic heritage design featuring Legendary Champs 1982 typography print on charcoal fleece.",
    "features": [
      "400 GSM heavy fleece",
      "Legendary Champs athletic chest print",
      "Soft brushed interior"
    ]
  },
  {
    "id": "hd-09",
    "slug": "nyc-manhattan-skyline-hoodie",
    "categorySlug": "hoodies",
    "name": "NYC Manhattan Skyline Hoodie",
    "subtitle": "Red Fleece • MANHATTAN Skyline Print",
    "price": "$34.95",
    "priceNum": 34.95,
    "gsm": "400 GSM",
    "colors": [ "#991B1B" ],
    "colorNames": [ "Crimson Red" ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "imageSrc": "/images/newImages/6dac195c-fa5b-4bc9-ac8c-a293abef9de6.png",
    "imageAlt": "Fabby Stitch NYC Manhattan Skyline Hoodie",
    "images": [
      "/images/newImages/6dac195c-fa5b-4bc9-ac8c-a293abef9de6.png",
      "/images/newImages/b36c27ad-96ad-4b32-b98c-d61aba592bf5.png",
      "/images/newImages/0e260fc6-98f5-4b90-ace2-d1361cc9dc47.png"
    ],
    "tag": "Popular",
    "inStock": true,
    "rating": 4.8,
    "popularity": 95,
    "createdAt": "2026-02-26",
    "description": "Vibrant crimson red fleece with boxed MANHATTAN skyline graphic print.",
    "features": [
      "400 GSM heavyweight red fleece",
      "MANHATTAN skyline boxed chest artwork",
      "Double stitched seams"
    ]
  },
  {
    "id": "hd-10",
    "slug": "brklyn-legacy-varsity-hoodie",
    "categorySlug": "hoodies",
    "name": "BRKLYN Legacy Varsity Hoodie",
    "subtitle": "BROOKLYN 99 Varsity Graphic Fleece",
    "price": "$34.95",
    "priceNum": 34.95,
    "gsm": "400 GSM",
    "colors": [ "#121212" ],
    "colorNames": [ "Black" ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "imageSrc": "/images/newImages/b0a5b83c-5744-493c-9ec4-d4e1eacdc93d.png",
    "imageAlt": "Fabby Stitch BRKLYN Legacy Varsity Hoodie",
    "images": [
      "/images/newImages/b0a5b83c-5744-493c-9ec4-d4e1eacdc93d.png",
      "/images/newImages/b5de854b-cb02-496d-8345-ac78f9654443.png",
      "/images/newImages/d90a3284-b7f9-4e13-9733-e2effd727b5b.png"
    ],
    "inStock": true,
    "rating": 4.7,
    "popularity": 89,
    "createdAt": "2026-02-27",
    "description": "Classic varsity BROOKLYN 99 vertical graphic print on black heavyweight fleece.",
    "features": [
      "400 GSM brushed fleece",
      "BROOKLYN 99 varsity chest print",
      "Elastic rib cuffs and waistband"
    ]
  },
  {
    "id": "hd-11",
    "slug": "brklyn-wave-fluid-hoodie",
    "categorySlug": "hoodies",
    "name": "BRKLYN Wave Fluid Hoodie",
    "subtitle": "Fluid Typography Graphic Fleece",
    "price": "$34.95",
    "priceNum": 34.95,
    "gsm": "400 GSM",
    "colors": [ "#1E3A8A" ],
    "colorNames": [ "Navy Blue" ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "imageSrc": "/images/newImages/930b19fd-52b3-4068-a2d3-fdbb591c05e6.png",
    "imageAlt": "Fabby Stitch BRKLYN Wave Fluid Hoodie",
    "images": [
      "/images/newImages/930b19fd-52b3-4068-a2d3-fdbb591c05e6.png",
      "/images/newImages/0fc23d11-708a-4485-92d8-04a0d9231ebb.png",
      "/images/newImages/4697c14f-a84a-477a-9090-f421beaba27e.png"
    ],
    "tag": "Trending",
    "inStock": true,
    "rating": 4.8,
    "popularity": 93,
    "createdAt": "2026-02-28",
    "description": "Contemporary fluid wave typography across chest on premium heavy fleece.",
    "features": [
      "400 GSM heavy fleece",
      "Fluid wave chest print",
      "Spacious pouch pocket"
    ]
  },
  {
    "id": "hd-12",
    "slug": "brooklyn-bridge-flow-hoodie",
    "categorySlug": "hoodies",
    "name": "Brooklyn Bridge Flow Hoodie",
    "subtitle": "Pulse Heartbeat Bridge Graphic Fleece",
    "price": "$34.95",
    "priceNum": 34.95,
    "gsm": "400 GSM",
    "colors": [ "#991B1B" ],
    "colorNames": [ "Crimson Red" ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "imageSrc": "/images/newImages/deed5f1d-73cb-46cd-9a21-1c1aad65f74d.png",
    "imageAlt": "Fabby Stitch Brooklyn Bridge Flow Hoodie",
    "images": [
      "/images/newImages/deed5f1d-73cb-46cd-9a21-1c1aad65f74d.png",
      "/images/newImages/7ebbe1dd-4f27-475f-a175-e00465f5463b.png",
      "/images/newImages/deed5f1d-73cb-46cd-9a21-1c1aad65f74d.png"
    ],
    "inStock": true,
    "rating": 4.7,
    "popularity": 90,
    "createdAt": "2026-03-01",
    "description": "Minimalist pulse heartbeat line Brooklyn Bridge artwork on crimson red fleece.",
    "features": [
      "400 GSM heavyweight organic cotton fleece",
      "Pulse heartbeat bridge line artwork",
      "Double lined hood"
    ]
  }
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  linkHref?: string;
  linkLabel?: string;
}

export interface FAQCategory {
  id: string;
  category: string;
  items: FAQItem[];
}

export const FAQ_DATA: FAQCategory[] = [
  {
    id: "products-ordering",
    category: "Products & Ordering",
    items: [
      {
        id: "faq-1",
        question: "What apparel products does Fabby Stitch offer?",
        answer: "Fabby Stitch offers 100% combed cotton graphic and blank T-shirts ($23.95), heavyweight French Terry fleece hoodies ($34.95), classic crewneck sweatshirts ($31.95), tailored pique polo shirts ($29.95), long sleeve tees, and structured 6-panel twill caps ($19.95).",
        linkHref: "/shop",
        linkLabel: "Browse Shop Catalog",
      },
      {
        id: "faq-2",
        question: "How do I choose the correct size?",
        answer: "Our garments follow standard US menswear and unisex sizing with relaxed, classic fits. Specific size options (S through 3XL) and color swatches are available on each product page.",
        linkHref: "/products",
        linkLabel: "View Product Categories",
      },
      {
        id: "faq-3",
        question: "Are prices listed in US Dollars?",
        answer: "Yes, all prices on FabbyStitch.com are listed in USD ($). Direct workshop pricing applies across both retail catalog purchases and bulk enterprise orders.",
      },
    ],
  },
  {
    id: "custom-embroidery",
    category: "Custom Apparel & Embroidery",
    items: [
      {
        id: "faq-4",
        question: "What customization techniques do you provide for corporate & team orders?",
        answer: "Our New York studio specializes in 3D raised puff embroidery, flat direct embroidery, high-density plastisol screen printing, custom woven neck labels, and direct-to-film (DTF) heat transfer printing.",
        linkHref: "/services",
        linkLabel: "Explore Workshop Services",
      },
      {
        id: "faq-5",
        question: "Is there a minimum order quantity (MOQ) for custom apparel?",
        answer: "We offer flexible order quantities with direct workshop pricing. Whether you need a small sample run or a 500+ unit bulk corporate order, our New York studio handles projects of all sizes.",
        linkHref: "/custom-order",
        linkLabel: "Request Custom Quote",
      },
      {
        id: "faq-6",
        question: "How do I submit my logo or artwork for a custom order?",
        answer: "You can attach vector artwork (PNG, JPG, PDF, AI, EPS, PSD, SVG) directly through our Custom Order Page or email your files to info@fabbystitch.com along with quantity and garment requirements.",
        linkHref: "/custom-order",
        linkLabel: "Upload Artwork File",
      },
    ],
  },
  {
    id: "shipping-delivery",
    category: "Shipping & Fulfillment",
    items: [
      {
        id: "faq-7",
        question: "Where is Fabby Stitch located and where do orders ship from?",
        answer: "Fabby Stitch operates out of Bay Shore, New York (60 Corbin Ave, Unit 60-I, Bay Shore, NY 11706). All garments are quality inspected and dispatched directly from our NY studio.",
        linkHref: "/contact",
        linkLabel: "View Studio Address",
      },
      {
        id: "faq-8",
        question: "How long does order processing and shipping take?",
        answer: "Standard retail catalog orders are processed within 1–3 business days. Lead times for custom embroidery and screen printing vary depending on batch size and artwork approval.",
      },
      {
        id: "faq-9",
        question: "Do you provide tracking information once shipped?",
        answer: "Yes. As soon as your order leaves our Bay Shore studio, you will receive an automated shipping email containing tracking details.",
      },
    ],
  },
  {
    id: "support-policies",
    category: "Customer Support & Policies",
    items: [
      {
        id: "faq-10",
        question: "What is your policy for returns and exchanges?",
        answer: "We stand behind our Priority on Quality promise. For details regarding returns and exchange eligibility, please review our official Refund & Returns policy.",
        linkHref: "https://fabbystitch.com/refund_returns/",
        linkLabel: "Read Return Policy",
      },
      {
        id: "faq-11",
        question: "How can I contact Fabby Stitch customer support?",
        answer: "You can reach our team via email at info@fabbystitch.com, by phone at (631) 481-0010 (Mon–Fri 9am–6pm EST), or through our website contact form.",
        linkHref: "/contact",
        linkLabel: "Go to Contact Page",
      },
    ],
  },
];

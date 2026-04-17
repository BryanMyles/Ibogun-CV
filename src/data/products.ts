export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  // FEATURED ITEMS (Will show on homepage)
  {
    id: "l4",
    name: "Dell Latitude 5420",
    description: "Business-class durable laptop for intensive academic workloads.",
    price: 450000,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "h2",
    name: "Hisense Medium Fridge (150L)",
    description: "Compact dorm-friendly refrigerator with superb cooling efficiency.",
    price: 145000,
    category: "Home Electronics",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "e3",
    name: "Heavy Duty Safety Boots",
    description: "Iron-toe reinforced boots for engineering workshops and field work.",
    price: 25000,
    category: "Engineering Tools & PPE",
    image: "https://images.unsplash.com/photo-1581092160607-ee22731c34a2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "s2",
    name: "Samsung Galaxy S23 Ultra",
    description: "Flagship mobile powerhouse with stylus integration and insane camera.",
    price: 950000,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1678911820864-eab87d4bdcd7?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "a3",
    name: "Sony WH-1000XM5",
    description: "Industry-leading wireless noise cancellation headphones.",
    price: 320000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "h4",
    name: "Firman 3.5KVA Generator",
    description: "Reliable petrol generator to keep your devices running during outages.",
    price: 280000,
    category: "Home Electronics",
    image: "https://images.unsplash.com/photo-1626806787461-102bc1bba451?q=80&w=600&auto=format&fit=crop"
  },

  // LAPTOPS (Total 10)
  {
    id: "l1",
    name: "Dell XPS 15",
    description: "Premium ultrabook with dedicated graphics for design students.",
    price: 1500000,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "l2",
    name: "CYBER-L00P LAPTOP // RTX-5090",
    description: "High performance quantum processing rig. Student discount applied.",
    price: 850000,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "l3",
    name: "MacBook Pro M2 14-inch",
    description: "Professional grade laptop for coding, design, and heavy rendering.",
    price: 1850000,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "l5",
    name: "Lenovo ThinkPad T14",
    description: "Rugged and durable build perfect for surviving campus life.",
    price: 500000,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1588872657578-7df11b472e39?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "l6",
    name: "HP Pavilion x360",
    description: "Versatile touchscreen 2-in-1 laptop for notes and presentations.",
    price: 350000,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1531297122507-ebb890d9cd78?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "l7",
    name: "Asus ROG Strix G15",
    description: "High frame rate gaming laptop. Good for 3D modeling as well.",
    price: 950000,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "l8",
    name: "Acer Swift 3",
    description: "Lightweight and ultra-thin laptop for on-the-go classes.",
    price: 280000,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "l9",
    name: "Apple MacBook Air M1",
    description: "The ultimate student choice for battery life and smooth performance.",
    price: 850000,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "l10",
    name: "Dell Inspiron 15",
    description: "Affordable everyday laptop for assignments and light browsing.",
    price: 250000,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?q=80&w=600&auto=format&fit=crop"
  },

  // HOME ELECTRONICS (Total 10)
  {
    id: "h1",
    name: "Plasma Screen TV 4K",
    description: "Visual cortex stimulator. Perfect for dorm entertainment.",
    price: 180000,
    category: "Home Electronics",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "h3",
    name: "Hisense 1.5HP Split AC",
    description: "Beat the heat with this fast-cooling split air conditioner array.",
    price: 215000,
    category: "Home Electronics",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "h5",
    name: "Dell UltraSharp 27 4K",
    description: "High-resolution monitor for color-accurate work and clear text.",
    price: 450000,
    category: "Home Electronics",
    image: "https://images.unsplash.com/photo-1527443154391-420792ce66ba?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "h6",
    name: "LG Washing Machine (7kg)",
    description: "Front load washing machine. Energy efficient campus essential.",
    price: 320000,
    category: "Home Electronics",
    image: "https://images.unsplash.com/photo-1626806787461-102bc1bba451?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "h7",
    name: "Samsung 20L Microwave",
    description: "Fast heating microwave perfect for warming pre-cooked meals.",
    price: 65000,
    category: "Home Electronics",
    image: "https://images.unsplash.com/photo-1585659722329-a1b9b2b524cb?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "h8",
    name: "18-inch Rechargeable Fan",
    description: "Standing fan that guarantees breeze even during blackouts.",
    price: 45000,
    category: "Home Electronics",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "h9",
    name: "Philips Electric Kettle",
    description: "1.7L stainless steel kettle. Boils water in under two minutes.",
    price: 15000,
    category: "Home Electronics",
    image: "https://images.unsplash.com/photo-1585659722329-a1b9b2b524cb?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "h10",
    name: "Binatone Heavy Duty Blender",
    description: "Crush anything. Comes with a dry mill for grains.",
    price: 35000,
    category: "Home Electronics",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=600&auto=format&fit=crop"
  },

  // ENGINEERING TOOLS & PPE (Total 10)
  {
    id: "e1",
    name: "CYBER-VISOR Safety Glasses",
    description: "Retinal protection unit with anti-fog capabilities. Safety first.",
    price: 15000,
    category: "Engineering Tools & PPE",
    image: "https://images.unsplash.com/photo-1588661642289-4b68e987c2fb?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "e2",
    name: "Mecha-Engineering Toolkit",
    description: "Precision tools for repairs and engineering practicals.",
    price: 75000,
    category: "Engineering Tools & PPE",
    image: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "e4",
    name: "Construction Safety Helmet",
    description: "Sturdy hard hat required for all structural field sites.",
    price: 8000,
    category: "Engineering Tools & PPE",
    image: "https://images.unsplash.com/photo-1504917595217-d4ce5eb3e212?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "e5",
    name: "Reflective Engineering Overall",
    description: "High visibility durable cotton overall for heavy workshop duties.",
    price: 12000,
    category: "Engineering Tools & PPE",
    image: "https://images.unsplash.com/photo-1541604193435-22287d10b28c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "e6",
    name: "Fluke Digital Multimeter",
    description: "Highly accurate electrical diagnostic tool for EE students.",
    price: 45000,
    category: "Engineering Tools & PPE",
    image: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "e7",
    name: "Professional Soldering Station",
    description: "Adjustable heat limits for secure microchip assembly.",
    price: 35000,
    category: "Engineering Tools & PPE",
    image: "https://images.unsplash.com/photo-1588661642289-4b68e987c2fb?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "e8",
    name: "Digital Vernier Caliper",
    description: "Micrometer precision measurement unit with LCD readout.",
    price: 15000,
    category: "Engineering Tools & PPE",
    image: "https://images.unsplash.com/photo-1504917595217-d4ce5eb3e212?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "e9",
    name: "Anti-Static Work Mat",
    description: "Grounding surface ensuring motherboard safety during repair.",
    price: 10000,
    category: "Engineering Tools & PPE",
    image: "https://images.unsplash.com/photo-1541604193435-22287d10b28c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "e10",
    name: "Bosch Power Drill Set",
    description: "Complete cordless drill kit with varied bit selections.",
    price: 65000,
    category: "Engineering Tools & PPE",
    image: "https://images.unsplash.com/photo-1581092160607-ee22731c34a2?q=80&w=600&auto=format&fit=crop"
  },

  // SMARTPHONES (Total 10)
  {
    id: "s1",
    name: "NEON-X Smartphone",
    description: "Holographic display integration. 5G mesh network compatible.",
    price: 320000,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351cb315?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "s3",
    name: "iPhone 15 Pro Max",
    description: "Titanium build. A17 Pro chip for heavy mobile tasking.",
    price: 1600000,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "s4",
    name: "iPhone 13",
    description: "Value king. Excellent camera and battery life for students.",
    price: 650000,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351cb315?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "s5",
    name: "Redmi Note 13 Pro",
    description: "High refresh rate screen at an unbeatable budget margin.",
    price: 250000,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1678911820864-eab87d4bdcd7?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "s6",
    name: "Tecno Camon 20",
    description: "Affordable photography-centric device. Huge storage.",
    price: 180000,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "s7",
    name: "Infinix Note 30",
    description: "Built for gaming and fast charging capabilities.",
    price: 160000,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351cb315?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "s8",
    name: "Samsung Galaxy A54",
    description: "Mid-range champion offering near-flagship UI fluidity.",
    price: 280000,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1678911820864-eab87d4bdcd7?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "s9",
    name: "Google Pixel 7a",
    description: "The best point-and-shoot software camera in its class.",
    price: 380000,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "s10",
    name: "Itel S23+",
    description: "Curved screen budget entry. Best for strict wallets.",
    price: 120000,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351cb315?q=80&w=600&auto=format&fit=crop"
  },

  // ACCESSORIES (Total 10)
  {
    id: "a1",
    name: "Anker 737 PowerBank 24K",
    description: "Massive capacity portable charger capable of powering laptops.",
    price: 135000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1620189507195-68309c04c4d0?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "a2",
    name: "VOID-CELL Power Bank 50K",
    description: "Never run out of energy during grid failures. Dual output.",
    price: 45000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9dc1c8?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "a4",
    name: "SYNTH-WAVE Earbuds",
    description: "Noise-cancelling earbuds for deep focus during lectures.",
    price: 25000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "a5",
    name: "Logitech MX Master 3S",
    description: "Ergonomic wireless mouse for peak productivity.",
    price: 85000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "a6",
    name: "Universal 65W Laptop Charger",
    description: "Type-C rapid PD charger, compatible with multiple brands.",
    price: 25000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1583394838236-05bc35165c0e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "a7",
    name: "RGB Laptop Cooling Pad",
    description: "Dual fan array preventing thermal throttling during intensive tasks.",
    price: 15000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1620189507195-68309c04c4d0?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "a8",
    name: "Seagate 2TB External HDD",
    description: "Physical vault for all your class backups and game files.",
    price: 65000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9dc1c8?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "a9",
    name: "Wireless Combo (KB/Mouse)",
    description: "Clear up desk clutter with this unified wireless array.",
    price: 18000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "a10",
    name: "Waterproof Laptop Backpack",
    description: "Shield your hardware against the sudden rain. Includes hidden zippers.",
    price: 20000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1583394838236-05bc35165c0e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "a11",
    name: "7-in-1 USB-C Dock",
    description: "Expand your connectivity: HDMI, USB-A limits breached.",
    price: 22000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1620189507195-68309c04c4d0?q=80&w=600&auto=format&fit=crop"
  },

  // SOLAR EQUIPMENT (Total 10)
  {
    id: "so1",
    name: "SOLAR MATRIX PANEL 300W",
    description: "Harness the sun's energy. Off-grid survival essential.",
    price: 150000,
    category: "Solar Equipment",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "so2",
    name: "Luminous 1.5kVA Inverter",
    description: "Clean sine wave power conversion module.",
    price: 180000,
    category: "Solar Equipment",
    image: "https://images.unsplash.com/photo-1611365892115-3855a9b70b55?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "so3",
    name: "Tubular Battery 220Ah",
    description: "Deep cycle high retention grid component.",
    price: 220000,
    category: "Solar Equipment",
    image: "https://images.unsplash.com/photo-1592833159057-6dd01edff33e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "so4",
    name: "MPPT Charge Controller 60A",
    description: "Maximizes solar yield and protects battery arrays.",
    price: 45000,
    category: "Solar Equipment",
    image: "https://images.unsplash.com/photo-1544648719-7e4a19ba0a6d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "so5",
    name: "All-in-One Solar Street Light",
    description: "Motion-sensing autonomous wide radius illumination.",
    price: 35000,
    category: "Solar Equipment",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "so6",
    name: "Portable Solar Gen (500W)",
    description: "Lithium ion backup. Fits perfectly in backpacks.",
    price: 95000,
    category: "Solar Equipment",
    image: "https://images.unsplash.com/photo-1611365892115-3855a9b70b55?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "so7",
    name: "Solar Water Heater System",
    description: "Eco-friendly passive thermal conversion unit.",
    price: 120000,
    category: "Solar Equipment",
    image: "https://images.unsplash.com/photo-1592833159057-6dd01edff33e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "so8",
    name: "Deep Cycle Gel Battery 100Ah",
    description: "Maintenance free, zero leak power reservoir.",
    price: 110000,
    category: "Solar Equipment",
    image: "https://images.unsplash.com/photo-1544648719-7e4a19ba0a6d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "so9",
    name: "Solar Installation Toolkit",
    description: "Crimping blocks, multimeters and spanners for setup.",
    price: 40000,
    category: "Solar Equipment",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "so10",
    name: "100M DC Solar Cable Roll",
    description: "Heavy gauge UV resistant copper line.",
    price: 30000,
    category: "Solar Equipment",
    image: "https://images.unsplash.com/photo-1611365892115-3855a9b70b55?q=80&w=600&auto=format&fit=crop"
  }
];

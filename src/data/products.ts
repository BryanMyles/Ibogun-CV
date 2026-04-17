export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "CYBER-L00P LAPTOP // RTX-5090",
    description: "High performance quantum processing rig. Student discount applied.",
    price: 850000,
    category: "Laptops",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2068&auto=format&fit=crop"
  },
  {
    id: "p2",
    name: "NEON-X SMARTPHONE",
    description: "Holographic display integration. 5G mesh network compatible.",
    price: 320000,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351cb315?q=80&w=2186&auto=format&fit=crop"
  },
  {
    id: "p3",
    name: "VOID-CELL POWER BANK 50K",
    description: "Never run out of energy during grid failures. Dual output.",
    price: 45000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9dc1c8?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "p4",
    name: "SYNTH-WAVE EARBUDS",
    description: "Direct auditory cortex link. Noise-cancelling for deep focus.",
    price: 25000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2232&auto=format&fit=crop"
  },
  {
    id: "p5",
    name: "PLASMA SCREEN TV 4K",
    description: "Visual cortex stimulator. Perfect for dorm entertainment.",
    price: 180000,
    category: "Home Electronics",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1957&auto=format&fit=crop"
  },
  {
    id: "p6",
    name: "SOLAR MATRIX PANEL",
    description: "Harness the dying star's energy. Off-grid survival essential.",
    price: 150000,
    category: "Solar Equipment",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: "p7",
    name: "MECHA-ENGINEERING TOOLKIT",
    description: "Precision tools for cybernetic repairs and engineering practicals.",
    price: 75000,
    category: "Engineering Tools & PPE",
    image: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "p8",
    name: "CYBER-VISOR PPE",
    description: "Retinal protection unit with HUD capabilities. Safety first.",
    price: 15000,
    category: "Engineering Tools & PPE",
    image: "https://images.unsplash.com/photo-1588661642289-4b68e987c2fb?q=80&w=2128&auto=format&fit=crop"
  }
];

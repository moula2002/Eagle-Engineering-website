import cskImg from '../assets/csk_head_screw.png';
import panImg from '../assets/pan_head_screw.png';
import trussImg from '../assets/truss_head_screw.png';
import frameFixingImg from '../assets/frame_fixing_screws.jpg';
import wedgeAnchorImg from '../assets/wedge_anchor.jpg';
import chipboardImg from '../assets/chipboard_screw.png';
import drywallImg from '../assets/drywall_screw.png';
import zincImg from '../assets/zinc_fastener.png';
import cuttingWheelImg from '../assets/cutting_wheel.png';
import grindingWheelImg from '../assets/grinding_wheel.png';
import fastener1 from '../assets/fastener_1.png';
import { initialProducts } from './catalogSnapshot';
import { productSuffixToImage } from '../api/api';

export const knownProductCatalog = {
  csk: {
    title: 'CSK HEAD SCREWS',
    image: cskImg,
    description: 'CSK Head Self Drilling screws are designed to be fitted without the need for a pre-drilled hole, and employs self-tapping threads enabling installation in one operation. This variant has a countersunk head with a pozi drive. The countersunk head is typically used in conjunction with a countersunk hole providing a flush, snag free fit.',
    features: [
      'Precise cutting edges to improve drill performance',
      'Easy to install, time saving, Minimizes labor'
    ],
    applications: [
      'Best Choice for fastening on windows and door',
      'Frames purpose',
      'Using in flat surface required'
    ]
  },
  pan: {
    title: 'PAN HEAD SCREWS',
    image: panImg,
    description: 'Pan head self-drilling screws are high strength and precision fasteners used for sheet metal applications. Their high hardness and strength combined with their lead threads allow for the perfect fastening of metal-to-metal. Since these are self-drilling screws, there is no necessity to drill a pilot hole. These screws are used in the exterior elements',
    features: [
      'Precise cutting edges to improve drill performance',
      'Easy to install, time saving, Minimizes labor'
    ],
    applications: [
      'Brackets',
      'HVAC, Electrical trim accessories to steel framing',
      'Residential steel frame construction'
    ]
  },
  truss: {
    title: 'TRUSS/BUTTON HEAD SCREWS',
    image: trussImg,
    description: 'Truss / Button head self-drilling screws are corrosion resistant, precision fasteners. As they are self-drilling screws, the need to drill a pilot hole is eliminated. However, its usage should be accompanied by a washer to make sure that the fastener does not move with constant usage. It also reduces the impact of surface-to-surface fastening on both the surfaces. Truss/ Button head screws are generally weaker than any other type of screws, but they are preferred in applications requiring low clearance above the head.',
    features: [
      'Non-walking point provides fast material engagement.',
      'Easy to install, time saving, Minimizes labor'
    ],
    applications: [
      'Residential steel frame Construction',
      'For using in object like Polycarbonate sheet, Shadow cover',
      'Conduit clips to steel'
    ]
  },
  frame: {
    title: 'FRAME FIXING SCREWS',
    image: frameFixingImg,
    description: 'Frame fixing screw consists of a screw with pozi head and a nylon wall plug attached with the screw which enables it for a quick and simple push through installation. The integral hammer in stop prevents the frame fixing anchor from jamming prematurely during installation. When the nail is driven in any wooden or metal structure the fixing is expanded and it is held by friction in the drill hole.',
    features: [
      'During application the screw remains in the desired position due to location groove inside the plug',
      'Designed to prevent internal damage to the plug when the screw is applied',
      'Wide screw diameter and thicker thread enhances the performance',
      'Zinc plated and yellow passivated (3-5 microns)'
    ],
    applications: [
      'A versatile and reliable fixing for attaching to brick, block, stone, masonry and concrete.',
      'Window and door frame fixing.'
    ]
  },
  wedge: {
    title: 'WEDGE ANCHORS',
    image: wedgeAnchorImg,
    description: 'A wedge anchor is a type of expansion anchor that is typically used to permanently anchor steel directly to solid concrete. It is assembled with a three-segment expansion clip and supplied complete with nut and washer. Expansion clip ensures uniform holding capacity that increases as tension is applied.',
    features: [
      'Quick and easy to install',
      'For use in cracked and non-cracked concrete',
      'For medium-high loads',
      'Wide range of lengths and diameters available: installation flexibility'
    ],
    applications: [
      'Steel construction',
      'Staircases',
      'Cable trays',
      'Road signage'
    ]
  },
  chipboard: {
    title: 'CHIPBOARD SCREWS',
    image: chipboardImg,
    description: 'Chipboard screws are self-tapping screws with thin shafts and coarse threads. They are made of carbon steel or stainless steel and then galvanized. Chipboard screws of different lengths can be used in a variety of applications. They are created to fasten low, medium and high density chipboard.',
    features: [
      'Easy to screw in',
      'High tensile strength',
      'Avoid cracking and splitting',
      'Excellent quality and high temperature treatment for resistance to snapping'
    ],
    applications: [
      'Widely used in structural steel, cabinetry, flooring and woodwork.',
      'Common length (around 4cm) chipboard screws are used to join chipboard flooring to regular wood joists.',
      'Small chipboard screws (around 1.5cm) can be used to fasten hinges to chipboard cabinetry.'
    ]
  },
  drywall: {
    title: 'DRYWALL SCREWS',
    image: drywallImg,
    description: 'Drywall Screws are self-tapping screws with a flat bugle head used for attaching plasterboard, drywall, gypsum board or sheetrock to wooden or metal studs. They are very versatile and commonly used in sheetrock, wood, plastics and particleboard applications.',
    features: [
      'Sharp points for easy to screw in and damage a little.',
      'Black phosphate coating to increase durability.',
      'Speed the drywall installation process.',
      'Precise cutting edges to improve drill performance with less effort.'
    ],
    applications: [
      'Mainly used for fastening the drywall panels to metal or wood studs.',
      'Also used for fastening iron joists and wooden products, especially suitable for walls and false ceilings.'
    ]
  },
  zinc: {
    title: 'ZINC FASTENERS',
    image: zincImg,
    description: 'Roofing screws are made of hardened carbon steel. They can be used for metal, plastic and fiberglass roofing applications. Different screw points can be used for both metal and wood structures. All the roofing screws have a sealing washer attached, which helps against water penetration.',
    features: [
      'Made of hardened carbon steel, offering strong pullout strength',
      'Sealing EPDM washers help against water penetration',
      'Anti-corrosion Zinc coating',
      'Sharp points for rapid fastening and clean engagement'
    ],
    applications: [
      'Fasten metal, plastic, and fiberglass roofing sheets to metal or wood structures',
      'Retrofit framing',
      'Residential steel frame construction'
    ]
  },
  cutting: {
    title: 'CUTTING WHEELS',
    image: cuttingWheelImg,
    description: 'The Cutting wheels / cut-off wheels offer high cutting performances on all cut-off machines. These cut-off wheels offer such a high quality level that shortening of downstream polishing operations can be conducted.',
    features: [
      'Premium aluminium oxide disc with advanced phenol resin',
      'High stability and safety when cutting',
      'Long-life durability and low vibration',
      'Cool, sharp, fast cutting with minimal product wear'
    ],
    applications: [
      'Used for cutting mild steel, nonferrous metal and stainless steel sheets, rods, tubes and profiles.'
    ]
  },
  grinding: {
    title: 'GRINDING WHEELS',
    image: grindingWheelImg,
    description: 'Grinding wheels are made of natural or synthetic abrasive minerals bonded together in a matrix to form a wheel. Innumerable grains quickly grind workpieces to beautiful finish and precise measurement.',
    features: [
      'Naturally non-loading, cool grinding action',
      'Maximum operator control and excellent surface finish',
      'Exhibits the contours of multiple wheel types with less sparks'
    ],
    applications: [
      'General grinding, cylindrical, centreless and carbide internal grinding.',
      'Cool cutting with long-lasting sharp abrasive edge.'
    ]
  }
};

export const getKnownProductInfo = (name = '') => {
  const n = name.toLowerCase().trim();
  if (n.includes('csk head') || n === 'csk') return knownProductCatalog.csk;
  if (n.includes('pan head') || n === 'pan') return knownProductCatalog.pan;
  if (n.includes('truss') || n.includes('button head')) return knownProductCatalog.truss;
  if (n.includes('frame fixing screw') || n.includes('frame fixing')) return knownProductCatalog.frame;
  if (n.includes('wedge anchor')) return knownProductCatalog.wedge;
  if (n.includes('chipboard screw') || n.includes('chipboard')) return knownProductCatalog.chipboard;
  if (n.includes('drywall screw') || n.includes('drywall')) return knownProductCatalog.drywall;
  if (n.includes('zinc fastener') || n.includes('roofing screw')) return knownProductCatalog.zinc;
  if (n.includes('cutting wheel')) return knownProductCatalog.cutting;
  if (n.includes('grinding wheel')) return knownProductCatalog.grinding;
  return null;
};

export const resolveProductImage = (product) => {
  if (!product) return '';

  // 1. Direct dynamic mainImage from product (exact match with admin panel)
  const rawImage = product.mainImage || product.image || product.imageUrl || (Array.isArray(product.gallery) && product.gallery[0]);

  if (rawImage && typeof rawImage === 'string' && rawImage.trim()) {
    const trimmed = rawImage.trim();

    // Backend uploads from admin panel (/uploads/...)
    if (trimmed.startsWith('/uploads')) {
      const baseUrl = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api', '') : 'https://eagle-engineering-server.onrender.com';
      return `${baseUrl}${trimmed}`;
    }

    // Direct dynamic base64 image, external URL, or static path
    if (trimmed.startsWith('data:') || trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('/products/')) {
      return trimmed;
    }

    return trimmed;
  }

  // 2. Only if product has no image at all, check suffix map fallback
  if (product._id) {
    const suffix = String(product._id).slice(-6).toLowerCase();
    if (productSuffixToImage[suffix]) {
      return productSuffixToImage[suffix];
    }
  }

  // 3. Fallback from initialProducts snapshot by ID or SKU if available
  const match = initialProducts.find(p =>
    (product._id && p._id === product._id) ||
    (product.sku && p.sku === product.sku)
  );

  if (match) {
    const matchImg = match.mainImage || match.image || match.imageUrl;
    if (matchImg && typeof matchImg === 'string' && matchImg.trim()) {
      const trimmed = matchImg.trim();
      if (trimmed.startsWith('/uploads')) {
        const baseUrl = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api', '') : 'https://eagle-engineering-server.onrender.com';
        return `${baseUrl}${trimmed}`;
      }
      return trimmed;
    }
  }

  return '';
};

export const parseProductContent = (product) => {
  if (!product) {
    return { description: '', features: [], applications: [] };
  }

  const known = getKnownProductInfo(product.name);

  let description = product.shortDescription || '';
  let features = [];
  let applications = [];

  if (Array.isArray(product.features) && product.features.length > 0) {
    features = product.features;
  }
  if (Array.isArray(product.applications) && product.applications.length > 0) {
    applications = product.applications;
  }

  const fullDesc = product.fullDescription || '';
  if (fullDesc && (features.length === 0 || applications.length === 0)) {
    const lines = fullDesc.split('\n').map(l => l.trim()).filter(Boolean);
    let currentSection = null;
    const descLines = [];

    for (const line of lines) {
      const upper = line.toUpperCase();
      if (upper === 'FEATURES' || upper === 'FEATURES:') {
        currentSection = 'features';
      } else if (upper === 'APPLICATIONS' || upper === 'APPLICATIONS:') {
        currentSection = 'applications';
      } else if (upper === 'DESCRIPTION' || upper === 'DESCRIPTION:') {
        currentSection = 'description';
      } else {
        if (currentSection === 'features') {
          features.push(line.replace(/^[-•*]\s*/, ''));
        } else if (currentSection === 'applications') {
          applications.push(line.replace(/^[-•*]\s*/, ''));
        } else if (!currentSection || currentSection === 'description') {
          descLines.push(line);
        }
      }
    }

    if (!description && descLines.length > 0) {
      description = descLines.join(' ');
    }
  }

  // If still empty, use known catalog data
  if (!description && known?.description) {
    description = known.description;
  }
  if (features.length === 0 && known?.features?.length > 0) {
    features = known.features;
  }
  if (applications.length === 0 && known?.applications?.length > 0) {
    applications = known.applications;
  }

  // Smart industrial defaults if completely absent
  if (!description) {
    description = 'High precision engineering fasteners and components manufactured to stringent international quality standards for superior durability, optimum pull-out strength, and reliable industrial performance.';
  }
  if (features.length === 0) {
    features = [
      'High-grade precision engineering with strict quality control',
      'Enhanced surface treatment for superior corrosion resistance',
      'Engineered for quick, hassle-free installation and reduced labor'
    ];
  }
  if (applications.length === 0) {
    applications = [
      'Industrial structural assembly and construction fabrication',
      'Suitable for metal-to-metal, wooden framing, and general building installations',
      'Engineered for high stress and heavy load applications'
    ];
  }

  return { description, features, applications };
};

export const getFallbackProduct = (idOrSlug = '') => {
  if (!idOrSlug) return null;
  const s = String(idOrSlug).toLowerCase().trim();

  // 1. Direct match in dynamic localStorage cache first
  try {
    const cached = localStorage.getItem('eagle_cached_products');
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Array.isArray(parsed)) {
        const cachedMatch = parsed.find(p => p._id === idOrSlug || p.sku === idOrSlug);
        if (cachedMatch) {
          return {
            ...cachedMatch,
            mainImage: resolveProductImage(cachedMatch)
          };
        }
      }
    }
  } catch (e) {}

  // 2. Direct match by ID or SKU in initialProducts
  const exactMatch = initialProducts.find(p => p._id === idOrSlug || p.sku === idOrSlug);
  if (exactMatch) {
    return {
      ...exactMatch,
      mainImage: resolveProductImage(exactMatch)
    };
  }

  // 3. Known MongoDB IDs and slugs
  if (s === '6ac794d75e1e58a06dec9d97' || s.includes('csk')) {
    return {
      _id: '6ac794d75e1e58a06dec9d97',
      name: knownProductCatalog.csk.title,
      shortDescription: knownProductCatalog.csk.description,
      features: knownProductCatalog.csk.features,
      applications: knownProductCatalog.csk.applications,
      mainImage: knownProductCatalog.csk.image,
      category: { name: 'CSK-Head-Screws' }
    };
  }
  if (s === '6aca0059e751aa9cd10a6224' || s.includes('pan')) {
    return {
      _id: '6aca0059e751aa9cd10a6224',
      name: knownProductCatalog.pan.title,
      shortDescription: knownProductCatalog.pan.description,
      features: knownProductCatalog.pan.features,
      applications: knownProductCatalog.pan.applications,
      mainImage: knownProductCatalog.pan.image,
      category: { name: 'Pan Head Screws' }
    };
  }
  // 2. Name match in initialProducts
  const nameMatch = initialProducts.find(p => 
    p.name.toLowerCase().trim() === s || 
    p.name.toLowerCase().replace(/[^a-z0-9]/g, '-') === s ||
    p.name.toLowerCase().includes(s)
  );
  if (nameMatch) {
    return {
      ...nameMatch,
      mainImage: resolveProductImage(nameMatch)
    };
  }

  // 3. Known product catalog fallback by exact key or full title
  for (const key of Object.keys(knownProductCatalog)) {
    const item = knownProductCatalog[key];
    if (s === key || s === item.title.toLowerCase() || (s.length > 8 && s.includes(item.title.toLowerCase()))) {
      return {
        _id: idOrSlug,
        name: item.title,
        shortDescription: item.description,
        features: item.features,
        applications: item.applications,
        mainImage: item.image,
        category: { name: 'Fasteners' }
      };
    }
  }

  return null;
};

export const defaultProductList = initialProducts;




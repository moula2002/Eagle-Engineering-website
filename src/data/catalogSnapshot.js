export const initialCategories = [
  {
    "_id": "6ac78e2b5e1e58a06dec9b5b",
    "name": "Roofing screws",
    "description": "",
    "image": "",
    "status": "Active"
  },
  {
    "_id": "6ac7947e5e1e58a06dec9d7d",
    "name": "CSK-Head-Screws",
    "description": "",
    "image": "",
    "status": "Active"
  },
  {
    "_id": "6ac9ff5be751aa9cd10a620a",
    "name": "Pan Head Screws",
    "description": "",
    "image": "",
    "status": "Active"
  },
  {
    "_id": "6aca023ae751aa9cd10a625a",
    "name": "Truss Head Screw",
    "description": "",
    "image": "",
    "status": "Active"
  },
  {
    "_id": "6aca174d93039285f51a5b50",
    "name": "Frame Fixing Screws",
    "description": "",
    "image": "",
    "status": "Active"
  },
  {
    "_id": "6aca190593039285f51a5b85",
    "name": "Wedge Anchor",
    "description": "",
    "image": "",
    "status": "Active"
  },
  {
    "_id": "6aca1a0493039285f51a5bc1",
    "name": "Chipboard screws",
    "description": "",
    "image": "",
    "status": "Active"
  },
  {
    "_id": "6aca1acb93039285f51a5bf6",
    "name": "Drywall screws",
    "description": "",
    "image": "",
    "status": "Active"
  },
  {
    "_id": "6aca1b7d93039285f51a5c27",
    "name": "Abrasives",
    "description": "",
    "image": "",
    "status": "Active"
  },
  {
    "_id": "6aca1e1f93039285f51a5cad",
    "name": "Accessories",
    "description": "",
    "image": "",
    "status": "Active"
  },
  {
    "_id": "6aca235a93039285f51a5dc1",
    "name": "UPVC Hardware",
    "description": "",
    "image": "",
    "status": "Active"
  },
  {
    "_id": "6aca329f93039285f51a5f8a",
    "name": "Roller",
    "description": "",
    "image": "",
    "status": "Active"
  }
];

export const initialSubCategories = [
  {
    "_id": "6ac78fbf5e1e58a06dec9bab",
    "name": "Zinc fasteners",
    "category": {
      "_id": "6ac78e2b5e1e58a06dec9b5b",
      "name": "Roofing screws"
    },
    "description": "",
    "image": "",
    "status": "Active"
  },
  {
    "_id": "6aca1bbe93039285f51a5c43",
    "name": "Cutting wheels",
    "category": {
      "_id": "6aca1b7d93039285f51a5c27",
      "name": "Abrasives"
    },
    "description": "",
    "image": "",
    "status": "Active"
  },
  {
    "_id": "6aca1d1b93039285f51a5c81",
    "name": "GRINDING WHEELS",
    "category": {
      "_id": "6aca1b7d93039285f51a5c27",
      "name": "Abrasives"
    },
    "description": "",
    "image": "",
    "status": "Active"
  }
];

export const initialProducts = [
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6ac78fe55e1e58a06dec9bb8",
    "name": "ZINC FASTENERS",
    "sku": "1",
    "category": {
      "_id": "6ac78e2b5e1e58a06dec9b5b",
      "name": "Roofing screws"
    },
    "subCategory": {
      "_id": "6ac78fbf5e1e58a06dec9bab",
      "name": "Zinc fasteners"
    },
    "brand": "ZINC FASTENERS",
    "shortDescription": "Roofing screws are made of hardened carbon steel. They can be used for metal, plastic and fiberglass roofing applications. Different screw points can be used for both metal and wood structures. All the roofing screws must have a sealing washer attached, which helps against water penetration. This is the most obvious character of them.",
    "fullDescription": "FEATURES\nMade of hardened carbon steel, the zinc screws offer strong pullout strength to hold the roofing sheets\nSealing EPDM washers help against water penetration.\nCommonly with corrosion Zinc coating.\nDifferent drill points for different applications.\nSharp points for easy to screw in and damage a little.\nDrill points for screw in hard metal structure.\nAPPLICATIONS\nCommonly used to fasten metal, plastic, and fiberglass roofing sheets to metal or wood structures\nRetrofit Framing.\nResidential steel Frame Construction.",
    "mainImage": "/products/zinc_fasteners_ec9bb8.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-08T12:43:17.089Z",
    "updatedAt": "2026-10-10T09:07:59.279Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6ac794d75e1e58a06dec9d97",
    "name": "CSK HEAD SCREWS",
    "sku": "2",
    "category": {
      "_id": "6ac7947e5e1e58a06dec9d7d",
      "name": "CSK-Head-Screws"
    },
    "subCategory": null,
    "brand": "CSK HEAD SCREWS",
    "shortDescription": "CSK Head Self Drilling screws are designed to be fitted without the need for a pre-drilled hole, and employs self-tapping threads enabling installation in one operation. This variant has a countersunk head with a pozi drive. The countersunk head is typically used in conjunction with a countersunk hole providing a flush, snag free fit.",
    "fullDescription": "FEATURES\nPrecise cutting edges to improve drill performance\nEasy to install, time saving, Minimizes labor\nAPPLICATIONS\nBest Choice for fastening on windows and door\nFrames purpose\nUsing in flat surface required",
    "mainImage": "/products/csk_head_screws_ec9d97.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-08T13:04:23.920Z",
    "updatedAt": "2026-10-08T13:04:23.920Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca0059e751aa9cd10a6224",
    "name": "PAN HEAD SCREWS",
    "sku": "3",
    "category": {
      "_id": "6ac9ff5be751aa9cd10a620a",
      "name": "Pan Head Screws"
    },
    "subCategory": null,
    "brand": "PAN HEAD SCREWS",
    "shortDescription": "Pan head self-drilling screws are high strength and precision fasteners used for sheet metal applications. Their high hardness and strength combined with their lead threads allow for the perfect fastening of metal-to-metal. Since these are self-drilling screws, there is no necessity to drill a pilot hole. These screws are used in the exterior elements",
    "fullDescription": "FEATURES\nPrecise cutting edges to improve drill performance\nEasy to install, time saving, Minimizes labor\nAPPLICATIONS\nBrackets\nHVAC, Electrical trim accessories to steel framing\nResidential steel frame construction",
    "mainImage": "/products/pan_head_screws_0a6224.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T09:07:37.824Z",
    "updatedAt": "2026-10-10T09:07:37.824Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca02e5e751aa9cd10a6277",
    "name": "TRUSS/BUTTON HEAD SCREWS",
    "sku": "4",
    "category": {
      "_id": "6aca023ae751aa9cd10a625a",
      "name": "Truss Head Screw"
    },
    "subCategory": null,
    "brand": "TRUSS/BUTTON HEAD SCREWS",
    "shortDescription": "Truss / Button head self-drilling screws are corrosion resistant, precision fasteners. As they are self-drilling screws, the need to drill a pilot hole is eliminated. However, its usage should be accompanied by a washer to make sure that the fastener does not move with constant usage. It also reduces the impact of surface-to-surface fastening on both the surfaces. Truss/ Button head screws are generally weaker than any other type of screws, but they are preferred in applications requiring low clearance above the head. They can also be modified to reduce the clearance even further, while also increasing the surface of bearing.",
    "fullDescription": "FEATURES\nNon-walking point provides fast material engagement.\nEasy to install, time saving, Minimizes labor\nAPPLICATIONS\nResidential steel frame Construction\nFor using in object like Polycarbonate sheet, Shadow cover\nConduit clips to steel",
    "mainImage": "/products/truss_button_head_screws_0a6277.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T09:18:29.583Z",
    "updatedAt": "2026-10-10T09:18:29.583Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca180793039285f51a5b61",
    "name": "FRAME FIXING SCREWS",
    "sku": "5",
    "category": {
      "_id": "6aca174d93039285f51a5b50",
      "name": "Frame Fixing Screws"
    },
    "subCategory": null,
    "brand": "FRAME FIXING SCREWS",
    "shortDescription": "Frame fixing screw consists of a screw with pozi head and a nylon wall plug attached with the screw which enables it for a quick and simple push through installation. The integral hammer in stop prevents the frame fixing anchor from jamming prematurely during installation. When the nail is driven in any wooden or metal structure the fixing is expanded and it is held by friction in the drill hole.",
    "fullDescription": "FEATURES\nDuring application the remains in the desired position due to the location groove inside the plug\nDesigned to prevent internal damage to the plug when the screw is applied\nWide screw diameter and thicker thread enhances the performance\nZinc plated and yellow passivated (3-5 microns)\nAPPLICATIONS\nA versatile and reliable fixing for attaching to brick, block, stone, masonry and concrete.\nWindow and door frame fixing.\nINSTALLATION",
    "mainImage": "/products/frame_fixing_screws_1a5b61.jpg",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T10:48:39.660Z",
    "updatedAt": "2026-10-10T10:48:39.660Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca198093039285f51a5b9d",
    "name": "WEDGE ANCHORS",
    "sku": "6",
    "category": {
      "_id": "6aca190593039285f51a5b85",
      "name": "Wedge Anchor"
    },
    "subCategory": null,
    "brand": "WEDGE ANCHORS",
    "shortDescription": "A wedge anchor is a type of expansion anchor that’s typically used to permanently anchor steel directly to solid concrete. It is assembled with a three-segment expansion clip and supplied complete with nut and washer. Expansion clip ensures uniform holding capacity that increases as tension is applied. The threaded stud version is available in six diameters and multiple lengths. Threaded studs are set by tightening the nut. Wedge anchors are best suited to static applications. If a mechanical anchor fails, it is usually in the form of pulling out a wedge of concrete, and for this reason, proper design looks at the depth of embedment and ensures that the bolts are not spaced too closely.",
    "fullDescription": "FEATURES\nQuick and easy to install\nFor use in cracked and non-cracked concrete\nFor medium-high loads\nWide range of lengths and diameters available: installation flexibility\nAPPLICATIONS\nSteel construction\nStaircases\nCable trays\nRoad signage\nINSTALLATION",
    "mainImage": "/products/wedge_anchors_1a5b9d.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T10:54:56.656Z",
    "updatedAt": "2026-10-10T10:54:56.656Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca1a4b93039285f51a5bd2",
    "name": "CHIPBOARD SCREWS",
    "sku": "7",
    "category": {
      "_id": "6aca1a0493039285f51a5bc1",
      "name": "Chipboard screws"
    },
    "subCategory": null,
    "brand": "CHIPBOARD SCREWS",
    "shortDescription": "Chipboard screws are self-tapping screws with thin shafts and coarse threads. They are made of carbon steel or stainless steel and then galvanized. Chipboard screws of different lengths can be used in a variety of applications. They are created to fasten low, medium and high density chipboard. Many chipboard screws are self-tapping, so there is no need to drill holes in advance.",
    "fullDescription": "FEATURES\nEasy to screw in\nHigh tensile strength\nAvoid cracking and splitting\nExcellent quality and high temperature treatment for resistance to snapping\nAPPLICATIONS\nBe widely used in structural steel industry, metal building industry, mechanical equipment industry, automobile industry, etc. Ideal for chipboards and wood, they are often used for cabinetry and for flooring.\nCommon length (around 4cm) chipboard screws are often used to join chipboard flooring to regular wood joists.\nSmall chipboard screws (around 1.5cm) can be used to fasten hinges to chipboard cabinetry.\nLong (around 13cm) chipboard screws can be used to fasten chipboard to chipboard when making cabinets.",
    "mainImage": "/products/chipboard_screws_1a5bd2.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T10:58:19.458Z",
    "updatedAt": "2026-10-10T11:02:30.340Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca1b1793039285f51a5c07",
    "name": "DRYWALL SCREWS",
    "sku": "8",
    "category": {
      "_id": "6aca1acb93039285f51a5bf6",
      "name": "Drywall screws"
    },
    "subCategory": null,
    "brand": "DRYWALL SCREWS",
    "shortDescription": "Drywall Screws are self-tapping screws with a flat bugle head used for attaching plasterboard, drywall, gypsum board or sheetrock to wooden or metal studs. They are very versatile and commonly used in sheetrock, wood, plastics and particleboard applications. Sharp point Phillips Drywall screws feature a twin fast, self-tapping thread and an extra sharp point for fast and easy installation. Sharp Point Drywall Screws are commonly used for attaching sheet rock to wooden studs or metal studs 25 - 20 gauge thick. Longer sizes feature a shoulder beneath the head of the screw and are ideal for insulation or multiple layers of sheet rock.",
    "fullDescription": "FEATURES\nSharp points for easy to screw in and damage a little.\nBlack phosphate coating to increase durability.\nSpeed the drywall installation process.\nPrecise cutting edges to improve drill performance with less effort.\nAPPLICATIONS\nMainly used for fastening the drywall panels to metal or wood studs.\nAlso used for fastening iron joists and wooden products, especially suitable for walls, ceilings, false ceiling and partitions.\n",
    "mainImage": "/products/drywall_screws_1a5c07.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T11:01:43.445Z",
    "updatedAt": "2026-10-10T11:02:17.085Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca1c0d93039285f51a5c55",
    "name": "CUTTING WHEELS",
    "sku": "9",
    "category": {
      "_id": "6aca1b7d93039285f51a5c27",
      "name": "Abrasives"
    },
    "subCategory": {
      "_id": "6aca1bbe93039285f51a5c43",
      "name": "Cutting wheels"
    },
    "brand": "CUTTING WHEELS",
    "shortDescription": "The Cutting wheels / cut-off wheels are generally found in Green, Red and Black versions. According to a well-defined specification, these wheels are elaborated which offers high cutting performances. It is generally usable on all cut-off machines. These cut-off wheels offer such a high quality level that shortening of downstream polishing operations can be conducted. The constancy of the obtained results is ensured by the controlled and rigorous manufacturing process.\n\nThe operating costs are considerably reduced as they are specifically designed for production cutting or large dimensional cutting. The grinding and cut-off wheels are developed, manufactured and tested to the highest quality standards. The standard compliant dimensional stability indicates the comprehensive quality. In addition to the high quality standards, health and safety as well as ergonomics play a prominent role.",
    "fullDescription": "FEATURES\nA premium aluminium oxide disc with advanced phenol resin copes with demanding applications with good results\nHigh stability and safety when cutting.\nLong-life durability.\nLow vibration and high stability for comfortable grinding or cutting.\nCooling, Sharp, Fast with minimal product wear.\nAPPLICATIONS\nUsed for cutting mild steel, nonferrous metal and stainless steel sheets, rods, tubes and profiles.",
    "mainImage": "/products/cutting_wheels_1a5c55.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T11:05:49.747Z",
    "updatedAt": "2026-10-10T11:05:49.747Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca1d8993039285f51a5c93",
    "name": "GRINDING WHEELS",
    "sku": "10",
    "category": {
      "_id": "6aca1b7d93039285f51a5c27",
      "name": "Abrasives"
    },
    "subCategory": {
      "_id": "6aca1d1b93039285f51a5c81",
      "name": "GRINDING WHEELS"
    },
    "brand": "GRINDING WHEELS",
    "shortDescription": "Grinding wheels are made of natural or synthetic abrasive minerals bonded together in a matrix to form a wheel. While such tools may be familiar to those with home workshops, the general public may not be aware of them because most have been developed and used by the manufacturing industry. A grinding wheel consists of three elements: abrasive grain, bond and pore. As the wheel turns in high speed, its innumerable grains quickly grind work piece to beautiful finish and precise measurement. For manufacturers, grinding wheels provide an efficient way to shape and finish metals and other materials. Abrasives are often the only way to create parts with precision dimensions and high-quality surface finishes.\n\nGrinding wheels are available in a wide variety of sizes, ranging from less than .25 inch to several feet in diameter. They are also available in numerous shapes: flat disks, cylinders, cups, cones, and wheels with a profile cut into the periphery are just a few. Although many techniques, such as bonding a layer of abrasives to t-he surface of a metal wheel, are used to make grinding wheels, this discussion is limited to wheels composed of vitrified materials contained in a bonding matrix.",
    "fullDescription": "FEATURES\nNaturally non-loading, no lubricants in wheel\nCool grinding action\nMaximum operator control\nExcellent surface finish\nExhibits the contours of multiple wheel types\nLess sparks from wheel\nAPPLICATIONS\nIt is used for general grinding, heavy duty silicon friable than snagging, cylindrical, centreless and carbide Aluminium oxide internal grinding.\nVery cool cutting, retains better form and a sharp Aluminium alloyed with Brown cutting edge for a longer time.",
    "mainImage": "/products/grinding_wheels_1a5c93.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T11:12:09.063Z",
    "updatedAt": "2026-10-10T11:12:09.063Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca1fc093039285f51a5d2b",
    "name": "Silicon Sealent",
    "sku": "11",
    "category": {
      "_id": "6aca1e1f93039285f51a5cad",
      "name": "Accessories"
    },
    "subCategory": null,
    "brand": "Silicon Sealent",
    "shortDescription": "",
    "fullDescription": "",
    "mainImage": "/products/silicon_sealent_1a5d2b.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T11:21:36.408Z",
    "updatedAt": "2026-10-10T11:21:36.408Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca202693039285f51a5d50",
    "name": "Mastic Butyl Tape",
    "sku": "12",
    "category": {
      "_id": "6aca1e1f93039285f51a5cad",
      "name": "Accessories"
    },
    "subCategory": null,
    "brand": "Mastic Butyl Tape",
    "shortDescription": "",
    "fullDescription": "",
    "mainImage": "/products/mastic_butyl_tape_1a5d50.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T11:23:18.452Z",
    "updatedAt": "2026-10-10T11:23:18.452Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca206d93039285f51a5d6f",
    "name": "Mesh Roll",
    "sku": "13",
    "category": {
      "_id": "6aca1e1f93039285f51a5cad",
      "name": "Accessories"
    },
    "subCategory": null,
    "brand": "Mesh Roll",
    "shortDescription": "",
    "fullDescription": "",
    "mainImage": "/products/mesh_roll_1a5d6f.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T11:24:29.091Z",
    "updatedAt": "2026-10-10T11:24:29.091Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca20f093039285f51a5d8e",
    "name": "Socket",
    "sku": "14",
    "category": {
      "_id": "6aca1e1f93039285f51a5cad",
      "name": "Accessories"
    },
    "subCategory": null,
    "brand": "Socket",
    "shortDescription": "",
    "fullDescription": "",
    "mainImage": "/products/socket_1a5d8e.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T11:26:40.855Z",
    "updatedAt": "2026-10-10T11:26:40.855Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca212693039285f51a5d95",
    "name": "Star Bit",
    "sku": "15",
    "category": {
      "_id": "6aca1e1f93039285f51a5cad",
      "name": "Accessories"
    },
    "subCategory": null,
    "brand": "Star Bit",
    "shortDescription": "",
    "fullDescription": "",
    "mainImage": "/products/star_bit_1a5d95.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T11:27:34.669Z",
    "updatedAt": "2026-10-10T11:27:34.669Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca246093039285f51a5de0",
    "name": "Fasteners Screws whole cap",
    "sku": "16",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "SCREW CAP",
    "shortDescription": "Specification (in mm) - 13 mm drill bit\nColour - WHITE / BLACK/ BROWN\nPacking Qty - 1000",
    "fullDescription": "",
    "mainImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXcAAAEACAYAAABI5zaHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAEU/SURBVHhe7b35s2TJdd/3ybxL7e+9fr1PT88CDAbAgNgEkhIpUiItR4ikSNrhRRH2Dw7/YDns/wL/iRwOh0TSYQmSSRCUuEgkJQcJYiEWYoZYZjCY6b3fUuvdMtM/nLz16lXv6/RUn0/H7Vd1a7vrN0+ePOekCSEEFEVRlI0hhPAlu75SURRF+fCj4q4oirKBqLgriqJsICruiqIoG4iKu6Ioygai4q4oirKBqLgriqJsICruiqIoG4iKu6Ioygai4q4oirKBqLgriqJsIOZetWWqqmI8HmOttgOKoijPGru7u+urCCF86b7EHSDP8/WXFEVRlA+Qvb29O4q7muOKoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCvPPd57COtrFeXDjYq78txjjAGzvlZRPtyouCvPNSEEjDFivSvKBqHirjzXGKMmu7KZqLgrCmCt3grKZqFXtKIoygai4q4oirKBqLgriqJsICruiqIoG4iKu6Ioygai4q4oirKBqLgriqJsICruiqIoG4iKu6Ioygai4q4oirKBqLgriqJsICruiqIoG4iKu6Ioygai4q4oirKBqLgriqJsICruiqIoG4iKu6Ioygai4q4oirKBqLgriqJsICruiqIoG4iKu6Ioygai4q4oirKBqLgriqJsICruiqIoG4iKu6Ioygai4q4oirKBqLgriqJsICruiqIozwAhhPVVj4SKu6IoygdMWZaUZYl3fv2lh0bFXVEU5QPGGIM1Fsz6Kw+PiruiKMoHTJ7n5J0cax+fJD++b1IURVGeGVTcFUVRNhAVd0VRlA1ExV1RFGUDUXFXFEXZQFTcFUVRNhAV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r9zNglSeHCbeaLdbnh/hbx02z67xsWmouG8wH37hWN2DD//eKMrTRMX9Q8mqe+POi8Fg15Znm1v34Xm0cRXlcaDiriiKsoGouCuKomwgKu4fWtbdF/e7KMoHwdp1uKz2eK9FeVhU3BVFebpowMxTQcVdURRlA1FxVxTl6aLelqeCiruiKE8fFfgnjoq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiIq7oijKBqLiriiKsoGouCuKomwgKu6KoigbiPHe//P1las0TQNAmqbrLymKoigfIPv7+5w4cWJ9NcB/+v8BaWak3Io/888AAAAASUVORK5CYII=",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T11:41:20.292Z",
    "updatedAt": "2026-10-15T13:25:55.447Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca24f393039285f51a5dfd",
    "name": "Fasteners screws cut cap",
    "sku": "17",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "SCREW CAP",
    "shortDescription": "Specification (in mm) -Cut Type\nColour - WHITE / BLACK/ BROWN\nPacking Qty - 1000",
    "fullDescription": "",
    "mainImage": "data:image/png;base64,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",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T11:43:47.370Z",
    "updatedAt": "2026-10-15T13:32:51.876Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca258793039285f51a5e3b",
    "name": "GLASS FRAME PACKER",
    "sku": "18",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "GLASS FRAME PACKER",
    "shortDescription": "Specification (in mm) -\nL=60 or 72\nW= 11\nT=3 or 5\nColour - GREY/BLACK\nPacking Qty - 500",
    "fullDescription": "",
    "mainImage": "/products/glass_frame_packer_1a5e66.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T11:46:15.643Z",
    "updatedAt": "2026-10-10T11:46:15.643Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca265d93039285f51a5e66",
    "name": "GLASS FRAME PACKER",
    "sku": "19",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "GLASS FRAME PACKER",
    "shortDescription": "Specification (in mm) -\nL=60\nW= 11\nT= 3 or 5\nColour - GREY/BLACK\nPacking Qty - 500",
    "fullDescription": "",
    "mainImage": "data:image/png;base64,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",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T11:49:49.560Z",
    "updatedAt": "2026-10-10T11:49:49.560Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca26d193039285f51a5e6d",
    "name": "CASEMENT PACKER",
    "sku": "20",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "CASEMENT PACKER",
    "shortDescription": "Specification (in mm) -\nL=62\nW= 24\nT= 1.5 OR 3 or 5\nColour - WHITE\nPacking Qty - 500",
    "fullDescription": "",
    "mainImage": "/products/casement_packer_1a5e6d.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T11:51:45.294Z",
    "updatedAt": "2026-10-10T11:51:45.294Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca277593039285f51a5e74",
    "name": "2  PROFILE PACKER",
    "sku": "21",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "2  PROFILE PACKER",
    "shortDescription": "Specification (in mm) -\nL= 55\nT= 1.5 or 3 or 5\nColour - WHITE\nPacking Qty - 500",
    "fullDescription": "",
    "mainImage": "/products/2_profile_packer_1a5e74.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T11:54:29.812Z",
    "updatedAt": "2026-10-10T11:54:29.812Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca27c193039285f51a5e7b",
    "name": "2.5  PROFILE PACKER",
    "sku": "22",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "2.5  PROFILE PACKER",
    "shortDescription": "Specification (in mm) -\nL= 77\nT= 1.5 or 3 or 5\nColour - WHITE\nPacking Qty - 500",
    "fullDescription": "",
    "mainImage": "/products/2_5_profile_packer_1a5e7b.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T11:55:45.708Z",
    "updatedAt": "2026-10-10T11:55:45.708Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca282a93039285f51a5e82",
    "name": "3 PROFILE PACKER",
    "sku": "23",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "3 PROFILE PACKER",
    "shortDescription": "Specification (in mm) -\nL= 90\nT= 1.5 or 3 or 5\nColour - WHITE\nPacking Qty - 500",
    "fullDescription": "",
    "mainImage": "/products/3_profile_packer_1a5e82.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T11:57:30.275Z",
    "updatedAt": "2026-10-10T11:57:30.275Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca289093039285f51a5e95",
    "name": "EPDM Bump stopper",
    "sku": "24",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "BUMP STOPPER",
    "shortDescription": "Specification (in mm) -\nHigh quality epdm rubber - strong and can withstand high temperature and does not come out as it is completely locked with the plastic body.\nColour - BLACK & WHITE\nPacking Qty - 500",
    "fullDescription": "",
    "mainImage": "/products/bump_stopper_1a5ea6.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T11:59:12.084Z",
    "updatedAt": "2026-10-10T11:59:12.084Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca290693039285f51a5e9f",
    "name": "LG Type Bump Stopper",
    "sku": "25",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "BUMP STOPPER",
    "shortDescription": "Specification -\nLG Type\nColour - WHITE\nPacking Qty - 1000",
    "fullDescription": "",
    "mainImage": "data:image/png;base64,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",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:01:10.854Z",
    "updatedAt": "2026-10-10T12:01:10.854Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca297293039285f51a5ea6",
    "name": "BUMP STOPPER",
    "sku": "26",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "BUMP STOPPER",
    "shortDescription": "Specification -\nWindows and Doors\nColour - BLACK & WHITE\nPacking Qty - 100",
    "fullDescription": "",
    "mainImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWsAAAD3CAYAAADblXX0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAACUbSURBVHhe7d3LlxxXnSfw7703HplZT1VJsuSnbAM2YJ+Z7jPtGbNg07aXNCvoc7oZGHZs+EN6Fj2Lnj2HLRvWwBkaNixYzECDOaa7h7GNbOtVqmdmRsR9zOJ3b0RkqiRVSbJdYX0/PnGqKjIrMyWXvvmrX9yHCiEEEBHRmaaXTxAR0dnDsCYiGgCGNRHRAKjUs67revk2IiI6A4qi6Crr/f39xVuJiOhTl7K5rax3dnawtbW1fD8iIvoUpWxmz/qMCiHg+vXrsNYu30REjyGG9RmllIJSCs655ZuI6DHEsD7DLly4gLIsl08T0WOIYU1ENAAMayKiAWBYExENAMOaiGgAGNZERAPAsCYiGgCGNRHRADCsiYgGgGFNRDQADGsiogFgWBMRDQDDmohoABjWREQDwLAmIhoAhjUR0QAwrImIBoBhTUQ0AAxrIqIBYFjTmRNCWD5F9NhjWNOZEkKA9375NNFjj2FNZ4pSCsaY5dOfmhACK306ExjWRPcQfIBzjoFNnzqGNdE9aKOhNf+Z0KePP4VE96G1hlJq+TTRJ4phTUQ0AAxrIqIBYFgTEQ0Aw5qIaAAY1kREA8CwJiIaAIY1EdEAMKyJiAaAYU1ENAAMayKiAWBYExENAMOaiGgAGNZERAPAsCYiGgCGNRHRADCsH3MhcCcUoiFgWD/mlFJcXJ9oABjWxKAmGgCGNRHRADCsiYgGgGFNRDQADGsiogFgWBMRDQDDmohoABjWREQDwLAmIhoAhjUR0QAwrImIBoBhTUQ0AAxrIqIBYFgTEQ0Aw5pOLYQA7z2891wHm+gTwrCmB5KCmsurEn0yGNZ0akopZFkGY8zyTUT0MWFYExENAMOaiGgAGNZERAPAsCYiGgCGNT22OOyQhoRhTY8thjUNCcOaHmve++VTRGcSw5oeSyEEVtY0KAxreiwppaC1htb8J0DDwJ9UemxxqjwNCcOaiGgAGNZERAPAsCa6C15+pLOEYU1nzscySiOO/rjjsUNvZEiICf0xPD3Rw1Ih/vTu7Oxga2tr+Xaij10KUOdcu6mBc649r5SCMQZ5nt91Wda0IYJ8n4NzHgEBwUtQe+fQNJU8fi+w03KvmcmQZQZKa2RZjiwveAGSzoSUzQxreuRCCG3w1nWNo6Mp6qpG3VSwjcV0NsV0OkUIAdZa7Ozs4PDwELu3d1HVEqhN08Ba2wbwysoKXn31Vbz11lsoy7J9Hts0uHnzJg4ODuT3xOARgkcIgIKSKtl7SOz6haJZqW5ESAjyuVIKOsuQZwVW19awtrGJLMt630WfRem3q7M4lJNhTY9UCAHT6RTvvfcu3nnnHbz77ru4ceMG9vcP0DQOTW3R2KoX5AF1VcN7B+ssbGPhQ2iDVipsuV8IHnmW48LF83j99dfxne98B6urK9i5dQvXr19HU9cwxkAbDaVk95o2eKEAKCgVe37x/HI7RNogAQGqfR0IgClKTMYTrK6tYjKZIMszIEZ/95GGznuPg4MDrK+vn7nfqBjW9MjMZjP8+te/xk9/+lP86zt/xP7BHmpr4V3cozEYaUdojxDbEM45ICj44OF9gI7/QJyTahoKCB4S3gjIsgxbW1u4fPkS/vZvv4lXXvkSbu/sIDMGGgpKKyAGNQAopaGVglYKIXiYLIPuBXUK6/TR+wD4+DkUQrDwPiDV5ABQFAXW19exsXkOeZHzks9nTDij29QxrOmhee/x7rvv4oc//CF++ctf4ujwCMEHBB+glIYN0j9WyiAEBYUA74EADwSpeIEYyOkCIOKFPkA+hzxWnmUYT0bY2trAX732n/Dmm29ibW0FeZ5DByW9Zi0B3ae1lqcCJNTv8Y8xWAcbHAAJdOccQuqkOA/vArTRMCbD9vltrK9vIsvz5YehB5T29bzbdYnHFcOaHopzDj/72c/wgx/8AH/84x9hrUWmsvgPDghBwQYHpaQPGIJc7AshhnCABLZSQJBA9t4jKLmwqJV8TxvWeY6yyLC+voLvfPfb+PKXX8F4MkKeZTBaw+hYYadg7vUe5WkUjDq+Eg7x4mRwHj54IFbf1lr4+HghBHgHeQuJbyzleIInnriE8Xh8zzcBOhlnHXzwyE/wBph+I3oc/t5TNh//00t0D9Za/OIXv8A//uP/wNtvv435vIJtPOZNA2sdrPNonIVzDtY6uVjYeDRWzgUvYefh4IOF8xaNq+RzF0eDePmH633scTsL2zQ4t3EOly89hdFojCIvkecl8mIEnRfQeQ6T5bKZr85hdI4sK5AbObTW0AbS39ZaetpxfRCtNZTRMHEjYGMMyrJAmeXItUGuDcrcIDcaudHItEJTzXH1/Xexd3sHwbnlvyY6JZPJiJ+TehyCuo9hTScWQkBd1/jVr36Ff/iH/46rVz9EXTt4F+BcgG08auvQWAsbg9lZD9t4qVKdhLDzUj0HLxWtD779PPj4ufNy/ziqBAhomgavvvoKzp07h7IcIctyGJND6wxGZdDQUNpIUJssHhK8Wsvwv+XP+4FtTDpM3L1dvj/P4xuAMcgy+T65oKkQEHD9xjVcv3Ed1trlvzL6mDxuQQ2GNZ3W1asf4J/+6X/iz+9/ANs4OBtgrYdzIY7esPDBtmGcWgbtkYI4jqc22izcL/GpNRHPWedRTsb4wpdeRlHmMWCNjI/W0grJTIZMZdA6g1K6dyi54KjlgiOgYmDHiroNbBOP7pwxyxW4BHWWGWQmPoZS2Nvbw/XrDOwh6f98DQHDmk4shIAf//jH+MMf3kETx0DLxUGFEGK1HBRCbPQuB3BfqpibpmnPhTgS2iHE64/yOKmyvnD+Ara3zyPPC6luY7Dq2I/WMZihApRWUDrEnjlgTBpH3QWwhLAEbj+Q0+eIo0q6iluqbq01lNYwysAoJT1zBRweHOCjD67C2ib+aegsa5oGVVUtnz6zGNZ0Yrdv38bPf/7PqOumbVuIuwfT3X5dTYHYr7p9SOM/uqO9YgjgiUtPYDKZIM+LtsI1SkHH65RxSLU8PkKc9JIeIt2oe59LeCulY3ujC/FFqTKX+0iF3qvsjUaWaWRGYTab4cOrV1FV9dJj0FlTFEU7wWoIGNZ0It57/OhHP8K//eu/dW2LWAcDvaF3x0w2WT4f0tTw2L9u+9jeyVjn9D3xGeRz4OKFi8jzXMZN6xDjNkApD6U8tAowGjBaKmatU1h3k2ROdtz9e6SFEiv6tgo3saqXSn46neKjDz8YVNX2OOr+nw4Dw5pOZH9/Hz/5yU/iFPA08iEG8NKsQdWbeNIPaR+njqdeYVeZd0KIFxnTxzhBJotjm0ejEcpRIZWtWqzD717fn4T8o9VatX1u6Vl3PWz0/oHLm0G304yKbxDpjWI2m+OjDz+MbZ6He2VEYFjTSV29ehXXrl2XxZHg5fDSnw5etRcM+1VziDPCUmj7OBsx/XcaWmtsbW1Lu0LLBT4JUXkO6T1D+tQ6AOrON4L7SS0RCeyu6krB3e9nay0jSdLXCgoqzr4xSo757AjXPvoAnsP66BFgWNOJvP/e+9i/vQflIeHsuso5BbGPMxHTxxTUD0KFhRY0JpMxtrfPIctyaJjebRoK+pH+KLcjR5aOfoDL/dK5FOiply0BDgDTg0NMj45YXNNDe3Q/4fSZFULA//vTn+RX+hAryLSuRzySFNTp+/ph3Y7WuI877xGwvrGKzc0NGB2nInsFhTi9XClZYW/heDipFZL4uG5IF9BdVd3vXXejRRQM5ALqjWvX4ByH9NHDYVjTifz2t/8i4Qu5BtgP6LtJ7Y5+qN+v0k5ri8iFxu58WZayDkjqibedYGlBAAoIujv6wX3vp7yrbox2V0HL+eWgTr3rFPAyQkUbDaMUqqrC3u3bMtf+QV8MPfYY1nRf1lq8/fYf4EIcnQEnfYqPSRvobWHbXYwMSi7m9Yf0yY/xckAvB/eD635DWKyqU+WtlIJCGhESJ88oBWMUlFHQGtjdvY2mqXsXROksWf4t8CxiWNN9HR0d4dbOzvLpT0AKtiBVdRqVoVRbMIeF1styGyQA6tG8sUjPevlsp7stVta6f2FSoaor7O3vLX4TnRkMa/pMmM1msM52IzjuEVqncf9/IAGAzF4sisVttqT10R/HLfcTsUWzMLTvwfWraNzrdSsVWyGIgd3NlgQCdnduwzayBCudLamldZad7VdHZ8J8Pm8rRcSZgbKwf2+K9wNKodt+rWQjgdT7ldaDllmLMNAwsnXXwrYAfSlEYytkodJ+tNJQxS64ZVJMes7uvPSwm6rGzs1bsXdNdDoMa7qv8XjcfaG6adwpqJYDN9Fa37OolZbG8snF81rJ0DyjjFxchIxESTsKpN1guqpo+QmXn+DBdBV89/jLQZ10I0l65+Lf0uHBEazluGs6PYY13df29jYuXLhwRzug/3WqsttqG0pGdTxgVvardgXAKNlNUSw/aL96Tn1qKx/vCO9Ha7kdsvx3lMgQQ6Cu52jqitU1nRrDmu7LGIMvfvFLQC+M7neMRiOo2Cq5m7uGfbu+dFw/OgZ2iKvvSTDL4/o0IaedAv/o9IP4biF8nOUAFxpGa3jnsLe3B3/sfYju7u7/kogipRReeukLi4EcR2YsHylorbVt73m56u5X3wpdoLePoeKkEm1gVAYoBQcHF1y7cFR7ETEKcVRIv5JuQzOkoX1LR39437HD/O4fqAsB3muVBJ965mkESxprDtzeuQ3bWxqW6CQY1nQiV65cafvCaThaCmYdF/E3xsBkBlmeFudPS4re+zDGIMtlJ5b0eEYbGQGiVVuFpvANQVbm60Z6yCH7tnT3S9PQ5U1E1q02Rl6X1hrKKAStIDNY5MKm1hK+EsJy9PvVy33rk0iPJW9GQN00ODw4PPXj0OONYU33pZTC9vY2iqLoBYyEdZZlyLMceZGjKArZwDat+WwUtJHNbvM8h+ltiWX6W2oZ2eWl3T4rLkGa5zmKvADiTuM+xNmNADxS66MLailyY8UdUqtEIrwsc+TxTcRkmTxPkcPkGXQmbxZZHMutly5Weh/aI1kO7WODVwEhyGtMv0WkC7T7+/vHrjpIdDcMazqRra3tdlSISruj9II31wajokCZy1GUBcqiRJGXKLIcRZ5jlJco8jwGegpsQIWAIjcYj0bt5BeZAaiR5wYBHs5aOGtjlS1tkMUNEFS7S433Ct7L0DrvHcqylI1z8xHyskRelijGE5TlBOPxCiaTFYzHKxiNxyhHE4zGYxRlER9X3gz6wXpcUMuKgt1tIb6ZeB/itUSZei+Fu8dsPoVtZzQS3R/Dmk7k3LlNbG5uAm0VqWCUQmYMijzHZDJBlkt1XBYFiiyTNoiSzWml9RCH2cUjNwZlkWF1ZYLRaCQBX5ZSsecZtIJMxvEe1sVtw5xDCLKZrk8b78bD+4BuS4IYj0E22q2rGnVdo6kb1HUlX88rNFUN28gu7M65dvHWFM4S+PI43ea9krH9c9KZiSEew7kfxBLk0lPXCvDOoqkZ1nRyDGs6kfX1dVy8cKELo/jRBIVxWWA0KjEZj7C5uY61tVVMxuO2Z20MoDWgtVTFxhgUeQaTKZRFjnJUYDQqUOQGRgdkRktQWw/bWIQANFWF4Dy8dXHFv7gNWArqGNbOeTjn4V2Ad/Iym6bGbD7FbHaE+WyGel5hNptiPp9iPp9hNpNjOp1hNpujms8xn1eyO3vc3FfeoOTxvJPWyOKGwOl+Dj408Y0kVt1xre92ve8Y8jWH8NEpMKzpRMbjMV7+4hehlZZqMh3Bo8gLbK6v4+LFC9g+fw5FkaPIcuQmQ24yIABZ3i0fqhEA75FrgyIvoLWSx/IWxmisTMYYjycSaFUM68bCNRaI4Rd8rGS9BHOIYSgJKaEZgoutkrRTutzHOQ/lpUp3TQ3bNGjqGk1Tw9YVmrqOr6f7vrRzjfcePsifO7WwlyvqgMVKeyGovYez8vXh4RHrajoxhjWdiNYGb77xBsbjMUIIsE7aBs45zGZz1JXFbDrH7q1d1PM5ZrNpW+VqpVGYAqNihHEpfWnpV2s462ErB9c4wCkE62GtRd3UGE/GaGwNpRQa61DbBq5tS0iF61yqXhGr2W4KeBeU0qqQ1+OkhdKvaIOTo1cBp3AFgBA0vFdwPl1slPBeHj7Y7k4T7hxBIo/T9b4VlKzCx8qaTohhTSeiFPDSyy/h2eeebXvB1nvUzuJoOsWtnVu4efMm9vYPcDSrYF1AYy0a22Be1Tg8OsK8qgClYOM2VwEp9GOVqjSslf4xQkBVzdue7nw+R9007ZtEaoF472CdhXNW2iDeIsDBB9sdMawXj67iTodzFtbK0b/fcrujrdrb1kc6n75Ove5+4HdvHunvr67rhREmRPfCsKYTW1kZ4fXX/zOKIo9Ba1E3DaqmxsF0isPpDAfTIxwcHuFgOsWsrlFbh8Y7zOsGs7rG4XSGyjrM6gZH8xqzusGsaTBvLKbzObzSaJxHHUM7tP3dGnVTx/ZDtwO6804qakhgSt+6H7YpNKWiDSm8nY2tHLlY6VwD5xt4332vc9IDlyVYY9We2i/pgmZ8w0hBnN4A5Lm61kf6mM77EGCthfsYZl7SZxPDmk7MmAyvvfZaOyrE+dSyaFDVFaq6RlU1qBvbjq6QqtehicHeWIumaVDVtYzSaORjVVU4mk4xnc1k1EYjLQ/nZEhc3TSoqhqNldEhEtqpL512RI8B3rsomELVOXmtznlY18C6On6UI43qWA744INcrEyVeFjsZXsvvxnIc3bVdz+4+4EtjynB75z01IlOgmFNJ6aUxuc//3lcufI8fPBQSn7dT6FcNzVsDOOmaVDX8rWEpFSx6bbU7/YxRNN90u02BX4AAjSqusbRbCZtEO8RfGpvxIt9vVZHF5ZdUKbnk1B2cLF1ktoXIYRYNXctDN9WvXKbtGRk+F3o9aXl70ZmPi5W3P2edu9rpWSJVxWQZVnvPkR3x7CmU7l48SJeffUVrK+tLwydkwo0XsDrBWVX3fq2yu5Cs7v/8vnGStgnVV3jaDqVC4zWIrhUkaoYogGAQ0zVGKjyOrrb5Uivp3udi0f/vu2fo9dmSUGequ0QWzVdeHch3j1P93eRXrfW2eJSJET3wLCmUynLEi+99BKefuZpZEYDkH5vqozbKnopgNPRhVXs/ab/lipUpWSaePq6qWsc7B8gWIvgPIKTbE5rd3TD6SQcU2uie24JzDtbJItvKnKuC+GQNvzttTXSRdDlP1cX/v3HS6+nexOTPzxgtEy5JzoJhjWdilIKzz9/BRcunMfK6opsXtv++t8FUz+cvI8X8XoB1wpYCD3vPZx37VoaMp8Q8M7jYG8Pzjo0toELVnrWvWF53fMthm8a85wuPN4tnBdCuj1v29Ef6XvTC5fPUyXdBXV6jP7fy8Jr8UEmB2X9NbqJ7o1hTaeilMLly5dRFDkuXjwPY5QEVZAgdM7FERqL1WQbxMd87Ie4tVYCuWngvY/7qwABAQf7+3GyigS6i22J5fDtH1gIzMU3ldMe/UAW/ceXx3VOZi5KFS+/ZfRfSxKCQlGU/CdIJ8afFDq1siwRQsDFixexsiLVtbQF7myBLI9b7lfR/ZaJj6MjUril+0ogygiK3V1ZBzoEWS86eJl2LkF4Z1A/umOxny1/lt7U9raPLa9LRo9I6yX9mfwxK+wVxSj23Inuj2FNpxZCwEcffYQ8z3H58mWU5QhFkQOx8k6bCaSw639f+pgq1LZq9V3v2h0zbllB4fbObcznVdzDMAWpQhpzvUhCNlXE/YuGy0cXyPJ5GmWSArp7HRLQ/Qq7/2eRyTNpXLYsKHV8GCsopTGerLS/ORDdD8OaTs05h52dHTjnsL29jc3NdWitJdzQ9XeTfminzxdCLga0s1Jtt6NK0kQWyA69h0eH7bA/G6tVWTgptEPu+gGbQri72Hj84dued6qCu2BerJzTWG0J8/4hrzfE6fBeFpHykHVLFqp0+XvI8wyT8Si+YRDdH8OaTm1zcxP/8S/+A46ODmPv+iImkwm0iRV1b1QHlgK6DeoQ4BHiRuWq3ahLDhmBgdhj1kpGfBwcHODgYD/2tS2cl1mI/dbKYsDKsfzcy0cK9n4o99sX3SEVfQr4dITUhmnHaQd4H1/fHX1uMRqPkZdF2qSd6L4Y1nRqeZ7j7//u77C/v4cQPFZWJtjc2MSoHLW7rAQALlaay7VjCHFInOrCOXRbFsYudayU06gLFXB4eIi9/X2pwr1ManFxevhy8C4f/WBdvm//dS3r2iCLFXbTyGzI7k1B7isr86X+vUzcOe5xx6MRlNLwDGs6IYY1nZrWGi+++Hlsbp7DdDpHnuXY3trE+uqK9K41ZPuquLdh6IdyDC4VIMuUxmVNDRTgZaDeQoD6IKM4oDCrK3x4/Rpm8zmqOi7q5AHXjp9OLYlu8o2cWwxzuc0uhHhqZaTb+pV6eox+YCfp8bx3cSp6t3Ts8puBUPA+oByNZUNh9qzphBjW9EDOnz+Pv/7rN3BwcACtNEZlic2NdYzHI2htJI2jECtpLO+ErhRkj3MpxeXjcrhJS0UpjRCA9/58FVXTwAWpulOPOF0gRKrI40VFCenUx+4uHKJXNTvXTXJJgdyvwENvyF8/fBffBCTkrZPWh9wvHehdbFSYTCbY2j4vFxrbRyO6N4Y1PRCtNb71rW/hwoULaJxFVuRY39zA2toaxmWJ3OTt9l0LwdyboWi0ac8H76ECoEO8X1zgKM0gRFCAMvjzn69iXs2l4nWyRoisE9JVvqlvvNjL7i4cym39i4td9b14/y6Mky7A0xvA4pHOL1w4TCNDgkaWFbjy/IvI8/yuY0WIjsOwpgeilML6+jq+8pWvYHd3FyEA5WiMc+fOYXV1VXYqNwZGaWRKdxV0WynfuRBS2ig3BTxi7amVlu+Bws1bO9jb2+9Ggyz0kiVs+8G9eBwXrsdXyqmSTue6+8ohwd49jnPpe/th3VXTCBra5Ng4t4WV1dXuee/8RYLoWAxremBKKbzxxhvIsgwHhwcICBiNRtjYWEdZFsjzDFr3gjgebStEy2a6WmtoI7elXc+1kfv1n0sphdl0hoODfQnlEODj2iD9NsfykVokxx394O4/X5Luk6rtdunXOAmoP+FHniv+RtB7E1JaASpgfWMNzz3/3OKf7c6nJDoWw5oeyosvvoivfvWruHHjBmazGbIsw/r6GtbX1lHkOUxmkGVdAKdAzrIMWnUBbrSEdgrlVE2nMEvhVlVz3LhxE/P5DNY27UiM5Spa+szpSBVvv4/cr5K76lmq8/4hodwPdXn8flXdvxgpzy+6srkclXjyqadgjGnPEZ0Gw5oeSpZl+MY3voGiKLC7u4u6rpHnBTY2NjCZTCSUe4GcKufjqm30Kuh0u9FdyGut0TQNrl+7hrqq4WUoSNsKWa6au+p5uQ2yHOwhXiCMj9M7t3ifroL2cURIOpeeS/4Mvb+goBCUxpNPP42VtdVjq3eik2BY00NRSuGFF17A97//fVRVhb29PVjbYGV1JQb2GFmWxZDW0HGVPsSLlAvVdL9F0juHWB0DUqy+9+57qKtKqlovGxiEXsguBvViC8T1NjvoNj3ohb2XLbdS+0TCWtopqR+e7p+2HUuHin34hd6G0nji0iVcuHiRQU0PhWFND03F3vUzzzyDa9euxanoDTY217C5uYFyVMAYBa3TcWdIp6/71fZCeGsFkxkYpfCnf/+/2L25g6ay8FJcw8f2hQzbVvBe9T5HPBar4C7AUxsjTrCJ1bOEc1qne3GUSKqs703j3PY2nnn2Wai4XgrRg+JPED0S29vb+N73voeVlRXcvHkTOzs7sNZiZWUFKysryPJMpqNrLZNBekcaMKH0YlWdKlGlZYSI0QoqV5hXM/z7n/6E6WwqlXHwMu661/aQSlsm1fTbH4sV953BnUJ6MZz79+++714CgPVz5/Di5z7HrbvokWBY0yOhtcabb76J7373uzDG4NatW7h9+za891hbXcN4PJZetVaIQ0TaQyvdHstBruP0dQBt7xoK+PCjDzCrKtTWwnoLG/eBTOthp3HUNgavtWmHl26/Rxf3fFxoizhZj7t/cfL4ESWLlXX7xqJkxmY5GuHKlSswDGp6RBjW9MgYY/DNb34TX//612GMwf7+Po6OjqB0wGQyRp4bZFojiyGstIZKY6h7o0Da4IZU3RKECgoaucmglMHGxjnM5jNYb2W38DjOGUG2+HKugfP9DXFjdR1HeEjveXEZVPncIQQbj26247J+W2Ph9WuFshjhyvOfw2QlXlC8dxFOdCIMa3qkzp8/j7feegtf+9rXkOc5dnd3sbu7C62VtEPixcbUkzZaLYz2WO5fG23aYX0mMyjLESbjCZ678hyc97CukSq6XdvDw9ombs4rVbZ3Ht65ds1smZ6TRoOk6eZxN/WFWY/HtzvSG8wdFJAXJT7/0ks4t7XVBfoxdyU6LYY1PVLGGDz77LN4/fXX8fW/+RtsbKzj4OAA0+kUWmtph2gth5KgVvFIk0WUksky/Yq17VtnBl94+XN47spz2NrYRLASuNY5uOBgfd2ududiS8M6C+saCXYvFbdU16k3LaGc+trdcXxVfUeprGTBqtX1DXzxy69gY+MctOrGU98Z90Snx7CmR+78+fPIsgyvvfZX+G/f/jZe/y+vwdkGs9kUCgpZnIqeGQOtuhmMaRx2Cu3+aBCjAa0UMm3wF3/5l7h06QlcfOIi1tbWoWSZP9m0wMtElzSbsH9BMARZES/1syWku1404szD/td3E0dUwysFk2V46uln8PLLX8LK6lrsxXf3ZWFNj4IK8adyZ2cHW1tby7cTnZr3Hu+88w6uvv8uXGMxr+b4/e9/j//183/Gjes3Ya1M7U4bEKRx1FopBGipcoOMnZYRInJbkRl87oUX8fff+a948sknkWcZQgioqgqz6RTeWkDJBgGqX9neJ3iT5daGtGuOi1q5SGpMhu3t83j2uWexsrIKpeVNg+hRStnMsKaPRV3X+N1vf4OdW7fgg0PTWNy6dQtvv/0Ofv+73+Ojjz5q16UOQXrJRmnZJSau0xECUOQ5Ll2+iKeefArPPfMMXvnSl3Hx0kUUWSFrZSMuheoCmqaSVbODA3D6ad39sFZKwro9lya8KAXbeFx+8ik8/cxTWF/fkOo/BviiVKF3wxCJTothTR+72WyG3/zmf+Ngfw8hLktqG4uqmuNoOsf+wSFm8xm89zDaIM8yeHhUVYWqqjAej+PCUBtYXV1FURQoTAajZbQINCSsVYCGgrMeQNpM9/ThmAJVKUDrOMww8j5AG428KHHl+Rdw+fJTMEY2TJBvisMRF6Set4xmIXoQDGv6RBweHuA3/+c3mB4ddn1khLiHl/R+Q2/hoxB3B09rQAclY7hTD1sjrYsde8xa9mqE9PTS08ptcQr48rkk9cPTOflahhOinaAD5HmBS5cvYWv7PCaTFeR52WuPpMe7Wxjf73aie2NY0ycihID9vT387rf/gqPZoSy+hBA3hAl3TMPuj2sOQSH0JpsopWSDAigoJXs7BiX3V2mnmXjffgAvUDLZBUGG4GmtesP5ZBRKORphNBlja/s81tfWsLq2BmNiiDN06RPGsKZPTgio6xrXb1zDe++/h92dXSCOzpAheTIrEVAIwbfbFHgAPlbHSpn2vGxIkLoOEv4StQowabJNt4lBCm8Zi+1RVxW0zrC1dQ7ra5soyhxZlqEoSpRlifF4hLwo5DnbN4vQGzwVlkKb1TN9fBjW9MmJWRZUgHceV69exYd/fh/zqkJd14CKAax1u/Z1luXQRkv1jNBtjRWr5SzLMCpLjMoca2trGI3HKIpSqmXTTVNfrqy7inuxSpa7pYq8F74hzaL0DGv6VDCs6dMTZKPbpqlRVXOpppUsoSpLqcoa2BK0d14sVGkMdnsiheVpLI/cIDqbGNZ0ZqQLgcddECR63KVsZnlBn7quL8ygJrobhjUR0QAwrImIBoBhTUQ0AAxrIqIBYFgTEQ0Aw5qIaAAY1kREA8CwJiIaAIY1EdEAMKyJiAaAYU1ENAAMayKiAWBYExENAMOaiGgAGNZERAPAsCYiGgCGNRHRADCsiYgGgGFNRDQADGsiogFgWBMRDQDDmohoABjWREQDwLAmIhoAhjUR0QAwrImIBoBhTbTEe48QwvJpok8Vw5poidYaSqnl00SfKoY1EdEAMKyJiAaAYU1ENAAMayKiAWBYExENAMOaiGgAGNZERAPAsCYiGgCGNRHRADCsiYgGgGFNRDQADGsiogFgWBMRDQDDmohoABjWREQDwLAmIhoAhjUR0QAwrImIBoBhTUQ0AAxros+IEAL29/eXT9NnBMOa6DMkz/PlU/QZwbAm+oxQSmE8Hi+fps8IhjUR0QAwrImIBoBhTUQ0AAxrIqIBYFgTEQ0Aw5qIaAAY1kREA8CwJiIaAIY1EdEAMKyJiAaAYU1ENAAMayKiAWBYExENAMOaiGgAGNZERAPAsCYiGgCGNRHRADCsiYgGgGFNRDQADGsiogFgWBMRDQDDmohoABjWREQDwLAmIhoAhjUR0QAwrImIBoBhTUQ0AAxrIqIBYFgTEQ0Aw5qIaAAY1kREA8CwJiIaAIY1EdEAMKyJiAaAYU1ENAAMayKiAWBYExENAMOaiGgAGNZERAPAsCYiGgCGNRHRADCsiYgGgGFNRDQADGsiogFgWBMRDcD/B9SP2qZcBtgAAAAAAElFTkSuQmCC",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:02:58.734Z",
    "updatedAt": "2026-10-10T12:02:58.734Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca29e493039285f51a5ead",
    "name": "LOUVERS",
    "sku": "27",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "LOUVERS",
    "shortDescription": "Specification -\nFIXED ( 3mm Step)\nColour - WHITE\nPacking Qty - 1000",
    "fullDescription": "",
    "mainImage": "/products/louvers_1a5ebb.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:04:52.834Z",
    "updatedAt": "2026-10-10T12:04:52.834Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca2a4493039285f51a5eb4",
    "name": "LOUVERS",
    "sku": "28",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "LOUVERS",
    "shortDescription": "Specification -\nFIXED ( 6mm Step)\nLG profile\nColour - WHITE\nPacking Qty - 1000",
    "fullDescription": "",
    "mainImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX4AAADzCAYAAACBg31OAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAADyuSURBVHhe7b1nn+U4dub5ADT3hktbZmfbSN3StDTVMy1p97ffT59v9u2MVtO2uqure1Q2w11DEsC+OOcQIMhrIjIyKyJ5/lXIuCThQT6wBE0IIUBRFEWZDTY/oSiKonzYmPu2+L336LouP60oiqL8wBhjUFVVfrrn3i3+ruvQtm1+WlEURfmBub6+zk8NuHeLv2kaAEBd1/klRVEU5Qfku+++w6tXr/LTPfdu8SuKoihPExV+RVGUmaHCryiKMjNU+BVFUWaGCr+iKMrMUOFXFEWZGSr8iqIoM0OFX1EUZWao8CuKoswMFX5FUZSZocKvKIoyM1T4FUVRZoYKv6IoysxQ4VcURZkZKvyKoigzQ4VfURRlZqjwK4qizAwVfkVRlJmhwq8oijIzVPgVRVFmhgq/oijKzFDhVxRFmRkq/IqiKDNDhV9RFGVmqPAriqLMDBV+RVGUmaHCryiKMjNU+GdCCAHOOXjv80uKoswMFf6ZEEJA0zToug4hhPyyoigzQoV/JlhrcXJygrquYYzJLyuKMiNU+BVFUWaGCr+iKMrMUOFXFEWZGSr8iqIoM0OFX1EUZWao8CuKoswMFX5FUZSZocKvKIoyM1T4FUVRZoYKv6IoysxQ4VcURZkZKvyKoigzQ4VfURRlZqjwK4qizAwVfkVRlJmhwq8oijIzVPgVRVFmhgq/oijKzFDhVxRFmRkq/IqiKDNDhV9RFGVmqPAriqLMDBV+RVGUmaHCryiKMjNU+BVFUWaGCr+iKMrMUOFXFEWZGSr8iqIoM0OFX1EUZWao8CuKoswMFX5FUZSZocKvKIoyM1T4FUVRZoYKv6IoysxQ4VfemhACvPfoug4hhPyyoiiPDBV+5UFwzqFtWxV+RXkCmHDPJ7VpGgBAXdf5JWVmhBD6Vn9Zlvnl90BgcwjD5q4c679yN+5bHsohvvvuO7x69So/3aMtfuWtMcbAWvvIRV95fGi5/VCo8CuKoswMFf4nxu6RORpuQZAW8C57Kcfae4zcJ+5p3uRmil3nH5BjovGh8KGn7wmhY/xPjBACjBmPi4bg4L2HhYnXrdjL7QcWGi56sW/6f4b0t4j8Te0Pfkxwr9sr85Pjy35R3Zb5awwnIx03JjWlCnFofcTAPditGSdtyp8QxPYQw1HP45owumYAk4Qbxr7ekTzs3L/8ekpWBilTedrHObFuDAwA13Xoug7GWtSLGtYWCD5wvudxUt6WQ2P8KvxPECkyemCS4utb/IQPfqCP3nuRThgYmFyupp4/foq9jx71D6oRgRKHuQf3urUY8SsAwQ8ElP7mfg8FxBhzwH5OdG+SdEl+0Z8JsQPgQwBJPwDOp/hYccWzg6lrabypSMd27kLqPhfZfX7vtzudLomzIPM/Nzc3uL6+grUWH330EV68fI2iKGCsDjq8C1T4P1DatsXNzQ26roWxQGELWMNyzqtsuq6D9w7gB1KWW8rDaK3lhzTeAqPbIbCwjR56+iV1T0jOJbYGFdFdMCYKgslahSH4/neKpCUXHvobz00zbnnm4UwnJcA5l1yLeZVWPlNMXmOhn7hyT6bzY+pazj67ed5gZJ96UAYG3ns0bYOmafhdD+Dv/v7v8fLlS1T1InGjPBQq/B8oX3/1FX7729+iqgrUiwWqskRZliiLAmDxB4uLMalopU8v/RN2iVByftDiF1eJQIWJlikdT/t7mCgi1hgU3DIkHxMRMnKW/gafVlJRfOhwn/pnLf5AfltxY0LfC9iFXGFfyE/O3wHsfZp/KRQMVeISpmGLYUfwfdgmcQsS6OBjOPvEPM+ewZATRbi/5hOHZngpwnkfEOA6h65t0TqH9XqDTz/9BD/9m79FWVVjR8pbo8L/gfLFn/6E3//ud7i4OMNisUBVVSiKEkVBLXlMtGCRCLlBHJYAC8quGyH0LX6yYZE86NbsHYdOW4YDdwYYtxkj6W0poidQTNKT8UygGkh0e+jW2J1xpV5Fcjxwl5/YTS6Ctp9niUhOBiCtkYfw2Lgg/Z9deWaMAYxJKir+6wOC91RZAqOhleDZx6xXZQBYjoHn02mZiLvAWWOS6/l9FwL1irquQ9t2aLoO5+fn+Nnf/T3qOhV+IzmovCUq/B8o//G//4o/f/FnlGWBuqpQlAWKokRZWm71WW71TVcAJtGygMAtSbkV4gMot8dAwJM7JgyeVfmRuo2WU3cA4EdiKu4wcAdpbDMeNHyV07dCd1QaYZQPQxEciPQgzJBb3U0W17xCAacsJHm7i1yIMcyVMXlAfTmHWGEkAi+VZLQ8vFcKnuMIJhN9qVzZGFDEdqUnFf6m7eCcR1EW+M+/+AVOTk8Tmya9mZS34JDwH3s7K48M7z2ca/tjGROPAj39EA7g54xai6xY2bMXhSC9GE0/HGDAKps/uGM3vRkcJn5mApa73EX0ivwYGwpml8n9igf7Qs2Y9DdLwVSAOSNPJK93m+D9tBFBzoQ9D2d0LWFQCfVxir8lj4/BWoPtdts3HpX3jwr/U0CaiPwjBI+2bVAWJQpraQzcGBQ2e/hCgAkeJjj6izAwA2RSMdAqGnLHBgHWRJOKKY23R5O6Td3k7kYGyOzTalQyw3TlImMCGerj0Hi4mH2YEHYaqTglbnwAw8Mp+0yarqmqKsZ3eFVsG+4dpekQe+n53l1iJzU08SJ2OG0+ttYNDGxi8jyQlr0c9/nL9gtD956lrKFwJvJD4mxZcAzHeXV7u7OXoLxbVPifFCRI280aq9sVfAiJ0ExJTBQw7BP9ScStuEkEJSU7wYMD7C4Toj1I/KdM8s9BjrMlxLiODZH6R9GgWO3775hUy5Xc/9RVfrzLXn7OIE1GUtb9UFg8NelmmAX9sUGffP7NKU5a/6NyZH/o2FDPNJDdZrNNAlHeJyr8T5DNZovV6hY+dIAJsJZW7hzZ02YCTxWKSZ/0AxgfzV1I3d3JbbiTu7TFPTCjNCsPAwm6tXawDHcA1wTWWhhrUViLtqWlncr7Z0cpKY+WAHRtAwQPy0rveQkjdc25ZdcPVxz/ZJm7Oxn2Bu7gDmmrEMMwqftPQ1qpSa/3QwQTYaZDT0OTpG/CHTG0RGEn+eo90MfnKA/vyTj9eT4g0Iodik8Mn36+fXz6suHKND2fjvFP9nM4vyTvpGdgIEtk03ccZElZDEN5t6jwP0GabQMDoLRF332Pws8PGv8ei180qbt+jPgIdwM/Jsahj2VqDFuI8RubXe7SdE2SeZSnZWw8v/3sE3f0h7zL8oIZxG/CHEsaXclnOk/h0QS/47BT4Q99HA14zoOP9pH3kPox/cFQThTw3p7hpZ9pPDmv+t/sjzUcHwN0bdvbAzgJd8gf5f6o8D9F+AERsUlF5ykhwiHkIpr2ZPJr+8jtH+uuh9QqP8siLKI7vv6QpGGlhvLE0xfPeIlk+jIVUkHmyX5jLC3vzYR9fzVwd3o/pVyTe5QqimEcQvBoNxtu7KsUvU80t58a3LqjByppfjLGkJ07Cd2j4ynH/d3TVwqeKoCpe4Dq0+EQzLuGg5wMb3DMEXT8Fm/fpdFyf2+o8D85+IHvW4D84HtPD1wAgg/o2g6+c/R2rvf9MMN4+R6/3dm3KveMKR8BuaEHWPwU8hbnPgbzFgjjieEJY3jdoLEBxohJw6TJx2jkPLkhfzi+Jg3zboIUzH6TI8scU0gbs/zqf5OdsiixrGt+Uzu3T+mDMQh2uE5f7pOpMFLjs/iGEPh+ChMLA+i3QUAwAd54oAi0/tQGBJ6UT5cROO9xu16Tv305x/CUd0d+vylPgLTb751DcNTyC87DO3ppp9eqRLPS1p+Ra0f1DI6x81BMhTV1bhci3HkzUxjkQDz1CJGWu0miLGJtrUVRWNrhsq9Eh2kbVhZR+KPNh0r4sHwG22kYOqYzwx6qDwFNs02EX3lfqPA/QUivSfw75+C8g3c00de5DgCiIDzUs/0OSMVIehvej8fPJb30IzGHOMbOE2VfhynN11Ts02v5+Yek721MEECtesNj/E2zRfCOimqHG+XhUeF/ghgWQu9p50XvaOjHB2rxwxgYS61Cesh3F/Mx2rivMRaHh2RoJlZKqUH2hq/E33saTqIVKvR3ZJyHdw6OTe/O826cu0w21DSMs7RBd8d5GP/d5HbzobJoxv4E6bkdMEM3U2Fy5ZiQiv/DiH0eJpvJPOC4yJ80nlI2PmC73cK56b2XngJBnsOJsn3M7FYE5dFCNxut6Ei71dZYlFXZr+ZIXLDExb31qaKQhzGKUy44JDpDOxKHeLPHbwDsIxeGKEhUQUlFFSssSce0uIwqiMSQnf3h8kVArnkP7x28p+8YiF8Iof9+AQ2vkKFWa/QmDzcdeqEwhyJMcRge7zJiT7pwHO3e5KR5mJaLnJPrGJXlNJTfkodpRR+FLwQa1EmvRfcerusoTwP1Tp33aBv+RsQgtKeD9x6bzWaYBwfy8jGgwv/EcM6jaVu4jlsZ6UNtDcqy7Cf7hPQB9d6h44dPut2HmLqPRTzElPw9gKqqdhqxE02BsixQFAXKshz9LcsCRWlhi4I+NMNh3YdcSI0xKAqKd1WV8XsGiamqCjXHPaa3GBiyG9NWFBTPfOliOqEs6ZC3XY8xSMrRGBrKk/yjPKTKyPY9PRo5EUN5QIYaBpIzE4U7gu30boY3zXCugH7350w8F0C90o4/w+hZ/HumbrRHjrX5PMvTQLdlfgpICRmP7WaL3/361/jqq69QVRbLxQJ1WaOqa9R1hbqu+xZHejP23WsEhL7VN75Z82EF9KI5PA68KmTq7hGxi8d0LvdbwqeeRewux7+eviWct6ImwhQCaC5Awjem4Lin8ZFrco7Wmkj+UAAmcUPLW8b+0PHYvzG5Hck7nwrfHvKWJLmnSmA3sadkMJzvMTBU+U99UjND8nSnVASef+nLLsY1BNq7n7Zldug80PFwXdd1qJdL/NM//QqLxZLW8u+Iw2PGez/Ku/z4fXNoW2YV/qeAlJDxWK9W+M2//y98++03WCwqLOoaVVlxy69CWRT98I/cfPLw91h6IzMfEgqBxDYnF/LUL0+O+PxAF3t60cnWMqbCH4UtCgd5y8NP/N3dXPVHgwR8uRdYDmPQKuWf8a3UJMxJ4QcQxj0Nyhf0cyhmz6cWYys/9gKQlwuLSDpcJcTsp3yJeTWGhHri2lT8UkGfKDsg2hm5FQKSe2D4F6BGh2Px37YdDCxgAOcdnr94gc8++yXqxYITuSsSjx9J8w8t+lDh/0CQEjIe2/UGv/v1b/DV1/+BsiywqCtUZQFjqMtpeavkFJHyXgRNfMMyZ+p2GLcWI/TMJw/5hHvBoIi/uRcAdhPFLM4hCDIuPCX8NAUxTodUKqMk8rGkSSqEKGxT8Z8WpFTw07+pAFDlSmUjJhd/CdPxyiz5aEncjmEo/NNxJCSL+sofw95aSK6NCNNXAjnqW/4j+Lr8DgBCMH08A3+IxTmPznkYY6liMwE/+/nP8eOf/BRVXZP1UYEp90GF/0NASsjQ6pY//f5zfPHFH9G5DouKxsKNMTvHGgNvo0KVwlDDRCiMPOATGAwfSNkcDuwmdbXLDwDU0ksCT1v86N2mwk+GRARJRkTuLPwJaVwlvOnom2GmydlM8NO8l7HfdM6AWv256EdS4W+aBm3b9BUimfT1J/T5k0NpiXFOwxr7EZnq7UHyuM8bcZv0gHzsd1ElYdKvegKIiwR8INHvXIeTkxP88//1Lzg7v+jnMXTrhodBhf9DQEqI3378yxd/xh9+/zusVrdYVNVgUq9/gDBUvZC2sOkxTlrZ/CZnMjY7JB+z517FyOou98KwYqKfMvwgbvkNT4lXvzMZDQ/kLx2JyKXBGh5+iUGN40Rp52/RsmOKxtguMS1IqYjLb8uT3UVRoK7rfmI7H1rLoeWsJPzb7RabzaYvo67ruNRScaZ8G0I5RENwHJ4hayHQ28yDij9J766yo9O0/HJS+Pn+gfgRuDykvHg+wxjABaBpWlhb4KOPXuNX//zPKIqC6ylqGOzLI+U4Dgn/9N2sPGqWpycoqorGvkEvynceaF1A0zk0nUfL3WrnPJwHvAOcC9F0Aa7z8C7Au7jvS//w9w9fIh48oegcrcoYGV6lsdOM3NGQBg1rxLCNsbC8AsYFwPkAxztlun6yl8TE+zg5LEb8kqSEIK1pcUfC5JxH15LxDtxzsL0he2SX/I3vEQDo35xNV99QuLT8s6qqQUW8X9BifgMGRVGiKEp0XYe2bdl/Wt0kxhYlTFHB2BKwBWALGF4tVFiqaAKv5uocDR1RS5zT54HgDbyj+wPBThqeEeKVTCUbWaVEG4BIfgE8QWsAWINgARd4GwduLAQDlHWFn/7sb1FUFQzPOZmDeaQ8FCr8Tw3vcXZ6irOzc9iyzLrxQ7ELeaN86lxPPCst1hDoBZv1eo31eo3NeoNts4WTCkIqA/lPAt8BxUmGLaKhJFDcfQCcc1ivV9hutySyLCRpe1P8o7/DcL332G63uLm5weWbS1xf32CzoW+8Nk2LtiXjPa3pj+JNY/LRiKDT9Xy5Zyr6bytY0lvITZq2/JoYykAK3/uAtu2wXq9wc3OL29tbrNdruM4BGL4jgdyfnYj/QyNuDAxX1NFYS/NOpl89ZqgC8vSy1uvXr3F+fsHxeJqreZ4yKvxPDoN6scDFswuUZZlffBA650joN1tstxus1iusVmusVits1puR0B4nHshkO+KcR9fF4Y31Zo1t05DZbNG1tA3FLvJwRdzS9wJIgKLoiWCn69/TdIhgyYTslOjL5G6OVGh3RZJBmhzTdBe/qIXvYKxFXS+xXJ5iuThFXS9RlhXth587eg9QvChfiqLAJ598inqxjBb6Ckx5H+gY/5OCm+wAvv/+O/x///ZvaJttP35KQyQhWW3Czoylh50nPAOS5nIPt6dDukTTwPDwDrXMuaWXvgBEng29miAEIJ87FIEVv8mAhyto90bnHYIP1GrkQG3SXumTwT0ZI0MwZQnLq5ycc2i7Ft77bI5gehULIYMPEmyMn7SuCYp74CWnznlYa7BY1KjrBSp+uUriInnI//fplhYxVYL0hutms8Ht7S2cc/1LZCHZKTT/ZQx1i0LwKAt58YxX0PDKqLZt4zxBP2RGZZ+/LyHj8xJEzK0k/bQhKv8OPNlON6RhMSfR9whcyV88u8Cv/ulfcHZ+lvg14bdybw6N8avwPzX4wepchz9+/gf89a9/oYc5BNRVjeC7wbgyEAXf5OcnCPz6vC0KlEVBApq05h0Po/SVQV9JHEaspSIvgiqta1vSZDVAQz6da2gugodler+SH3HVD4l0URT0bkNVwhYGXdti2zS0kylHIrDE7Ix5YIFmP+nvcBJZrhkjou3gvUNRWCwWC9SLBeqqRCHDHYbHsqV3wR7Ipwi9D+g6B+c6eB/QNA1ubm7QNA2qiiqyWOPGiMkqK2v5gytcGfXlHQK/7xDoXvEeAXGLAaoAqOKiOmC6QpT49kdSnvxX/Osr+Oy+8cFjsVjiZz//Of6P//SfUJblzl6T8nao8H+AyNuW6/UNfvfb3+Gbb77pX9v3XTcQSOBuwg8WkH6YxFqqa5KJ37ZtY+tQxJ+Zup2kRTs8Hv+21qIoC1he+kj7EbW0SdtoozI55q/+igixEMsQjTHoV8rIpOxxxDhTMimAPH0Sf4qrA+Dp/YrFAovlEnVVomShJ00l98YkS1342MDyRLXjsfoWq9UKt7e3VJlVFcCVooh1Ggfw6iZauUPxj612AyDQTpi8pDOV90Gy+kqAegR0Kss7fqEtyD476fyNp16jVHIFNyCKssCPf/IT/PjHP0FRFlz7HndPKndDhf8DJF1W9/133+L3f/g9VrcrWEPfPwULYF+wMmY8EODpYu/FBIbfD7C06ydvVhYSH3wIsNka+5FAAInokNwIqZgGHu6xVdn3NOiNTxr2AKRlHFvrvWjy0E/gcWQRfppUlIloHgbZke4xtE2DsO8xofjTPIUxNCxVVrR9Rmkp7ZAxbpkED0heSqPyKcu6n48I/NKTTFKXZYmqrmEKi7IoUFYVq7X0nGwv0nIPBIig53nO4zOS//IuRfA8VJOWIed57y69h6Lwk3dUURS2QFXXWC6X9GZ5XaOsK1R1jbPzC9pWxDsYWwz8Uh4OFf4PHO8dri6v8P3332O7WedXU5XsW4aBx4EDKWF/vm07NM0WbduwiKUPJYtEMiYsflqAuuyGKgzDXfw4YcpzDIZXf1iuoLhCMsagsCWMpbHwfijEWMDyFtO8oZnJhzYYiiudLwpaStmnU4SfVw49JJYniouiAIxFs93gr3/9Ejc3N1T5GFr/7mWnTxb+KMhSLoZXwnB+8Ioh5xw++eQTnJ+f09BIyZvAgda+h0HaefgoxIF36g2Z/h0QgjNh8IfuhTx7RrKcn8gd8P1krYUtkhVPybAP+L6lfZS0xf8uUOGfAa6jj7HQU5g8zb1Ag1WWxLdXjIwQPLq2wXq9xe3qdnCNnPL4dL/Pj+13ryRLBkUybjusNzjAfmwbfdwGwiUXoyWABVv842qEMHECUlqdQJzgTq8DSTweCBEz+bdptvj889/jm2+/JQEEt6Q9fy6TV7YM/OBa0EBWHUmlRgL6i1/8AhfPnycT3CTm0iGhtCaJDPyPwfCtZuPj8R0/J7mXXV6l+T4igBYV7rWk3BMV/llBotfvuDgQfsTx1F4w4mQlyXHs7udj6r0gi1j354ciLSI2QLwy6UHyO5Ag0a3ILcMj5yMmSSYnR5XPEXf7xA4QR+tk1zX44x8/x3989RWccyi4TLysbEn37O/rYsozagFT4NKbKcsSv/zsM5w/f56N4RwS/n2kS3F+aN6inJWdHBJ+zfUPEGMtmcLCFEU0cp673SRAYmgYAry+vSwsCmt6I/MH1lgUg5eWeCiBG5jxmCcvA1UmNG7MajcwrM4yJGRpyEgqsbsb8k/SeGfu4STF8MtLwdOX0ZznZZKeJz1lp0pPXxZzyRvH1CugnoHjT2pSmWWreRTlLVHh/6BIxHQvZM+Y+EERk6yTJyy3QHNj+baR6yRMJE4Fb20vgi/jy3wt2GSZpBgLgMbHYdPhqBSxJ+YuJGEZQ2GI4QonPyeVRmoGdvYYUxSoqhoGFkVR0pwGKI+LokRZ1ljUSyzqJaqqRlXWPKlb0XJNS/kQDG11cHp+hmp5Qvkn6Ze5j/tWbjC8KuctTLqtw1H3nPKYsPkJRZkzSb/hXlhrcX5xgfOLc17GKNsxl1gsFnj27AIvX77Cxx9/jE8//RQff/wJXr58hfOLC1Q1fU+h5KWoi7rGi+fPUbyjN7SV+aLCr0xwhxZc1oDvR3kSk9t57LyV+IeAs9MzvHr1ilfmxM8jWktzKtZa1LLccVHzsJm8x1CSKQq8fPkSL1++5OmOsCMT82NFOYxO7n5wpMWZF20uEOlxYlfG54/BZKtmICtrIruHI44MIw9g5C49zu2mZO7kMHEion9fOQ38ktjqdoW//OVLXF1dwjv6NJ/Mq9AGcPRRmnx8X75PfHJyio8++gjPnj+nl532ttHyAhge7uQ+CUzp8y8PMD/exX1zWTnEocldFf4PjrQ486LNH7L8OCF3uo893rwfjo3sYXtvK/wINKlLb/J2ePPmDa6urnB7e9vvCkovafEeOryFM73tu8SrVy/x4sVLVIslSt7Df5pd5x8Dh/M58pjT8XRR4Z8dKvy7OWzvrYUfgO9o62FY/tpU26JtaOfR1WpNK3d4b/yqLHFyctJv8VBVtPvncCsDiVFKfvyYOJzPkcecjqeLCv/syIszPc4fsvw4IfdmH3u8eT/cJbL77T6E8MsC+66TD6jQB1ocf0UL8glMfmHNglYTWdmHx/PWGIPW/q7fj5H9eTzksaflaaLCryi7kDv/nWrP1N5F9+GtqiJlZhwS/n0zRoqivDUq1srjQ4VfURRlZqjwK/PlvY2eSEBvaxTlYVDhV5R3Si7e9zWK8nCo8CuKoswMFX5FUZSZocKvKIoyM1T4FUVRZoYKv6K8T+TV4EAbugXHxnvA8xfCxCjKO0Lf3H3S5EX3Q63+yOMxxQ8Vtx8YebyMgXe0cVvXdfCdG+SaMabfmdMWtHOnZFkIYfxtmgF7Lyoz5NCbuyr8T5HA/4y2w5UN8O/BPZ3drXk6vw6mdx0AYL3eYLO+RdPQDp1d52HlC2As/Iu6xmKxwOnZGerFgi6lH5Dvsy/fCjsvvPxYmRsq/B8iKvxPBtc2WK3X+O7bb9F1HUpLX9ey1lJRhdgriFs0V1ienGB5ctLbBZJWv6EeRCQvvPxYmRuHhH9+T6LygNxF9GdEny0Bq9UKl2/eAADqqoI1BmVRoCoL1EVBH7MvbG8QAtpmi8vLN7i8fIO2bRGCPzDUoyh3Q1v8jxgpmv6Zlx+ei8yEpNv/vpXhrreNyeKYuL/fLTjmUagjNeO9c1jf3uLm+gZN28AaarUD1Kq3vDWzDOOAf3v+gpcp6KPqdVnj/OIcy5NT/tB9mCjq0Yk7cMjtA5XNDoIPMNbyl8vo9zFkT8ZejrP1YXGoxa/C/0jpug4hBPpaE4t7KhI9afHd+Q7fIcQHSbcazgV9F7vs3SXcYwmUZz8Q3nVY3dzg6uoSwYMFm/bXLwoSO/rUYkAILskDw3v3e5iCPrfovMdiscSL5y/oAy2gCs4Y+k7vdJ7iiHylz0AC2T0E8l/+9r6btPz4Pgy8CinF0DcG5PeAECiofmhLKrmSy4vvq9zdBAEGYWfahxxXlXxYqPA/QUIIcM7BOYfgPdqmRde1aJotvPeDD3S0my2c4y8+4Y5D/MbAgL4FS/OMNNl4UDRNJvwHApVv7srf/oMjvZTsd38MFHU7TMsPQAgBzXaN7WYD7wPqahGF3wAmeLRdi6bZoGlbnvwNMNbwx9eXMMYiGANjLXwI6DqHk+VZkr40jXScx2GsyNN4HwbfSDZIPwAjYbGxhnsukt8Ufu+W41EUFM+cAPBnKen+oR6OgzEW9aJGvVjwfMZhVPj3o8L/RPHe4/b2Ft9+8w1urq550o++zWqMpectAPA+tqDYba7DAUkra3iJCPTFJ7ISBg/z+PYI+1v8IvJJWGLDGAtjRUhYQKJLthzd74Qv5lETwYvpeD8EL+EGuLbDZrNGWRW4OH+Gqqz6CIfg0Gw3WK1vsdmssW3WcCz81licnp3j2bPnWCwWMKYArEXgZ805DxoNIQE2kK94jdOZ50uuwdKDBDfYR3lt4r0g5S/fCZbwpoRdKMty53XnHIK0/BHQti0QgMVygZevXuPi4pyXs6Z3kBD9pByfDiNHhX+MCv8jpdls8fnnn+Py8g3OT05R1zXKqoDlVh9Aq3ps0j7f1wry3vHQwnRxexb/KehBTa8O16AjxLFZI8MD8uD37gwKU8By6xEcZkoIob9md7RmAcD3pyheEre0BWwMqZcZxX1M9O/uhBAQnIfrHDrXoWtbNJs1licneP7sGQpZkw/AeY+bm2tcXn6H7XYD5zuuREVcS7x48RLPLp6hrGrAGBhbIHh63pqmBWCwWCz6YR9qNft+2CTA8BRQ7BWQoTD66jbQUE9fOvI5SCo8PhvzTfI50JcjByK8j7z48vL03qPrOjjncHp6ho8//ojmM2yRNTAwkHAS/uNQ4R8zxzx59ATvcXV1hWa7xWKxRFVXKMsyEf37QIJMYiCPTWLMbmMsYAuTGFqSeBdTFgVsYWgt+lT4vQAeESe5ltkPwSMEB+87ONfBeQfvHcI+vyb8uZcxgfNZ/gppOBS/rqOhu9yu93TNB0/aDOlNiGCm9um3tZbzmD7SXpUFypJ+F0WJorCwloaSYm8LMJYmmQtbRMP+xHITP0qUJb1cVtf0Ny/fY421u4zFdrvFer1B8G7cbVEeFBX+R0iz3eLyzRt471FXJYkmP7RvReKefkbh4sGeI03EsPhYY3ojrX6qaDjeBjw4wWYkuMP4jK8fvhaCh/PU8na+i6I/Vam8AxOCo8oHPPEpaQqJAZ3vD/tcJOOcRwiUpyL1scdC5Zf3wIwxA6Gm+yXtGYImkYNDgOf8EBPjJH+GPYXU2N7IR+QPmdTNcI4iGrm3u67DanUL5/KWvvLQqPA/CsLgYby9vcFms4a18kAXLJ4BMB4GngZ14rO/HxOyVj4ReBK5aRo02y22mw22mw2NKXcdDyEMh1JyEwWGr4d0wlgMiX7ql/cUNr3FSl19x1sakB1yuxfxH4DrHDabDda3K2xWK/q7XrF/ucMhdiC9h0ntin1KG01cekcTuM45uOB743kStywrTpuBMSWbAt4BzgV4F0AjN7Siyxia6DXGwEsYXDaQijcRWangQ6D5A9e12KxXWK1X2G43aNsGnevguTIYVE7es+FrOwzdg0eYQKZ3x8diaBaDBiitAda3KzRtG3M6SC4PpSovg11GBW4azZdHRggB2+0Wzjvqphe9tAxE+25Qqy8XfWphrXB5eYmry0tcXV3h6uoKN9fX2Gy38M7RKiJa7DN+qAY9CPrNsg87MNGuVDZd12G73eD29haXl2/w5s33uLy8xGq1Qts2g3HrQ7iuw3azwermFjfX17i+usb11RWur66xXq+TymQ3kqZjiXkQe08hhH6pZrNtsN1u0DmaW6E5lIC6XODi4gJnF+coioKELZBELZcnOD05RVVVo0dT/O3/9ls5xLxPU0GVg0PbNlivbnFzfYXryze4vn6Dm9trbDbrfrhpkO4g/9D5tzX9fdt3ccbGJrNTbdtidXPDk95Dn3LysKaMMo0K/yOkabbw3vGdKy39/cJ1DNYaWAtYGwA4dK5B02yw2azQdg2ca+EcLTVcr2/RNFuE0MEawFoaF5ZJwpS+ZS+tzh2PnDEsiu0Wm80K19dXuLz8Ht9++w2++eZrfPfdt7i6eoP1egXvqbU6HJYYG+dpFc16fYPNZoXNZoX15rY3t7fXWG9u0XYtD3PQ1geklWP/AE/LVfeZgX0RMBq/D+zeuRab7Rpd27JAB8AY2LrE6fkZXrx8ifOL5zg5O8PJ2RnOzi/w6qOPcfH8BYqy5l6K7Q3t8UO9MCAd/pkg0D8hAJvNGpeX37N5g2+//Qbfv/keN9dX2G43R1eub0Ma1zzeVA6xd9d1HS6vLtF2tMeR8m5Q4X8UcPtEetvcOpJhDH6S3xJqkXr233naCrgsCywWNZqmwYqHA9abNYnpZo2u7XicnJnW9KMwxgKBVnGsVyt8//33uLm5QdM0aLsW2+0Gq9Utt9JpkjMXCgBAoN5ACDSs0jQNttsG2+0WTbNF2zRomwbNtsF6vcJ6RevqXRffd3gb9mcBVW6d67DdbrFtGqrE2Z01FrYosVye4NXr1/jkk0/xySef4qOPP6a9ecqSVkglPSTvPbbbLdq2HQ1/GcOrc2SoiXsWFBPqPV5dXePm+gY3Nze4vrrCzdUVble32KzXaNsOwQcE7/sK/H0SqD4chLtZb+Da7mFue2USFf7HAt/km/Uam9UaADXyreHBk3RxiDjhUQLPJl+/n9IPDbCQpsvorm9usFqtsNls2Wyw5aGeKZWbEgga5uCJzR0YtgMXsFmv4bsOrm1pCwrn+TqthbewsIGGigQRN/SLZKQlDfhA4tg0Ddq2Y9Oi2WxhQkBpLQpD/kk+Wv5vPAG53yCbrCyMQWkLlDYuV3XOY7PZYLNaYbumSifwvIZzDt4HWJ6UraoSVVmhLGjllvQinHNYr9e4vr7CarWCMbKefjy/QvlPeULFTMNBTdNis+GXxbyDQaAK9mZFAtvxGD83MiwAG8g8BH1vMDHoyzIGYozsWVSgaZvJVU/Kw6HC/1gw9E/TNOj4pRY5PaG990J0n0QioG07XF/f4PbmlnoA/DC2bYfNeoMQAoqihD3ybcr9kN/GGJQlLeFr2xbOxQ3ImqaBdw6LRc0vquUp55Zs38Il8bTWom1aGvumkOg/ngS11tJ7EP2k6kMSRVhW1RhjEZI5lOvra6xvV2i3Db+NzZVvCPDB9y81gdPWdR22TYP1eo31eo3b2xWcc/2STRqyowldcZMa6S1aY1FVFRb1EmVZoSgsqqqGNRbNtkXTdPzm7iBBPwCch8b2L391Xdvnk/LwPMQTrbw1ceKrbZp+fDOEQA9mbv2eUIsra101JEYpZVni5PQUi8WCJiAPMBSeOAwTTSLUlsTo5OQE5+cXWC4XAO9Rc3JyQhOfZ+eD1uwh6rrG2dkZvdiUrBmv6grPnz/HCW9vjH71CC07BaRlvGNI6Uii8BcoSzIACfhms8HNzS2urq9wfXtDK2uaLToer/e8Z4+s1mm7FpvtFuvVCqvVCqvVLVarFcDlEtfCU/5M5lHfugYWiwXOzilvrC37F71tESsOIGkV/ABQRUZzREVBLyk2TTd6wU95OIp//dd//df85DGIWBwjDMoBAj94xuDyzRtcXl6isNT6oZdrxg+4DOsMz0+IAOR00rJLrDVNC+9JeIqiRF1VODs7x+tXr3BycorS0qv6cYgp6YOExC/poSR+jzXJAMaScBUWi8USRVECMKjqGs+ePcfz5y9wcnpKLefEWfyRhM8U3KK3tkBZVlgsFlguljg5OcWzZy+wWNL+N8ZYfsM4vlHQe3to+WhyKW8tmeSN6RAC2q7Ddktv2jrn4Dy16p3z6DoH18XlmCT+AZ6vbbdbbNZbrFYbGqJptrRXz8kJTk6k5S4vQ8UWfxobec/BIFZKxpi+/Ot6gfPzC1ycX+Dk9BS2pLwe7Yy5Lz/eAdbYfniqWtS4uLiAtUVe3MoRrNdrnJyc5Kd7dMuGRwG1tkII+PMXX+CvX36Juq6xXC7pTcn0wx0Ze8UqQURGituzGDVNg+vra2y3G1QVfQFqsaixXJ70fkvLMg9L/CJRib8FaXWOoZPee7QtjUEbY1DXNQv4/ta+rESRDcYkXTKuTXEJMNmLRsN08LDIUYzTPibAOUrPanVLQ2i3t/2SWPA+/EVJL1rRZxZpWKj3IdDeNTQE5uAdbY2xXC7w/PkLnJ+f961+Guun9oKs9BGkPAK/TOa9Q7PdYr1ZoWkaVGWFxeIEVV2jLKreTZFMKsu5t4XicWQ+B0PDj7c3ODs/w0//5meoqlqF/x4c2rJBhf/RQC2/L7/4E/765V/oM3zLJRZ1jZK75W8r/HHYZfhA0sc++BX+iR5cKvppeFPCn9sZ/k7PyXkezuLw0+GHXbfmlPDT+XEchmI/hE6N4zdm2n1OCNRqJ/Hnsf3VCi2/DCfCKvmc57V3Ds7T5K8xNK1dlCVevnyBi4tnPE9BFYe1NI8wJaxR+OWrXVT2znVouw7G0FYNVOlI5TycLBZ/3pap+O0ieMA5j5v1CovFAn/ztz8nfXn7aMyOQ8Kf91qVHwy6u0Pgnw/w0OXkImh4VYkMI8iYfmpP7MrDO/UQxxZ3tJP/HrqL4Rue0JP9Xx5CbHJCP6QiQy5i4pDLVLrujkFZllgsFjg5OcHp6SnKquKWuUfnHDpu0Tc8ebta3eL2lsxqvcZ2s0Xb8gfZ+XsMZ2dnSU9oOKm7i1h29JeGwWos6iWqqhps7R3FP5bVdLkNye3ts5tD9odzQc7TCqPCSkPieP+Uu6HC/4hwHS1BFI55kOJDNxS2riPxEONkyKEXgijoMRxeDdJv5hUFWuym4U6dS00qqnRMJo3jVFylZ5LGIQ7N0BCOrJwRv2StPLIKLjVT16bifazJwyNhpuPlcoGXL1/io48+4mEz+sCKhCdlLSIveRG4lV6WJS4uLvD69Wsslyf9EI8xZjBkNxUn+RvTKIbLMmCw9je6n77n6Nqwkpyyh6n4BN5ahH+D3x8xcj51y0N/XUf36o4glAdAhf8RIQ9Y/4Um73nTLjI5uYDtayyTvdhS9D5ugUxhiTDLfuljcYtux61kEb7U0M6Q+02aBsOrjUjY80qHwgmBzknY9HcoWrlbIQ/reI5XIOrBxEnm169f40c/+hFev36Nul5wS3ss2jJcVZQFloslnj17hk8++RivX7/G6Slt4yATupKv8Tjd/VKO0zyOFRKZmMcxL8YVAdcQffzShkWsfFIjeRCHs2gnV4uC36MwhqbCIUtu0yXGgRaNdF3bf6dAeTfoGP8jotlu8Kc/fo5vvvqaJ/8qGuuvaQ22KWhMFomIUes8Hxcft8jiQzXefI1tsKgmpxhaPkjhkFuqKKbEMz236/cxpHFLBVLSHXi9u3OUniho9xF2yc/8LJEL4/D8+G+OMQbr9RqXl5dYr+JyTnl3Aux7Vdc4Pz/Hy5cvec/9AlVV0coWoBfCvLzTvKIoxPiM85HKLr8/MCqvmO5x+kSwx40RguxJeNSyH1YOYs8n+dp1DttNg/V2g3qxwD/8l3/Ecrlk/6bzVpnm0Bi/Cv+jIaBrW3z55z/jL1/+uX+Zpa5rLKoShSXh7/fBMdxmyrrnu4pTzotQeH5zN79usyV98rBL6xzJmL6Q+p2SC2F+vA/yK6ZP/BY/JA0yPJJeyyvDY0gFc4p9cReBpb+5GFKFIpO+/dBW29IGbslWCYvFgve8r/vPF1reJ1/s0DmZhKde2pSg5kgckd0DlK40/6LbcZrTcPJrVBGEQC8HUhj0joLx9HY1xT+9l4YfDnLOo+0cmq5FWVX47Je/zJYkpmGOw1ciKvxPAnl4Db777jv85t//HdvNBlVZ8dbMvNVA+iAa0HdZRw/nNPKwp8VteDlgen7X7SDh5NcPHafx23ftLuT+5AzTeHwYd7ErDPNt3JImYR7HOeY5lbuIYuy1kL102IuOSfhpKSiJZ1pBpv6L3ynD8oitfwp7KKzH5Ede0QWfSjlVBDKMJf5R+sRWrKBlF1PZ8vRX//QvOD097a8PkbQrU6jwPxlosHO72eC3v/4Nvvn6axoPDgF2MAsWH5oweljHxwIJTdpSJ3+iQKAXD/Ji2MUXMx4mItER8ttpKDT3utVGiD8x/pE8/fnxPu5iV0jzIo2L5KucyuMpxLyW8GMcpuIj52hyPpYLRmGMK6GxmEvLX4bQEptZXHaxX/gpD4wxCLz1cgBPLgPs/9C28w4uBLx8+RK//G+/4qGe1H5Kepxfmzcq/E8GnjT1Hl//7//Ab379v3Bzc4PlyQkM4gfV+xucnx8RDmS/c0SgUtGU87lARTHa7VesLFLhH1YC5E3yYN/vVhuRpiHGl8gFK0/DrjjkwheZPNnblfSLv8O8Ycshbrsx8C0JcBz28ESaDvktp+Kk/VCEpwU9nR+I70Ogr0yE3eUfGVYukg8SgjF0vR8+NLRSZzQaxjgf4HxAWVf4xS/+AT/+6U+ydx12Dd8Ny1xR4X9C8EMUArquxb/9z3/DHz//HIW1scXfP/DxJrc23f2+32iejgyfSxg8qLxPTAjx9f7+Wm6Xx7Dld2T44A+UHxisF8833RquJT+e3h9DPaLxmvT8mH7tu9WN2fEVgUz8jKEkS76RGb85K+RBDnybKB8iy1NmlxDn5/Nyyq+nHMqTu9CHJ9/9MbuXf8rhoCICbRvx+qPX+Oy//jdcPLuIDgAV/jugwv8ApDduPvn5MITBww4Y/OmPf8T//B//A+vVCmVBy/H6q8lBum0xMNyaOX9wh4JElUzcCGvqNhD71KplnSW7U9YnhKQXIbo4uIYdYntwW7qRN4NEJ3k1rAQobrv8ziuM/aSiT3/jtX3+DC8l6Tf9P33ZBO4phKTSnSK/lgWRn+khZ7vy5275kRJHJsm/vGKMmIGYBxOwWCzxi3/8B/z4pz/lL5Gl7Hr2zM40zhUV/gcgJCsg3ovwB4Pr60v8v//9v+O7b79DXZeDzxymRTZ6CSa5/w89uKk/Uw9n3nIU8pb7QyOrlY7BZOk0xgw0IF/6+BDCn/pDIs0fz7kjZkfFJ35J5XIXDqXh0HUJ75C9XYgEGzkAVTC7K69YPp1zePHyJf7l//5/8Pzl87yzpcJ/Bw4J/66cVBIMb23wbkR/TAgOdU2v/Z+cnvDHOe6OCMcuA5avXdKSXpPfd9ShO3PXMO5g9QB38ekudncTuMeVm7yM7kJexrmRF7HSSfr02tTvYw0kZ6jDMsgneWlsKNAmeZmMlqg+f/EcyyVtczFkdEJ5C+6nKMoDY7go2PDr/c553pZ2eN2YojewqTm+OAP4y13gveBhxyYYMoPfcdmdiFTK4NrgyvDaLpP6lwtLbsTOyA8vhiYSxTwMMdzgj2ntZ2V7hKGyjX/z62OzWxRNsiJrusUdye3uN/Ee7JegSkysAQrT35Mi7IHvif5eCvTlNPmvqhd49vwFyrJGCIfSmOZrfk05hM1PKI+AQG/LLpcLWgO9T1cejCMDmbAWEjO8wGPUU9cOcncX7xWe5nh3sRQxywV3yuwW7Zx9194a8bvf6ylv5cd5Jcm3tBIvqhKLxQmsLVTK3zEq/I8QYy3KssKPfvxjLBeLgw/zQxCSF7nSh5GuJed59ZEYaaXnbiCCv+PaPsj+OD65P3fx8yHZFR9lF3LP7m+dV2WJerGA5beSlXeHTu4+Sqhl5LzDl1/8GZ//4Q/4/vvv+u5y/+iY+HzEyd/p4kzkEpBtsgwrPgLCxGb/UsnktwjtsEItTWC4hHQnvUhSU5l8jF+FGkLCL29+Ds6lws9/JZ4SH2N40tQYGNAe+DHPKP1EFjjnwSA5Sb4a2efee/7OO7mfTEIfCrs3tCQqtZvma1qhG/ZzlO878pkm5nfFYnc4Qh6OIBPjfb5Cvu6F0f1isnwLSVgx92OLX/wUb2xR4NNPPsU/fvZLPH/xXG7TPZhDFmbNocldFf5HSRyQ9s7h66++xuef/wHOeVQVfapQWNY1in4Tr+kHW94ATgWQvs2U2EncpfvyyDUj2w7DoLCyHw4/fBNhjuCvYw3e/A3Jx0Qy4ZJKIgTaU6htm9gLSN4/cI72wBHho90jaQVWCEDXdr2IUphJL4X3uaFtC8hP8O6fkiRrLccttu7pRbs8rgmGRDLd3toY+qZsCm3ARuckft6RiMu8QZ8/aYWfw2JskgrPJuEN4pCYoboGBM8NAg5b7pa0l0cfDOIXsTjZg/TzV8RCf7/RKqsYCr0/Im4cQq8hP//5z/FfPvsM9WIR/duJCv8+VPifJKmqAM51WK026NoGtihQJm8zFgORHi5ljKd4awN5oGWPnlTwDfixpAMSERJ10nfLvQp6+MVJL/4HIZEJIHGgkCwHmahIH4soNCHQZw3laujFxiB4+sCJQHMiZDcA8N1w0rgXUu/RNA1CPyHseFtq38cxEmLeGAC0c1JfQcR8krwU4TWwnG8m24Ya/KlDEefAeRICz+lIPAEE7/pKL5aRhCv1boBJ/Qd/Q5ffv5AwxUF/x/RlQT4iTbqkRz5pCcReWKBlvRInceNDQLPdUjkYKp/Ndtt7utlu0Db0zQnPLytWVYWTkxP8nz/6ET799NNRBTnNsffdPFHhf5JE4Q/S0jOWBIBboXTTk2Cmb7LufRTSi3mp834qYqn/t3cjDkK2RGaisplELKUPNachj4xsbIYAY/K9osVNyq4IJOKQ3eaB81YqkD4v5WqvdHxGhicMAPlkIWy0m8Nl0VcG0utKKqE4lBLj35dBb0/sJmnJCIG+XEVQhYPEX4o7u42JEOfZb/bH82Zpu673Sab4ciwpBYM9oaQypmPvY28GoN1MDQxsYVGVvGR6UN67yNOgpKjwP0kOrT1Mbvi89PY+C/nF3HHKkdeiNh1JIvw7H/CscjH77GIiXSm5aKWRzVqWo3TwiQAqk15rckHsm8PZedC13tqwMokt8KF1GLGSerqnguUKq788mY4Jx9ILkIH2gZWQvQ2Y512aB/m1Y1rsQupuFPE9cN4pkxwS/ruUkPIYSVtwI3FMrk0+JPuu7eOQv7s41m5uLz9+X0i+ZsdTDLIjORj1VvLryeWRFXZvJuylJMNHMIZa6gNjJ85loo9EvwOG56cI7HZKqwf+HDDDg0lyJ7ttKseiwv8h0AvOD4A8/0cZWsUhJtW/3IzsvQ8m4pHG5+h4pG6z8z9IuvYxkdZJk3PstUPmCHLRV/F/e1T4Pzju+FT13Nfdu6F/G3TUi3lbJI13ufUlHrmha2OTE89Lmh4+Xe+aXWkT5Ppd8hVZTai8L+5YSoryvjgkNPdhnzgfQibUc4Md54R9154au9LwNun7kPLn6aDCryiKMjNU+B8l2vJRFOXdocs5lbfkLrePVmiK8j7Q5ZzKOyYfo91nFEV5DKjwK4qizAwVfkVRlJmhwq8oijIzVPgVRVFmhgq/oijKzFDhVxRFmRkq/IqiKDNDhV9RFGVmqPAriqLMDBV+RVGUmaHCryiKMjNU+BVFUWaGCr+iKMrMUOFXFEWZGSr8iqIoM0OFX1EUZWao8CuKoswMFX5FUZSZocKvKIoyM1T4FUVRZoYKv6IoysxQ4VcURZkZKvyKoigzQ4VfURRlZqjwK4qizAwVfkVRlJmhwq8oijIzVPgVRVFmhgq/oijKzFDhVxRFmRkq/IqiKDNDhV9RFGVmqPAriqLMDBV+RVGUmaHCryiKMjNU+BVFUWaGCr+iKMrMUOFXFEWZGSr8iqIoM0OFX1EUZWao8CuKoswMFX5FUZSZocKvKIoyM1T4FUVRZoYKv6IoysxQ4VcURZkZKvyKoigzQ4VfURRlZqjwK4qizAwVfkVRlJmhwq8oijIzVPgVRVFmhgq/oijKzFDhVxRFmRkq/IqiKDNDhV9RFGVmqPAriqLMDBV+RVGUmaHCryiKMjNU+BVFUWaGCr+iKMrMUOFXFEWZGSr8iqIoM0OFX1EUZWao8CuKoswMFX5FUZSZ8f8D8G7WLWKzkOQAAAAASUVORK5CYII=",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:06:28.150Z",
    "updatedAt": "2026-10-10T12:06:28.150Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca2a9a93039285f51a5ebb",
    "name": "LOUVERS",
    "sku": "29",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "LOUVERS",
    "shortDescription": "Specification -\nFIXED ( FLAT)\nColour - WHITE\nPacking Qty - 1000",
    "fullDescription": "",
    "mainImage": "data:image/png;base64,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",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:07:54.857Z",
    "updatedAt": "2026-10-10T12:07:54.857Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca2b5193039285f51a5ece",
    "name": "ADJUSTABLE LOUVERS",
    "sku": "30",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "ADJUSTABLE LOUVERS",
    "shortDescription": "Specification -\n3,4,5,6,7,8,9 BLADES\nColour - WHITE / IVORY",
    "fullDescription": "",
    "mainImage": "/products/adjustable_louvers_1a5ece.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:10:57.670Z",
    "updatedAt": "2026-10-10T12:10:57.670Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca2c2693039285f51a5ed5",
    "name": "JUMP ARRESTER",
    "sku": "31",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "JUMP ARRESTER",
    "shortDescription": "Specification -\nLenght - 62mm\nWidth - 10mm\nHeight - 10mm\nColour - GREY\nPacking Qty - 500",
    "fullDescription": "",
    "mainImage": "/products/jump_arrester_1a5ed5.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:14:30.645Z",
    "updatedAt": "2026-10-10T12:14:30.645Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca2c8d93039285f51a5edc",
    "name": "SPACER BLOCK PLASTIC",
    "sku": "32",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "SPACER BLOCK PLASTIC",
    "shortDescription": "Specification -\n14mm or 20mm\nsliding window\nColour - WHITE/BROWN\nPacking Qty - 500",
    "fullDescription": "",
    "mainImage": "/products/spacer_block_plastic_1a5edc.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:16:13.578Z",
    "updatedAt": "2026-10-10T12:16:13.578Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca2ce593039285f51a5ee3",
    "name": "SPACER BLOCK RUBBER",
    "sku": "33",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "SPACER BLOCK RUBBER",
    "shortDescription": "Specification -\n14mm or 20mm\nsliding window/door\nColour - WHITE/BROWN\nPacking Qty - 500",
    "fullDescription": "",
    "mainImage": "/products/spacer_block_rubber_1a5ee3.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:17:41.196Z",
    "updatedAt": "2026-10-10T12:17:41.196Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca2d5793039285f51a5eea",
    "name": "PVC bump stopper SMALL",
    "sku": "34",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "PVC bump stopper SMALL",
    "shortDescription": "Specification -\nsliding window LG profile\nColour - WHITE\nPacking Qty - 300",
    "fullDescription": "",
    "mainImage": "/products/pvc_bump_stopper_small_1a5eea.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:19:35.850Z",
    "updatedAt": "2026-10-10T12:19:35.850Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca2dbe93039285f51a5ef1",
    "name": "PVC bump stopper BIG",
    "sku": "35",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "PVC bump stopper BIG",
    "shortDescription": "Specification -\nsliding door LG Profile\nColour - WHITE\nPacking Qty - 300",
    "fullDescription": "",
    "mainImage": "/products/pvc_bump_stopper_big_1a5ef1.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:21:18.136Z",
    "updatedAt": "2026-10-10T12:21:18.136Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca2e1f93039285f51a5ef8",
    "name": "ANTI LIFT SMALL",
    "sku": "36",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "ANTI LIFT SMALL",
    "shortDescription": "Specification -\nLenght - 120mm\nWidth - 30mm\nHeight -08mm\nColour - WHITE\nPacking Qty - 100\n\n",
    "fullDescription": "",
    "mainImage": "/products/anti_lift_small_1a5f1f.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:22:55.405Z",
    "updatedAt": "2026-10-10T12:22:55.405Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca2e8f93039285f51a5f0b",
    "name": "ANTI LIFT SMALL",
    "sku": "37",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "ANTI LIFT SMALL",
    "shortDescription": "Specification -\nLenght - 95mm\nWidth - 30mm\nHeight -12mm\nColour - WHITE/BLACK\nPacking Qty - 100",
    "fullDescription": "",
    "mainImage": "data:image/png;base64,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",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:24:47.259Z",
    "updatedAt": "2026-10-10T12:25:54.901Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca2ef493039285f51a5f18",
    "name": "ANTI LIFT SMALL",
    "sku": "38",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "ANTI LIFT SMALL",
    "shortDescription": "Specification -\nAluplast\nColour - WHITE\nPacking Qty - 100",
    "fullDescription": "",
    "mainImage": "data:image/png;base64,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",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:26:28.339Z",
    "updatedAt": "2026-10-10T12:26:28.339Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca2f5193039285f51a5f1f",
    "name": "ANTI LIFT SMALL",
    "sku": "39",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "ANTI LIFT SMALL",
    "shortDescription": "Specification -\nLenght - 95mm\nWidth - 36mm\nHeight -12mm\nColour - WHITE\nPacking Qty - 100",
    "fullDescription": "",
    "mainImage": "data:image/png;base64,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",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:28:01.535Z",
    "updatedAt": "2026-10-10T12:28:01.535Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca2fc593039285f51a5f26",
    "name": "ANTI LIFT (REHAU)",
    "sku": "40",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "ANTI LIFT (REHAU)",
    "shortDescription": "Specification -\nLenght - 140mm\nWidth - 17mm\nHeight -10mm\nColour - WHITE\nPacking Qty - 100",
    "fullDescription": "",
    "mainImage": "/products/anti_lift_rehau_1a5f2d.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:29:57.448Z",
    "updatedAt": "2026-10-10T12:29:57.448Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca302293039285f51a5f2d",
    "name": "ANTI LIFT (REHAU)",
    "sku": "41",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "ANTI LIFT (REHAU)",
    "shortDescription": "Specification -\nLenght - 140mm\nWidth - 25mm\nHeight -12mm\nColour - WHITE\nPacking Qty - 100",
    "fullDescription": "",
    "mainImage": "data:image/png;base64,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",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:31:30.641Z",
    "updatedAt": "2026-10-10T12:31:30.641Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca306993039285f51a5f34",
    "name": "ANTI LIFT LHS AND RHS",
    "sku": "42",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "ANTI LIFT LHS AND RHS",
    "shortDescription": "Specification -\nHEIGHT - 6MM\nWIDTH - 34mm\nColour - WHITE\nPacking Qty - 100",
    "fullDescription": "",
    "mainImage": "/products/anti_lift_lhs_and_rhs_1a5f34.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:32:41.416Z",
    "updatedAt": "2026-10-10T12:32:41.416Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca30bd93039285f51a5f3b",
    "name": "ANTI LIFT OUTER FRAME BIG",
    "sku": "43",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "ANTI LIFT OUTER FRAME BIG",
    "shortDescription": "Specification -\nL131mm\nW34mm\nH13mm\nColour - WHITE\nPacking Qty - 100",
    "fullDescription": "",
    "mainImage": "/products/anti_lift_outer_frame_big_1a5f3b.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:34:05.704Z",
    "updatedAt": "2026-10-10T12:34:05.704Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca312593039285f51a5f43",
    "name": "CASEMENT WEDGE BIG",
    "sku": "44",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "CASEMENT WEDGE BIG",
    "shortDescription": "Specification-\nWidth- 32mm\nHeight - 13mm\nColour - WHITE\nPacking Qty - 500",
    "fullDescription": "",
    "mainImage": "/products/casement_wedge_big_1a5f43.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:35:49.924Z",
    "updatedAt": "2026-10-10T12:35:49.924Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca317093039285f51a5f4a",
    "name": "CAVITY BLOCK",
    "sku": "45",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "CAVITY BLOCK",
    "shortDescription": "Colour - WHITE\nPacking Qty - 100",
    "fullDescription": "",
    "mainImage": "/products/cavity_block_1a5f4a.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:37:04.050Z",
    "updatedAt": "2026-10-10T12:37:04.050Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca31c793039285f51a5f51",
    "name": "NYLON ANCHOR",
    "sku": "46",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "NYLON ANCHOR",
    "shortDescription": "Specification-\n8 * 100 or 8 * 80\nColour - GREY\nPacking Qty - 100 and 140",
    "fullDescription": "",
    "mainImage": "/products/nylon_anchor_1a5f51.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:38:31.116Z",
    "updatedAt": "2026-10-10T12:38:31.116Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca323d93039285f51a5f64",
    "name": "MECHANICAL JOINT SLIDING",
    "sku": "47",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "brand": "MECHANICAL JOINT SLIDING",
    "shortDescription": "Specification-\n16x60\n30x30\nColour - METAL\nPacking Qty - 100 ",
    "fullDescription": "",
    "mainImage": "/products/mechanical_joint_sliding_1a5f64.png",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:40:29.088Z",
    "updatedAt": "2026-10-10T12:40:29.088Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca33db93039285f51a5f9c",
    "name": "16MM Single roller (Flat and Groove)",
    "sku": "48",
    "category": {
      "_id": "6aca329f93039285f51a5f8a",
      "name": "Roller"
    },
    "subCategory": null,
    "brand": "16MM Single roller (Flat and Groove)",
    "shortDescription": "16MM Single Roller (Flat and Groove) is designed for smooth and precise rolling, offering durability, reliable performance, and versatility for industrial applications.",
    "fullDescription": "Size: 16 mm\n\n\n\nType: Single Roller\n\n\n\nSurface Profile: Flat and Grooved\n\n\n\nMaterial: As per manufacturer specifications\n\n\n\nApplication: Industrial rolling and material handling\n\n\n\nFeatures: Durable construction and smooth operation",
    "mainImage": "/products/16mm_single_roller_flat_and_groove_1a5f9c.jpg",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:47:23.554Z",
    "updatedAt": "2026-10-10T12:47:23.554Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca34b393039285f51a5fd9",
    "name": "Double Wheel roller",
    "sku": "49",
    "category": {
      "_id": "6aca329f93039285f51a5f8a",
      "name": "Roller"
    },
    "subCategory": null,
    "brand": "Double Wheel roller",
    "shortDescription": "Designed for smooth and stable rolling, offering durable construction, reliable performance, and efficient operation for industrial applications.",
    "fullDescription": "Type: Double Wheel Roller\n\n\n\nDesign: Dual-wheel configuration\n\n\n\nMaterial: As per manufacturer specifications\n\n\n\nFeatures: Durable, stable, and wear-resistant\n\n\n\nApplication: Industrial rolling and material handling",
    "mainImage": "/products/double_wheel_roller_1a5fd9.jpg",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:50:59.999Z",
    "updatedAt": "2026-10-10T12:50:59.999Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca350f93039285f51a5fe0",
    "name": "Double well udjustable roller",
    "sku": "50",
    "category": {
      "_id": "6aca329f93039285f51a5f8a",
      "name": "Roller"
    },
    "subCategory": null,
    "brand": "Double well udjustable roller",
    "shortDescription": "Designed for smooth and precise rolling with an adjustable dual-wheel mechanism, providing flexibility, stability, and reliable performance for industrial applications.",
    "fullDescription": "Type: Double Wheel Adjustable Roller\n\n\n\nDesign: Dual-wheel with adjustable mechanism\n\n\n\nMaterial: As per manufacturer specifications\n\n\n\nFeatures: Adjustable, durable, and smooth operation\n\n\n\nApplication: Industrial rolling and material handling",
    "mainImage": "/products/double_well_udjustable_roller_1a5fe0.jpg",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:52:31.044Z",
    "updatedAt": "2026-10-10T12:52:31.044Z",
    "__v": 0
  },
  {
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "seo": {
      "metaTitle": "",
      "metaDescription": "",
      "metaKeywords": ""
    },
    "_id": "6aca356093039285f51a5fe7",
    "name": "Mesh roller",
    "sku": "51",
    "category": {
      "_id": "6aca329f93039285f51a5f8a",
      "name": "Roller"
    },
    "subCategory": null,
    "brand": "Mesh roller ",
    "shortDescription": "Designed for smooth and efficient mesh handling, offering durable construction, reliable performance, and consistent operation for industrial applications.",
    "fullDescription": "Type: Mesh Roller\n\n\n\nMaterial: As per manufacturer specifications\n\n\n\nDesign: Mesh-compatible roller\n\n\n\nFeatures: Durable, wear-resistant, and easy to operate\n\n\n\nApplication: Industrial mesh handling and rolling",
    "mainImage": "/products/mesh_roller_1a5fe7.jpg",
    "gallery": [],
    "isFeatured": false,
    "isNewProduct": false,
    "status": "Active",
    "createdAt": "2026-10-10T12:53:52.269Z",
    "updatedAt": "2026-10-10T12:53:52.269Z",
    "__v": 0
  }
];

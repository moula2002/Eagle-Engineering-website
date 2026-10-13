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
    "_id": "6ac78fe55e1e58a06dec9bb8",
    "name": "ZINC FASTENERS",
    "category": {
      "_id": "6ac78e2b5e1e58a06dec9b5b",
      "name": "Roofing screws"
    },
    "subCategory": {
      "_id": "6ac78fbf5e1e58a06dec9bab",
      "name": "Zinc fasteners"
    },
    "sku": "1",
    "shortDescription": "Roofing screws are made of hardened carbon steel. They can be used for metal, plastic and fiberglass roofing applications. Different screw points can be used for both metal and wood structures. All the roofing screws must have a sealing washer attached, which helps against water penetration. This is the most obvious character of them.",
    "fullDescription": "FEATURES\nMade of hardened carbon steel, the zinc screws offer strong pullout strength to hold the roofing sheets\nSealing EPDM washers help against water penetration.\nCommonly with corrosion Zinc coating.\nDifferent drill points for different applications.\nSharp points for easy to screw in and damage a little.\nDrill points for screw in hard metal structure.\nAPPLICATIONS\nCommonly used to fasten metal, plastic, and fiberglass roofing sheets to metal or wood structures\nRetrofit Framing.\nResidential steel Frame Construction.",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/zinc_fasteners_ec9bb8.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6ac794d75e1e58a06dec9d97",
    "name": "CSK HEAD SCREWS",
    "category": {
      "_id": "6ac7947e5e1e58a06dec9d7d",
      "name": "CSK-Head-Screws"
    },
    "subCategory": null,
    "sku": "2",
    "shortDescription": "CSK Head Self Drilling screws are designed to be fitted without the need for a pre-drilled hole, and employs self-tapping threads enabling installation in one operation. This variant has a countersunk head with a pozi drive. The countersunk head is typically used in conjunction with a countersunk hole providing a flush, snag free fit.",
    "fullDescription": "FEATURES\nPrecise cutting edges to improve drill performance\nEasy to install, time saving, Minimizes labor\nAPPLICATIONS\nBest Choice for fastening on windows and door\nFrames purpose\nUsing in flat surface required",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/csk_head_screws_ec9d97.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca0059e751aa9cd10a6224",
    "name": "PAN HEAD SCREWS",
    "category": {
      "_id": "6ac9ff5be751aa9cd10a620a",
      "name": "Pan Head Screws"
    },
    "subCategory": null,
    "sku": "3",
    "shortDescription": "Pan head self-drilling screws are high strength and precision fasteners used for sheet metal applications. Their high hardness and strength combined with their lead threads allow for the perfect fastening of metal-to-metal. Since these are self-drilling screws, there is no necessity to drill a pilot hole. These screws are used in the exterior elements",
    "fullDescription": "FEATURES\nPrecise cutting edges to improve drill performance\nEasy to install, time saving, Minimizes labor\nAPPLICATIONS\nBrackets\nHVAC, Electrical trim accessories to steel framing\nResidential steel frame construction",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/pan_head_screws_0a6224.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca02e5e751aa9cd10a6277",
    "name": "TRUSS/BUTTON HEAD SCREWS",
    "category": {
      "_id": "6aca023ae751aa9cd10a625a",
      "name": "Truss Head Screw"
    },
    "subCategory": null,
    "sku": "4",
    "shortDescription": "Truss / Button head self-drilling screws are corrosion resistant, precision fasteners. As they are self-drilling screws, the need to drill a pilot hole is eliminated. However, its usage should be accompanied by a washer to make sure that the fastener does not move with constant usage. It also reduces the impact of surface-to-surface fastening on both the surfaces. Truss/ Button head screws are generally weaker than any other type of screws, but they are preferred in applications requiring low clearance above the head. They can also be modified to reduce the clearance even further, while also increasing the surface of bearing.",
    "fullDescription": "FEATURES\nNon-walking point provides fast material engagement.\nEasy to install, time saving, Minimizes labor\nAPPLICATIONS\nResidential steel frame Construction\nFor using in object like Polycarbonate sheet, Shadow cover\nConduit clips to steel",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/truss_button_head_screws_0a6277.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca180793039285f51a5b61",
    "name": "FRAME FIXING SCREWS",
    "category": {
      "_id": "6aca174d93039285f51a5b50",
      "name": "Frame Fixing Screws"
    },
    "subCategory": null,
    "sku": "5",
    "shortDescription": "Frame fixing screw consists of a screw with pozi head and a nylon wall plug attached with the screw which enables it for a quick and simple push through installation. The integral hammer in stop prevents the frame fixing anchor from jamming prematurely during installation. When the nail is driven in any wooden or metal structure the fixing is expanded and it is held by friction in the drill hole.",
    "fullDescription": "FEATURES\nDuring application the remains in the desired position due to the location groove inside the plug\nDesigned to prevent internal damage to the plug when the screw is applied\nWide screw diameter and thicker thread enhances the performance\nZinc plated and yellow passivated (3-5 microns)\nAPPLICATIONS\nA versatile and reliable fixing for attaching to brick, block, stone, masonry and concrete.\nWindow and door frame fixing.\nINSTALLATION",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/frame_fixing_screws_1a5b61.jpg",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca198093039285f51a5b9d",
    "name": "WEDGE ANCHORS",
    "category": {
      "_id": "6aca190593039285f51a5b85",
      "name": "Wedge Anchor"
    },
    "subCategory": null,
    "sku": "6",
    "shortDescription": "A wedge anchor is a type of expansion anchor that’s typically used to permanently anchor steel directly to solid concrete. It is assembled with a three-segment expansion clip and supplied complete with nut and washer. Expansion clip ensures uniform holding capacity that increases as tension is applied. The threaded stud version is available in six diameters and multiple lengths. Threaded studs are set by tightening the nut. Wedge anchors are best suited to static applications. If a mechanical anchor fails, it is usually in the form of pulling out a wedge of concrete, and for this reason, proper design looks at the depth of embedment and ensures that the bolts are not spaced too closely.",
    "fullDescription": "FEATURES\nQuick and easy to install\nFor use in cracked and non-cracked concrete\nFor medium-high loads\nWide range of lengths and diameters available: installation flexibility\nAPPLICATIONS\nSteel construction\nStaircases\nCable trays\nRoad signage\nINSTALLATION",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/wedge_anchors_1a5b9d.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca1a4b93039285f51a5bd2",
    "name": "CHIPBOARD SCREWS",
    "category": {
      "_id": "6aca1a0493039285f51a5bc1",
      "name": "Chipboard screws"
    },
    "subCategory": null,
    "sku": "7",
    "shortDescription": "Chipboard screws are self-tapping screws with thin shafts and coarse threads. They are made of carbon steel or stainless steel and then galvanized. Chipboard screws of different lengths can be used in a variety of applications. They are created to fasten low, medium and high density chipboard. Many chipboard screws are self-tapping, so there is no need to drill holes in advance.",
    "fullDescription": "FEATURES\nEasy to screw in\nHigh tensile strength\nAvoid cracking and splitting\nExcellent quality and high temperature treatment for resistance to snapping\nAPPLICATIONS\nBe widely used in structural steel industry, metal building industry, mechanical equipment industry, automobile industry, etc. Ideal for chipboards and wood, they are often used for cabinetry and for flooring.\nCommon length (around 4cm) chipboard screws are often used to join chipboard flooring to regular wood joists.\nSmall chipboard screws (around 1.5cm) can be used to fasten hinges to chipboard cabinetry.\nLong (around 13cm) chipboard screws can be used to fasten chipboard to chipboard when making cabinets.",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/chipboard_screws_1a5bd2.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca1b1793039285f51a5c07",
    "name": "DRYWALL SCREWS",
    "category": {
      "_id": "6aca1acb93039285f51a5bf6",
      "name": "Drywall screws"
    },
    "subCategory": null,
    "sku": "8",
    "shortDescription": "Drywall Screws are self-tapping screws with a flat bugle head used for attaching plasterboard, drywall, gypsum board or sheetrock to wooden or metal studs. They are very versatile and commonly used in sheetrock, wood, plastics and particleboard applications. Sharp point Phillips Drywall screws feature a twin fast, self-tapping thread and an extra sharp point for fast and easy installation. Sharp Point Drywall Screws are commonly used for attaching sheet rock to wooden studs or metal studs 25 - 20 gauge thick. Longer sizes feature a shoulder beneath the head of the screw and are ideal for insulation or multiple layers of sheet rock.",
    "fullDescription": "FEATURES\nSharp points for easy to screw in and damage a little.\nBlack phosphate coating to increase durability.\nSpeed the drywall installation process.\nPrecise cutting edges to improve drill performance with less effort.\nAPPLICATIONS\nMainly used for fastening the drywall panels to metal or wood studs.\nAlso used for fastening iron joists and wooden products, especially suitable for walls, ceilings, false ceiling and partitions.\n",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/drywall_screws_1a5c07.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca1c0d93039285f51a5c55",
    "name": "CUTTING WHEELS",
    "category": {
      "_id": "6aca1b7d93039285f51a5c27",
      "name": "Abrasives"
    },
    "subCategory": {
      "_id": "6aca1bbe93039285f51a5c43",
      "name": "Cutting wheels"
    },
    "sku": "9",
    "shortDescription": "The Cutting wheels / cut-off wheels are generally found in Green, Red and Black versions. According to a well-defined specification, these wheels are elaborated which offers high cutting performances. It is generally usable on all cut-off machines. These cut-off wheels offer such a high quality level that shortening of downstream polishing operations can be conducted. The constancy of the obtained results is ensured by the controlled and rigorous manufacturing process.\n\nThe operating costs are considerably reduced as they are specifically designed for production cutting or large dimensional cutting. The grinding and cut-off wheels are developed, manufactured and tested to the highest quality standards. The standard compliant dimensional stability indicates the comprehensive quality. In addition to the high quality standards, health and safety as well as ergonomics play a prominent role.",
    "fullDescription": "FEATURES\nA premium aluminium oxide disc with advanced phenol resin copes with demanding applications with good results\nHigh stability and safety when cutting.\nLong-life durability.\nLow vibration and high stability for comfortable grinding or cutting.\nCooling, Sharp, Fast with minimal product wear.\nAPPLICATIONS\nUsed for cutting mild steel, nonferrous metal and stainless steel sheets, rods, tubes and profiles.",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/cutting_wheels_1a5c55.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca1d8993039285f51a5c93",
    "name": "GRINDING WHEELS",
    "category": {
      "_id": "6aca1b7d93039285f51a5c27",
      "name": "Abrasives"
    },
    "subCategory": {
      "_id": "6aca1d1b93039285f51a5c81",
      "name": "GRINDING WHEELS"
    },
    "sku": "10",
    "shortDescription": "Grinding wheels are made of natural or synthetic abrasive minerals bonded together in a matrix to form a wheel. While such tools may be familiar to those with home workshops, the general public may not be aware of them because most have been developed and used by the manufacturing industry. A grinding wheel consists of three elements: abrasive grain, bond and pore. As the wheel turns in high speed, its innumerable grains quickly grind work piece to beautiful finish and precise measurement. For manufacturers, grinding wheels provide an efficient way to shape and finish metals and other materials. Abrasives are often the only way to create parts with precision dimensions and high-quality surface finishes.\n\nGrinding wheels are available in a wide variety of sizes, ranging from less than .25 inch to several feet in diameter. They are also available in numerous shapes: flat disks, cylinders, cups, cones, and wheels with a profile cut into the periphery are just a few. Although many techniques, such as bonding a layer of abrasives to t-he surface of a metal wheel, are used to make grinding wheels, this discussion is limited to wheels composed of vitrified materials contained in a bonding matrix.",
    "fullDescription": "FEATURES\nNaturally non-loading, no lubricants in wheel\nCool grinding action\nMaximum operator control\nExcellent surface finish\nExhibits the contours of multiple wheel types\nLess sparks from wheel\nAPPLICATIONS\nIt is used for general grinding, heavy duty silicon friable than snagging, cylindrical, centreless and carbide Aluminium oxide internal grinding.\nVery cool cutting, retains better form and a sharp Aluminium alloyed with Brown cutting edge for a longer time.",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/grinding_wheels_1a5c93.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca1fc093039285f51a5d2b",
    "name": "Silicon Sealent",
    "category": {
      "_id": "6aca1e1f93039285f51a5cad",
      "name": "Accessories"
    },
    "subCategory": null,
    "sku": "11",
    "shortDescription": "",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/silicon_sealent_1a5d2b.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca202693039285f51a5d50",
    "name": "Mastic Butyl Tape",
    "category": {
      "_id": "6aca1e1f93039285f51a5cad",
      "name": "Accessories"
    },
    "subCategory": null,
    "sku": "12",
    "shortDescription": "",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/mastic_butyl_tape_1a5d50.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca206d93039285f51a5d6f",
    "name": "Mesh Roll",
    "category": {
      "_id": "6aca1e1f93039285f51a5cad",
      "name": "Accessories"
    },
    "subCategory": null,
    "sku": "13",
    "shortDescription": "",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/mesh_roll_1a5d6f.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca20f093039285f51a5d8e",
    "name": "Socket",
    "category": {
      "_id": "6aca1e1f93039285f51a5cad",
      "name": "Accessories"
    },
    "subCategory": null,
    "sku": "14",
    "shortDescription": "",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/socket_1a5d8e.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca212693039285f51a5d95",
    "name": "Star Bit",
    "category": {
      "_id": "6aca1e1f93039285f51a5cad",
      "name": "Accessories"
    },
    "subCategory": null,
    "sku": "15",
    "shortDescription": "",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/star_bit_1a5d95.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca246093039285f51a5de0",
    "name": "SCREW CAP",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "16",
    "shortDescription": "Specification (in mm) - 13 mm drill bit\nColour - WHITE / BLACK/ BROWN\nPacking Qty - 1000",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/screw_cap_1a5de0.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca24f393039285f51a5dfd",
    "name": "SCREW CAP",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "17",
    "shortDescription": "Specification (in mm) -Cut Type\nColour - WHITE / BLACK/ BROWN\nPacking Qty - 1000",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/screw_cap_1a5dfd.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca258793039285f51a5e3b",
    "name": "GLASS FRAME PACKER",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "18",
    "shortDescription": "Specification (in mm) -\nL=60 or 72\nW= 11\nT=3 or 5\nColour - GREY/BLACK\nPacking Qty - 500",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/glass_frame_packer_1a5e3b.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca265d93039285f51a5e66",
    "name": "GLASS FRAME PACKER",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "19",
    "shortDescription": "Specification (in mm) -\nL=60\nW= 11\nT= 3 or 5\nColour - GREY/BLACK\nPacking Qty - 500",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/glass_frame_packer_1a5e66.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca26d193039285f51a5e6d",
    "name": "CASEMENT PACKER",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "20",
    "shortDescription": "Specification (in mm) -\nL=62\nW= 24\nT= 1.5 OR 3 or 5\nColour - WHITE\nPacking Qty - 500",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/casement_packer_1a5e6d.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca277593039285f51a5e74",
    "name": "2  PROFILE PACKER",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "21",
    "shortDescription": "Specification (in mm) -\nL= 55\nT= 1.5 or 3 or 5\nColour - WHITE\nPacking Qty - 500",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/2_profile_packer_1a5e74.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca27c193039285f51a5e7b",
    "name": "2.5  PROFILE PACKER",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "22",
    "shortDescription": "Specification (in mm) -\nL= 77\nT= 1.5 or 3 or 5\nColour - WHITE\nPacking Qty - 500",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/2_5_profile_packer_1a5e7b.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca282a93039285f51a5e82",
    "name": "3 PROFILE PACKER",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "23",
    "shortDescription": "Specification (in mm) -\nL= 90\nT= 1.5 or 3 or 5\nColour - WHITE\nPacking Qty - 500",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/3_profile_packer_1a5e82.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca289093039285f51a5e95",
    "name": "BUMP STOPPER",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "24",
    "shortDescription": "Specification (in mm) -\nHigh quality epdm rubber - strong and can withstand high temperature and does not come out as it is completely locked with the plastic body.\nColour - BLACK & WHITE\nPacking Qty - 500",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/bump_stopper_1a5e95.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca290693039285f51a5e9f",
    "name": "BUMP STOPPER",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "25",
    "shortDescription": "Specification -\nLG Type\nColour - WHITE\nPacking Qty - 1000",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/bump_stopper_1a5e9f.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca297293039285f51a5ea6",
    "name": "BUMP STOPPER",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "26",
    "shortDescription": "Specification -\nWindows and Doors\nColour - BLACK & WHITE\nPacking Qty - 100",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/bump_stopper_1a5ea6.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca29e493039285f51a5ead",
    "name": "LOUVERS",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "27",
    "shortDescription": "Specification -\nFIXED ( 3mm Step)\nColour - WHITE\nPacking Qty - 1000",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/louvers_1a5ead.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca2a4493039285f51a5eb4",
    "name": "LOUVERS",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "28",
    "shortDescription": "Specification -\nFIXED ( 6mm Step)\nLG profile\nColour - WHITE\nPacking Qty - 1000",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/louvers_1a5eb4.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca2a9a93039285f51a5ebb",
    "name": "LOUVERS",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "29",
    "shortDescription": "Specification -\nFIXED ( FLAT)\nColour - WHITE\nPacking Qty - 1000",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/louvers_1a5ebb.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca2b5193039285f51a5ece",
    "name": "ADJUSTABLE LOUVERS",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "30",
    "shortDescription": "Specification -\n3,4,5,6,7,8,9 BLADES\nColour - WHITE / IVORY",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/adjustable_louvers_1a5ece.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca2c2693039285f51a5ed5",
    "name": "JUMP ARRESTER",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "31",
    "shortDescription": "Specification -\nLenght - 62mm\nWidth - 10mm\nHeight - 10mm\nColour - GREY\nPacking Qty - 500",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/jump_arrester_1a5ed5.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca2c8d93039285f51a5edc",
    "name": "SPACER BLOCK PLASTIC",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "32",
    "shortDescription": "Specification -\n14mm or 20mm\nsliding window\nColour - WHITE/BROWN\nPacking Qty - 500",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/spacer_block_plastic_1a5edc.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca2ce593039285f51a5ee3",
    "name": "SPACER BLOCK RUBBER",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "33",
    "shortDescription": "Specification -\n14mm or 20mm\nsliding window/door\nColour - WHITE/BROWN\nPacking Qty - 500",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/spacer_block_rubber_1a5ee3.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca2d5793039285f51a5eea",
    "name": "PVC bump stopper SMALL",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "34",
    "shortDescription": "Specification -\nsliding window LG profile\nColour - WHITE\nPacking Qty - 300",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/pvc_bump_stopper_small_1a5eea.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca2dbe93039285f51a5ef1",
    "name": "PVC bump stopper BIG",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "35",
    "shortDescription": "Specification -\nsliding door LG Profile\nColour - WHITE\nPacking Qty - 300",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/pvc_bump_stopper_big_1a5ef1.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca2e1f93039285f51a5ef8",
    "name": "ANTI LIFT SMALL",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "36",
    "shortDescription": "Specification -\nLenght - 120mm\nWidth - 30mm\nHeight -08mm\nColour - WHITE\nPacking Qty - 100\n\n",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/anti_lift_small_1a5ef8.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca2e8f93039285f51a5f0b",
    "name": "ANTI LIFT SMALL",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "37",
    "shortDescription": "Specification -\nLenght - 95mm\nWidth - 30mm\nHeight -12mm\nColour - WHITE/BLACK\nPacking Qty - 100",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/anti_lift_small_1a5f0b.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca2ef493039285f51a5f18",
    "name": "ANTI LIFT SMALL",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "38",
    "shortDescription": "Specification -\nAluplast\nColour - WHITE\nPacking Qty - 100",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/anti_lift_small_1a5f18.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca2f5193039285f51a5f1f",
    "name": "ANTI LIFT SMALL",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "39",
    "shortDescription": "Specification -\nLenght - 95mm\nWidth - 36mm\nHeight -12mm\nColour - WHITE\nPacking Qty - 100",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/anti_lift_small_1a5f1f.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca2fc593039285f51a5f26",
    "name": "ANTI LIFT (REHAU)",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "40",
    "shortDescription": "Specification -\nLenght - 140mm\nWidth - 17mm\nHeight -10mm\nColour - WHITE\nPacking Qty - 100",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/anti_lift_rehau_1a5f26.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca302293039285f51a5f2d",
    "name": "ANTI LIFT (REHAU)",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "41",
    "shortDescription": "Specification -\nLenght - 140mm\nWidth - 25mm\nHeight -12mm\nColour - WHITE\nPacking Qty - 100",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/anti_lift_rehau_1a5f2d.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca306993039285f51a5f34",
    "name": "ANTI LIFT LHS AND RHS",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "42",
    "shortDescription": "Specification -\nHEIGHT - 6MM\nWIDTH - 34mm\nColour - WHITE\nPacking Qty - 100",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/anti_lift_lhs_and_rhs_1a5f34.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca30bd93039285f51a5f3b",
    "name": "ANTI LIFT OUTER FRAME BIG",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "43",
    "shortDescription": "Specification -\nL131mm\nW34mm\nH13mm\nColour - WHITE\nPacking Qty - 100",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/anti_lift_outer_frame_big_1a5f3b.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca312593039285f51a5f43",
    "name": "CASEMENT WEDGE BIG",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "44",
    "shortDescription": "Specification-\nWidth- 32mm\nHeight - 13mm\nColour - WHITE\nPacking Qty - 500",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/casement_wedge_big_1a5f43.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca317093039285f51a5f4a",
    "name": "CAVITY BLOCK",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "45",
    "shortDescription": "Colour - WHITE\nPacking Qty - 100",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/cavity_block_1a5f4a.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca31c793039285f51a5f51",
    "name": "NYLON ANCHOR",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "46",
    "shortDescription": "Specification-\n8 * 100 or 8 * 80\nColour - GREY\nPacking Qty - 100 and 140",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/nylon_anchor_1a5f51.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca323d93039285f51a5f64",
    "name": "MECHANICAL JOINT SLIDING",
    "category": {
      "_id": "6aca235a93039285f51a5dc1",
      "name": "UPVC Hardware"
    },
    "subCategory": null,
    "sku": "47",
    "shortDescription": "Specification-\n16x60\n30x30\nColour - METAL\nPacking Qty - 100 ",
    "fullDescription": "",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/mechanical_joint_sliding_1a5f64.png",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca33db93039285f51a5f9c",
    "name": "16MM Single roller (Flat and Groove)",
    "category": {
      "_id": "6aca329f93039285f51a5f8a",
      "name": "Roller"
    },
    "subCategory": null,
    "sku": "48",
    "shortDescription": "16MM Single Roller (Flat and Groove) is designed for smooth and precise rolling, offering durability, reliable performance, and versatility for industrial applications.",
    "fullDescription": "Size: 16 mm\n\n\n\nType: Single Roller\n\n\n\nSurface Profile: Flat and Grooved\n\n\n\nMaterial: As per manufacturer specifications\n\n\n\nApplication: Industrial rolling and material handling\n\n\n\nFeatures: Durable construction and smooth operation",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/16mm_single_roller_flat_and_groove_1a5f9c.jpg",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca34b393039285f51a5fd9",
    "name": "Double Wheel roller",
    "category": {
      "_id": "6aca329f93039285f51a5f8a",
      "name": "Roller"
    },
    "subCategory": null,
    "sku": "49",
    "shortDescription": "Designed for smooth and stable rolling, offering durable construction, reliable performance, and efficient operation for industrial applications.",
    "fullDescription": "Type: Double Wheel Roller\n\n\n\nDesign: Dual-wheel configuration\n\n\n\nMaterial: As per manufacturer specifications\n\n\n\nFeatures: Durable, stable, and wear-resistant\n\n\n\nApplication: Industrial rolling and material handling",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/double_wheel_roller_1a5fd9.jpg",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca350f93039285f51a5fe0",
    "name": "Double well udjustable roller",
    "category": {
      "_id": "6aca329f93039285f51a5f8a",
      "name": "Roller"
    },
    "subCategory": null,
    "sku": "50",
    "shortDescription": "Designed for smooth and precise rolling with an adjustable dual-wheel mechanism, providing flexibility, stability, and reliable performance for industrial applications.",
    "fullDescription": "Type: Double Wheel Adjustable Roller\n\n\n\nDesign: Dual-wheel with adjustable mechanism\n\n\n\nMaterial: As per manufacturer specifications\n\n\n\nFeatures: Adjustable, durable, and smooth operation\n\n\n\nApplication: Industrial rolling and material handling",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/double_well_udjustable_roller_1a5fe0.jpg",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  },
  {
    "_id": "6aca356093039285f51a5fe7",
    "name": "Mesh roller",
    "category": {
      "_id": "6aca329f93039285f51a5f8a",
      "name": "Roller"
    },
    "subCategory": null,
    "sku": "51",
    "shortDescription": "Designed for smooth and efficient mesh handling, offering durable construction, reliable performance, and consistent operation for industrial applications.",
    "fullDescription": "Type: Mesh Roller\n\n\n\nMaterial: As per manufacturer specifications\n\n\n\nDesign: Mesh-compatible roller\n\n\n\nFeatures: Durable, wear-resistant, and easy to operate\n\n\n\nApplication: Industrial mesh handling and rolling",
    "features": [],
    "applications": [],
    "specifications": {
      "size": "",
      "length": "",
      "diameter": "",
      "material": "",
      "finish": "",
      "color": "",
      "weight": ""
    },
    "mainImage": "/products/mesh_roller_1a5fe7.jpg",
    "status": "Active",
    "isFeatured": false,
    "isNewProduct": false
  }
];

// Script para la tienda de productos
// Este script maneja la visualización de productos, la paginación y la interacción del usuario en la tienda.

const products = [
    { 
        name: "AMD Ryzen 5 5600G",
        image: "https://www.bhphotovideo.com/images/images1000x1000/amd_ryzen_5_5600g_3_9_1646532.jpg",
        category: "CPU",
        price: "609.000",
        brand: "AMD",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Gigabyte B550m Ds3h",
        image: "https://www.bhphotovideo.com/images/images1000x1000/gigabyte_b550m_ds3h_motherboard_1569449.jpg",
        category: "Motherboard",
        price: "487.207",
        brand: "Gigabyte",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Intel Core i5-11600K",
        image: "https://iranrender.com/wp-content/uploads/2024/01/intel-core-i5-11600k.png",
        category: "CPU",
        price: "449.000",
        brand: "Intel",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "ASRock B450M Steel Legend",
        image: "https://www.asrock.com/mb/photo/B450M%20Steel%20Legend(M1).png",
        category: "Motherboard",
        price: "349.000",
        brand: "ASRock",
        gama: "Baja",
        specifications: "Especificaciones del producto"
    },
    // SSD
    { 
        name: "Samsung 970 EVO Plus 1TB",
        image: "https://images.samsung.com/is/image/samsung/p6pim/es/mz-v7s1t0bw/gallery/es-970-evoplus-nvme-m2-ssd-mz-v7s1t0bw-503532885?$684_547_PNG$",
        category: "StorageSSD",
        price: "129.000",
        brand: "Samsung",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "WD Black SN750 2TB",
        image: "https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-black-sn750-nvme-ssd/gallery/with-heatsink/wd-black-sn750-nvme-ssd-flat.png.wdthumb.1280.1280.webp",
        category: "StorageSSD",
        price: "249.000",
        brand: "WD",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Crucial P5 1TB",
        image: "https://www.crucial.com/content/dam/crucial/ssd-products/P5/images/product/Crucial-p5-ssd-standing-up-on-white-cropped-Image.psd.transform/medium-jpg/img.jpg",
        category: "StorageSSD",
        price: "109.000",
        brand: "Crucial",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // HDD
    { 
        name: "WD Caviar Blue 2TB",
        image: "https://d2j6dbq0eux0bg.cloudfront.net/images/4276170/1437092483.jpg",
        category: "StorageHDD",
        price: "139.000",
        brand: "Western Digital",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Seagate BarraCuda 3TB",
        image: "https://www.bhphotovideo.com/images/images2500x2500/seagate_st3000lm024_3tb_barracuda_sata_6gb_s_1286888.jpg",
        category: "StorageHDD",
        price: "199.000",
        brand: "Seagate",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // Disipadores de calor
    { 
        name: "Noctua NH-U14S TR4-SP3",
        image: "https://noctua.at/pub/media/catalog/product/cache/0cdbea399f8ed06da39b3854134f6934/n/o/noctua_nh_u14s_tr4_sp3_1_3.jpg",
        category: "Cold",
        price: "249.000",
        brand: "Noctua",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Cooler Master Hyper 212 RGB Black-E",
        image: "https://www.bhphotovideo.com/images/images2000x2000/cooler_master_rr_212s_20pc_r1_hyper_212_rgb_black_1462236.jpg",
        category: "Cold",
        price: "149.000",
        brand: "Cooler Master",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // Gráficos
    { 
        name: "NVIDIA GeForce RTX 3070",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6429/6429442_sd.jpg",
        category: "GPU",
        price: "649.000",
        brand: "NVIDIA",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "AMD Radeon RX 6800 XT",
        image: "https://th.bing.com/th/id/OIP.j3ULkRsdmswbfkR3m0NvfgAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
        category: "GPU",
        price: "549.000",
        brand: "AMD",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    // RAM
    { 
        name: "Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz",
        image: "https://os-jo.com/image/cache/catalog/products/memory/corsair-3200-2x8/LPX-1200x1200.JPEG",
        category: "RAM",
        price: "249.000",
        brand: "Corsair",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Kingston HyperX Fury 32GB (2x16GB) DDR4 2400MHz",
        image: "https://cdn.mwave.com.au/images/400/AB81865_5.jpg",
        category: "RAM",
        price: "399.000",
        brand: "Kingston",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "AMD Ryzen 5 5600G",
        image: "https://www.bhphotovideo.com/images/images1000x1000/amd_ryzen_5_5600g_3_9_1646532.jpg",
        category: "CPU",
        price: "609.000",
        brand: "AMD",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Gigabyte B550m Ds3h",
        image: "https://www.bhphotovideo.com/images/images1000x1000/gigabyte_b550m_ds3h_motherboard_1569449.jpg",
        category: "Motherboard",
        price: "487.207",
        brand: "Gigabyte",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Intel Core i5-11600K",
        image: "https://iranrender.com/wp-content/uploads/2024/01/intel-core-i5-11600k.png",
        category: "CPU",
        price: "449.000",
        brand: "Intel",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "ASRock B450M Steel Legend",
        image: "https://www.asrock.com/mb/photo/B450M%20Steel%20Legend(M1).png",
        category: "Motherboard",
        price: "349.000",
        brand: "ASRock",
        gama: "Baja",
        specifications: "Especificaciones del producto"
    },
    // SSD
    { 
        name: "Samsung 970 EVO Plus 1TB",
        image: "https://images.samsung.com/is/image/samsung/p6pim/es/mz-v7s1t0bw/gallery/es-970-evoplus-nvme-m2-ssd-mz-v7s1t0bw-503532885?$684_547_PNG$",
        category: "StorageSSD",
        price: "129.000",
        brand: "Samsung",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "WD Black SN750 2TB",
        image: "https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-black-sn750-nvme-ssd/gallery/with-heatsink/wd-black-sn750-nvme-ssd-flat.png.wdthumb.1280.1280.webp",
        category: "StorageSSD",
        price: "249.000",
        brand: "WD",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Crucial P5 1TB",
        image: "https://www.crucial.com/content/dam/crucial/ssd-products/P5/images/product/Crucial-p5-ssd-standing-up-on-white-cropped-Image.psd.transform/medium-jpg/img.jpg",
        category: "StorageSSD",
        price: "109.000",
        brand: "Crucial",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // HDD
    { 
        name: "WD Caviar Blue 2TB",
        image: "https://d2j6dbq0eux0bg.cloudfront.net/images/4276170/1437092483.jpg",
        category: "StorageHDD",
        price: "139.000",
        brand: "Western Digital",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Seagate BarraCuda 3TB",
        image: "https://www.bhphotovideo.com/images/images2500x2500/seagate_st3000lm024_3tb_barracuda_sata_6gb_s_1286888.jpg",
        category: "StorageHDD",
        price: "199.000",
        brand: "Seagate",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // Disipadores de calor
    { 
        name: "Noctua NH-U14S TR4-SP3",
        image: "https://noctua.at/pub/media/catalog/product/cache/0cdbea399f8ed06da39b3854134f6934/n/o/noctua_nh_u14s_tr4_sp3_1_3.jpg",
        category: "Cold",
        price: "249.000",
        brand: "Noctua",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Cooler Master Hyper 212 RGB Black-E",
        image: "https://www.bhphotovideo.com/images/images2000x2000/cooler_master_rr_212s_20pc_r1_hyper_212_rgb_black_1462236.jpg",
        category: "Cold",
        price: "149.000",
        brand: "Cooler Master",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // Gráficos
    { 
        name: "NVIDIA GeForce RTX 3070",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6429/6429442_sd.jpg",
        category: "GPU",
        price: "649.000",
        brand: "NVIDIA",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "AMD Radeon RX 6800 XT",
        image: "https://th.bing.com/th/id/OIP.j3ULkRsdmswbfkR3m0NvfgAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
        category: "GPU",
        price: "549.000",
        brand: "AMD",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    // RAM
    { 
        name: "Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz",
        image: "https://os-jo.com/image/cache/catalog/products/memory/corsair-3200-2x8/LPX-1200x1200.JPEG",
        category: "RAM",
        price: "249.000",
        brand: "Corsair",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Kingston HyperX Fury 32GB (2x16GB) DDR4 2400MHz",
        image: "https://cdn.mwave.com.au/images/400/AB81865_5.jpg",
        category: "RAM",
        price: "399.000",
        brand: "Kingston",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "AMD Ryzen 5 5600G",
        image: "https://www.bhphotovideo.com/images/images1000x1000/amd_ryzen_5_5600g_3_9_1646532.jpg",
        category: "CPU",
        price: "609.000",
        brand: "AMD",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Gigabyte B550m Ds3h",
        image: "https://www.bhphotovideo.com/images/images1000x1000/gigabyte_b550m_ds3h_motherboard_1569449.jpg",
        category: "Motherboard",
        price: "487.207",
        brand: "Gigabyte",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Intel Core i5-11600K",
        image: "https://iranrender.com/wp-content/uploads/2024/01/intel-core-i5-11600k.png",
        category: "CPU",
        price: "449.000",
        brand: "Intel",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "ASRock B450M Steel Legend",
        image: "https://www.asrock.com/mb/photo/B450M%20Steel%20Legend(M1).png",
        category: "Motherboard",
        price: "349.000",
        brand: "ASRock",
        gama: "Baja",
        specifications: "Especificaciones del producto"
    },
    // SSD
    { 
        name: "Samsung 970 EVO Plus 1TB",
        image: "https://images.samsung.com/is/image/samsung/p6pim/es/mz-v7s1t0bw/gallery/es-970-evoplus-nvme-m2-ssd-mz-v7s1t0bw-503532885?$684_547_PNG$",
        category: "StorageSSD",
        price: "129.000",
        brand: "Samsung",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "WD Black SN750 2TB",
        image: "https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-black-sn750-nvme-ssd/gallery/with-heatsink/wd-black-sn750-nvme-ssd-flat.png.wdthumb.1280.1280.webp",
        category: "StorageSSD",
        price: "249.000",
        brand: "WD",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Crucial P5 1TB",
        image: "https://www.crucial.com/content/dam/crucial/ssd-products/P5/images/product/Crucial-p5-ssd-standing-up-on-white-cropped-Image.psd.transform/medium-jpg/img.jpg",
        category: "StorageSSD",
        price: "109.000",
        brand: "Crucial",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // HDD
    { 
        name: "WD Caviar Blue 2TB",
        image: "https://d2j6dbq0eux0bg.cloudfront.net/images/4276170/1437092483.jpg",
        category: "StorageHDD",
        price: "139.000",
        brand: "Western Digital",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Seagate BarraCuda 3TB",
        image: "https://www.bhphotovideo.com/images/images2500x2500/seagate_st3000lm024_3tb_barracuda_sata_6gb_s_1286888.jpg",
        category: "StorageHDD",
        price: "199.000",
        brand: "Seagate",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // Disipadores de calor
    { 
        name: "Noctua NH-U14S TR4-SP3",
        image: "https://noctua.at/pub/media/catalog/product/cache/0cdbea399f8ed06da39b3854134f6934/n/o/noctua_nh_u14s_tr4_sp3_1_3.jpg",
        category: "Cold",
        price: "249.000",
        brand: "Noctua",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Cooler Master Hyper 212 RGB Black-E",
        image: "https://www.bhphotovideo.com/images/images2000x2000/cooler_master_rr_212s_20pc_r1_hyper_212_rgb_black_1462236.jpg",
        category: "Cold",
        price: "149.000",
        brand: "Cooler Master",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // Gráficos
    { 
        name: "NVIDIA GeForce RTX 3070",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6429/6429442_sd.jpg",
        category: "GPU",
        price: "649.000",
        brand: "NVIDIA",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "AMD Radeon RX 6800 XT",
        image: "https://th.bing.com/th/id/OIP.j3ULkRsdmswbfkR3m0NvfgAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
        category: "GPU",
        price: "549.000",
        brand: "AMD",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    // RAM
    { 
        name: "Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz",
        image: "https://os-jo.com/image/cache/catalog/products/memory/corsair-3200-2x8/LPX-1200x1200.JPEG",
        category: "RAM",
        price: "249.000",
        brand: "Corsair",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Kingston HyperX Fury 32GB (2x16GB) DDR4 2400MHz",
        image: "https://cdn.mwave.com.au/images/400/AB81865_5.jpg",
        category: "RAM",
        price: "399.000",
        brand: "Kingston",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "AMD Ryzen 5 5600G",
        image: "https://www.bhphotovideo.com/images/images1000x1000/amd_ryzen_5_5600g_3_9_1646532.jpg",
        category: "CPU",
        price: "609.000",
        brand: "AMD",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Gigabyte B550m Ds3h",
        image: "https://www.bhphotovideo.com/images/images1000x1000/gigabyte_b550m_ds3h_motherboard_1569449.jpg",
        category: "Motherboard",
        price: "487.207",
        brand: "Gigabyte",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Intel Core i5-11600K",
        image: "https://iranrender.com/wp-content/uploads/2024/01/intel-core-i5-11600k.png",
        category: "CPU",
        price: "449.000",
        brand: "Intel",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "ASRock B450M Steel Legend",
        image: "https://www.asrock.com/mb/photo/B450M%20Steel%20Legend(M1).png",
        category: "Motherboard",
        price: "349.000",
        brand: "ASRock",
        gama: "Baja",
        specifications: "Especificaciones del producto"
    },
    // SSD
    { 
        name: "Samsung 970 EVO Plus 1TB",
        image: "https://images.samsung.com/is/image/samsung/p6pim/es/mz-v7s1t0bw/gallery/es-970-evoplus-nvme-m2-ssd-mz-v7s1t0bw-503532885?$684_547_PNG$",
        category: "StorageSSD",
        price: "129.000",
        brand: "Samsung",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "WD Black SN750 2TB",
        image: "https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-black-sn750-nvme-ssd/gallery/with-heatsink/wd-black-sn750-nvme-ssd-flat.png.wdthumb.1280.1280.webp",
        category: "StorageSSD",
        price: "249.000",
        brand: "WD",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Crucial P5 1TB",
        image: "https://www.crucial.com/content/dam/crucial/ssd-products/P5/images/product/Crucial-p5-ssd-standing-up-on-white-cropped-Image.psd.transform/medium-jpg/img.jpg",
        category: "StorageSSD",
        price: "109.000",
        brand: "Crucial",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // HDD
    { 
        name: "WD Caviar Blue 2TB",
        image: "https://d2j6dbq0eux0bg.cloudfront.net/images/4276170/1437092483.jpg",
        category: "StorageHDD",
        price: "139.000",
        brand: "Western Digital",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Seagate BarraCuda 3TB",
        image: "https://www.bhphotovideo.com/images/images2500x2500/seagate_st3000lm024_3tb_barracuda_sata_6gb_s_1286888.jpg",
        category: "StorageHDD",
        price: "199.000",
        brand: "Seagate",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // Disipadores de calor
    { 
        name: "Noctua NH-U14S TR4-SP3",
        image: "https://noctua.at/pub/media/catalog/product/cache/0cdbea399f8ed06da39b3854134f6934/n/o/noctua_nh_u14s_tr4_sp3_1_3.jpg",
        category: "Cold",
        price: "249.000",
        brand: "Noctua",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Cooler Master Hyper 212 RGB Black-E",
        image: "https://www.bhphotovideo.com/images/images2000x2000/cooler_master_rr_212s_20pc_r1_hyper_212_rgb_black_1462236.jpg",
        category: "Cold",
        price: "149.000",
        brand: "Cooler Master",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // Gráficos
    { 
        name: "NVIDIA GeForce RTX 3070",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6429/6429442_sd.jpg",
        category: "GPU",
        price: "649.000",
        brand: "NVIDIA",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "AMD Radeon RX 6800 XT",
        image: "https://th.bing.com/th/id/OIP.j3ULkRsdmswbfkR3m0NvfgAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
        category: "GPU",
        price: "549.000",
        brand: "AMD",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    // RAM
    { 
        name: "Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz",
        image: "https://os-jo.com/image/cache/catalog/products/memory/corsair-3200-2x8/LPX-1200x1200.JPEG",
        category: "RAM",
        price: "249.000",
        brand: "Corsair",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Kingston HyperX Fury 32GB (2x16GB) DDR4 2400MHz",
        image: "https://cdn.mwave.com.au/images/400/AB81865_5.jpg",
        category: "RAM",
        price: "399.000",
        brand: "Kingston",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "AMD Ryzen 5 5600G",
        image: "https://www.bhphotovideo.com/images/images1000x1000/amd_ryzen_5_5600g_3_9_1646532.jpg",
        category: "CPU",
        price: "609.000",
        brand: "AMD",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Gigabyte B550m Ds3h",
        image: "https://www.bhphotovideo.com/images/images1000x1000/gigabyte_b550m_ds3h_motherboard_1569449.jpg",
        category: "Motherboard",
        price: "487.207",
        brand: "Gigabyte",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Intel Core i5-11600K",
        image: "https://iranrender.com/wp-content/uploads/2024/01/intel-core-i5-11600k.png",
        category: "CPU",
        price: "449.000",
        brand: "Intel",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "ASRock B450M Steel Legend",
        image: "https://www.asrock.com/mb/photo/B450M%20Steel%20Legend(M1).png",
        category: "Motherboard",
        price: "349.000",
        brand: "ASRock",
        gama: "Baja",
        specifications: "Especificaciones del producto"
    },
    // SSD
    { 
        name: "Samsung 970 EVO Plus 1TB",
        image: "https://images.samsung.com/is/image/samsung/p6pim/es/mz-v7s1t0bw/gallery/es-970-evoplus-nvme-m2-ssd-mz-v7s1t0bw-503532885?$684_547_PNG$",
        category: "StorageSSD",
        price: "129.000",
        brand: "Samsung",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "WD Black SN750 2TB",
        image: "https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-black-sn750-nvme-ssd/gallery/with-heatsink/wd-black-sn750-nvme-ssd-flat.png.wdthumb.1280.1280.webp",
        category: "StorageSSD",
        price: "249.000",
        brand: "WD",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Crucial P5 1TB",
        image: "https://www.crucial.com/content/dam/crucial/ssd-products/P5/images/product/Crucial-p5-ssd-standing-up-on-white-cropped-Image.psd.transform/medium-jpg/img.jpg",
        category: "StorageSSD",
        price: "109.000",
        brand: "Crucial",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // HDD
    { 
        name: "WD Caviar Blue 2TB",
        image: "https://d2j6dbq0eux0bg.cloudfront.net/images/4276170/1437092483.jpg",
        category: "StorageHDD",
        price: "139.000",
        brand: "Western Digital",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Seagate BarraCuda 3TB",
        image: "https://www.bhphotovideo.com/images/images2500x2500/seagate_st3000lm024_3tb_barracuda_sata_6gb_s_1286888.jpg",
        category: "StorageHDD",
        price: "199.000",
        brand: "Seagate",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // Disipadores de calor
    { 
        name: "Noctua NH-U14S TR4-SP3",
        image: "https://noctua.at/pub/media/catalog/product/cache/0cdbea399f8ed06da39b3854134f6934/n/o/noctua_nh_u14s_tr4_sp3_1_3.jpg",
        category: "Cold",
        price: "249.000",
        brand: "Noctua",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Cooler Master Hyper 212 RGB Black-E",
        image: "https://www.bhphotovideo.com/images/images2000x2000/cooler_master_rr_212s_20pc_r1_hyper_212_rgb_black_1462236.jpg",
        category: "Cold",
        price: "149.000",
        brand: "Cooler Master",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // Gráficos
    { 
        name: "NVIDIA GeForce RTX 3070",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6429/6429442_sd.jpg",
        category: "GPU",
        price: "649.000",
        brand: "NVIDIA",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "AMD Radeon RX 6800 XT",
        image: "https://th.bing.com/th/id/OIP.j3ULkRsdmswbfkR3m0NvfgAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
        category: "GPU",
        price: "549.000",
        brand: "AMD",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    // RAM
    { 
        name: "Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz",
        image: "https://os-jo.com/image/cache/catalog/products/memory/corsair-3200-2x8/LPX-1200x1200.JPEG",
        category: "RAM",
        price: "249.000",
        brand: "Corsair",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Kingston HyperX Fury 32GB (2x16GB) DDR4 2400MHz",
        image: "https://cdn.mwave.com.au/images/400/AB81865_5.jpg",
        category: "RAM",
        price: "399.000",
        brand: "Kingston",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "AMD Ryzen 5 5600G",
        image: "https://www.bhphotovideo.com/images/images1000x1000/amd_ryzen_5_5600g_3_9_1646532.jpg",
        category: "CPU",
        price: "609.000",
        brand: "AMD",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Gigabyte B550m Ds3h",
        image: "https://www.bhphotovideo.com/images/images1000x1000/gigabyte_b550m_ds3h_motherboard_1569449.jpg",
        category: "Motherboard",
        price: "487.207",
        brand: "Gigabyte",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Intel Core i5-11600K",
        image: "https://iranrender.com/wp-content/uploads/2024/01/intel-core-i5-11600k.png",
        category: "CPU",
        price: "449.000",
        brand: "Intel",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "ASRock B450M Steel Legend",
        image: "https://www.asrock.com/mb/photo/B450M%20Steel%20Legend(M1).png",
        category: "Motherboard",
        price: "349.000",
        brand: "ASRock",
        gama: "Baja",
        specifications: "Especificaciones del producto"
    },
    // SSD
    { 
        name: "Samsung 970 EVO Plus 1TB",
        image: "https://images.samsung.com/is/image/samsung/p6pim/es/mz-v7s1t0bw/gallery/es-970-evoplus-nvme-m2-ssd-mz-v7s1t0bw-503532885?$684_547_PNG$",
        category: "StorageSSD",
        price: "129.000",
        brand: "Samsung",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "WD Black SN750 2TB",
        image: "https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-black-sn750-nvme-ssd/gallery/with-heatsink/wd-black-sn750-nvme-ssd-flat.png.wdthumb.1280.1280.webp",
        category: "StorageSSD",
        price: "249.000",
        brand: "WD",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Crucial P5 1TB",
        image: "https://www.crucial.com/content/dam/crucial/ssd-products/P5/images/product/Crucial-p5-ssd-standing-up-on-white-cropped-Image.psd.transform/medium-jpg/img.jpg",
        category: "StorageSSD",
        price: "109.000",
        brand: "Crucial",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // HDD
    { 
        name: "WD Caviar Blue 2TB",
        image: "https://d2j6dbq0eux0bg.cloudfront.net/images/4276170/1437092483.jpg",
        category: "StorageHDD",
        price: "139.000",
        brand: "Western Digital",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Seagate BarraCuda 3TB",
        image: "https://www.bhphotovideo.com/images/images2500x2500/seagate_st3000lm024_3tb_barracuda_sata_6gb_s_1286888.jpg",
        category: "StorageHDD",
        price: "199.000",
        brand: "Seagate",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // Disipadores de calor
    { 
        name: "Noctua NH-U14S TR4-SP3",
        image: "https://noctua.at/pub/media/catalog/product/cache/0cdbea399f8ed06da39b3854134f6934/n/o/noctua_nh_u14s_tr4_sp3_1_3.jpg",
        category: "Cold",
        price: "249.000",
        brand: "Noctua",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Cooler Master Hyper 212 RGB Black-E",
        image: "https://www.bhphotovideo.com/images/images2000x2000/cooler_master_rr_212s_20pc_r1_hyper_212_rgb_black_1462236.jpg",
        category: "Cold",
        price: "149.000",
        brand: "Cooler Master",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // Gráficos
    { 
        name: "NVIDIA GeForce RTX 3070",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6429/6429442_sd.jpg",
        category: "GPU",
        price: "649.000",
        brand: "NVIDIA",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "AMD Radeon RX 6800 XT",
        image: "https://th.bing.com/th/id/OIP.j3ULkRsdmswbfkR3m0NvfgAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
        category: "GPU",
        price: "549.000",
        brand: "AMD",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    // RAM
    { 
        name: "Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz",
        image: "https://os-jo.com/image/cache/catalog/products/memory/corsair-3200-2x8/LPX-1200x1200.JPEG",
        category: "RAM",
        price: "249.000",
        brand: "Corsair",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Kingston HyperX Fury 32GB (2x16GB) DDR4 2400MHz",
        image: "https://cdn.mwave.com.au/images/400/AB81865_5.jpg",
        category: "RAM",
        price: "399.000",
        brand: "Kingston",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "AMD Ryzen 5 5600G",
        image: "https://www.bhphotovideo.com/images/images1000x1000/amd_ryzen_5_5600g_3_9_1646532.jpg",
        category: "CPU",
        price: "609.000",
        brand: "AMD",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Gigabyte B550m Ds3h",
        image: "https://www.bhphotovideo.com/images/images1000x1000/gigabyte_b550m_ds3h_motherboard_1569449.jpg",
        category: "Motherboard",
        price: "487.207",
        brand: "Gigabyte",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Intel Core i5-11600K",
        image: "https://iranrender.com/wp-content/uploads/2024/01/intel-core-i5-11600k.png",
        category: "CPU",
        price: "449.000",
        brand: "Intel",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "ASRock B450M Steel Legend",
        image: "https://www.asrock.com/mb/photo/B450M%20Steel%20Legend(M1).png",
        category: "Motherboard",
        price: "349.000",
        brand: "ASRock",
        gama: "Baja",
        specifications: "Especificaciones del producto"
    },
    // SSD
    { 
        name: "Samsung 970 EVO Plus 1TB",
        image: "https://images.samsung.com/is/image/samsung/p6pim/es/mz-v7s1t0bw/gallery/es-970-evoplus-nvme-m2-ssd-mz-v7s1t0bw-503532885?$684_547_PNG$",
        category: "StorageSSD",
        price: "129.000",
        brand: "Samsung",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "WD Black SN750 2TB",
        image: "https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-black-sn750-nvme-ssd/gallery/with-heatsink/wd-black-sn750-nvme-ssd-flat.png.wdthumb.1280.1280.webp",
        category: "StorageSSD",
        price: "249.000",
        brand: "WD",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Crucial P5 1TB",
        image: "https://www.crucial.com/content/dam/crucial/ssd-products/P5/images/product/Crucial-p5-ssd-standing-up-on-white-cropped-Image.psd.transform/medium-jpg/img.jpg",
        category: "StorageSSD",
        price: "109.000",
        brand: "Crucial",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // HDD
    { 
        name: "WD Caviar Blue 2TB",
        image: "https://d2j6dbq0eux0bg.cloudfront.net/images/4276170/1437092483.jpg",
        category: "StorageHDD",
        price: "139.000",
        brand: "Western Digital",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Seagate BarraCuda 3TB",
        image: "https://www.bhphotovideo.com/images/images2500x2500/seagate_st3000lm024_3tb_barracuda_sata_6gb_s_1286888.jpg",
        category: "StorageHDD",
        price: "199.000",
        brand: "Seagate",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // Disipadores de calor
    { 
        name: "Noctua NH-U14S TR4-SP3",
        image: "https://noctua.at/pub/media/catalog/product/cache/0cdbea399f8ed06da39b3854134f6934/n/o/noctua_nh_u14s_tr4_sp3_1_3.jpg",
        category: "Cold",
        price: "249.000",
        brand: "Noctua",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Cooler Master Hyper 212 RGB Black-E",
        image: "https://www.bhphotovideo.com/images/images2000x2000/cooler_master_rr_212s_20pc_r1_hyper_212_rgb_black_1462236.jpg",
        category: "Cold",
        price: "149.000",
        brand: "Cooler Master",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    // Gráficos
    { 
        name: "NVIDIA GeForce RTX 3070",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6429/6429442_sd.jpg",
        category: "GPU",
        price: "649.000",
        brand: "NVIDIA",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "AMD Radeon RX 6800 XT",
        image: "https://th.bing.com/th/id/OIP.j3ULkRsdmswbfkR3m0NvfgAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
        category: "GPU",
        price: "549.000",
        brand: "AMD",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    // RAM
    { 
        name: "Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz",
        image: "https://os-jo.com/image/cache/catalog/products/memory/corsair-3200-2x8/LPX-1200x1200.JPEG",
        category: "RAM",
        price: "249.000",
        brand: "Corsair",
        gama: "Media",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Kingston HyperX Fury 32GB (2x16GB) DDR4 2400MHz",
        image: "https://cdn.mwave.com.au/images/400/AB81865_5.jpg",
        category: "RAM",
        price: "399.000",
        brand: "Kingston",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    },
    { 
        name: "Kingston HyperX Fury 32GB (2x16GB) DDR4 2400MHz",
        image: "https://cdn.mwave.com.au/images/400/AB81865_5.jpg",
        category: "RAM",
        price: "399.000",
        brand: "Kingston",
        gama: "Alta",
        specifications: "Especificaciones del producto"
    }
];

const productsPerPage = 12;
const totalProducts = products.length;
let currentPage = 1;

function displayProducts(page) {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const displayedProducts = products.slice(startIndex, endIndex);

    const productContainer = document.getElementById('products');
    productContainer.innerHTML = '';
    displayedProducts.forEach(product => {
        const productElement = document.createElement('article');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <div class="product-img"></div>
            <div class="product-info">
            <h4>Producto</h3>
            <p>$99.999</p>
            </div>
        `;
        productContainer.appendChild(productElement);
    });
}

//paginación de productos 

function displayPagination() {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    const maxButtons = 5; 
    const startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxButtons - 1);

    if (startPage > 1) {
        const prevButton = createButton('❮', currentPage - 1);
        paginationContainer.appendChild(prevButton);
    }

    for (let i = startPage; i <= endPage; i++) {
        const button = createButton(i.toString(), i);
        paginationContainer.appendChild(button);
    }

    if (endPage < totalPages) {
        const nextButton = createButton('❯', currentPage + 1);
        paginationContainer.appendChild(nextButton);
    }
}

function createButton(text, page) {
    const button = document.createElement('button');
    if (text == '❮') {
        button.classList.add('prev');
    }else if (text == '❯') {
        button.classList.add('next');
    }else{
        button.textContent = text;
    }
    button.classList.add('pagination-button');
    if (page === currentPage) {
        button.classList.add('active');
    }
    button.addEventListener('click', () => {
        currentPage = page;
        displayProducts(currentPage);
        displayPagination();
    });
    return button;
}

displayProducts(currentPage);
displayPagination();

function goHeader() {
    var options = document.getElementById('store-options');
    encabezado.scrollIntoView({ behavior: 'smooth' });
}
// Project data for RISE Enterprises
export interface ProjectData {
    id: string;
    name: string;
    category: string;
    mainImage: string;
    images: string[];
    description: string;
    fullDescription: string;
    features: string[];
    specifications: {
        [key: string]: string;
    };
}

export const projectsData: ProjectData[] = [
    {
        id: '1',
        name: 'Rise Podium',
        category: 'Infrastructure',
        mainImage: '/Podium - 1.webp',
        images: [
            '/Podium - 1.webp',
            '/Podium - 2.webp'
        ],
        description: 'Advanced podium construction with modern architectural design, featuring reinforced concrete structure and premium finishes.',
        fullDescription: 'Our Rise Podium project represents the pinnacle of modern infrastructure development. This multi-level podium structure combines cutting-edge engineering with aesthetic excellence, serving as a foundation for mixed-use development. The project incorporates sustainable construction practices, advanced RCC techniques, and premium finishing materials to create a landmark structure that will serve the community for decades to come.',
        features: [
            'Multi-level reinforced concrete structure',
            'Advanced foundation engineering',
            'Premium architectural finishes',
            'Integrated parking solutions',
            'Modern drainage systems',
            'Seismic-resistant design',
            'Energy-efficient lighting',
            'Accessibility features',
            'Landscaped terraces',
            'Smart building infrastructure'
        ],
        specifications: {
            area: '85,000 sq ft',
            levels: '3 levels',
            completionDate: '2023',
            location: 'Pune, Maharashtra',
            capacity: '1,200 vehicles',
            constructionType: 'RCC with premium finishes'
        }
    },
    {
        id: '2',
        name: 'Rise Building',
        category: 'Commercial',
        mainImage: '/Building A - 1.webp',
        images: [
            '/Building A - 1.webp',
            '/Building A - 2.webp'
        ],
        description: 'State-of-the-art commercial building with premium amenities, modern office spaces, and cutting-edge facilities.',
        fullDescription: 'Rise Building stands as a testament to modern commercial architecture and engineering excellence. This premium commercial complex features state-of-the-art office spaces, retail areas, and conference facilities designed to meet the evolving needs of contemporary businesses. With its glass facade, energy-efficient systems, and smart building technologies, Rise Building sets new standards for commercial real estate in Pune.',
        features: [
            'Modern glass facade design',
            'High-speed elevators',
            'Central air conditioning',
            'Premium office spaces',
            'Retail ground floor',
            'Conference and meeting rooms',
            'Smart building automation',
            'Energy-efficient systems',
            'Rooftop amenities',
            '24/7 security and surveillance',
            'Ample parking facilities',
            'Fire safety systems'
        ],
        specifications: {
            area: '1,20,000 sq ft',
            floors: '15 floors',
            completionDate: '2023',
            location: 'Pune, Maharashtra',
            capacity: '2,000 occupants',
            certification: 'Green building certified'
        }
    },
    {
        id: '3',
        name: 'Rise Multi-purpose Hall',
        category: 'Community',
        mainImage: '/Multipurpose Hall Main.webp',
        images: [
            '/Multi-purpose Hall Main - 2.webp',
            '/Multi-purpose Hall outside - 3.webp',
            '/Multipurpose Hall outside - 1.webp',
            '/Multipurpose Hall outside - 2.webp',
            '/Multipurpose Hall Inside - 2.webp',
            '/Multipurpose Hall Inside - 1.webp'
        ],
        description: 'Versatile community space designed for multiple functions including events, conferences, and cultural activities.',
        fullDescription: 'Rise Multi-purpose Hall is a flagship community facility designed to serve diverse functions and bring people together. This architectural marvel features flexible spaces that can be reconfigured for various events, from large conferences and cultural performances to intimate community gatherings. With its advanced acoustic systems, climate control, and modern amenities, the hall provides an exceptional venue for any occasion.',
        features: [
            'Flexible seating arrangements',
            'Advanced audio-visual systems',
            'Professional lighting setup',
            'Climate-controlled environment',
            'Acoustic optimization',
            'Stage and backstage areas',
            'Catering kitchen facilities',
            'VIP rooms and green rooms',
            'Parking for 300 vehicles',
            'Accessible design features',
            'Emergency safety systems',
            'Digital display boards'
        ],
        specifications: {
            area: '25,000 sq ft',
            capacity: '1,500 people',
            completionDate: '2023',
            location: 'Pune, Maharashtra',
            stage: '40 x 30 ft professional stage',
            acoustics: 'Professional sound system'
        }
    },
    {
        id: '4',
        name: 'Rise Complex - A',
        category: 'Recreation',
        mainImage: '/Complex-1 Main.webp',
        images: ['/complex-1.webp', '/complex-2.webp', '/complex-1 pool view 1.webp', '/complex-1 pool view 2.webp', '/Complex-1 Construction.webp', '/Complex-1 Construction 1.webp', '/Complex-1 Construction 2.webp'],
        description: 'A comprehensive sports facility featuring a state-of-the-art akhada and Olympic-standard swimming complex.',
        fullDescription: 'Our Sports Complex - A is a modern integrated sports facility that combines traditional wrestling culture with modern aquatics facilities. The complex includes an akhada section with specialized wrestling and fitness facilities, and a swimming section with Olympic-standard pools. This integrated facility caters to both combat sports and aquatics enthusiasts, providing world-class training and recreational opportunities for athletes of all levels.',
        features: [
            'Professional wrestling arena (Akhada)',
            'Modern fitness equipment',
            'Specialized training zones',
            'Olympic-size swimming pool',
            'Training pool',
            'Kids pool',
            'Advanced filtration system',
            'Temperature-controlled water',
            'Locker rooms and shower facilities',
            'Spectator seating areas',
            'Professional coaching facilities',
            'Sports medicine center'
        ],
        specifications: {
            area: '40,000 sq ft',
            capacity: '500 people',
            completionDate: '2024',
            location: 'Pune, Maharashtra',
            pools: '3 pools (Olympic, training, kids)',
            akhada: '2,000 sq ft traditional wrestling arena'
        }
    },
    {
        id: '5',
        name: 'Rise Complex - B',
        category: 'Recreation',
        mainImage: '/Complex-2 Main.webp',
        images: ['/complex-2.webp', '/Complex-2 Construction.webp', '/Complex-2 Construction 1.webp', '/Complex-2 Construction 2.webp'],
        description: 'Secondary sports complex with comprehensive fitness facilities, indoor courts, and recreational amenities.',
        fullDescription: 'Rise Complex - B complements our primary sports facility with a focus on indoor sports and comprehensive fitness amenities. This modern complex features multi-sport courts, advanced gymnasium equipment, and specialized training areas for various sports disciplines. Designed with versatility in mind, Complex - B serves as a hub for community sports programs, professional training, and recreational activities.',
        features: [
            'Multi-sport indoor courts',
            'Advanced gymnasium',
            'Cardio and strength training zones',
            'Yoga and aerobics studios',
            'Indoor badminton courts',
            'Table tennis facilities',
            'Sports equipment storage',
            'Physiotherapy center',
            'Juice bar and cafe',
            'Administrative offices',
            'Member lounge areas',
            'Digital booking systems'
        ],
        specifications: {
            area: '35,000 sq ft',
            capacity: '400 people',
            completionDate: '2024',
            location: 'Pune, Maharashtra',
            courts: '6 badminton courts, 2 basketball courts',
            equipment: '100+ fitness machines'
        }
    },
    {
        id: '6',
        name: 'Rise Main Building & Parking',
        category: 'Development',
        mainImage: '/Main Building & Parking - 3.webp',
        images: [
            '/Main Building & Parking - 3.webp',
            '/Main Building & Parking - 4.webp',
            '/Main Building & Parking - 2.webp',
            '/Main Building & Parking - 1.webp'
        ],
        description: 'Integrated development with main structures and comprehensive parking solutions, featuring modern amenities and sustainable design.',
        fullDescription: 'Rise Main Building & Parking represents our commitment to comprehensive urban development. This integrated project combines residential and commercial structures with innovative parking solutions, creating a cohesive community space. The development features sustainable design principles, smart infrastructure, and carefully planned amenities that enhance the quality of life for residents and visitors while addressing modern urban challenges.',
        features: [
            'Mixed-use development',
            'Multi-level parking structure',
            'Residential tower blocks',
            'Commercial retail spaces',
            'Landscaped common areas',
            'Smart parking systems',
            'Electric vehicle charging',
            'Rainwater harvesting',
            'Solar power integration',
            'Waste management systems',
            'Security and surveillance',
            'Community recreation areas'
        ],
        specifications: {
            area: '2,50,000 sq ft',
            buildings: '4 main buildings',
            completionDate: '2024',
            location: 'Pune, Maharashtra',
            parking: '1,500 vehicle capacity',
            units: '800 residential units, 50 commercial spaces'
        }
    }
];

// Simplified project data for listing views
export const projectsListData = projectsData.map(project => ({
    id: project.id,
    name: project.name,
    category: project.category,
    image: project.mainImage,
    description: project.description
}));

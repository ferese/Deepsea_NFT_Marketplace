// Mock NFT Data for DeepSea Marketplace
const nftData = [
    {
        id: 1,
        name: "Celestial Whale",
        image: "assets/whale.png",
        price: 0.85,
        category: "AsmrGraph",
        creator: "ArtistX",
        collection: "Ocean Depths",
        timeLeft: "23h 45m",
        description: "A majestic space whale swimming through the cosmic ocean. This piece represents the boundless nature of creativity and exploration.",
        status: "Hot",
        createdAt: new Date('2025-04-10')
    },
    {
        id: 2,
        name: "Neon Monkey #357",
        image: "assets/neon.png",
        price: 1.2,
        category: "Monkey",
        creator: "CryptoApe",
        collection: "Primate Evolution",
        timeLeft: "10h 30m",
        description: "Part of the exclusive Neon Monkey collection, this vibrant primate showcases the fusion of nature and technology with its glowing aura.",
        status: "New",
        createdAt: new Date('2025-04-12')
    },
    {
        id: 3,
        name: "Abstract Dreams",
        image: "assets/abstractDream.png",
        price: 0.5,
        category: "Abstract",
        creator: "DreamWeaver",
        collection: "Mind Escapades",
        timeLeft: "2d 5h",
        description: "A swirling vortex of colors representing the subconscious mind. Each viewer experiences a unique interpretation based on their own dreams.",
        status: "",
        createdAt: new Date('2025-04-05')
    },
    {
        id: 4,
        name: "Cyber Mustang",
        image: "assets/cyberMustang.png",
        price: 2.3,
        category: "Cars",
        creator: "MechArtist",
        collection: "Future Rides",
        timeLeft: "1d 12h",
        description: "A futuristic interpretation of the classic Mustang, reimagined for the year 2077. Features holographic detailing and quantum engine visualization.",
        status: "Hot",
        createdAt: new Date('2025-04-08')
    },
    {
        id: 5,
        name: "Pixel Galaxy",
        image: "assets/pixelGalaxy.png",
        price: 0.3,
        category: "Abstract",
        creator: "BitMaster",
        collection: "8-Bit Universe",
        timeLeft: "5h 20m",
        description: "A nostalgic journey through a pixelated universe, combining retro gaming aesthetics with modern cosmic art concepts.",
        status: "",
        createdAt: new Date('2025-04-11')
    },
    {
        id: 6,
        name: "Golden Ape Society #42",
        image: "assets/goldenApe.png",
        price: 3.5,
        category: "Monkey",
        creator: "ApeLord",
        collection: "Golden Ape Society",
        timeLeft: "4d 8h",
        description: "Member #42 of the prestigious Golden Ape Society. Known for its distinctive golden fur and emerald eyes, this is one of the rarest in the collection.",
        status: "Hot",
        createdAt: new Date('2025-03-30')
    },
    {
        id: 7,
        name: "Quantum Wave",
        image: "assets/quantum.png",
        price: 0.75,
        category: "AsmrGraph",
        creator: "WaveMaker",
        collection: "Quantum Realities",
        timeLeft: "1d 3h",
        description: "A visualization of quantum wave functions collapsing into reality. This piece changes appearance based on viewing angle and lighting conditions.",
        status: "New",
        createdAt: new Date('2025-04-13')
    },
    {
        id: 8,
        name: "Neon City Skyline",
        image: "assets/neonSkyline.png",
        price: 1.8,
        category: "Abstract",
        creator: "CityScaper",
        collection: "Urban Futures",
        timeLeft: "6h 15m",
        description: "A vibrant representation of a futuristic megalopolis at night, where neon lights create a symphony of colors against the dark skyline.",
        status: "",
        createdAt: new Date('2025-04-09')
    },
    {
        id: 9,
        name: "Hypercar Concept 2030",
        image: "assets/concept.png",
        price: 2.7,
        category: "Cars",
        creator: "AutoVision",
        collection: "Speed Dreams",
        timeLeft: "3d 7h",
        description: "A revolutionary hypercar concept featuring antigravity technology and fusion propulsion. This design has influenced real-world automotive innovation.",
        status: "Hot",
        createdAt: new Date('2025-04-02')
    },
    {
        id: 10,
        name: "Digital Meditation",
        image: "assets/meditation.png",
        price: 0.45,
        category: "Abstract",
        creator: "ZenDigital",
        collection: "Mind Spaces",
        timeLeft: "2d 9h",
        description: "A meditative visual experience designed to induce tranquility. The subtle animation patterns are synchronized with brainwave frequencies.",
        status: "",
        createdAt: new Date('2025-04-07')
    },
    {
        id: 11,
        name: "CryptoRacer X",
        image: "assets/racer.png",
        price: 1.95,
        category: "Cars",
        creator: "SpeedMaster",
        collection: "Digital Racers",
        timeLeft: "12h 40m",
        description: "A digital race car that exists both as an NFT and as a playable vehicle in multiple metaverse racing games. Includes special abilities and custom livery.",
        status: "New",
        createdAt: new Date('2025-04-14')
    },
    {
        id: 12,
        name: "Jungle Chimp #189",
        image: "assets/jungle.png",
        price: 0.9,
        category: "Monkey",
        creator: "PrimateArt",
        collection: "Jungle Chronicles",
        timeLeft: "1d 18h",
        description: "A whimsical representation of a jungle chimp with biological augmentations. This art piece comments on the relationship between nature and technology.",
        status: "",
        createdAt: new Date('2025-04-06')
    },
    {
        id: 13,
        name: "Electric Dreams",
        image: "assets/electric.png",
        price: 0.65,
        category: "AsmrGraph",
        creator: "NeuralArtist",
        collection: "Dream Sequences",
        timeLeft: "8h 50m",
        description: "Generated using a neural network trained on thousands of dream descriptions, this piece visualizes the collective unconscious of humanity.",
        status: "",
        createdAt: new Date('2025-04-10')
    },
    {
        id: 14,
        name: "Crypto Punk Derivative #7",
        image: "assets/cryptopunk.png",
        price: 4.2,
        category: "Trending",
        creator: "PunkMaster",
        collection: "Neo Punks",
        timeLeft: "5d 11h",
        description: "An authorized derivative of the famous CryptoPunks collection, featuring unique attributes and enhanced visual fidelity while honoring the original aesthetic.",
        status: "Hot",
        createdAt: new Date('2025-03-25')
    },
    {
        id: 15,
        name: "Formula EX Concept",
        image: "assets/formula.png",
        price: 1.5,
        category: "Cars",
        creator: "RacingVisions",
        collection: "Circuit Futures",
        timeLeft: "2d 15h",
        description: "A speculative design for electric racing vehicles in 2040. This concept has been praised by actual Formula E engineers for its innovative cooling solutions.",
        status: "",
        createdAt: new Date('2025-04-04')
    },
    {
        id: 16,
        name: "Metaverse Gorilla",
        image: "assets/metaverseGorilla.png",
        price: 2.1,
        category: "Monkey",
        creator: "MetaApe",
        collection: "Digital Jungle",
        timeLeft: "3d 9h",
        description: "A virtual gorilla that serves as both art and a functional avatar in select metaverse platforms. Features customizable expressions and animations.",
        status: "New",
        createdAt: new Date('2025-04-12')
    },
    {
        id: 17,
        name: "Fractal Universe",
        image: "assets/fractal.png",
        price: 0.8,
        category: "Abstract",
        creator: "FractalGenius",
        collection: "Infinite Patterns",
        timeLeft: "1d 7h",
        description: "A mesmerizing fractal composition that allows infinite zooming, revealing new patterns at each level. Contains hidden mathematical Easter eggs.",
        status: "",
        createdAt: new Date('2025-04-08')
    },
    {
        id: 18,
        name: "Sound Wave Portrait",
        image: "assets/soundwave.png",
        price: 0.6,
        category: "AsmrGraph",
        creator: "AudioVisual",
        collection: "Sound Signatures",
        timeLeft: "14h 20m",
        description: "A visual representation of the owner's voice saying 'blockchain revolution.' Includes an audio component that plays when viewed in compatible galleries.",
        status: "",
        createdAt: new Date('2025-04-09')
    },
    {
        id: 19,
        name: "Cyber Baboon Alpha",
        image: "assets/cyber.png",
        price: 1.3,
        category: "Monkey",
        creator: "EvoTech",
        collection: "Primate Futures",
        timeLeft: "2d 18h",
        description: "The alpha member of the Cyber Baboon collection, featuring enhanced technological integrations and a dominant posture symbolizing leadership.",
        status: "Hot",
        createdAt: new Date('2025-04-03')
    },
    {
        id: 20,
        name: "Holographic Dreams",
        image: "assets/holographic.png",
        price: 0.95,
        category: "Trending",
        creator: "HoloArtist",
        collection: "Light Fantasies",
        timeLeft: "1d 10h",
        description: "An artwork that appears to float in space when viewed through AR glasses. The piece transforms based on the viewer's emotional state via biofeedback.",
        status: "New",
        createdAt: new Date('2025-04-13')
    }
];

// Global variables for pagination
let currentPage = 1;
const itemsPerPage = 9;
let filteredNFTs = [...nftData];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the page
    updateNFTDisplay();
    
    // Event listeners for search and filters
    document.getElementById('search-btn').addEventListener('click', searchNFTs);
    document.getElementById('search-input').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchNFTs();
        }
    });
    
    document.getElementById('sort-by').addEventListener('change', applyFilters);
    document.getElementById('filter-category').addEventListener('change', applyFilters);
    document.getElementById('price-filter').addEventListener('input', updatePriceDisplay);
    document.getElementById('price-filter').addEventListener('change', applyFilters);
    
    // Pagination event listeners
    document.getElementById('next-page').addEventListener('click', nextPage);
    document.getElementById('prev-page').addEventListener('click', prevPage);
    
    // Modal event listeners
    document.getElementById('buy-now-btn').addEventListener('click', completePurchase);
    document.getElementById('place-bid-btn').addEventListener('click', placeBid);
    document.getElementById('close-success').addEventListener('click', closeSuccessModal);
    
    // Close modal when clicking on the X or outside the modal
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    document.getElementById('nft-modal').addEventListener('click', function(event) {
        if (event.target === this) {
            closeModal();
        }
    });
});

// Function to search NFTs by name
function searchNFTs() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredNFTs = [...nftData];
    } else {
        filteredNFTs = nftData.filter(nft => 
            nft.name.toLowerCase().includes(searchTerm) || 
            nft.creator.toLowerCase().includes(searchTerm) ||
            nft.collection.toLowerCase().includes(searchTerm)
        );
    }
    
    currentPage = 1;
    updateNFTDisplay();
}

// Function to apply filters (category, price, sort)
function applyFilters() {
    const categoryFilter = document.getElementById('filter-category').value;
    const sortBy = document.getElementById('sort-by').value;
    const maxPrice = parseFloat(document.getElementById('price-filter').value);
    
    // First filter by category and price
    filteredNFTs = nftData.filter(nft => {
        const categoryMatch = categoryFilter === 'all' || nft.category === categoryFilter;
        const priceMatch = nft.price <= maxPrice;
        return categoryMatch && priceMatch;
    });
    
    // Then sort the filtered results
    switch(sortBy) {
        case 'price-high':
            filteredNFTs.sort((a, b) => b.price - a.price);
            break;
        case 'price-low':
            filteredNFTs.sort((a, b) => a.price - b.price);
            break;
        case 'recent':
            filteredNFTs.sort((a, b) => b.createdAt - a.createdAt);
            break;
        default:
            // Default sorting (you can define your own)
            break;
    }
    
    currentPage = 1;
    updateNFTDisplay();
}

// Function to update price display
function updatePriceDisplay() {
    const priceValue = document.getElementById('price-filter').value;
    document.getElementById('price-value').textContent = `Max Price: ${priceValue} BTC`;
}

// Function to display NFTs based on current filters and pagination
function updateNFTDisplay() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentNFTs = filteredNFTs.slice(start, end);
    
    const nftGrid = document.getElementById('nft-grid');
    nftGrid.innerHTML = '';
    
    if (currentNFTs.length === 0) {
        nftGrid.innerHTML = '<div class="no-results">No NFTs found matching your criteria.</div>';
    } else {
        currentNFTs.forEach(nft => {
            const nftCard = createNFTCard(nft);
            nftGrid.appendChild(nftCard);
        });
    }
    
    updatePaginationControls();
}

// Function to create an NFT card element
function createNFTCard(nft) {
    const card = document.createElement('div');
    card.className = 'nft-card';
    card.dataset.id = nft.id;
    
    const badgesHtml = nft.status ? 
        `<div class="nft-badges">
            <span class="category">${nft.category}</span>
            <span class="status">${nft.status}</span>
        </div>` : 
        `<div class="nft-badges">
            <span class="category">${nft.category}</span>
        </div>`;
    
    card.innerHTML = `
        <div class="nft-image">
            <img src="${nft.image}" alt="${nft.name}">
            ${badgesHtml}
        </div>
        <div class="nft-info">
            <div class="nft-name-price">
                <div class="nft-name">${nft.name}</div>
                <div class="nft-price"><i class='bx bxl-bitcoin'></i> ${nft.price}</div>
            </div>
            <div class="nft-creator">
                <img src="assets/profile-4.png" alt="${nft.creator}">
                <span>by ${nft.creator}</span>
            </div>
            <div class="nft-actions">
                <div class="time-left"><i class='bx bx-time'></i> ${nft.timeLeft}</div>
                <button class="bid-btn">Place Bid</button>
            </div>
        </div>
    `;
    
    // Add event listener to open modal when card is clicked
    card.addEventListener('click', () => openNFTModal(nft));
    
    return card;
}

// Function to update pagination controls
function updatePaginationControls() {
    const totalPages = Math.ceil(filteredNFTs.length / itemsPerPage);
    document.getElementById('page-info').textContent = `Page ${currentPage} of ${totalPages || 1}`;
    
    document.getElementById('prev-page').disabled = currentPage <= 1;
    document.getElementById('next-page').disabled = currentPage >= totalPages;
}

// Function to go to next page
function nextPage() {
    const totalPages = Math.ceil(filteredNFTs.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        updateNFTDisplay();
        window.scrollTo(0, 0); // Scroll to top
    }
}

// Function to go to previous page
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updateNFTDisplay();
        window.scrollTo(0, 0); // Scroll to top
    }
}

// Function to open NFT modal with details
function openNFTModal(nft) {
    // Populate modal with NFT details
    document.getElementById('modal-img').src = nft.image;
    document.getElementById('modal-title').textContent = nft.name;
    document.getElementById('modal-description').textContent = nft.description;
    document.getElementById('modal-price').textContent = nft.price;
    document.getElementById('modal-time').textContent = nft.timeLeft;
    document.getElementById('modal-creator').textContent = nft.creator;
    document.getElementById('modal-collection').textContent = nft.collection;
    
    // Display the modal
    document.getElementById('nft-modal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Function to close the NFT modal
function closeModal() {
    document.getElementById('nft-modal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Function to handle purchase
function completePurchase() {
    // Here you would typically handle the actual transaction
    // For demo purposes, we'll just show the success modal
    document.getElementById('nft-modal').style.display = 'none';
    document.getElementById('transaction-success').style.display = 'block';
}

// Function to handle bid placement
function placeBid() {
    // Implement bid functionality (could show a bid input form)
    alert('Bidding functionality coming soon!');
}

// Function to close the success modal
function closeSuccessModal() {
    document.getElementById('transaction-success').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Function to initialize UI with random featured NFTs
function initializeFeaturedNFTs() {
    // For homepage or other sections that might need random featured NFTs
    const featuredNFTs = [...nftData]
        .sort(() => 0.5 - Math.random()) // Shuffle array
        .slice(0, 4); // Take first 4 items
    
    // Implementation would depend on your homepage structure
    console.log("Featured NFTs ready for display:", featuredNFTs);
    
    return featuredNFTs;
}

// Function to get trending NFTs (those marked as "Hot" or "New")
function getTrendingNFTs() {
    return nftData.filter(nft => nft.status === 'Hot' || nft.status === 'New');
}

// Function to get NFTs by category
function getNFTsByCategory(category) {
    return nftData.filter(nft => nft.category === category);
}

// Export functions for use in other scripts if needed
window.DeepSeaMarketplace = {
    getAllNFTs: () => nftData,
    getTrendingNFTs,
    getNFTsByCategory,
    getFeaturedNFTs: initializeFeaturedNFTs
};
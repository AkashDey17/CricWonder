const sampleListings = [
  {
    title: "Shaanz Cricket Ground",
    description:
      "Nestled amidst the lush greenery and rolling hills, Shaanz Cricket Ground is a picturesque oasis for cricket enthusiasts. This ground, renowned for its immaculate pitch and world-class facilities, is more than just a venue; it is a sanctuary for the sport's ardent followers.",
    image: 
      {
        filename :"listingimage",
      url : "https://images.unsplash.com/photo-1552435053-01c010307582?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JpY2tldCUyMGZpZWxkfGVufDB8fDB8fHww"
      },
    price: 5500,
    location: "Gopasandra",
    country: "India",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image:
    {
      filename : "listingimage",
      url : "https://images.unsplash.com/photo-1552435053-01c010307582?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JpY2tldCUyMGZpZWxkfGVufDB8fDB8fHww",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: 
      {
        filename : "listingimage",
       url : "https://images.unsplash.com/photo-1622580999956-71db3b0f3178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNyaWNrZXQlMjBmaWVsZHxlbnwwfHwwfHx8MA%3D%3D",
      },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: 
      {
      filename : "listingimage",
      url : "https://images.unsplash.com/photo-1624194697120-34347cff8b58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNyaWNrZXQlMjBmaWVsZHxlbnwwfHwwfHx8MA%3D%3D",
      },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: 
    {
      filename : "listingimage",
      url:"https://images.unsplash.com/photo-1624193634221-33b652971323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNyaWNrZXQlMjBmaWVsZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image:
    { 
      filename : "listingimage",
     url : "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: 
    {
      filename : "listingimage",
      url : "https://images.unsplash.com/photo-1565787154274-c8d076ad34e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: 
    {
      filename : "listingimage",
   url : "https://images.unsplash.com/photo-1589801258579-18e091f4ca26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: 
    {
      filename : "listingimage",
   url : "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: 
    {
    url : "https://images.unsplash.com/photo-1585822754398-04873d4e1f50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: 
    {
      filename : "listingimage",
    url : "https://images.unsplash.com/photo-1595210382051-4d2c31fcc2f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image:
    {
      filename : "listingimage",
    url : "https://images.unsplash.com/photo-1607494628003-613b464734e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: 
    {
      filename : "listingimage",
    url : "https://images.unsplash.com/photo-1552435053-01c010307582?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: 
    {
      filename : "listingimage",
    url : "https://images.unsplash.com/photo-1599982917650-21da4d09c437?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image:
    {
      filename : "listingimage",
    url : "https://images.unsplash.com/photo-1567943346767-72780dd14cd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: 
    {
      filename : "listingimage",
    url : "https://images.unsplash.com/photo-1582217217724-c675a2f82188?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image:
    {
      filename : "listingimage",
    url :"https://images.unsplash.com/photo-1590134674840-96ce3d0f9766?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image:
    {
      filename : "listingimage",
     url : "https://images.unsplash.com/photo-1624526251258-e2948e581c05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image:
    {
      filename : "listingimage",
    url : "https://images.unsplash.com/photo-1624193634221-33b652971323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image:
    {
      filename : "listingimage",
    url : "https://images.unsplash.com/photo-1624193822910-a73257ce9e44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: 
    {
      filename : "listingimage",
    url : "https://images.unsplash.com/photo-1590134586486-1084d699b732?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image:
    {
      filename : "listingimage",
    url : "https://images.unsplash.com/photo-1589801126816-38f3f2e18b89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image:
    {
      filename : "listingimage",
    url : "https://images.unsplash.com/photo-1624526345903-556b2598e7af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image:
    {
      filename : "listingimage",
    url : "https://images.unsplash.com/photo-1624526404491-2c735be4b243?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: 
    {
      filename : "listingimage",
    url :"https://images.unsplash.com/photo-1624526368410-b552dbf2e743?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxjcmlja2V0fGVufDB8fDB8fHww",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image:
    {
      filename : "listingimage",
    url : "https://images.unsplash.com/photo-1595210382266-2d0077c1f541?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxjcmlja2V0fGVufDB8fDB8fHww",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image:
    {
      filename : "listingimage",
    url : "https://images.unsplash.com/photo-1624526076135-f880908d141e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxjcmlja2V0fGVufDB8fDB8fHww",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image:
    {
      filename : "listingimage",
    url :"https://images.unsplash.com/photo-1590134797180-f4170305bf5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxjcmlja2V0fGVufDB8fDB8fHww",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image:
    {
      filename : "listingimage",
    url : "https://images.unsplash.com/photo-1589801180363-5c0c7dfd4df5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxjcmlja2V0fGVufDB8fDB8fHww",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
];

module.exports = { data: sampleListings };


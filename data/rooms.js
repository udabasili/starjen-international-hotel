export const roomsData = [
    {
        name: 'Executive Royal Diamond Room',
        id: 'room-x001',
        bed: 2,
        maxPeople: 3,
        size: '100 sqm',
        description: 'Spacious, bright and outward facing rooms measuring 27 m2 and totally refurbished. The room comes with double bed or twin beds with comfortable mattress (manufactured and designed exclusively for Starjen International Hotels), a modern, fully equipped bathroom with proper ventilation. It also has a home automation system which automatically regulates the temperature of the room based on guest presence or absence from the room. All the rooms have a magnificent hallway-dressing area, as well as a room off the bathroom, which is independent of the room as it has double doors.',
        cost: '₦11,000.00',
         amenities: {
             wifi: true,
             roomService: true,
             breakfast: true,
             airPortPickupService: '₦4,500/round'
         },
        image: 'https://res.cloudinary.com/udbasil/image/upload/q_auto:good/v1638357998/Starjen%20international/IMG-20211201-WA0029_ijaawb.jpg'

    },
    {
        name: 'Royal Diamond Room',
        id: 'room-x002',
        bed: 1,
        maxPeople: 2,
        description: 'Totally refurbished and all outward facing, these rooms provide a large bedroom with a double bed or twin beds and the possibility of an extra bed and cot, as well as a modern, fully equipped bathroom with proper ventilation. The room comes with comfortable bed (manufactured and designed exclusively for Starjen International Hotels) . It also has a home automation system which automatically regulates the temperature of the room based on guest presence or absence from the room.',
        size: '250 sqm',
        amenities: {
            wifi: true,
            roomService: true,
            breakfast: false,
            airPortPickupService: '₦4,500/round'
        },
        cost: '₦8,800.00',
        image: 'https://res.cloudinary.com/udbasil/image/upload/q_auto:good/v1638357999/Starjen%20international/IMG-20211201-WA0030_kisr2v.jpg'


    },
     {
         name: 'Deluxe Executive Room',
         id: 'room-x003',
         bed: 1,
         maxPeople: 3,
         size: '80 sqm',
         breakfast: false,
         description: 'Spacious, bright and outward facing rooms measuring 19 m2 and totally refurbished. The room comes with comfortable bed (manufactured and designed exclusively for Starjen International Hotels), a modern, fully equipped bathroom with proper ventilation. It also has a home automation system which automatically regulates the temperature of the room based on guest presence or absence from the room.',
         cost: '₦7,150.00',
         image: 'https://res.cloudinary.com/udbasil/image/upload/q_auto:good/v1638358003/Starjen%20international/IMG-20211201-WA0002_a7ftox.jpg',
         amenities: {
             wifi: true,
             roomService: true,
             breakfast: false,
             airPortPickupService: '₦4,500/round'
         }
     },
     {
         name: 'Short Lease',
         id: 'room-x004',
         bed: 1,
         description: 'Short Lease rental is a promotion from us to our esteemed guests who would want to extend their state for extra days',
         maxPeople: 2,
         size: 'Standard',
         image: 'https://res.cloudinary.com/udbasil/image/upload/q_auto:good/v1638643507/Starjen%20international/short-lease-400x300_lqnrzq.jpg',
         amenities: {
             wifi: false,
             roomService: false,
             breakfast: false,
             airPortPickupService: false
         }
     }

]
const winterProducts = [
    {
        id: '11',
        title: 'HALF-ZIP RUN WARM WOMEN\'S LONG- SLEEVED RUNNING T - SHIRT - BURGUNDY',
        ratings: '4.7',
        totalRatings: '5',
        image: '/image-1.webp',
        mrp: 1299,
        price: 799,
        country: 'IN'
    },
    {
        id: '22',
        title: 'KALENJI MEN\'S WARM LONG- SLEEVED RUNNING T - SHIRT BLACK',
        ratings: '4.7',
        totalRatings: '5',
        image: '/image-2.webp',
        mrp: 1499,
        price: 799,
        country: 'IN'
    },
    {
        id: '33',
        title: 'Kalenji Warm+ Men\'s Running Zipped Hoodie Sweatshirt - Brick Red',
        ratings: '4.6',
        totalRatings: '5',
        image: '/image-3.webp',
        mrp: 2999,
        price: 2499,
        country: 'IN'
    },
    {
        id: '44',
        title: 'KALENJI WARM MEN\'S RUNNING TIGHTS BLACK',
        ratings: '4.6',
        totalRatings: '5',
        image: '/image-4.webp',
        mrp: 1799,
        price: 999,
        country: 'IN'
    },
    {
        id: '55',
        title: 'RUN WARM WOMEN\'S RUNNING WARM HOODIE - LIGHT BLUE',
        ratings: '4.8',
        totalRatings: '5',
        image: '/image-5.webp',
        mrp: 1799,
        price: 1499,
        country: 'IN'
    }
]

const coldProducts = [
    {
        id: '66',
        title: 'Run Warm Women\'s Long- Sleeved T - Shirt Zip - black',
        ratings: '4.7',
        totalRatings: '5',
        image: '/image-6.webp',
        mrp: 1299,
        price: 799,
        country: 'IN'
    },
    {
        id: '77',
        title: 'Run Warm+ Women\'s Running Warm Tights - Blue Black',
        ratings: '4.5',
        totalRatings: '5',
        image: '/image-7.webp',
        mrp: 1299,
        price: 499,
        country: 'IN'
    },
    {
        id: '88',
        title: 'KALENJI WARM MEN\'S RUNNING TIGHTS BLACK',
        ratings: '4.6',
        totalRatings: '5',
        image: '/image-8.webp',
        mrp: 1799,
        price: 999,
        country: 'IN'
    },
    {
        id: '99',
        title: 'KALENJI WARM MEN\'S RUNNING TIGHTS BLACK',
        ratings: '4.7',
        totalRatings: '5',
        image: '/image-9.webp',
        mrp: 1499,
        price: 799,
        country: 'IN'
    },
    {
        id: '1010',
        title: 'Men\'s Running Trousers Kalenji Warm+ - grey',
        ratings: '4.8',
        totalRatings: '5',
        image: '/image-10.webp',
        mrp: 1500,
        price: 1199,
        country: 'IN'
    }
]

export const categories = [{
    title: 'Winter Collection',
    description: 'Running',
    products: [...winterProducts]
},
{
    title: 'Cold',
    description: 'Embrace the',
    products: [...coldProducts]

}]

export const usersList = [{
    id: 'u_123',
    email: 'test123@gmail.com',
    password: 'test@123'
}, {
    id: 'u_678',
    email: 'test678@gmail.com',
    password: 'test@678'
}, {
    id: 'u_456',
    email: 'test456@gmail.com',
    password: 'test@456'
}]
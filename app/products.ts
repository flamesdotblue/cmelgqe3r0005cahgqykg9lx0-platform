export type Product = {
  id: string
  name: string
  park: string
  scent: string[]
  description: string
  price: number
  image: string
  photoCredit: string
}

export const products: Product[] = [
  {
    id: 'yosemite-fir-granite',
    name: 'Yosemite — Fir & Granite',
    park: 'Yosemite National Park',
    scent: ['Douglas fir', 'Wet granite', 'Campfire smoke'],
    description: 'Crisp alpine air and towering granite walls. A bright evergreen opening mellows into mineral and ember.',
    price: 28,
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1400&auto=format&fit=crop',
    photoCredit: 'https://unsplash.com/photos/gray-rocky-mountain-under-blue-sky-during-daytime-4_jhDO54BYg'
  },
  {
    id: 'zion-cedar-canyon',
    name: 'Zion — Cedar & Canyon',
    park: 'Zion National Park',
    scent: ['Red cedar', 'Desert sage', 'Sun-warmed sandstone'],
    description: 'A sunlit canyon walk. Aromatic cedar and sagebrush over warm, earthy stone.',
    price: 28,
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop',
    photoCredit: 'https://unsplash.com/photos/man-hiking-on-mountain-cliff-M6XC789HLe8'
  },
  {
    id: 'acadia-spruce-sea',
    name: 'Acadia — Spruce & Sea',
    park: 'Acadia National Park',
    scent: ['Black spruce', 'Sea spray', 'Wild blueberry'],
    description: 'Rocky coasts and spruce forests. Brisk marine notes drift into resinous green and a hint of fruit.',
    price: 28,
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop',
    photoCredit: 'https://unsplash.com/photos/green-leafed-plants-on-body-of-water-during-daytime-jFCViYFYcus'
  },
  {
    id: 'great-smoky-mist-fern',
    name: 'Great Smoky — Mist & Fern',
    park: 'Great Smoky Mountains National Park',
    scent: ['Morning mist', 'Green fern', 'Mossy oak'],
    description: 'Soft, enveloping fog over ancient forest. Dewy greens layered with earthy woods.',
    price: 28,
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1400&auto=format&fit=crop#smoky',
    photoCredit: 'https://unsplash.com/photos/gray-rocky-mountain-under-blue-sky-during-daytime-4_jhDO54BYg'
  },
  {
    id: 'joshua-tree-cream-bloom',
    name: 'Joshua Tree — Cream & Bloom',
    park: 'Joshua Tree National Park',
    scent: ['Yucca bloom', 'Sweet cream', 'Palo santo'],
    description: 'A desert evening in bloom. Creamy florals balanced by dry wood smoke.',
    price: 28,
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop',
    photoCredit: 'https://unsplash.com/photos/sun-setting-over-mountain-ranges-a7_TxQnALms'
  },
  {
    id: 'olympic-rain-cedar',
    name: 'Olympic — Rain & Cedar',
    park: 'Olympic National Park',
    scent: ['Rain-soaked earth', 'Western red cedar', 'Sea driftwood'],
    description: 'Temperate rainforest and rugged coast converge. Petrichor opens into deep cedar and briny wood.',
    price: 28,
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop#olympic',
    photoCredit: 'https://unsplash.com/photos/green-leafed-plants-on-body-of-water-during-daytime-jFCViYFYcus'
  }
]

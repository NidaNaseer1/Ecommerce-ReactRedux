import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import PhoneIcon from '@mui/icons-material/Phone';

export const socialIcon = [
  {
    icon: <FacebookIcon />,
    name: "facebook",
  },
  {
    icon: <TwitterIcon />,
    name: "twitter",
  },
  {
    icon: <YouTubeIcon />,
    name: "youtube",
  },
  {
    icon: <InstagramIcon />,
    name: "instagram",
  },
];

export const products = [
  {
    id: 1,
    category: "Fruits",
    product_name: "Grapes",
    product_img: "../assets/img/best-product-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "4.99",
  },

  {
    id: 2,
    category: "Vegetables",
    product_name: "Cauliflower",
    product_img: "../assets/img/best-product-6.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "2.99",
  },

  {
    id: 3,
    category: "Fruits",
    product_name: "Pomegranate",
    product_img: "../assets/img/best-product-5.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "8.99",
  },

  {
    id: 4,
    category: "Fruits",
    product_name: "Apple",
    product_img: "../assets/img/best-product-4.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "3.99",
  },
  {
    id: 5,
    category: "Bread",
    product_name: "Pouroti",
    product_img: "../assets/img/best-product-3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "3.99",
  },

  {
    id: 6,
    category: "Meat",
    product_name: "Chicken",
    product_img: "../assets/img/best-product-2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "3.99",
  },
  {
    id: 7,
    category: "Vegetables",
    product_name: "Apple",
    product_img: "../assets/img/best-product-6.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "3.99",
  },
  {
    id: 8,
    category: "Vegetables",
    product_name: "Tomatos",
    product_img: "../assets/img/best-product-4.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "3.99",
  },
];
export const slids = [
  {
    category: "Fruit",
    slide_img: "../assets/img/hero-img-1.png",
  },
  {
    category: "Vegetable",
    slide_img: "../assets/img/hero-img-2.jpg",
  },
];
export const features = [
  { icon: 'LocalShippingIcon', title: 'Fast Shipping', descript: 'Get your products quickly with fast shipping options.' },
  { icon: 'SupportIcon', title: '24/7 Support', descript: 'Our team is here to help you anytime.' },
  { icon: 'SecurityIcon', title: 'Secure Payments', descript: 'Your payment information is protected.' },
  { icon: 'KeyboardReturnIcon', title: 'Easy Returns', descript: 'Return products with ease if you are not satisfied.' }
];

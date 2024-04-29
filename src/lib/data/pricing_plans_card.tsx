// pricing card config
const plans = [
  {
    title: "Basic",
    currency: "",
    price: "Free",
    features: [
      {
        name: "Feature 1",
        check: true
      },
      {
        name: "Feature 2",
        check: true
      },
      {
        name: "Feature 3",
        check: true
      },
    ],
    buttonVariant: "outline",
    url: '',
  },
  {
    title: "Premium",
    currency: "$",
    price: "9.99",
    features: [
      {
        name: "Feature 1",
        check: true
      },
      {
        name: "Feature 2",
        check: true
      },
      {
        name: "Feature 3",
        check: true
      },
    ],
    buttonVariant: "default",
    url: '',
  },
  {
    title: "Credits",
    currency: "$",
    price: "1.99",
    features: [
      {
        name: "Feature 1",
        check: true
      },
      {
        name: "Feature 2",
        check: true
      },
      {
        name: "Feature 3",
        check: true
      },
      {
        name: "Feature 4",
        check: true
      },
      {
        name: "Feature 5",
        check: true
      },
    ],
    buttonVariant: "secondary",
    url: '',
  },
]

export { plans };

export const registerFormControl=[
    {
        name:"userName",
        type:"text",
        label:"Username",
        componentType: "input",
        placeholder: "Enter your username",
    },
     {
        name:"email",
        type:"email",
        label:"email",
        componentType: "input",
        placeholder: "Enter your email",
    },
     {
        name:"password",
        type:"password",
        label:"password",
        componentType: "input",
        placeholder: "Enter your password",
    }
]

export const loginFormControl=[
     {
        name:"email",
        type:"email",
        label:"email",
        componentType: "input",
        placeholder: "Enter your email",
    },
     {
        name:"password",
        type:"password",
        label:"password",
        componentType: "input",
        placeholder: "Enter your password",
    }

]


export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { value: "men", label: "Men" },
      { value: "women", label: "Women" },
      { value: "kids", label: "Kids" },
      { value: "accessories", label: "Accessories" },
      { value: "footwear", label: "Footwear" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { value: "nike", label: "Nike" },
      { value: "adidas", label: "Adidas" },
      { value: "puma", label: "Puma" },
      { value: "levi", label: "Levi's" },
      { value: "zara", label: "Zara" },
      { value: "h&m", label: "H&M" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];


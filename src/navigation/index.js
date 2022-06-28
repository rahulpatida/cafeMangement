import{ Menu, Home, DollarSign, User} from 'react-feather'
const navigation = [
     
     {
        
       title: "Dashboard",
       href: "/starter",
       icon: <Home   size={15}/>,
     },
     {
        header:'ProductManu'  ,
        title: "MenuProduct",
        href: "/manu",
        icon: <Menu size={15} />,
      },
      {
        header:'Expense '  ,
        title: "Expense ",
        href: "/expense",
        icon: <DollarSign  size={15}/>
      },
      {
        header: 'Employees',
        title: "Employees",
        href: "/employees",
        icon: <User  size={15} />,
      },
     
  
    {
        header: 'Product',
        title: "product",
        href: "/product",
        icon: <User   size={15}/>,
    },
    {
      header: 'Recipes',
      title: "Recipe",
      href: "/recipe",
      icon: <User   size={15}/>,
  },
  
  {
    header: 'Category',
    title: "Category",
    href: "/category",
    icon: <User   size={15}/>,
},
   
];

 



 

export default navigation
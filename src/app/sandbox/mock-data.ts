import { type IconName } from "~/components/icon";

export const mockData = {
  //   users: [
  //     {
  //       firstName: "John",
  //       lastName: "Doe",
  //       imageUrl: "https://source.unsplash.com/random/150x150/?portrait",
  //     },
  //     {
  //       firstName: "Jane",
  //       lastName: "Smith",
  //       imageUrl: "https://source.unsplash.com/random/150x150/?woman",
  //     },
  //   ],

  //   restaurants: [
  //     {
  //       userId: "user_01",
  //       name: "The Italian Corner",
  //       address: "123 Main St, New York, NY 10001",
  //       logoUrl: "https://source.unsplash.com/random/200x200/?restaurant-logo",
  //     },
  //     {
  //       id: "rest_02",
  //       userId: "user_02",
  //       name: "Sushi Master",
  //       address: "456 Broadway, New York, NY 10002",
  //       logoUrl: "https://source.unsplash.com/random/200x200/?sushi-restaurant",
  //       createdAt: new Date("2024-01-02").toISOString(),
  //       updatedAt: new Date("2024-01-02").toISOString(),
  //     },
  //   ],

  productCategories: [
    {
      name: "Appetizers",
      description: "Start your meal with these delicious options",
      iconName: "Utensils" as IconName,
    },
    {
      name: "Main Course",
      description: "Hearty and satisfying main dishes",
      iconName: "Beef" as IconName,
    },
    {
      name: "Desserts",
      description: "Sweet treats to end your meal",
      iconName: "Cake" as IconName,
    },
    {
      name: "Beer",
      description: "Refreshing drinks and cocktails",
      iconName: "Beer" as IconName,
    },
  ],

  products: [
    {
      title: "Margherita Pizza",
      description: "Fresh tomatoes, mozzarella, and basil",
      price: "14.99",
      imageUrl: "https://source.unsplash.com/random/400x300/?pizza",
    },
    {
      title: "Grilled Salmon",
      description: "Fresh salmon with lemon butter sauce",
      price: "24.99",
      imageUrl: "https://source.unsplash.com/random/400x300/?salmon",
    },
    {
      title: "Tiramisu",
      description: "Classic Italian dessert",
      price: "8.99",
      imageUrl: "https://source.unsplash.com/random/400x300/?tiramisu",
    },
  ],

  //   weeklyMenu: [
  //     {
  //       id: "menu_01",
  //       productId: "prod_01",
  //       dayOfWeek: "Monday",
  //     },
  //     {
  //       id: "menu_02",
  //       productId: "prod_02",
  //       dayOfWeek: "Monday",
  //     },
  //     {
  //       id: "menu_03",
  //       productId: "prod_03",
  //       dayOfWeek: "Tuesday",
  //     },
  //   ],

  images: [
    {
      id: "img_01",
      name: "pizza-margherita",
      url: "https://source.unsplash.com/random/400x300/?pizza",
    },
    {
      id: "img_02",
      name: "grilled-salmon",
      url: "https://source.unsplash.com/random/400x300/?salmon",
    },
    {
      id: "img_03",
      name: "restaurant-interior",
      url: "https://source.unsplash.com/random/400x300/?restaurant",
    },
  ],

  initialTheme: {
    name: "Classic Dark",
    backgroundColor: "#1a1a1a",
    textColor: "#ffffff",
    iconColor: "#gold",
    borderColor: "#333333",
    productCartBackgroundColor: "#222222",
  },
};

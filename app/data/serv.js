import { SiCoffeescript } from "react-icons/si";
import { SiJusteat } from "react-icons/si";
import { RiDrinksFill } from "react-icons/ri";
import { GiCakeSlice } from "react-icons/gi";

const Service = [
    {
        id:1,
        titre: "Petit déjeuner",
        photo:  <SiCoffeescript className="text-5xl text-yellow-400" />,
        description: "In the new era of technology we look in the future with certainty and pride for our life.", 
    },
    {
        id:2,
        titre: "Déjeuner",
        photo:  <SiJusteat className="text-5xl text-yellow-400" />,
        description: "In the new era of technology we look in the future with certainty and pride for our life.", 
    },
    {
        id:3,
        titre: "Boisson",
        photo:  <RiDrinksFill className="text-5xl text-yellow-400" />,
        description: "In the new era of technology we look in the future with certainty and pride for our life.", 
    },
    {
        id:4,
        titre: "Dessert",
        photo:  <GiCakeSlice className="text-5xl text-yellow-400" />,
        description: "In the new era of technology we look in the future with certainty and pride for our life.", 
    }
    ]

    export {Service};
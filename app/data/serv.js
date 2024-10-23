import { SiCoffeescript } from "react-icons/si";
import { SiJusteat } from "react-icons/si";
import { RiDrinksFill } from "react-icons/ri";
import { GiCakeSlice } from "react-icons/gi";

const Service = [
    {
        id:1,
        titre: "Petit déjeuner",
        photo:  <SiCoffeescript className="text-5xl text-yellow-400" />,
        description: "Commencez la journée du bon pied avec notre petit-déjeuner complet et savoureux, fait pour vous énergiser jusqu’au déjeuner !", 
    },
    {
        id:2,
        titre: "Déjeuner",
        photo:  <SiJusteat className="text-5xl text-yellow-400" />,
        description: "Laissez-vous séduire par notre menu déjeuner, où fraîcheur et authenticité se rencontrent dans des plats généreux et délicieux !", 
    },
    {
        id:3,
        titre: "Boisson",
        photo:  <RiDrinksFill className="text-5xl text-yellow-400" />,
        description: "Rafraîchissez-vous avec nos cocktails maison, des saveurs uniques qui éveilleront vos papilles à chaque gorgée !", 
    },
    {
        id:4,
        titre: "Dessert",
        photo:  <GiCakeSlice className="text-5xl text-yellow-400" />,
        description: "Terminez en beauté avec nos desserts gourmands, une douce explosion de saveurs pour un moment de pur plaisir !", 
    }
    ]

    export {Service};
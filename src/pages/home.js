import Register from "../components/register";
import Card from "../components/card";


import images from '../images/images.js'




export default function Home(){
    return(
        <div>
        <h1> Nuestro Transporte </h1>
        <Card title={'Mercedes Sprinter 2014'} img={images.img1} />
        <Card title={'Buseton Renault'} img={images.img2}/>
        <Register/>


        </div>
    )
}
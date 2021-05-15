import style from "styles/Home.module.css";
import Head from "next/head";
import { Plant } from "components/Plant";
import {Dialog} from 'components/Dialog'
import { useRef, useState } from "react";
import { Input } from "components/Input";


export default function Home() {

  const [plant, setPlant] = useState('')
  const [plants, setPlants] = useState([])

  const popupRef = useRef(null)
 
  const AddPlant = () =>{
    console.log(plant);
    if(plant === '' ) return;
    setPlants([...plants, {title: plant,light: 20,health: 20, humidty: 10, }])
  }

  const inputChange = (value) =>{
    setPlant(value)
  }
  return (
    <>
      <Head>
        <title>Garden Info</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`${style.Home}`}>
        <Dialog ref={popupRef} buttonText='שמור' title='הוספת צמח חדש' onConfirm ={AddPlant}
        
        render = { () => 
          <>
            <Input onChange={inputChange} label ='צמח'/>
            </>
        }/>
       <button onClick={()=>popupRef.current.Open()}>הוסף</button>
       {plants.length === 0 ? <div className='title'>אין צמחים</div>
       :

       <div className={style.Plants}>
         {plants.map((p, i) => <Plant key ={i} {...p}/>)}
       </div>
  }
      </div>
    </>
  );
}

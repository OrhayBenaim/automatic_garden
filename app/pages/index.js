import style from "styles/Home.module.css";
import Head from "next/head";
import { Plant } from "components/Plant";
import {Dialog} from 'components/Dialog'
import { useRef, useState } from "react";
import { Input } from "components/Input";
import { Select } from "components/Select";

const gpios = [
  {value: 3, pin: 'GPIO 2'},
  {value: 5, pin: 'GPIO 3'},
  {value: 7, pin: 'GPIO 4'},
  {value: 11, pin: 'GPIO 17'},
  {value: 13, pin: 'GPIO 27'},
  {value: 15, pin: 'GPIO 22'},
  {value: 16, pin: 'GPIO 23'},
  {value: 18, pin: 'GPIO 24'},
  {value: 22, pin: 'GPIO 25'},
  {value: 27, pin: 'GPIO 0'},
  {value: 28, pin: 'GPIO 1'},
  {value: 29, pin: 'GPIO 5'},
  {value: 31, pin: 'GPIO 6'},
  {value: 32, pin: 'GPIO 12'},
  {value: 33, pin: 'GPIO 13'},
  {value: 36, pin: 'GPIO 16'},
  {value: 37, pin: 'GPIO 26'},
]
export default function Home() {

  const [plant, setPlant] = useState('')
  const [plants, setPlants] = useState([])
  const [LightGPIO, setLightGPIO] = useState(-1)
  const [HumidityGPIO, setHumidityGPIO] = useState(-1)

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
            <Select label='Humidity' onChange={(v)=>setHumidityGPIO(v)}>
              {gpios.filter(gpio => gpio.value != LightGPIO).map(gpio=> <option key={gpio.value} value={gpio.value}>{gpio.pin}</option>)}
            </Select>

            <Select label='Light' onChange={(v)=>setLightGPIO(v)}>
              {gpios.filter(gpio => gpio.value != HumidityGPIO).map(gpio=> <option  key={gpio.value} value={gpio.value}>{gpio.pin}</option>)}
            </Select>
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

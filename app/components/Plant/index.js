import Widget from 'components/Widget'
import React from 'react'
import Image from "next/image";
import ProgressBar from 'components/ProgressBar';
import style from 'styles/Plant.module.css'


export const Plant = ({title = '' ,humidty = 0, light = 0, health = 0}) => {
    return (
        <Widget title={title}>
        <div className={`humidity ${style.item}`}>
          <Image alt="humidity" src="/humidity.svg" width={52} height={52} />
          <ProgressBar precentage={humidty} />
        </div>

        <div className={`light ${style.item}`}>
          <Image alt="sun light" src="/sun.svg" width={52} height={52} />
          <ProgressBar precentage={light} />
        </div>
        <div className={`health ${style.item}`}>
          <Image alt="health" src="/plant.svg" width={52} height={52} />
          <ProgressBar precentage={health} />
        </div>
      </Widget>
    )
}

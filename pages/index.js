import style from "styles/Home.module.css";
import Head from 'next/head'
import Widget from "components/Widget";
import Image from "next/image";
import ProgressBar from "components/ProgressBar";


export default function Home() {


  return (
    <>
    <Head>
        <title>Garden Info</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div className={`${style.Home}`}>
      <Widget title="רוזמרין">
        <div className={`humidity ${style.item}`}>
          <Image alt="humidity" src="/humidity.svg" width={52} height={52} />
          <ProgressBar precentage={60} />
        </div>

        <div className={`light ${style.item}`}>
          <Image alt="sun light" src="/sun.svg" width={52} height={52} />
          <ProgressBar precentage={50} />
        </div>
        <div className={`health ${style.item}`}>
          <Image alt="health" src="/plant.svg" width={52} height={52} />
          <ProgressBar precentage={100} />
        </div>
      </Widget>

      <Widget title="בזיליקום">
        <div className={`humidity ${style.item}`}>
          <Image alt="humidity" src="/humidity.svg" width={52} height={52} />
          <ProgressBar precentage={60} />
        </div>

        <div className={`light ${style.item}`}>
          <Image alt="sun light" src="/sun.svg" width={52} height={52} />
          <ProgressBar precentage={50} />
        </div>
        <div className={`health ${style.item}`}>
          <Image alt="health" src="/plant.svg" width={52} height={52} />
          <ProgressBar precentage={100} />
        </div>
      </Widget>

      <Widget title="אורגנו">
        <div className={`humidity ${style.item}`}>
          <Image alt="humidity" src="/humidity.svg" width={52} height={52} />
          <ProgressBar precentage={60} />
        </div>

        <div className={`light ${style.item}`}>
          <Image alt="sun light" src="/sun.svg" width={52} height={52} />
          <ProgressBar precentage={50} />
        </div>
        <div className={`health ${style.item}`}>
          <Image alt="health" src="/plant.svg" width={52} height={52} />
          <ProgressBar precentage={100} />
        </div>
      </Widget>

      <Widget title="טימין">
        <div className={`humidity ${style.item}`}>
          <Image alt="humidity" src="/humidity.svg" width={52} height={52} />
          <ProgressBar precentage={60} />
        </div>

        <div className={`light ${style.item}`}>
          <Image alt="sun light" src="/sun.svg" width={52} height={52} />
          <ProgressBar precentage={50} />
        </div>
        <div className={`health ${style.item}`}>
          <Image alt="health" src="/plant.svg" width={52} height={52} />
          <ProgressBar precentage={100} />
        </div>
      </Widget>
    </div>

    </>
  );
}

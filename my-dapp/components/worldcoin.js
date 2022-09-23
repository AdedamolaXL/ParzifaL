import { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import { utils } from "@worldcoin/id";
import { WidgetProps } from "@worldcoin/id";
import { useEffect } from "react";

const WorldIDWidget = dynamic(() => import("@worldcoin/id").then((mod) => mod.WorldIDWidget), { ssr: false });

const widgetProps = {
  actionId: "wid_staging_aa1f35d5dc7332e4dc2d53e978d5c87f",
  signal: "user-id-1",
  enableTelemetry: true,
  appName: "ConfCon",
  signalDescription: "Get your ticket to ConfCon 2023",
  theme: "dark",
  debug: true, // Recommended **only** for development
  onSuccess: (result) => console.log(result),
  onError: ({ code, detail }) => console.log({ code, detail }),
  onInitSuccess: () => console.log("Init successful"),
  onInitError: (error) => console.log("Error while initialization World ID", error),
}

const Worldcoin = () => {
  useEffect(() => {
    console.log("Random Number from utils: ", utils.randomNumber(1, 100));
  }, []);

  return (
    

      <div className={styles.div}>
        <WorldIDWidget {...widgetProps} />
      </div>
  )
   
};

export default Worldcoin;
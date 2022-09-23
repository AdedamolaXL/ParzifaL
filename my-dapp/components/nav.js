import { ConnectWallet, ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Nav() { 

    return ( 

    <div className = {styles.nav}>

        <strong>parzifalsHunt</strong>
      
      <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
        <ConnectWallet />
      </ThirdwebProvider>

    </div>
    )

}
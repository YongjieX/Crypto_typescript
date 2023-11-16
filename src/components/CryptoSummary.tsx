import { Crypto } from "../types/types";


export type AppProps = {
    crypto: Crypto ;
}

export default function CryptoSummary({crypto}:AppProps) : JSX.Element{

    return <p>{crypto.name + '$ ' + crypto.current_price}  </p>

}
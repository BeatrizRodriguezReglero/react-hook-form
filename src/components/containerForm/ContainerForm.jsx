import { useState } from "react";
import CardContainer from "../CardContainer/CardContainer"
import Form from "../form/Form"
import { CARD_DATA } from "../../constants/card-data";


const ContainerForm=()=>{
    const [cardData, setCardData] = useState(CARD_DATA);
    return(<>
    
            <div>
                <CardContainer cardData={cardData}/>
                <Form cardData={cardData} setCardData={setCardData}/>
            </div>
    
    </>)

}
export default ContainerForm
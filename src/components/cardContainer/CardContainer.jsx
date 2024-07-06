import { CARD_DATA } from "../../constants/card-data"
import { StyledCardsContainer, StyledFrontCardContainer, StyledCardNumber, StyledBackCardContainer, StyledCardName, StyledCardLogo, StyledCardDate, StyledCardCvc } from "./cardContainer.styles"

const CardContainer=({cardData})=>{
    const { name, number, month, year, cvc } = cardData;
    
    return (
        <>
            <StyledCardsContainer>
                <StyledFrontCardContainer >
                    <StyledCardLogo src="./images/card-logo.svg" alt="" />
                    <StyledCardNumber>{number === '' ? CARD_DATA.number : number }</StyledCardNumber>
                    <div>
                       <StyledCardName>{name === '' ? CARD_DATA.name : name}</StyledCardName>  
                       <StyledCardDate>{month === '' ? CARD_DATA.month : month }/{year === '' ? CARD_DATA.year : year }</StyledCardDate>
                    </div>
                   
                </StyledFrontCardContainer>

                <StyledBackCardContainer
                >

                    <StyledCardCvc>{cvc === '' ? CARD_DATA.cvc : cvc }</StyledCardCvc>
                </StyledBackCardContainer>
            </StyledCardsContainer>
        </>
    )
}
export default CardContainer
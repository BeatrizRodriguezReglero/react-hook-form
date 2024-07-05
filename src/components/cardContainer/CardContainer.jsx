import { CardsContainer } from "./cardContainer.styles"

const CardContainer=()=>{
    return (
        <>
            <CardsContainer>
                <FrontCardContainer>
                    <CardNumber>{cardNumber}</CardNumber>
                </FrontCardContainer>
                <RearCardContainer></RearCardContainer>
            </CardsContainer>
        </>
    )
}
export default CardContainer
import { CardHolderContainer, CardNumberContainer, DateAndCvc, DateContainer, StyledForm } from "./form.styles"

const Form=()=>{
    return(
        <>
            <StyledForm>
                <CardHolderContainer>
                    <label htmlFor="cardholdername">CARDHOLDER NAME</label>
                    <input type="text" name="cardholder" id="cardholder" placeholder="e.g. Jane Appleseed"  />
                </CardHolderContainer>
                <CardNumberContainer>
                    <label htmlFor="cardnumber">CARDNUMBER</label>
                    <input type="text" name="cardnumber" id="cardnumber" placeholder="e.g. 1234 5678 9123 0000" maxLength={19} />
                </CardNumberContainer>
                <DateAndCvc>
                    <div>
                        <label htmlFor="">EXP.DATE (MM/YY)</label>
                        <DateContainer>
                            <input type="text" name="month" id="month" placeholder="MM"/>
                            <input type="text" name="year" id="year" placeholder="YY" maxLength={2} />
                        </DateContainer>
                    </div>
                    
                        
                    <div>
                        <label htmlFor="">CVC</label>
                        <input type="text" name="cvc" id="cvc" maxLength={3} placeholder="e.g. 123"/>
                    </div>
                </DateAndCvc>
                <input type="submit" value="Confirm"/>


            </StyledForm>
    
        </>
    )
}
export default Form

import { CardHolderContainer, CardNumberContainer,  StyledDateAndCvc, StyledDateContainer, StyledErrors, StyledForm } from "./form.styles";
import { useForm } from "react-hook-form";
import { FORM_VALIDATION } from "../../constants/validation-data";


const Form=({cardData,setCardData})=>{
    
    const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm();
    return(
        <>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <CardHolderContainer>
                    <label htmlFor="cardholdername">CARDHOLDER NAME</label>
                    <input type="text" name="cardholder" id="cardholder"  onInput={({ target }) =>setCardData({ ...cardData, name: target.value })} {...register('name', FORM_VALIDATION.NAME)}/>
                    <StyledErrors>{errors?.name?.message}</StyledErrors>
                    
                </CardHolderContainer>
                <CardNumberContainer>
                    <label htmlFor="cardnumber">CARDNUMBER</label>
                    <input type="text" 
                     id="cardnumber" placeholder="e.g. 1234 5678 9123 0000" maxLength={19} onInput={({ target }) =>setCardData({ ...cardData, number: target.value })} {...register('number', FORM_VALIDATION.NUMBER)}/>
                     <StyledErrors>{errors?.number?.message}</StyledErrors>
                </CardNumberContainer>
                <StyledDateAndCvc>
                    <div>
                        <label htmlFor="">EXP.DATE (MM/YY)</label>
                        <StyledDateContainer>
                            <input type="text"  id="month" placeholder="MM" onInput={({ target }) =>setCardData({ ...cardData, month: target.value })} {...register('month', FORM_VALIDATION.MONTH)}/>
                            <input type="text" name="year" id="year" placeholder="YY" maxLength={2} onInput={({ target }) =>setCardData({ ...cardData, year: target.value })}  {...register('year', FORM_VALIDATION.YEAR)}/>
                        </StyledDateContainer>
                        <StyledErrors>{errors?.month?.message || errors?.year?.message}
                            </StyledErrors>
                    </div>
                    
                        
                    <div>
                        <label htmlFor="">CVC</label>
                        <input type="text" name="cvc" id="cvc" maxLength={3} placeholder="e.g. 123" onInput={({ target }) =>setCardData({ ...cardData, cvc: target.value })} {...register('cvc', FORM_VALIDATION.CVC)}/>
                        <StyledErrors>{errors?.cvc?.message}</StyledErrors>
                    </div>
                </StyledDateAndCvc>
                <input type="submit" value="Confirm"/>


            </StyledForm>
    
        </>
    )
    
}
const onSubmit=(data)=>{
console.log(data)


}

export default Form
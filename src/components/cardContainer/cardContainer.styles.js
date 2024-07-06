import styled from 'styled-components';

const StyledCardsContainer = styled.div`
	margin: 120px auto 48px auto;
	width: 343px;
	position: relative;
	text-align: center;
`;

const StyledFrontCardContainer = styled.div`
	width: 285px;
	height: 156px;
	background-image: url(./images/bg-card-front.png);
	border-radius: 10px;
	margin-left: 17px;
	margin-bottom: 37px;
	box-shadow: 0px 26px 62px 6px rgba(0, 0, 0, 0.24);
`;

const StyledCardLogo = styled.img`
	width: 54px;
	padding-top: 17px;
	margin-left: 19px;
`;
const StyledCardNumber = styled.p`
	font-size: 18px;
	color: white;
	text-align: center;
	margin-top: 37px;
	letter-spacing: 2.2px;
`;
const StyledCardName = styled.span`
	font-size: 9px;
	color: white;
	margin-top: 17px;
	margin-left: 5px;
	letter-spacing: 1.29px;
`;

const StyledCardDate = styled.span`
	font-size: 9px;
	color: white;
	letter-spacing: 1.29px;
	padding-left: 124.11px;
`;
const StyledBackCardContainer = styled.div`
	width: 285px;
	height: 156px;
	background-image: url(./images/bg-card-back.png);
	background-size: contain;
	border-radius: 10px;
	position: absolute;
	top: -94px;
	left: 73px;
	z-index: -1;
	margin-right: 16px;
	box-shadow: 0px 26px 62px 6px rgba(0, 0, 0, 0.24);
`;

const StyledCardCvc = styled.span`
	font-size: 9px;
	color: white;
	letter-spacing: 1.29px;
	position: absolute;
	top: 70px;
	right: 37px;
`;
export {
	StyledCardsContainer,
	StyledFrontCardContainer,
	StyledCardLogo,
	StyledBackCardContainer,
	StyledCardNumber,
	StyledCardName,
	StyledCardDate,
	StyledCardCvc
};

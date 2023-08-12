import fundingData from '../data/servFundingSecData.json'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import "../assets/scss/_accord.scss";

function FaqList(){
  const fundingList = fundingData.fundingList;

  return (
    <div className="name-block">
      <Accordion transition transitionTimeout={250}>
        {fundingList.map((item, index) => {
          return (
            <AccordionItem key={index} header={              
            <div className="wrap-number-text">
            <div className="number">{item.fundingNumber}</div>
            <div className="text">{item.fundingText}</div> 
            </div>}>
              <p>{item.fundingDescr}</p>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  );
}

export default FaqList;

// <div className="container">
// <Accordion transition transitionTimeout={250}>
//   {faqs.map(f => <AccordionItem header={f.question}><div dangerouslySetInnerHTML={{__html: f.answer}} /></AccordionItem>)}
// </Accordion>
// </div> 
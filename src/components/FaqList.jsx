import { lazy } from 'react';
import fundingData from '../data/servFundingSecData.json'
lazy(() => import('../assets/scss/_accord.scss'));
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
              <div className="wrap-number-text" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="100">
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

import React from 'react'
import { NewClientCardContainer} from './NewClientCard.styled'
import { ChevronUp } from 'lucide-react'
import '@/i18n';

import { useTranslation } from 'react-i18next';

function NewClientCard() {
 const { t } = useTranslation();

  return (
    <NewClientCardContainer>
     
            <h1>{t('newCustomers')}</h1>
            <h2>495</h2>
            <p><ChevronUp/> 20,2%</p>
  
    </NewClientCardContainer>
  )
}

export default NewClientCard
import React from 'react'
import { VipCardContainer } from './VipCard.styled'
import {ChevronUp } from 'lucide-react'
import '@/i18n';
import { useTranslation } from 'react-i18next';

function VipCard() {

 const { t } = useTranslation();
  return (
    <VipCardContainer>
        <h1>{t('vipCustormers')}</h1>
        <h2>232</h2>
        <p style={{color:'rgb(96, 165, 250)'}}><ChevronUp/>9,45%</p>
    </VipCardContainer>
  )
}

export default VipCard
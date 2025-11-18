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
        <h2>92</h2>
        <p><ChevronUp/>1,5%</p>
    </VipCardContainer>
  )
}

export default VipCard